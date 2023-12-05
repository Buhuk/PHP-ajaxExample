function doAction(accion) {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://localhost/jags/PHP-ajaxExample/serverAjax.php?' + accion + '=true', true);
    req.send();
    req.addEventListener('load', datos => {
        const jsonDatos = JSON.parse(datos.target.response)
        console.log(jsonDatos);
    })
}

let boton = document.createElement('button');
boton.textContent = 'Voy a tener suerte'
document.body.append(boton);

boton.addEventListener('click', (e) => { doAction('cosas') })