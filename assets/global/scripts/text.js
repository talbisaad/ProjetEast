function setBold() {
    if(getSelectedNode().nodeName == 'SPAN'){
        getSelectedNode().style.fontWeight = 'bold';
    } else {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                span = document.createElement('SPAN');
                span.style.fontWeight = 'bold';
                span.appendChild(document.createTextNode(range));
                range.deleteContents();
                range.insertNode(span);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text.style.fontWeight = 'bold';
        }
    }
}

function setItalic() {
    if(getSelectedNode().nodeName == 'SPAN'){
        getSelectedNode().style.fontStyle = 'italic';
    } else {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                span = document.createElement('SPAN');
                span.style.fontStyle = 'italic';
                span.appendChild(document.createTextNode(range));
                range.deleteContents();
                range.insertNode(span);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text.style.fontStyle = 'italic';
        }
    }
    
}

function setUnderline() {
    if(getSelectedNode().nodeName == 'SPAN'){
        getSelectedNode().style.textDecoration = "underline";
    } else {
        var sel, range;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                range = sel.getRangeAt(0);
                span = document.createElement('SPAN');
                span.style.textDecoration = "underline";
                span.appendChild(document.createTextNode(range));
                range.deleteContents();
                range.insertNode(span);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.text.style.textDecoration = "underline";
        }
    }
}

function getSelectedNode() {
    var node,selection;
    if (window.getSelection) {
      selection = getSelection();
      node = selection.anchorNode;
    }
    if (!node && document.selection) {
        selection = document.selection
        var range = selection.getRangeAt ? selection.getRangeAt(0) : selection.createRange();
        node = range.commonAncestorContainer ? range.commonAncestorContainer :
               range.parentElement ? range.parentElement() : range.item(0);
    }
    if (node) {
      return (node.nodeName == "#text" ? node.parentNode : node);
    }
};

function setAlign(align) {
    var node = getSelectedNode();

    node.style.textAlign = align;
}
function setList(type) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            list = document.createElement(type);
                 var li=document.createElement('li');

                    list.appendChild(li);
                    li.innerHTML="";
            range.deleteContents();
            range.insertNode(list);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text.style.textDecoration = "underline";
    }
}

function setImage(event) {

    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            img = new Image();
            img.id = "test";
            img.src = URL.createObjectURL(event.target.files[0]);
             img.onload = function () {
                if (img.width > 500) {
                image =    document.getElementById('test');
                image.style.width = '500px';
                image.style.height = 'auto';
                alert(img.width);
                }

             };
            
            
            range.deleteContents();
            range.insertNode(img);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text.style.fontStyle = 'italic';
    }   
}

function saveSelection() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }

    return null;
}

function restoreSelection(range) {

    
    if (range) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

        } else if (document.selection && range.select) {
            range.select();
        }

 
 }
}
var savedSelection;

function saveSelect() {
    savedSelection = saveSelection();
}


function setColor() {
    var sel, range;
    var color = document.getElementById('colorPicker');
    restoreSelection(savedSelection);
    if(getSelectedNode().nodeName == 'SPAN'){
        getSelectedNode().style.color = color.value;
    } else {
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                 span = document.createElement('SPAN');
                span.style.color = color.value;
                span.appendChild(document.createTextNode(range));
                range.deleteContents();
                range.insertNode(span);

            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.pasteHTML(text);
            range.select();
        }
    }
}

function setVideo() {
    var video = document.getElementById('videoUrl');
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            div = document.createElement('DIV');
            div.innerHTML = video.value;
            range.deleteContents();
            range.insertNode(div);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text.style.fontStyle = 'italic';
    }
}


function setFont() {

    var font = document.getElementById('font');
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            span = document.createElement('SPAN');
            span.style.fontFamily = font.value;
            span.appendChild(document.createTextNode(range));
            range.deleteContents();
            range.insertNode(span);
            
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text.style.fontStyle = 'italic';
    }
}