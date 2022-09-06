const Home = function () {
    Section.innerHTML = "<img src='IMAGENES/FONDO.jpg' class='portada'>";
};
const validar = function () {
    var confirm = $d.id("confirm");
    var pass = $d.id("modifPass");
    var labelConfirm = $d.id("labelConfirm");

    pass.onchange = function () {
        if (pass.value !== "") {
            confirm.style.display = "inline-block";
            labelConfirm.style.display = "inline-block";
            confirm.required = true;
            pass.required = true;
        } else {
            confirm.style.display = "none";
            labelConfirm.style.display = "none";
            confirm.required = false;
            pass.required = false;
        }
    };
};
const escuchar = function (f) {
    f.addEventListener("input", () => {
        var pass = $d.id("modifPass");
        var confirm = $d.id("confirm");
        if (pass.value !== confirm.value && confirm.value !== "") {
            confirm.setCustomValidity("las contraseñas no coinciden");
        } else {
            confirm.setCustomValidity("");
        }
    });
};
const alerta = function () {
    alert("no implementado");
};

const prueba1 = function () {
    window.onload = function () {
        $n.init();
        $f.pruebaLogin()
        correo.value = "admin@mail.com"
        pass.value = "admin"
        //testeando
        $a.FetchData(UrlData);
        //testeando
    }
}
const prueba2 = function () {
    window.onload = function () {
        $n.init();
        $f.pruebaLogin()
        correo.value = "p@p"
        pass.value = "2"
    }
}

const testDelete = () => {
    window.onload = function () {
        $n.init();
        MakeAlumnos();
       
    }
}
testDelete();