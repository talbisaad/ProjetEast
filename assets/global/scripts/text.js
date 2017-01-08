function setBold() {
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

function setItalic() {
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

function setUnderline() {
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

function setcolor(color) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            span = document.createElement('SPAN');
            span.style.color = "#"+color;
            span.appendChild(document.createTextNode(range));
            range.deleteContents();
            range.insertNode(span);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text.style.color = "#"+color;
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