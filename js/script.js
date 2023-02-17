// FUNÇÃO PARA VER A SENHA AO DIGITAR
let btn = document.querySelector('.eye');

btn.addEventListener('click', function() {
    let input = document.querySelector('.password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

// FUNÇÃO PARA VALIDAR E-MAIL
function validationEmail(field) {
    user = field.value.substring(0, field.value.indexOf("@"));
    domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    

    if ((user.length >=1) &&
        (domain.length >=3) &&
        (user.search("@")==-1) &&
        (domain.search("@")==-1) &&
        (user.search(" ")==-1) &&
        (domain.search(" ")==-1) &&
        (domain.search(".")!=-1) &&
        (domain.indexOf(".") >=1)&&
        (domain.lastIndexOf(".") < domain.length - 1)) {
    }
    else{
        alert("E-mail Inválido");
    }
}

//MÁSCARA PARA TELEFONE
$('.phone').mask('(00) 00000-0000');

