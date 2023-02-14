
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let form = document.querySelector("form");

let textEmail = document.getElementById("textEmail");
let textSenha = document.getElementById("textSenha");
let textForm = document.getElementById("textForm");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    if(email.value == '' && senha.value == ''){
        textForm.textContent = "Campo email e senha estão vazios!"
    } else if (ValidarEmail(email.value) === true && validarSenha(senha.value) === true) {
        console.log(email.value);
        console.log(senha.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textSenha.textContent = "";
    }else{
        console.log(email.value);
        console.log(senha.value);
        console.log("Erro dados invalidos")
    }
    
    email.addEventListener("keyup", () => {
        if ( ValidarEmail(email.value) !== true) {
            textEmail.textContent = "Formato de email invalido";
        } else {
            textEmail.textContent = "";
        }
    })

    senha.addEventListener("keyup", () =>{
        if(validarSenha(senha.value) !== true){
            textSenha.textContent = "Formato de senha deve ter no minimo 6 caracteres"
        } else {
            textSenha.textContent = "";
        }
    })

    function ValidarEmail(email) {
        let regexEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return regexEmail.test(email);
    }

    function validarSenha(senha){
        let regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return regexSenha.test(senha);
    }
})
