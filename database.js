const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'svc.gksl2.cloudtype.app:32326', 
     user:'root', 
     password: 'ush030902!',
     connectionLimit: 5,
     database:'memo'
});
module.exports={
    async run(query,params){
      return new Promise((resolve)=>{
        pool.getConnection()
        .then(conn => {
          conn.query(query,params)
            .then((rows) => {
              resolve(rows)
              conn.end() 
            })
            .catch(err => {
              console.log(err); 
              conn.end();
            })
        }
        )}
      )}
}
