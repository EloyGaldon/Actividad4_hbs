let conn=require('../connections/mysqlconnection');
let Users={};

// listado de Usuarios
Users.fetchAll=(cb)=>{
    if(!conn) return cb("No se ha podido realizar conexión");
    const SQL="Select * FROM usuarios";
    conn.query(SQL, (error,rows)=>{
        if(error) return cb(error);
        else return cb(null,rows);
    })
}
// registro de usuarios
Users.registro= function (usuario,cb){
    if(!conn) return cb("Fallo al conectar a la BD");
    conn.query('INSERT INTO usuarios SET ?', [usuario],(error,result)=>{
        if(error) return cb(error);
        return cb(null,result);
        })
}

// para que sea accesible
module.exports=Users;