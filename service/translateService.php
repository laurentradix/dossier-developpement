<?php
>
function translate($word){
	
	if (isset($dico[$word)== false){
		return "  le mot n'est repertorié";
	}else{
		
		$mot = $dico[$word];
		return " la traduction est ". $mot ;
	}
}
}	

echo  translate("bateau");
