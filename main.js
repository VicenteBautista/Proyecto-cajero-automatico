
var cuentas = [
    { nombre:'Mali', saldo: 200, password:"123" },
    { nombre:'Gera', saldo: 290, password:"456" },
    { nombre:'Maui', saldo: 67, password:"789" },
]


document.querySelector("#ingresar").onclick = () => {
    
    /* Asignacion de variables de validacion*/

    const campoUsuario = document.querySelector("#user").value;
    const campoPassword = document.querySelector("#password").value;
    buscador = cuentas.find((elemento) => elemento.nombre == campoUsuario )
    
    /* condicion para ver si el usuario y contraseña son correctas*/
    if (buscador == undefined){

        alert("Error de usuario")
        return
    }

    if (campoUsuario == buscador.nombre && campoPassword == buscador.password){
        pantallaSaldos()
    }else{
        alert("Datos invalidos, por favor intentelo otra vez")
    }
}


/* Aqui la pantalla cambia */

function pantallaSaldos(){


    /*Con el innerHTML cambio la pantalla para que aprezcan botones especificos para la pantalla de saldo*/
    document.querySelector("#informacion").innerHTML = 
    "<div id='cuenta'> <p>Tu  saldo es: $" + buscador.saldo + "</p> </div>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
    <button class="botones" id="ingresarSaldo"> Depositar </button>
    <button class="botones" id="retirarSaldo"> Retirar  </button>
    <button class="botones" id="salir"> Salir </button></div>`


    /* Aqui digo que funcion van a ejecutar los botones cuando sean presionados */
    document.querySelector("#ingresarSaldo").onclick = () => {
        deposito()
    }
    
    document.querySelector("#retirarSaldo").onclick = () => {
        retiro()
    }

    document.querySelector("#salir").onclick = () => {
        window.location ="index.html"
    }
}



function deposito() {

    /*Creamos botones especificos para la seccion de deposito*/

    document.querySelector("#informacion").innerHTML = 
    "<input class='inputDatos' id='cantidadDeposito' placeholder='¿Cuanto quieres depositar?'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
        <button class="botones" id="ingresarSaldo"> Depositar </button>
        <button class="botones" id="salir"> Salir </button>
    </div>`
    
    document.querySelector("#salir").onclick = () => {
        pantallaSaldos()
    }

    /* Creamos la condición para cuando presionemos el boton de ingresar saldo */

    document.querySelector("#ingresarSaldo").onclick = ()=> {
        const montoDeposito = document.querySelector("#cantidadDeposito").value
        let resultadoDeposito = parseFloat(buscador.saldo) + parseFloat(montoDeposito)

        if (resultadoDeposito > 990){
            alert("NO PUEDES AGREGAR MAS DE 990 EN TU CUENTA, TONTO")

            pantallaSaldos()
        }else{

            buscador.saldo = resultadoDeposito
            pantallaSaldos()

            }            
    }
}


function retiro() {

    /* Creamos botones especificos para la sección de retiro */
    document.querySelector("#informacion").innerHTML = 
    "<input class='inputDatos' id='cantidadRetiro' placeholder='¿Cuanto quieres retirar?'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2">
        <button class="botones" id="retirarSaldo"> Retirar </button>
        <button class="botones" id="salir"> Salir </button>
    </div>`
    
    document.querySelector("#salir").onclick = () => {
        pantallaSaldos()
    }

    /* Creamos la condición para cuando presionemos el boton de ingresar saldo */

    document.querySelector("#retirarSaldo").onclick = ()=> {
        const montoRetiro = document.querySelector("#cantidadRetiro").value
        let resultadoRetiro = parseFloat(buscador.saldo) - parseFloat(montoRetiro)
        
        if (resultadoRetiro < 10){

            alert("NO PUEDES DEJAR MENOS DE 10 EN TU CUENTA, TONTO")
            pantallaSaldos()

        }else{

            buscador.saldo = resultadoRetiro
            pantallaSaldos()

            }
        }
}