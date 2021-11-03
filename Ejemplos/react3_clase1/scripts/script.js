function registrarse(){
    var nombre //Declaracion
    nombre = document.form_registro.nombre.value /* Inicializacion */
    var apellido = document.form_registro.apellido.value //Declarado e inicializado
    var email = document.getElementById("email_id").value
    var password = document.getElementById("password_id").value
    console.log(nombre,apellido,email,password)
    if(nombre==""){
        document.getElementById("nombre_error").innerHTML = "El campo es obligatorio"
    }else{
        document.getElementById("nombre_error").innerHTML = ""
    }

    var cursos = ["php","js","react"]
    for(var i=0;i<cursos.length;i++){
        alert(cursos[i])
    }
    console.log(cursos)
    var cursosA = new Array(3)
    cursosA.push("php")
    cursosA[1] = "js"
    cursosA.push("react")

    var cursosB = new Array()
}
function tipoSeguro(){
    var tipoSeguro = document.getElementById("seguro_id").value
    console.log(tipoSeguro)
    
    switch(tipoSeguro){
        case "1":
            var precio="$500"
            break;
        case "2":
            var precio="$1000"
            break;
        case "3":
            var precio="$1500"
            break;
    }
    document.getElementById("precioSeguro").innerHTML=precio
}
tipoSeguro()