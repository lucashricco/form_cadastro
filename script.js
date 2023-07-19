

//pegando os elementos do formulario para poder manipular no js
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

//criando o evento submit quando o cadastro for realizado
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();

})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})





//funcao para fazer checagem de dados preenchidos
function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha um nome")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha um email")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }


}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Preencha uma senha")
    }else if(passwordValue.length < 6){
        errorInput(password, "A senha precisa ter 6 caracteres")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Digite a senha novamente para confirmar")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas estão diferentes!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

//funcao para exibir a mensagem de erro
function errorInput(input, message){
    const formItem = input.parentElement; //recebendo o campo do form
    const textMessage = formItem.querySelector("a") //selecionando o local que vai exibir o erro

    textMessage.innerText = message;

    formItem.className = "form-content error" //editando o estilo da msg de erro
}

function checkForm(){
    
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) =>{
        return item.className === "form-content"
    } );

    if(isValid){
        alert("CADASTRADO COM SUCESSO!")
    }
}