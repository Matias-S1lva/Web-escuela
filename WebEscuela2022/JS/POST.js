const UrlServer = "Default.aspx"
const UrlData = "../DATOS/USERS.txt"
const $$Ajax = function () {

    //FUNCTION
    const POST = function (Data) {
        //funciona con browsers da ultimageneracion
        const xhttp = new XMLHttpRequest();
        const Change = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                resp = xhttp.responseText;
            }
        };
        var resp = null;
        xhttp.onreadystatechange = Change;
        xhttp.open("POST", "Default.aspx", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(Data);
        return resp;
    };
    this.FetchData = (data) => {
        fetch(data)
            .then(response => response.json())
            .then( alumnos => console.log(alumnos))
    }
    this.fetchPost = (data) => {
        fetch(UrlServer, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify({
                data
            })
        })
    }
    this.Consulta = function (data) {
        let respuesta = POST(data);
        return respuesta;
    }

    //METHODS
    this.saveUsers = function () {
        let Data = "accion=SAVEUSERS&baseusers=" + JSON.stringify(BaseUsers);
        let res = POST(Data);
        if (res === "ok") BaseUsers = undefined;
        else alert(e);
    };
    this.loadUsers = function () {
        let Data = "accion=READUSERS";
        try {
            let res = POST(Data);
            BaseUsers = JSON.parse(res);
        } catch (e) {
            alert(e);
        }
    };
};
const $a = new $$Ajax();
