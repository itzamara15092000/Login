let emailValido = "cbtis258.edu.mx";
let passValido = "admin123";

const chequeLogin = (event) =>{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("LogMensaje").value;

    if(email == emailValido && password == passValido){
        mensaje.textoContent = "Inicio de sesión correcto";
        mensaje.styla.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";


        }, 100);
    }
    else{
        mensaje.textoContent = "Email o contraseña incorrecta";
        mensaje.style.color = "red";
    }

}
