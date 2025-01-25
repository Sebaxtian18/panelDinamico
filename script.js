const btnEliminarCuenta = document.querySelector('.btnEliminarCuenta');
btnEliminarCuenta.addEventListener('click', panelEliminarCuenta)

function panelEliminarCuenta() {
    btnEliminarCuenta.classList.add('hidden');
    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgPanel');
    document.body.appendChild(panel) 
    
    const msg = document.createElement('p');
    msg.textContent = '¿Desea eliminar su cuenta?';
    panel.appendChild(msg);

    const btnSi = document.createElement('button');
    const btnNo = document.createElement('button');
    btnSi.textContent = 'Si'; 
    btnNo.textContent = 'No';
    panel.appendChild(btnSi); 
    panel.appendChild(btnNo); 

    btnSi.addEventListener('click', () => verificacion(true));

    btnNo.addEventListener('click', () => verificacion(false) );

    function verificacion(eliminarCuenta) {
        if (eliminarCuenta === true) {
            msg.textContent = 'Su cuenta ha sido eliminada satisfactoriamente';
            btnSi.parentNode.removeChild(btnSi);
            btnNo.parentNode.removeChild(btnNo);
        }else if(eliminarCuenta === false){
            msg.textContent = '¡Gracis por continuar con nosotros!';
            btnSi.parentNode.removeChild(btnSi);
            btnNo.parentNode.removeChild(btnNo);
        }
    
    }
}

