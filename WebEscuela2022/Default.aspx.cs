﻿using BussinesTable;
using System;
using System.IO;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{

    #region PARAMETROS
    string PathUsers = AppDomain.CurrentDomain.BaseDirectory + @"DATOS\USERS.txt";
    string PathUsersDefault = AppDomain.CurrentDomain.BaseDirectory + @"DATOS\BASEUSERDEFAULT.txt";
    #endregion
   
    protected void Page_Load(object sender, EventArgs e)
    {
        #region SWITCH
        switch (Request["accion"])
        {
            case null: return;
            case "READUSERS": ReadUsers(); break;
            case "SAVEUSERS": SaveUsers(); break;
            case "MODIFICARIMGUSUARIO": ModifyIMGUser(); break;
            case "SHA1": Sha1(); break;
        }
        #endregion
    }

    private void Sha1()
    {
        Dispersor Hash = new Dispersor();
        Response.Write(Hash.Dispersar(Request["text1"]) +
             " " +
             Hash.Dispersar(Request["text2"]));
    }

    private void ModifyIMGUser()
    {
        string ID = Request["ID"];
        string PathImg = AppDomain.CurrentDomain.BaseDirectory +
                @"IMAGENES\USUARIOS\USER" + ID + ".jpg";
        string PathImg1 = AppDomain.CurrentDomain.BaseDirectory +
            @"IMAGENES\USUARIOS\USER_" + ID + ".jpg";
        string UrlImg = "IMAGENES/USUARIOS/USER" + ID + ".jpg";
        string UrlImg1 = "IMAGENES/USUARIOS/USER_" + ID + ".jpg";
        if (Request.Files[0].FileName != "")
        {

            if (File.Exists(PathImg1))
            {
                File.Delete(PathImg1);
                Request.Files[0].SaveAs(PathImg);
            }
            if (File.Exists(PathImg))
            {
                File.Delete(PathImg);
                Request.Files[0].SaveAs(PathImg1);
            }
            if (!File.Exists(PathImg) && !File.Exists(PathImg1))
                Request.Files[0].SaveAs(PathImg);
        }
        if (File.Exists(PathImg1)) { Response.Write(UrlImg1); return; }
        if (File.Exists(PathImg)) { Response.Write(UrlImg); return; }
        Response.Write("IMAGENES/USUARIOS/USERDEFAULT.jpg");
    }

    #region FUNCIONES
    private void SaveUsers()
    {
        string Data = Request["baseusers"];
        File.WriteAllText(PathUsers, Data);
        Response.Write("ok");
    }

    private void ReadUsers()
    {
        if (!File.Exists(PathUsers))
        {
            File.Copy(PathUsersDefault, PathUsers);
        }
        Response.Write(File.ReadAllText(PathUsers));
    }
    #endregion
}