function logar(){
    var login = document.getElementById('InputUser').value
    var senha = document.getElementById('InputSenha').value
 
    if(login == "admin" && senha == "admin"){
     alert('login realizado com sucesso !')
     location.href = "home.html"
    }
    else{
     alert('Usuário ou senha incorretos')
    }
 }
 


 function cadastrar(){
    var Usuário = document.getElementById('inputUsuarioNovo').value
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenhaNovo').value
    var senhaConfirma = document.getElementById('inputConfirmeSenha').value

    var emailCerto = emailValido(email)

    if(emailCerto){
        if(senha === senhaConfirma){
            location.href = "index.html"
            alert("Olá " + Usuário + ", seja bem vindo! ")

        } else{
            alert('As senhas não coincidem')
        }
    } else{
        alert("Este email está incorreto")
    }
 }


 function emailValido(email){
    return email.includes('@')
 }
