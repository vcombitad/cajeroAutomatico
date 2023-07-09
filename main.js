const cuentas = [];

    cuentas.push({ name: 'Mali', price: 200, password: "sharingannomali14"})
    
    cuentas.push({ name: 'Gera', price: 290, password: "summerforever2020"})
    
    cuentas.push({ name: 'Maui', price: 67, password: "venecia1980"})
  

  for (element of cuentas) {
    const select=document.getElementById('usuario');
    
    const option=document.createElement('option');
    select.appendChild(option)
    
    option.innerText= element.name;
   
}

  function verificacionContraseña () {

    const cuentausuario= document.getElementById('usuario').value;
    const usuarioIndex = cuentas.findIndex(item=>item.name==cuentausuario);
    const ingresoUsuarios=document.getElementById('datosIngreso');
    const contraseña= document.getElementById('passwordUsuario').value;

if (contraseña!=cuentas[usuarioIndex].password) {
alert('incorrecto')
}else {
    const section= document.getElementById('datosUsuario');
    const div1=document.createElement('div');
    const divTexto=document.createTextNode(`Bienvenido/a ${cuentausuario}`);
    div1.appendChild(divTexto);
    section.appendChild(div1);
    div1.setAttribute("class", "bienvenido")
    ingresoUsuarios.setAttribute("class", 'd-none')
    const section2= document.getElementById('opcionesUsuarioValidado');
    section2.removeAttribute("class", "d-none");
}

  }

function consultar () {
    const cuentausuario= document.getElementById('usuario').value;
    const usuarioIndex = cuentas.findIndex(item=>item.name==cuentausuario);
    const saldo= cuentas[usuarioIndex].price;
    

    const parrafo= document.getElementById('saldoActual');
    const article= document.getElementById('saldoUsuario');
    saldoUsuario.removeAttribute("class", "d-none");
    parrafo.innerText=`Saldo actual en tu cuenta es de $${saldo}`
    //div2.setAttribute("class", "saldoCuenta")
    //movimientoSeleccionado.setAttribute("class", 'd-none')
    const inputRetirar=document.getElementById('retirarDinero');
    inputRetirar.value="";
    const inputIngresar=document.getElementById('adicionarDinero');
    inputIngresar.value="";    
}

function ingresarDinero() {
    let cuentausuario= document.getElementById('usuario').value;
    const usuarioIndex = cuentas.findIndex(item=>item.name==cuentausuario);
    let saldo= cuentas[usuarioIndex].price;
    const dineroIngresar=document.getElementById('adicionarDinero').value;
    const dineroIngresado=parseFloat(dineroIngresar);
    const nuevoSaldo=parseFloat( dineroIngresado + saldo);
    const inputRetirar=document.getElementById('retirarDinero');
    inputRetirar.value="";
    
    if(nuevoSaldo<=990) {
        
        cuentas[usuarioIndex].price=nuevoSaldo;
        const parrafo=document.getElementById('saldoActual');
        parrafo.innerText=`Tu nuevo saldo es de $${nuevoSaldo}`
        
    }else {
        alert('no puedes tener mas de $990 en tu cuenta, por favor ingresa menos dinero')
    }

}  

function res() {
    let cuentausuario= document.getElementById('usuario').value;
    const usuarioIndex = cuentas.findIndex(item=>item.name==cuentausuario);
    let saldo= cuentas[usuarioIndex].price;
    const dineroRetirar=document.getElementById('retirarDinero').value;
    const dineroRetirado=parseFloat(dineroRetirar);
    const nuevoSaldo=parseFloat( saldo - dineroRetirado);
    const inputIngresar=document.getElementById('adicionarDinero');
    inputIngresar.value="";
    
    if(nuevoSaldo>=10) {
        
        cuentas[usuarioIndex].price=nuevoSaldo;
        const parrafo=document.getElementById('saldoActual');
        parrafo.innerText=`Tu nuevo saldo es de $${nuevoSaldo}`

    }else {
        alert('no puedes tener menos de $10 en tu cuenta, por favor retira menos dinero')
    }
}

