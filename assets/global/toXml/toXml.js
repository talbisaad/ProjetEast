function ConvertToXml() {

    //merci de tester sur IE

    // var elems = document.body.getElementsByTagName("*");    
    var elems = document.getElementsByClassName('form-group lastt');
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile("testfile.xml", true);
    a.WriteLine('<?xml version="1.0" encoding="ISO-8859-1"?>\n<EAST transition="burst">\n');
    a.WriteLine('<PREFERENCES>\n<AFFICHAGE>\n<POLICE_TEXTE font="Comic Sans MS"/>\n</AFFICHAGE>\n');
    a.WriteLine('</PREFERENCES>\n<LOGO_GAUCHE fichier="CEA2012.svg" hauteur_SVG="100" largeur_SVG="100"/>\n');



    var e = elems(0).getElementsByTagName("*");
    var closeSection = false;
    for (var i = 0, max = e.length; i < max; i++) {


        tagcontent = e(i).textContent;

        tagname = e(i).tagName;

        switch (tagname) {


            case 'H1':

                if (e(i).getAttribute("class") == 'chapitre')

                    a.WriteLine('<SECTION>\n<TITRE>' + tagcontent + '</TITRE>\n</SECTION>\n');
                else

                    a.WriteLine('<SECTION>\n<TITRE>' + tagcontent + '</TITRE>\n');

                break;

            case 'P':

                //paragraphe qui contienne des élements

                if (e(i).getElementsByTagName("ol").length > 0 || e(i).getElementsByTagName("ul").length > 0 
                	|| e(i).getElementsByTagName("img").length > 0) {

                    var pcontenu = e(i).getElementsByTagName("*");

                    for (var i = 0, max = pcontenu.length; i < max; i++) {


                        switch (pcontenu(i).tagName) {


                            //list
                            case 'OL':

                                var list = pcontenu(i).getElementsByTagName("li");

                                a.WriteLine('<LIST type="1">\n');

                                for (var i = 0, max = list.length; i < max; i++) {


                                    a.WriteLine('<EL>' + list(i).innerHTML + '</EL>\n');

                                }
                                a.WriteLine('</LIST>\n');
                                break;

                            case 'UL':

                                var list = pcontenu(i).getElementsByTagName("li");

                                a.WriteLine('<LIST type="circle">\n');


                                for (var i = 0, max = list.length; i < max; i++) {

                                    a.WriteLine('<EL>' + list(i).innerHTML + '</EL>\n');

                                }
                                a.WriteLine('</LIST>\n');
                                break;

                                //image
                            case 'IMG':
                                a.WriteLine('<IMAGE>' + pcontenu(i).getAttribute("src") + '</IMAGE>\n');
                                break;
                               
                        }


                    }

                    a.WriteLine('</SECTION>');

                    //paragraphe normale 
                } else {
                    closeSection = true;

                    WriteSection(e(i), tagcontent, a, closeSection);


                }



        }

    }
    a.WriteLine('</EAST>')
    a.Close();

}

//fonction pour écrire une paragraphe
function WriteSection(e, tagcontent, file, closeSection) {

    var HasSpan = e.getElementsByTagName("span").length;


    if (HasSpan != 0) {
        var sp = e.getElementsByTagName("span");

        var tmp = ApplyAttribut(tagcontent, sp);

        if (closeSection)

            file.WriteLine('<PARAGRAPHE>' + tmp + '</PARAGRAPHEs>\n</SECTION>\n');

        else

            file.WriteLine('<PARAGRAPHE>' + tmp + '</PARAGRAPHEs>\n');

    } else {

        if (closeSection)

            file.WriteLine('<PARAGRAPHE>' + tagcontent + '</PARAGRAPHE>\n</SECTION>\n');

        else

            file.WriteLine('<PARAGRAPHE>' + tagcontent + '</PARAGRAPHE>\n');
    }

}

//fonction pour appliquer un style sur un text selectionné
function ApplyAttribut(AllContent, spanedContent) {


    for (var i = 0, max = spanedContent.length; i < max; i++) {

        var spaned = spanedContent(i).innerHTML;

        var c;

        switch (spanedContent(i).getAttribute("style")) {

            case 'font-weight: bold;':

                if (c == null)
                    c = AllContent.replace(spaned, '<b>' + spaned + '</b>');
                else
                    c = c.replace(spaned, '<b>' + spaned + '</b>');

                break;

            case 'font-style: italic;':

                if (c == null)
                    c = AllContent.replace(spaned, '<i>' + spaned + '</i>');
                else
                    c = c.replace(spaned, '<i>' + spaned + '</i>');

                break;

            case 'text-decoration: underline;':

                if (c == null)
                    c = AllContent.replace(spaned, '<s>' + spaned + '</s>');
                else
                    c = c.replace(spaned, '<s>' + spaned + '</s>');

                break;

        }

    }
    return c;

}