

// comprobamos que la clave introducida y la repetida sean las mismas

function Registro () {
    var name=$('#registUsuario').val();
    var email=$('#registEmail').val();
    let password1=$('#registPassword').val();
    let password2=$('#registPassword2').val();


        if(password1==password2){

            var paswordEncript = hex_md5(password1);
            // Mostramos clave encriptada
            alert('clave encriptada: '+paswordEncript);
            // Guardamos registro en bd
            alert('Regsitro realizado correctamente');
            /*
            $.getScript("/../../app.js").done(prueba());
            $.getScript( "../../app.js" ).done(registroUser( name, email, paswordEncript ));

            alert('Regsitro realizado correctamente en bd');
            */
        }
        else{
            alert('Las contraseñas introducidas son distintas');
        }
};


