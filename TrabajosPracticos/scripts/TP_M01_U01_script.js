function confirmar() {
    var nombre = document.getElementById("nombre_id").value
    var apellido = document.getElementById("apellido_id").value
    var dni = document.getElementById("dni_id").value
    var email = document.getElementById("email_id").value
    var telefono = document.getElementById("telefono_id").value
    var tiposeguro = document.getElementById("tiposeguro_id").value
    
    console.log(nombre,apellido,dni,email,telefono,tiposeguro)
    if(nombre==""){
        document.getElementById("mensaje_error").innerHTML = "El campo Nombre es obligatorio"
        return
    }else{
        document.getElementById("mensaje_error").innerHTML = ""
    } 
    if(dni==""){
        document.getElementById("mensaje_error").innerHTML = "El campo DNI es obligatorio"
        return
    }else{
        document.getElementById("mensaje_error").innerHTML = ""
    }     
}

function obtenerPrecioSeguro() {
    var tipoSeguro = document.getElementById("tiposeguro_id").value
    console.log(tipoSeguro)
    switch (tipoSeguro) {
        case "1":
            var precio="$0"
            break;
        case "2":
            var precio="$500"
            break;
        case "3":
            var precio="$1000"
            break;
        case "4":
            var precio="$1500"
            break;                            
    }
    //document.getElementById("precioSeguro").innerHTML=precio
    document.getElementById("labelPrecio").innerHTML="Precio:" + precio
}