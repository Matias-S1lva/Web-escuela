const Listado = function () {
    //Section.innerHTML = ""
    let div = $dc.div(Section)
    div.id = "divTable"
    let table = $dc.table(div);
    let thead = $dc.thead(table);
    let trhead = $dc.tr(thead);
    if (Rol !== "PRECEPTOR") $dc.th(trhead, "#ID");
    $dc.th(trhead, "NOMBRE");
    $dc.th(trhead, "DIRECCION");
    $dc.th(trhead, "DNI");
    $dc.th(trhead, "@CORREO");
    $dc.th(trhead, "TELEFONO");
    $dc.th(trhead, "FOTO");
    $dc.th(trhead, "ROLES");
    $dc.th(trhead, "");

    let tbody = $dc.tbody(table);
    $a.loadUsers();
    let idRow = 1
    for (let i = 0; i < BaseUsers.Users.length; i++) {

        let trBody = $dc.tr(tbody);
        trBody.id = idRow
        idRow += 1;
        $dc.th(trBody, BaseUsers.Users[i].ID);
        $dc.td(trBody, BaseUsers.Users[i].Nombre);
        $dc.td(trBody, BaseUsers.Users[i].Direccion);
        $dc.td(trBody, BaseUsers.Users[i].Dni);
        $dc.td(trBody, BaseUsers.Users[i].Mail);
        $dc.td(trBody, BaseUsers.Users[i].Telefono);

        let imgtd = $dc.td(trBody, "");
        let img = $dc.img(imgtd)
        img.className = "tabla__foto"
        img.src = BaseUsers.Users[i].Foto
        let roles = $dc.td(trBody, "")
        let select = $dc.select(roles, "")
        select.id = "roles"

        for (let j = 0; j < BaseUsers.Users[i].Roles.length; j++) {
            $dc.option(select, BaseUsers.Users[i].Roles[j], "")
        }
        let td = $dc.td(trBody, "");
        let icon = $dc.icon(td);
        icon.className = "edit fas fa-pen-to-square";
        icon.disabled = true;
        
        trBody.addEventListener("click", (e) => {
            console.log(trBody.id)
            document.getElementById(trBody.id).remove();
            $cu.erase(trBody.id)
        })
    }
    BaseUsers = undefined;
}
