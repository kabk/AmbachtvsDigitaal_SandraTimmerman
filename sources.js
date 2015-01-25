// maak klik event aan
document.onmouseover = function(event) {
	
	// variabelen maken om te zien wat geklikt wordt
	var myId = event.target.id; // 'id' van het object waarop geklikt wordt 
	var myClass = event.target.className; // 'class' van het object waarop geklikt wordt
	var myNote = myId;//+ '-note'; // voeg '-note' toe aan het id 
	
	// alleen als ik op een voetnoot klik
    if (myClass == "footnote") {
       	
		//alert(myClass + ": " + myId + ". So show " + myNote);
	   	   
		// verberg alle andere notities   
		hidenotes();
		
		// zoek naar een object met het id van de note waar ik op klik en maak hem zichtbaar
		document.getElementById(myNote).style.display = 'block';
		
		// verstop de notes na korte tijd
		//setTimeout(hidenotes,5000)
	   
    }   
	
	// het zelfde bij images
    if (myClass == "image") {
       	
		//alert(myClass + ": " + myId + ". So show " + myNote);
	   	   
		// verberg alle andere notities   
		hidenotes();
		
		// zoek naar een object met het id van de note waar ik op klik en maak hem zichtbaar
		document.getElementById(myNote).style.display = 'block';
	
	   
    }   

};


// verberg alle notities na timer of na scroll.. 
function hidenotes(){
	var elements = document.getElementsByClassName("note");
	for(var i = 0, length = elements.length; i < length; i++) {
		elements[i].style.display = 'none';
	}
	var elements = document.getElementsByClassName("imagenote");
	for(var i = 0, length = elements.length; i < length; i++) {
		elements[i].style.display = 'none';
	}
}