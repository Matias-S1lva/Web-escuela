const $$Form = function () {
  //FUNCTIONS
  const ModifyUser = function (user, opcion) {
    const Submit = function () {
      try {
        if (user.Roles.length === 0)
          throw "NO SE PUEDE MODIFICAR UN USUARIO SIN ROLES !";
        user.Nombre = Nombre.value;
        user.Dni = Dni.value;
        user.Mail = Mail.value;
        user.Direccion = Direccion.value;
        user.Telefono = Telefono.value;
        user.Password = Dni.value;
        $cu.modify(user);
        opcion();
      } catch (e) {
        alert(e);
      }
      return false;
    };

    const MakeRols = function () {
      const RolExists = function (ROL) {
        for (let i = 0; i < user.Roles.length; i++) {
          if (user.Roles[i] === ROL) return true;
        }
        return false;
      };
      rolPosible.innerHTML = "";
      roles.innerHTML = "";

      if (Rol === "PRECEPTOR") {
        for (let i = 4; i < ROLES.length; i++) {
          if (!RolExists(ROLES[i])) {
            $dc.option(rolPosible, ROLES[i], ROLES[i]);
          }
        }
        for (let j = 4; j < ROLES.length; j++) {
          if (RolExists(ROLES[j])) {
            $dc.option(roles, ROLES[j], ROLES[j]);
          }
        }
      } else {
        for (let i = 0; i < ROLES.length; i++) {
          if (!RolExists(ROLES[i])) {
            $dc.option(rolPosible, ROLES[i], ROLES[i]);
          }
        }
        for (let j = 0; j < ROLES.length; j++) {
          if (RolExists(ROLES[j])) {
            $dc.option(roles, ROLES[j], ROLES[j]);
          }
        }
      }
    };

    const AddRol = function () {
      user.Roles.push(rolPosible.value);
      MakeRols();
    };
    const EraseRol = function () {
      let r = roles.value;
      if (r === "ADMINISTRADOR" && user.ID + "" === "1") return;
      let aux = new Array();
      for (let i = 0; i < user.Roles.length; i++) {
        if (user.Roles[i] !== r) aux.push(user.Roles[i]);
      }
      user.Roles = aux;
      MakeRols();
    };
    const CargarControles = function () {
      Nombre.value = user.Nombre;
      Dni.value = user.Dni;
      Direccion.value = user.Direccion;
      Telefono.value = user.Telefono;
      Mail.value = user.Mail;

      MakeRols();
    };

    let f = $dc.form("Modificar Usuario: " + user.Nombre, "fas fa-arrow-left");

    let divName = $dc.divGroup("divName");
    let Nombre = $dc.inputText(divName, "Nombre: ");

    let divDirec = $dc.divGroup("divDirec");
    let Direccion = $dc.inputDirec(divDirec, "Direccion: ");

    let divDni = $dc.divGroup("divDni");
    let Dni = $dc.inputNumber(divDni, "Dni: ");

    let divCorreo = $dc.divGroup("divCorreo");
    let Mail = $dc.inputCorreo(divCorreo, "@Correo: ");

    let divTel = $dc.divGroup("divTel");
    let Telefono = $dc.inputText(divTel, "Telefono :");

    let divSelec1 = $dc.divGroup("divSelec");
    let rolPosible = $dc.select(divSelec1, "Roles Posibles");

    let divSelec2 = $dc.divGroup("divSelec");
    let roles = $dc.select(divSelec2, "ROLES");
    CargarControles();
    let btn1 = $dc.btn(container, "AGREGAR ROL");
    btn1.onclick = AddRol;
    let btn2 = $dc.btn(container, "QUITAR ROL");
    btn2.onclick = EraseRol;

    $dc.submit(container, "submit", "AGREGAR", "submit");
    $dc.submit(container, "reset", "CANCELAR", "reset");

    f.onsubmit = Submit;
  };
  //METHODS
  this.abmUser = function () {
    const Submit = function () {
      let user = new Object();
      user.Nombre = Nombre.value;
      user.Direccion = Direccion.value;
      user.Dni = Dni.value;
      user.Mail = Correo.value;
      user.Telefono = Tel.value;
      user.Password = user.Dni;
      user.Roles = new Array();
      user.Foto = FotoDefault;
      try {
        $cu.add(user);
        ModifyUser(user, $f.abmUser);
      } catch (e) {
        alert(e);
      }
      return false;
    };

    let f = $dc.form("Alta Usuario ", "fas fa-arrow-left");

    let divName = $dc.divGroup("divName");
    let Nombre = $dc.inputText(divName, "Nombre: ");

    let divDirec = $dc.divGroup("divDirec");
    let Direccion = $dc.inputDirec(divDirec, "Direccion: ");

    let divDni = $dc.divGroup("divDni");
    let Dni = $dc.inputNumber(divDni, "Dni: ");

    let divCorreo = $dc.divGroup("divCorreo");
    let Correo = $dc.inputCorreo(divCorreo, "@Correo: ");

    let divTel = $dc.divGroup("divTel");
    let Tel = $dc.inputNumber(divTel, "Telefono: ");

    let divImg = $dc.divGroup("divImg");
    let Img = $dc.inputFileImg(divImg, "Imagen: ", "Foto:");

    $dc.submit(container, "submit", "Agregar", "submit");
    $dc.submit(container, "reset", "Cancelar", "reset");
    f.onsubmit = Submit;
  };
  this.findByDni = function () {
    const Submit = function () {
      try {
        let user = $cu.findByDni(dni.value);
        if (
          (Rol === "PRECEPTOR" && user.Roles[0] === "ADMINISTRADOR") ||
          (Rol === "PRECEPTOR" && user.Roles[0] === "PROFESOR") ||
          (Rol === "PRECEPTOR" && user.Roles[0] === "DIRECTOR DE ESTUDIOS") ||
          (Rol === "PRECEPTOR" && user.Roles[0] === "PRECEPTOR")
        ) {
          alert("no tiene permiso para modificar este usuario");
        } else {
          ModifyUser(user, $f.findByDni);
        }
      } catch (e) {
        alert(e);
      }
      return false;
    };
    let f = $dc.form("Modificar usuario", "fas fa-arrow-left");

    let divDni = $dc.divGroup("divDni");
    let dni = $dc.inputNumber(divDni, "Dni: ");
    $dc.submit(container, "submit", "BUSCAR", "submit");
    $dc.submit(container, "reset", "CANCELAR", "reset");
    f.onsubmit = Submit;
  };
  this.findByMail = function () {
    const Submit = function () {
      try {
        let user = $cu.findByMail(mail.value);
        ModifyUser(user, $f.findByMail);
      } catch (e) {
        alert(e);
      }
      return false;
    };
    let f = $dc.form("modificar usuario", "fas fa-arrow-left");

    let divMail = $dc.divGroup("divMail");
    let mail = $dc.inputCorreo(divMail, "@Correo: ");
    $dc.submit(container, "submit", "BUSCAR", "submit");
    $dc.submit(container, "reset", "CANCELAR", "reset");
    f.onsubmit = Submit;
  };

  this.makePrueba = function () {
    const Submit = function () {
      let user = new Object();
      user.Nombre = Nombre.value;
      user.Direccion = Direccion.value;
      user.Dni = Dni.value;
      user.Mail = Correo.value;
      user.Telefono = Telefono.value;
      user.Password = user.Dni;
      user.Roles = new Array();
      user.Foto = FotoDefault;
      $cu.add(user);
      ModifyUser(user, $f.makePrueba);
      return false;
    };

    let f = $dc.form("ALTA ALUMNO", "fas fa-arrow-left");

    let divName = $dc.divGroup("divName");
    let Nombre = $dc.inputText(divName, "Nombre: ");

    let divDirec = $dc.divGroup("divDirec");
    let Direccion = $dc.inputDirec(divDirec, "Direccion: ");

    let divDni = $dc.divGroup("divDni");
    let Dni = $dc.inputNumber(divDni, "Dni: ");

    let divCorreo = $dc.divGroup("divCorreo");
    let Correo = $dc.inputCorreo(divCorreo, "@Correo: ");

    let divTel = $dc.divGroup("divTel");
    let Telefono = $dc.inputNumber(divTel, "Telefono: ");

   

    $dc.submit(container, "submit", "Agregar", "submit");
    $dc.submit(container, "reset", "Cancelar", "reset");

    f.onsubmit = Submit;
  };
  this.pruebaLogin = function () {
    const Submit = function () {
      try {
        MainUser = $cu.login(correo.value, pass.value);
        $f.logout();
      } catch (e) {
        alert(e);
      }
      return false;
    };
    let f = $dc.form("ingresar al sistema", "fas fa-arrow-left");
    let iconUser = $dc.icon(container);
    iconUser.id = "user";
    iconUser.className = "fas fa-user";

    let divCorreo = $dc.divGroup("divCorreo");
    let correo = $dc.inputCorreo(divCorreo, "@Correo: ");

    let divPass = $dc.divGroup("divPass");
    let pass = $dc.inputPass(divPass, "contraseña");

    $dc.submit(container, "submit", "Ingresar", "submit");
    let btn = $dc.btn(container, "¿olvido su contraseña?");

    f.onsubmit = Submit;
    btn.onclick = $f.recoveryPassword;
  };
  this.logout = function () {
    const Change = function () {
      Rol = roles.value;
      $n.init();
    };
    const MakeRoles = function () {
      for (var i = 0; i < MainUser.Roles.length; i++) {
        let rol = MainUser.Roles[i];
        $dc.option(roles, rol, rol);
      }
      Change();
    };
    let f = $dc.form("", "fas fa-arrow-left");

    let labelNombre = $dc.label(container, MainUser.Nombre);
    labelNombre.id = "userNombre";
    let img = $dc.img(container);
    img.src = MainUser.Foto;
    img.className = "perfil";

    let divSelect = $dc.divGroup("divSelec");
    let roles = $dc.select(divSelect, "Roles:");
    MakeRoles();
    roles.onchange = Change;

    let salir = $dc.btn(container, "SALIR DEL SISTEMA");
    salir.onclick = function () {
      MainUser = undefined;
      Rol = undefined;
      $n.init();
      $f.pruebaLogin();
      return false;
    };
  };
  this.perfil = function () {
    const Submit = function () {
      MainUser.Nombre = nombre.value;
      MainUser.Direccion = direccion.value;
      MainUser.Telefono = telefono.value;

      if (pass.value !== "") {
        MainUser.Password = pass.value;
      }
      $cu.modify(MainUser);
    };
    const Fload = function (res) {
      if (MainUser.Foto !== res) {
        MainUser.Foto = res;
        $cu.modify(MainUser);
      }
      $f.logout();
    };
    let f = $dc.formImg("Mi Perfil", "Modificar", Fload);

    let img = $dc.img(container);
    img.src = MainUser.Foto;
    img.className = "perfil";
    let divNombre = $dc.divGroup("divNombre");
    let nombre = $dc.inputText(divNombre, "Nombre:");
    nombre.value = MainUser.Nombre;

    let divDireccion = $dc.divGroup("divDireccion");
    let direccion = $dc.inputText(divDireccion, "Direccion:");
    direccion.value = MainUser.Direccion;

    let divTel = $dc.divGroup("divNombre");
    let telefono = $dc.inputText(divTel, "Telefono :");
    telefono.value = MainUser.Telefono;

    let divFoto = $dc.divGroup("divFoto");
    let foto = $dc.inputFileImg(divFoto, "Imagen:", "Foto :");

    accion.value = "MODIFICARIMGUSUARIO";
    ID.value = MainUser.ID;

    let divModifpass = $dc.divGroup("divModifPass");
    let pass = $dc.inputModifPass(divModifpass, "si no modifica no ingrese");

    let divConfirm = $dc.divGroup("divConfirm");
    let confirm = $dc.inputConfirm(divConfirm, "confirmar contraseña");

    $dc.submit(container, "submit", "modificar", "submit");
    $dc.submit(container, "reset", "cancelar", "reset");
    validar();
    escuchar(f);
    f.onsubmit = Submit;
  };
  this.recoveryPassword = function () {
    const Submit = function () {
      try {
        $cu.forgot(correo.value, dni.value);
      } catch (e) {
        alert(e);
      }

      $f.pruebaLogin();
      return false;
    };
    let f = $dc.form("Recuperar Contraseña", "fas fa-arrow-left");

    let iconUser = $dc.icon(container);
    iconUser.id = "user";
    iconUser.className = "fas fa-user";

    let divCorreo = $dc.divGroup("divCorreo");
    let correo = $dc.inputCorreo(divCorreo, "@correo");

    let divDni = $dc.divGroup("divDni");
    let dni = $dc.inputNumber(divDni, "ingresar dni");
    $dc.submit(container, "submit", "CONFIRMAR", "submit");
    f.onsubmit = Submit;
  };
};
const $f = new $$Form();
