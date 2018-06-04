//ordi contre utilisateur



var choixJoueur = getChoixJoueur();

var choixOrdi = 'pierre';

var winner = chifoumi(choixJoueur, choixOrdi); // retourne joueur ou ordi


document.write("Le joueur a choisi " + choixJoueur + "<br>");
document.write("L'ordi a choisi " + choixOrdi + "<br>");
document.write("Le gagnant est " + winner);


function getChoixJoueur() {

    var choix;

    do {
        choix = prompt("Saisir feuille, pierre ou ciseaux");
    } while (choix != 'ciseaux' && choix != 'pierre' && choix != 'feuille');
    
    return choix;
}


function getChoixOrdi() {

    var nbAleatoire = Math.random(); // retourne nb entre 0 et 1

    
    if (nbAleatoire < 0.33) {
    
        return 'ciseaux';
    
    } else if (nbAleatoire > 0.66) {
    
        return 'feuille';
        
    } else {
    
        return 'pierre';
    }
}


function chifoumi(choixJoueur1, choixJoueur2) {
    
    if (choixJoueur1 == choixJoueur2) {
    
        return 'égalité';
    }
    
    if (choixJoueur1 == 'ciseaux') {
        if (choixJoueur2 == "feuille") {
        
            return 'joueur1';
        } 
    } else if (choixJoueur1 == 'pierre') {
        if (choixJoueur2 == "ciseaux") {
        
            return 'joueur1';
        }
    
    } else if (choixJoueur1 == 'feuille') {
        if (choixJoueur2 == "pierre") {
        
            return 'joueur1';
        }
    
    } else {
    
        // erreur
    
    }
    
    
    return 'joueur2';
}






//ordi contre ordi


var choixJoueur1 = getChoixOrdi();

var choixJoueur2 = getChoixOrdi();

var winner = chifoumi(choixJoueur1, choixJoueur2); // retourne joueur ou ordi


document.write("Le joueur1 a choisi " + choixJoueur1 + "<br>");
document.write("Le joueur2 a choisi " + choixJoueur2 + "<br>");

if (winner == 'égalité') {
    document.write("Match nul");
} else {
    document.write("Le gagnant est " + winner);
}


function getChoixJoueur() {

    var choix;

    do {
        choix = prompt("Saisir feuille, pierre ou ciseaux");
    } while (choix != 'ciseaux' && choix != 'pierre' && choix != 'feuille');
    
    return choix;
}


function getChoixOrdi() {

    var nbAleatoire = Math.random(); // retourne nb entre 0 et 1

    
    if (nbAleatoire < 0.33) {
    
        return 'ciseaux';
    
    } else if (nbAleatoire > 0.66) {
    
        return 'feuille';
        
    } else {
    
        return 'pierre';
    }
}


function chifoumi(choixJoueur1, choixJoueur2) {

    
    if (choixJoueur1 == choixJoueur2) {
    
        return 'égalité';
    }
    
    if (choixJoueur1 == 'ciseaux' && choixJoueur2 == "feuille") {
        
        return 'joueur1';
         
    } else if (choixJoueur1 == 'pierre' && choixJoueur2 == "ciseaux") {
        return 'joueur1';
        
    } else if (choixJoueur1 == 'feuille' && choixJoueur2 == "pierre") {
        
        return 'joueur1';
    } 
    
    
    return 'joueur2';
}

