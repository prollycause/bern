//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
		v = v.toLowerCase();
	v = v.replace(/\bhillary clinton\b/g, "Shillary Clinton");
	v = v.replace(/\bbernie sanders\b/g, "President Elect Bernie Sanders");
	v = v.replace(/\bdonald trump\b/g, "The Centipede");
	
	textNode.nodeValue = v;
}