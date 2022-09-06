const $$Nav = function () {
  const Anonimous = function () {
    $dn.clear();
    $dn.makeButton("inicio", Home);
      $dn.makeButton("carreras", "");
      $dn.dropdownButton(
          "TESTING",

          alerta
      );
      $dn.optionDropdown("ALUMNO DE TABLA", MakeAlumnos);
      $dn.optionDropdown("ENCONTRAR ALUMNO", FindAlumno);
      $dn.optionDropdown("HASHING", MakePassword);
    $dn.makeButtonLogin(
      "login",
      $f.pruebaLogin,
      "fas fa-arrow-right-to-bracket"
    );
  };
  const DirEstudios = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);
    $dn.dropdownButton(
      "FUNCIONES",

      alerta
    );
    $dn.optionDropdown("Abm materias");
    $dn.optionDropdown("abm correlativas");
    $dn.optionDropdown("Abm cursadas");

    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  const Administrador = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);
    $dn.makeButton("Listado", Listado);
    $dn.dropdownButton(
      "FUNCIONES",

      alerta
    );
    $dn.optionDropdown("Abm Usuario", $f.abmUser);
    $dn.optionDropdown("mod. usuario por dni", $f.findByDni);
    $dn.optionDropdown("mod. usuario por mail", $f.findByMail);
    $dn.optionDropdown("Abm carreras", alerta);

    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };

  const Profesores = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);
    $dn.dropdownButton(
      "FUNCIONES",

      alerta
    );
    $dn.optionDropdown("Mis cursos");
    $dn.optionDropdown("Controlar");
    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  const Preceptores = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);
    $dn.dropdownButton(
      "FUNCIONES",

      ""
    );
    $dn.optionDropdown("Alta alumno", $f.makePrueba);
    $dn.optionDropdown("Listado", Listado);
    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  const Alumnos = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);
    $dn.dropdownButton(
      "FUNCIONES",

      alerta
    );
    $dn.optionDropdown("Mis materias");
    $dn.optionDropdown("Inscribirme");
    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  const Inscripto = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);

    $dn.dropdownButton(
      "FUNCIONES",

      ""
    );
    $dn.optionDropdown("Mis Materias", alerta);
    $dn.optionDropdown("Inscribirme", alerta);

    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  const Excluido = function () {
    $dn.clear();

    $dn.makeButton("inicio", Home);
    $dn.makeButton("perfil", $f.perfil);

    $dn.dropdownButton(
      "CARRERAS",

      alerta
    );
    $dn.optionDropdown("ANALISTA DE SISTEMAS", alerta);
    $dn.optionDropdown("TEC. ELECTROMECANICO", alerta);

    $dn.makeButtonLogin(MainUser.Nombre, $f.logout, "fas fa-address-card");
  };
  this.init = function () {
    switch (Rol) {
      case undefined:
        Anonimous();
        break;
      case "ADMINISTRADOR":
        Administrador();
        break;
      case "DIRECTOR DE ESTUDIOS":
        DirEstudios();
        break;
      case "PRECEPTOR":
        Preceptores();
        break;
      case "PROFESOR":
        Profesores();
        break;
      case "ALUMNO":
        Alumnos();
        break;
      case "INSCRIPTO":
        Inscripto();
        break;
      case "EXCLUIDO":
        Excluido();
        break;
    }
  };
};

const $n = new $$Nav(); //INSTANCIA
