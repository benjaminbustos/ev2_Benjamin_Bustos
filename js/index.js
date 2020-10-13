import login from "./modules/login.js";

var caja = document.getElementById("caja");

window.cargar = login.cargar;
window.registrar = login.registrar.bind(login);

document.getElementById("login").addEventListener("click",()=>{
    caja.innerHTML = login.data;
    login.cargar();
})