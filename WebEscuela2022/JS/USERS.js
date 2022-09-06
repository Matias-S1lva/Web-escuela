const FotoDefault = "IMAGENES/USERDEFAULT.png";
const ROLES = [
  "ADMINISTRADOR",
  "DIRECTOR DE ESTUDIOS",
  "PROFESOR",
  "PRECEPTOR",
  "ALUMNO",
  "INSCRIPTO",
  "EXCLUIDO",
];
let BaseUsers; //BASE DE DATOS EN MEMORIA
let MainUser, Rol;
//CLASE
const $$ClassUser = function () {
  //FUNCTIONS
  const ErrorExists = function (user) {
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.ID !== user.ID) {
        if (usuario.Dni + "" === user.Dni + "") {
          Clear();
          throw "EXISTE OTRO USUARIO CON EL MISMO DNI";
        }
        if (usuario.Mail === user.Mail + "") {
          Clear();
          throw "EXISTE OTRO USUARIO CON EL MISMO MAIL";
        }
      }
    }
  };
  const Load = function () {
    $a.loadUsers();
  };
  const Save = function () {
    $a.saveUsers();
  };
  const Clear = function () {
    BaseUsers = undefined;
  };

  //METHODS
  this.add = function (user) {
    Load();
    try {
      user.ID = ++BaseUsers.ID;
      ErrorExists(user);
      BaseUsers.Users.push(user);
      Save();
    } catch (e) {
      alert(e);
    }
  };
  this.erase = function (id) {
    Load();
    let aux = new Array();
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.ID + "" !== id + "") {
        aux.push(usuario);
      }
    }
      BaseUsers.Users = aux;
    Save();
  };
  this.modify = function (user) {
    Load();
    ErrorExists(user);
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.ID + "" === user.ID + "") {
        BaseUsers.Users[i] = user;
        Save();
        return;
      }
    }
    Clear();
  };
  this.login = function (mail, password) {
    Load();
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.Mail === mail && usuario.Password === password) {
        Clear();
        return usuario;
      }
    }
    Clear();
    throw "LOS DATOS INGRESADOS NO CORRESPONDEN A UN USUARIO DEL SISTEMA";
  };
  this.forgot = function (mail, dni) {
    Load();
    let userFind = BaseUsers.Users.find((x) => x.Mail === mail);
    if (
      userFind === undefined ||
      userFind.Mail !== mail ||
      userFind.Dni + "" !== dni + ""
    ) {
      Clear();
      throw "no existe el usuario";
    }

    if (userFind.Mail === mail && userFind.Dni + "" === dni + "") {
      userFind.Password = dni;
      Save();
      Clear();
      throw "su contraseña ahora es su dni";
    }
  };
  this.findByMail = function (mail) {
    Load();
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.Mail === mail) {
        Clear();
        return usuario;
      }
    }
    Clear();
    throw "NO EXISTE UN USUARIO CON UN MAIL " + mail;
  };
  this.findByDni = function (dni) {
    Load();
    for (var i = 0; i < BaseUsers.Users.length; i++) {
      let usuario = BaseUsers.Users[i];
      if (usuario.Dni + "" === dni + "") {
        Clear();
        return usuario;
      }
    }
    Clear();
    throw "NO EXISTE UN USUARIO CON UN DNI " + dni;
  };
  this.list = function () {
    let aux = BaseUsers.Users;
    console.log(aux);
    Clear();
    return aux;
  };
};
const $cu = new $$ClassUser();
