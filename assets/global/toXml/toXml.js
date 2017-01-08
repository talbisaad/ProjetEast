function ConvertToXml(){

        //merci de tester sur IE

         // var elems = document.body.getElementsByTagName("*");    
         var elems = document.getElementsByClassName('form-group last');  
       var fso = new ActiveXObject("Scripting.FileSystemObject");
        var a = fso.CreateTextFile("testfile.xml", true);
        a.WriteLine('<?xml version="1.0" encoding="ISO-8859-1"?><EAST transition="burst">\n');
        a.WriteLine('<PREFERENCES>\n<AFFICHAGE>\n<POLICE_TEXTE font="Comic Sans MS"/>\n</AFFICHAGE>\n');     
        a.WriteLine('</PREFERENCES>\n<LOGO_GAUCHE fichier="CEA2012.svg" hauteur_SVG="100" largeur_SVG="100"/>\n');

        var e = elems(0).getElementsByTagName("*");
       

        for (var i=0, max=e.length; i < max; i++) {


           
           
           tagcontent= e(i).textContent;

           tagname = e(i).tagName;
          

           if(tagname!='DIV')
           a.WriteLine('<SECTION>\n');


            switch(tagname){


                case 'H1': 
                
                a.WriteLine('<TITRE>'+tagcontent+'</TITRE>\n');
                
                break;

                case 'P' : 
                a.WriteLine('<PARAGRAPHE>'+tagcontent+'</PARAGRAPHE>\n');

                break;


            }

            /* //pour récuperer le type de balise
             a.WriteLine(e(i).tagName);

             //pour récuprer le contenue de la balise
             //a.WriteLine(e(i).textContent);

             //récuperer les attributs 
            // a.WriteLine(e(i).getAttribute("id")); */

               if(tagname!='DIV') 
               a.WriteLine('</SECTION>\n')
               
        }

     
             
        a.Close();

}
