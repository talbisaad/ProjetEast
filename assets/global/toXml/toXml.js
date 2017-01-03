function ConvertToXml(){

        //merci de tester sur IE
       var fso = new ActiveXObject("Scripting.FileSystemObject");
        var a = fso.CreateTextFile("testfile.xml", true);
        a.WriteLine('<?xml version="1.0" encoding="ISO-8859-1"?><EAST transition="burst">\n');
        a.WriteLine('<PREFERENCES>\n<AFFICHAGE>\n<POLICE_TEXTE font="Comic Sans MS"/>\n</AFFICHAGE>\n');                
        a.Close();


        
}
