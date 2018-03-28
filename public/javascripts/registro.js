

// comprobamos que la clave introducida y la repetida sean las mismas

$('.formReg').submit((event)=>{
    $('.alert-danger').remove();
    var name=$('#registUsuario').val();
    var email=$('#registEmail').val();
    let password1=$('#registPassword').val();
    let password2=$('#registPassword2').val();


        if(password1!=password2){

            $('.formReg').append('<div class="alert alert-danger">\n'+
            '<strong>Error!</strong>Las contraseñas no coinciden.\n'+
            '</div>')
         event.preventDefault();
        }
        else{
            var password1 = hex_md5(password1);
            return;
        }
};


