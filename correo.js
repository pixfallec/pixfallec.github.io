function enviarCorreo() {
    let nombre = document.getElementById("fname");
    let apellido = document.getElementById("lname");
    let correo = document.getElementById("email");
    let reason = document.getElementById("reason");
    let mensaje = document.getElementById("message");
    Email.send({
        Host : "mailslurp.mx",
        Username : "SHWmb6uSqdmE34UFNz4F2jiqndigmueZ",
        Password : "5Gn6SJ2JVFfuHO2ayzfDyFhXuABJcmpf",
        To : 'dimusfq@gmail.com',
        From : "dfc3a1e5-15b3-4d77-91a0-66999e3b2359@mailslurp.net",
        Subject : "Detalles de contacto recibidos",
        Body : "<html><p>Nombre: " + nombre + "</p><p>Apellido: " + apellido + "</p><p>Correo: " + correo + "</p><br/></br><em>Detalles del contacto.</em></html>"
    }).then(message => alert(message)
    );
}