const $$DomBasic = function () {
  //parametros
  //funciones
  //metodos
  
  this.id = function (id) {
    return document.getElementById(id);
  };
  this.tag = function (tag) {
    return document.getElementsByTagName(tag);
  }; //agregado
  this.value = function (id) {
    return document.getElementById(id).value;
  }; //agregado
  this.ce = function (type) {
    return document.createElement(type);
  };
  this.ac = function (parent, child) {
    parent.appendChild(child);
  };
  this.rc = function (parent, child) {
    parent.removeChild(child);
  };
  this.cn = function (parent) {
    return parent.childNodes();
  };
  this.class = function (classname) {
    return document.getElementsByClassName(classname)[0];
  };
}; //clase

const $d = new $$DomBasic(); //instancia $$DomBasic

const $$DomControls = function () {
  const AddControl = function (parent, strelem) {
    //<---------------------------INICIA EXPOSICION
    let control = $d.ce(strelem);
    $d.ac(parent, control);
    return control;
  };
  const AddInput = function (parent, type, id) {
    let input = $dc.input(parent, type);
    input.id = id;
    return input;
  };
  this.div = function (parent) {
    return AddControl(parent, "div");
  };
  this.label = function (parent, txt) {
    let lbl = AddControl(parent, "label");
    lbl.innerText = txt;
    return lbl;
  };
  this.inputHidden = function (id, value) {
    let hidden = AddInput(container, "hidden", id);
    hidden.value = value;
    return hidden;
  };
  this.ul = function (parent, id, classname) {
    let ul = AddControl(parent, "ul");
    ul.id = id;
    ul.className = classname;
    return ul;
  };
  this.li = function (parent, id, classname) {
    let li = AddControl(parent, "li");
    li.id = id;
    li.className = classname;
    return li;
  };
  this.a = function (parent, txt) {
    let a = AddControl(parent, "a");
    a.innerText = txt.toUpperCase();
    return a;
  };
  this.icon = function (parent) {
    let icon = AddControl(parent, "i");
    return icon;
  };
  this.span = function (parent) {
    return AddControl(parent, "span");
  };
  this.img = function (parent) {
    return AddControl(parent, "img");
  };
  this.btn = function (parent, txt) {
    let boton = AddControl(parent, "input");
    boton.type = "button";
    boton.value = txt;
    boton.className = "form__submit";
    return boton;
  };
  this.divGroup = function (id) {
    let div = AddControl(container, "div");
    div.className = "form__group";
    div.id = id;
    return div;
  };
  this.input = function (parent, type) {
    let input = AddControl(parent, "input");
    input.type = type;

    input.autocomplete = "off";
    input.required = true;
    input.placeholder = " ";
    input.className = "form__input";
    return input;
  };
  this.select = function (parent, txt) {
    let lbl = $dc.label(parent, txt);
    let select = AddControl(parent, "select");
    select.id = "select";
    return select;
  };
  this.option = function (parent, text, value) {
    let op = AddControl(parent, "option");
    op.innerText = text;
    op.value = value;
    return op;
  };
  this.submit = function (parent, type, txt, id) {
    let submit = AddControl(parent, "input");
    submit.type = type;
    submit.className = "form__submit";
    submit.value = txt;
    submit.id = id;

    return submit;
  };
  this.reset = function (parent, type) {
    let submit = AddControl(parent, "input");
    submit.type = type;
    submit.className = "form__reset";
    submit.value = "Cancelar";
    return submit;
  };
  this.inputText = function (parent, txt) {
    let input = AddInput(parent, "text", "nombre");
    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputDirec = function (parent, txt) {
    let input = AddInput(parent, "text", "direccion");
    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputNumber = function (parent, txt) {
    let input = AddInput(parent, "number", "dni");
    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputCorreo = function (parent, txt) {
    let input = AddInput(parent, "email", "correo");
    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputPass = function (parent, txt) {
    let input = AddInput(parent, "password", "pass");
    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputModifPass = function (parent, txt) {
    let input = AddInput(parent, "password", "modifPass");
    let lbl = $dc.label(parent, txt);
    input.required = false;
    lbl.className = "form__label";
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputConfirm = function (parent, txt) {
    let input = AddInput(parent, "password", "confirm");
    input.style.display = "none";
    input.required = false;

    let lbl = $dc.label(parent, txt);
    lbl.className = "form__label";
    lbl.id = "labelConfirm";
    lbl.style.display = "none";

    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputFecha = function (parent, txt) {
    let input = AddInput(parent, "date", "fecha");
    input.className = "";
    let lbl = $dc.label(parent, txt);
    input.onchange = function () {
      if (input.value !== "") {
        lbl.className = "form__label";
        input.className = "form__input";
      } else {
        lbl.className = "";
        input.className = "";
      }
    };
    let spanName = $dc.span(parent);
    spanName.className = "form__line";
    return input;
  };
  this.inputFile = function (parent, name) {
    let input = AddInput(parent, "file", "file");
    input.name = name;
    input.required = false;
    input.className = "";
    return input;
  };
  this.inputFileImg = function (parent, txt, name) {
    const change = function () {
      let cadena = fileimg.value;
      let resultado = cadena.split("\\");
      let i = resultado.length - 1;
      console.log(resultado[i]);

      if (this.files.length === 0) return;
      if (this.files[0].type.match("image.*")) {
        lbl.className = "form__label";
        fileimg.className = "form__input";
        this.setCustomValidity("");
      } else {
        lbl.className = "";
        fileimg.className = "";
        this.setCustomValidity("no es un archivo de imagen".toUpperCase());
      }
    };
    let fileimg = $dc.inputFile(parent, name);
    let lbl = $dc.label(parent, txt);
    fileimg.onchange = change;
    fileimg.required = false;
    return fileimg;
  };
  this.inputFilePdf = function (parent, txt, name) {
    const change = function () {
      if (this.files.length === 0) return;
      if (this.files[0].type.match("pdf.*")) {
        lbl.className = "form__label";
        filepdf.className = "form__input";
        this.setCustomValidity("");
      } else {
        lbl.className = "";
        filepdf.className = "";
        this.setCustomValidity("no es un archivo pdf".toUpperCase());
      }
    };

    let filepdf = $dc.inputFile(parent, name);
    let lbl = $dc.label(parent, txt);
    filepdf.onchange = change;
    filepdf.required = false;
    return filepdf;
  };
  this.form = function (title, icono) {
    Section.innerHTML = ""; //limpiamos la section

    let formulario = AddControl(Section, "form"); // creammos formulario
    formulario.className = "form";
    formulario.id = "formulario";

    let icon = $dc.icon(formulario);
    icon.className = icono;
    icon.id = "atras";
    icon.onclick = Home;

    let container = $dc.div(formulario); //en esta caja esta todo el contenido del formulario
    container.className = "form__container";
    container.id = "container";

    let lbl = $dc.label(container);
    lbl.id = "titulo";

    lbl.innerHTML = title;
     
    return formulario;
  };

  //lo ultimo que se agrego, por ahora no forma parte del codigo que funciona correctamente
  this.formImg = function (title, textinput, Fload) {
    //FUNCTIONS
    const Load = function () {
      let res = this.contentWindow.document.childNodes[0].innerText;
      if (res === "") return;
      Fload(res);
    };
    const MakeHiddens = function () {
      let accion = AddInput(container, "hidden");
      accion.name = "accion";
      accion.id = "accion";
      let id = AddInput(container, "hidden");
      id.id = "ID";
      id.name = "ID";
    };
    //DESARROLLO
    let f = $dc.form(title, "fas fa-arrow-left");
    f.method = "POST";
    f.action = "default.aspx";
    f.enctype = "multipart/form-data";
    let ifr = $d.ce("iframe");
    ifr.name = "iframe";
    ifr.style.display = "none";
    $d.ac(Section, ifr);
    f.target = "iframe";
    ifr.onload = Load;
    MakeHiddens();
    return f;
  };
  //lo ultimo que se agrego, por ahora no forma parte del codigo que funciona correctamente

  this.table = function (parent) {
    let table = AddControl(parent, "table");
    table.className = "tabla";
    table.id = "Table";
    return table;
  };
  this.thead = function (parent) {
    let thead = AddControl(parent, "thead");
    thead.className = "tabla__head";
    return thead;
  };
  this.tbody = function (parent) {
    let tbody = AddControl(parent, "tbody");
    return tbody;
  };
  this.tr = function (parent) {
    let tr = AddControl(parent, "tr");
    return tr;
  };
  this.th = function (parent, txt) {
    let th = AddControl(parent, "th");
    th.scope = "col";
    th.innerText = txt;
    return th;
  };
  this.td = function (parent, txt) {
    let td = AddControl(parent, "td");
    td.innerHTML = txt;
    return td;
  };
};
this.doubleButton = function () {
  let d1 = $dc.divGroup("btn1");
  let d2 = $dc.divGroup("btn2");
  return [d1, d2];
};

const $dc = new $$DomControls(); //instancia $$DomControls
const $$DomNav = function () {
  let ul;
  const MakeUl = function () {
    if (ul !== undefined) return; //valida si la variable ul ya esta definida
    ul = $d.ce("ul");
    ul.className = "menu__items";
    $d.ac(Nav, ul); //crea elemento ul y lo mete en el nav
  };
  this.clear = function () {
    //limpia la navegacion
    MakeUl();
    ul.innerHTML = "";
  };
  this.makeButton = function (txt, event) {
    // agrega opcion a la navegacion
    //MakeUl();                            // con el texto y evento que pasemos
    let a = $d.ce("a"); // por parametro
    a.innerHTML = txt.toUpperCase();
    a.onclick = event;

    let li = $d.ce("li");
    $d.ac(ul, li);
    $d.ac(li, a);
    return li;
  };
  this.makeButtonLogin = function (txt, event, icontxt) {
    // a diferencia de MakeButton
    //MakeUl();                               //aca le damos una clase a la
    let li = $d.ce("li"); //etiqueta li para poder colocarla
    $d.ac(ul, li); //en la esquina de la pagina
    li.id = "login";

    let a = $dc.a(li, txt.toUpperCase());
    //a.id = "ALogin";
    a.onclick = event;
    let icon = $dc.icon(a);

    icon.className = icontxt;
    return a;
  };

  this.dropdownButton = function (txt, event) {
    let li = $d.ce("li");
    $d.ac(ul, li);
    li.id = "dropdown";

    let a = $dc.a(li, txt.toUpperCase());
    a.onclick = event;

    let dropdown = $d.ce("ul");
    dropdown.className = "menu__vertical";
    dropdown.id = "optionsDropdown";
    $d.ac(li, dropdown);
    return a;
  };
  this.optionDropdown = function (txt, event) {
    let liDropdown = $d.ce("li");
    $d.ac(optionsDropdown, liDropdown);

    let option1 = $d.ce("a");
    option1.innerText = txt.toUpperCase();
    $d.ac(liDropdown, option1);

    option1.onclick = event;
    return option1;
  };
};
const $dn = new $$DomNav(); //instancia $$DomNav
