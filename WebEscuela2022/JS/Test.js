let Alumnos = new Array();
const MakePassword = function () {
   
    let f = $dc.form("Algoritmo de dispersion", "fas fa-arrow-left")
    let divPass1 = $dc.divGroup("password1");
    let text1 = $dc.inputText(divPass1, "Password1");

    let divPass2 = $dc.divGroup("password2");
    let text2 = $dc.inputText(divPass2, "Password2");

    let divSha1 = $dc.divGroup("Sha1");
    let Sha1 = $dc.inputText(divSha1, "Password1")

    let divSha2 = $dc.divGroup("Sha2");
    let Sha2 = $dc.inputText(divSha2, "Password2")

    divSha1.style.display = "none";
    divSha2.style.display = "none";
    Sha1.required = false
    Sha2.required = false
    Sha1.disabled = true
    Sha2.disabled = true

    $dc.submit(container, "submit", "Sha256", "submit");
    $dc.submit(container, "reset", "Cancelar", "reset");
    f.addEventListener('submit', (e) => {
        e.preventDefault()
        let opcion = "accion=SHA1&text1=" + text1.value + "&text2=" + text2.value;
        let encriptado = $a.Consulta(opcion);
        console.log(encriptado)
        let encriptados = encriptado.split(" ");
        Sha1.value = encriptados[0];
        Sha2.value = encriptados[1];
        console.log(encriptados[0])
        console.log(encriptados[1])
        divSha1.style.display = "block";
        divSha2.style.display = "block";
        if (Sha1.value === Sha2.value) {
            alert("Ambas dispersion son iguales".toUpperCase());
        } else {
            alert("Ambas dispersiones son distintas".toUpperCase())
        }
       
    })
}

const MakeAlumnos = function () {
    
    let f = $dc.form("ALUMNOS", "fas fa-arrow-left")
    f.action = "default.aspx";
    f.method = "POST";
    f.enctype = "multipart/form-data";
   
    let divName = $dc.divGroup("divName")
    $dc.inputText(divName, "Nombre");

    let divDni = $dc.divGroup("divDni")
    $dc.inputText(divDni, "Dni");

    let divMail = $dc.divGroup("divMail")
    $dc.inputText(divMail, "Mail");

    let divImg = $dc.divGroup("divImg")
    $dc.inputFileImg(divImg, "Image:", "Foto:")
    $dc.inputHidden("hidden", "ADDALUMNOS")

    $dc.submit(container, "submit", "Agregar", "submit");
    $dc.submit(container, "reset", "Cancelar", "reset");
    
    Listado();

    f.addEventListener("submit", (e) => {
        
    })
}

const ModificarAlumno = function (alumno) {

}
const EliminarAlumno = function (ID) {

}
const FindAlumno = function () {

}