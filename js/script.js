// Création de la liste des mots mystères et déclaration des variables
var myArray = ['ABANDONNER', 'ACCEPTER', 'ACCOMPAGNER', 'ACCORD', 'ACHETER', 'ADORER', 'AFFAIRE', 'AGENT', 'AGIR', 'AIDE', 'AIDER', 'AIMER', 'AJOUTER', 'ALLER', 'AMENER', 'AMOUR', 'AMUSER', 'ANCIEN', 'ANNEE', 'ANNONCER', 'APERCEVOIR', 'APPARAITRE', 'APPEL', 'APPELER', 'APPORTER', 'APPRENDRE', 'APPROCHER', 'ARBRE', 'ARGENT', 'ARME', 'ARMEE', 'ARRANGER', 'ARRETER', 'ARRIVER', 'ASSEOIR', 'ASSURER', 'ATTAQUER', 'ATTEINDRE', 'ATTENDRE', 'ATTENTION', 'AUTRE', 'AVANCER', 'AVENIR', 'AVION', 'AVIS', 'AVOIR', 'BAISSER', 'BALLE', 'BATEAU', 'BATTRE', 'BEAU', 'BEBE', 'BESOIN', 'BIZARRE', 'BLANC', 'BLEU', 'BOIRE', 'BOIS', 'BOITE', 'BONHEUR', 'BONJOUR', 'BONNE', 'BORD', 'BOUCHE', 'BOUGER', 'BOULOT', 'BOUT', 'BRAS', 'BRUIT', 'BRULER', 'BUREAU', 'CACHER', 'CAFE', 'CALMER', 'CAMP', 'CAPITAINE', 'CARTE', 'CASSER', 'CAUSE', 'CERTAIN', 'CESSER', 'CHAMBRE', 'CHANCE', 'CHANGER', 'CHANTER', 'CHARGER', 'CHAT', 'CHAUD', 'CHEF', 'CHEMIN', 'CHER', 'CHERCHER', 'CHERI', 'CHEVAL', 'CHEVEU', 'CHIEN', 'CHOISIR', 'CHOIX', 'CHOSE', 'CIEL', 'CLAIR', 'CLASSE', 'CLIENT', 'COEUR', 'COIN', 'COLONEL', 'COMMENCER', 'COMPRENDRE', 'COMPTE', 'COMPTER', 'CONDUIRE', 'CONFIANCE', 'CONNAITRE', 'CONTENT', 'rejouerR', 'COPAIN', 'CORPS', 'COTE', 'COUCHER', 'COULEUR', 'COUP', 'COUPER', 'COUR', 'COURANT', 'COURIR', 'COURS', 'COUVRIR', 'CRAINDRE', 'CRIER', 'CROIRE', 'CUISINE', 'DAME', 'DANSER', 'DEBUT', 'DECIDER', 'DECOUVRIR', 'DEGAGER', 'DEMANDER', 'DENT', 'DEPART', 'DERNIER', 'DESCENDRE', 'DESOLE', 'DESOLER', 'DETESTER', 'DETRUIRE', 'DEVENIR', 'DEVINER', 'DEVOIR', 'DIEU', 'DIFFERENT', 'DIFFICILE', 'DIRE', 'DISPARAITRE', 'DOCTEUR', 'DOIGT', 'DOLLAR', 'DONNER', 'DORMIR', 'DOUTE', 'DOUX', 'DROIT', 'DROIT', 'DROITE', 'DROLE', 'ECHAPPER', 'ECOLE', 'ECOUTER', 'ECRIRE', 'EFFET', 'EGLISE', 'ELOIGNER', 'EMBRASSER', 'EMMENER', 'EMPECHER', 'EMPORTER', 'ENDROIT', 'ENFANT', 'ENLEVER', 'ENNEMI', 'ENTENDRE', 'ENTIER', 'ENTRER', 'ENVIE', 'ENVOYER', 'EPAULE', 'EPOQUE', 'EQUIPE', 'ERREUR', 'ESCALIER', 'ESPECE', 'ESPERER', 'ESPRIT', 'ESSAYER', 'ETAT', 'ETRANGE', 'ETRE', 'EVITER', 'EXCUSER', 'EXEMPLE', 'EXISTER', 'EXPLIQUER', 'FACE', 'FACILE', 'FACON', 'FAIM', 'FAIRE', 'FAIT', 'FALLOIR', 'FAMILLE', 'FAUTE', 'FAUX', 'FEMME', 'FENETRE', 'FERMER', 'FETE', 'FILER', 'FILLE', 'FILM', 'FILS', 'FINIR', 'FLEUR', 'FLIC', 'FOIS', 'FOND', 'FORCE', 'FORME', 'FORT', 'FOUTRE', 'FRANCAIS', 'FRAPPER', 'FRERE', 'FROID', 'FRONT', 'GAGNER', 'GARCON', 'GARDE', 'GARDER', 'GARS', 'GAUCHE', 'GENERAL', 'GENRE', 'GENS', 'GENTIL', 'GESTE', 'GLISSER', 'GOSSE', 'GOUT', 'GOUVERNEMENT', 'GRAND', 'GRAVE', 'GROS', 'GROUPE', 'GUERRE', 'GUEULE', 'HABITER', 'HABITUDE', 'HAUT', 'HEURE', 'HEUREUX', 'HISTOIRE', 'HOMME', 'HONNEUR', 'HOTEL', 'HUMAIN', 'IDEE', 'IGNORER', 'IMAGE', 'IMAGINER', 'IMPORTANT', 'IMPORTER', 'IMPOSSIBLE', 'IMPRESSION', 'INQUIETER', 'INSTALLER', 'INSTANT', 'INTERESSER', 'INTERET', 'INTERIEUR', 'INVITER', 'JAMBE', 'JARDIN', 'JETER', 'JEUNE', 'JOIE', 'JOLI', 'JOUER', 'JOUR', 'JOURNAL', 'JOURNEE', 'JURER', 'JUSTE', 'LACHER', 'LAISSER', 'LANCER', 'LANGUE', 'LEGER', 'LETTRE', 'LEVER', 'LEVRE', 'LIBRE', 'LIEU', 'LIGNE', 'LIRE', 'LIVRE', 'LONG', 'LUMIERE', 'MADAME', 'MAIN', 'MAINTENIR', 'MAISON', 'MAITRE', 'MALADE', 'MAMAN', 'MANGER', 'MANIERE', 'MANQUER', 'MARCHE', 'MARCHER', 'MARI', 'MARIAGE', 'MARIER', 'MATIN', 'MAUVAIS', 'MEDECIN', 'MEILLEUR', 'MEME', 'MENER', 'MENTIR', 'MERCI', 'MERDE', 'MERE', 'METRE', 'METTRE', 'MILIEU', 'MILLION', 'MINUTE', 'MOIS', 'MOMENT', 'MONDE', 'MONSIEUR', 'MONTER', 'MONTRER', 'MORT', 'MOURIR', 'MOUVEMENT', 'MOYEN', 'MUSIQUE', 'NAITRE', 'NOIR', 'NOUVEAU', 'NUIT', 'NUMERO', 'OBLIGER', 'OCCUPER', 'ODEUR', 'OEIL', 'OFFRIR', 'OISEAU', 'OMBRE', 'ONCLE', 'ORDRE', 'OREILLE', 'OSER', 'OUBLIER', 'OUVRIR', 'PAIX', 'PAPA', 'PAPIER', 'PARAITRE', 'PAREIL', 'PARENT', 'PARLER', 'PAROLE', 'PART', 'PARTIE', 'PARTIR', 'PASSAGE', 'PASSE', 'PASSER', 'PATRON', 'PAUVRE', 'PAYER', 'PAYS', 'PEAU', 'PEINE', 'PENSEE', 'PENSER', 'PERDRE', 'PERE', 'PERMETTRE', 'PERSONNE', 'PETIT', 'PEUPLE', 'PEUR', 'PHOTO', 'PIECE', 'PIED', 'PIERRE', 'PLACE', 'PLAIRE', 'PLAISIR', 'PLAN', 'PLEIN', 'PLEURER', 'POCHE', 'POINT', 'POLICE', 'PORTE', 'PORTER', 'POSER', 'POSSIBLE', 'POUSSER', 'POUVOIR', 'PREFERER', 'PREMIER', 'PRENDRE', 'PREPARER', 'PRESENCE', 'PRESENT', 'PRESENTER', 'PRESIDENT', 'PRET', 'PREVENIR', 'PRIER', 'PRINCE', 'PRISON', 'PRIX', 'PROBLEME', 'PROCHAIN', 'PROFESSEUR', 'PROMETTRE', 'PROPOS', 'lettreR', 'PROPRE', 'PROTEGER', 'QUARTIER', 'QUESTION', 'QUITTER', 'QUOI', 'RACONTER', 'RAISON', 'RAMENER', 'RAPPELER', 'RAPPORT', 'RECEVOIR', 'RECONNAITRE', 'REFLECHIR', 'REFUSER', 'REGARD', 'REGARDER', 'REJOINDRE', 'REMARQUER', 'REMETTRE', 'REMONTER', 'RENCONTRER', 'RENDRE', 'RENTRER', 'REPETER', 'REPONDRE', 'REPONSE', 'REPOSER', 'REPRENDRE', 'RESSEMBLER', 'RESTE', 'RESTER', 'RETARD', 'RETENIR', 'RETIRER', 'RETOUR', 'RETOURNER', 'RETROUVER', 'REUSSIR', 'REVE', 'REVEILLER', 'REVENIR', 'REVER', 'REVOIR', 'RIRE', 'RISQUER', 'ROBE', 'ROUGE', 'ROULER', 'ROUTE', 'SALE', 'SALLE', 'SALUT', 'SANG', 'SAUTER', 'SAUVER', 'SAVOIR', 'SCENE', 'SECONDE', 'SECRET', 'SECURITE', 'SEIGNEUR', 'SEMAINE', 'SEMBLER', 'SENS', 'SENTIMENT', 'SENTIR', 'SEPARER', 'SERIEUX', 'SERRER', 'SERVICE', 'SERVIR', 'SEUL', 'SIECLE', 'SIGNE', 'SILENCE', 'SIMPLE', 'SITUATION', 'SOEUR', 'SOIR', 'SOIREE', 'SOLDAT', 'SOLEIL', 'SORTE', 'SORTIR', 'SOUFFRIR', 'SOURIRE', 'SOUVENIR', 'SUFFIRE', 'SUITE', 'SUIVRE', 'SUJET', 'SUPER', 'TABLE', 'TAIRE', 'TELEPHONE', 'TEMPS', 'TENDRE', 'TENIR', 'TENTER', 'TERMINER', 'TERRE', 'TETE', 'TIRER', 'TOMBER', 'TOUCHER', 'TOUR', 'TOURNER', 'TOUT', 'TOUTE', 'TRAIN', 'TRAINER', 'TRAITER', 'TRANQUILLE', 'TRAVAIL', 'TRAVAILLER', 'TRAVERS', 'TRAVERSER', 'TRISTE', 'TROMPER', 'TROU', 'TROUVER', 'TRUC', 'TUER', 'TYPE', 'UTILISER', 'VALOIR', 'VENDRE', 'VENIR', 'VENT', 'VENTRE', 'VERITE', 'VERRE', 'VERT', 'VIDE', 'VIEUX', 'VILLAGE', 'VILLE', 'VISAGE', 'VIVANT', 'VIVRE', 'VOIR', 'VOITURE', 'VOIX', 'VOLER', 'VOULOIR', 'VOYAGE', 'VRAI'];

var motAtrouver = "";
var lettreJouee = new Array(26);
var coupJoue = 0;
var essai = 0;
var x = 0;
var motMystere = "";
var chance = "";
var dom = "";
var imagePendu = new Array(10);
var tableauLettreMotMystere = new Array(motAtrouver.length);
var tableauEtoileMotMystere = new Array(motAtrouver.length);

// Fonction d'initialisation du jeu
function demarrage() {
    motMystere = "";
    chance = "";
    // Tirage au hazad du mot mystère
    var hazard = Math.floor(Math.random() * myArray.length);
    motAtrouver = myArray[hazard];
    coupJoue = 0;
    essai = 10;
    // Masquage du mot mystère avec des *
    for (x = 0; x < motAtrouver.length; x++) {
        tableauLettreMotMystere[x] = motAtrouver.charAt(x);
        tableauEtoileMotMystere[x] = "* ";
    }
    for (x = 0; x < motAtrouver.length; x++) {
        motMystere = motMystere + tableauEtoileMotMystere[x];
    }

    // Création du texte ci-dessous en vert et injection dans le DOM 
    chance = `Cliquez sur une lettre pour faire votre choix.`;
    document.querySelector('h2').textContent = chance;
    document.querySelector('h2').style.color = "green";
    // Injection du mot mystère masqué dans le DOM
    document.interface.MotCache.value = motMystere;
    // Injection d'une image vide dans le DOM
    document.getElementById("imagependu").src = "images/dessin-jeu-pendu.png";
    dom = document.getElementById('image');
    // Création d'un dégradé de couleurs pour le fond de l'image du pendu
    dom.style.backgroundImage = 'linear-gradient(#FFFF00, #FFC0CB)';
    // Activation du clavier virtuel
    clavierActif();
}

// Fonction de test des lettres jouées et résultat obtenu
function lettreTestee() {
    var bonneLettre = false;
    // Création d'une boucle de contrôle de présence de lettre choisie dans le mot mystère
    lettreJouee[coupJoue] = lettre;
    for (var x = 0; x < motAtrouver.length; x++) {
        if (lettre == tableauLettreMotMystere[x]) {
            tableauEtoileMotMystere[x] = lettre;
            bonneLettre = true;
        }
    }
    // Si la lettre choisie est présente dans le mot mystère, on remplace les étoiles par la lettre choisie
    if (bonneLettre == true) {
        motMystere = "";
        for (x = 0; x < motAtrouver.length; x++) {
            motMystere = motMystere + tableauEtoileMotMystere[x];
        }
        document.interface.MotCache.value = motMystere;
        // Si le nombre d'essais restant est supérieur à 1 alors on affiche la phrase ci-dessous de couleur verte :
        if (essai>1) {
            chance = `Bon choix de lettre ! vous avez encore droit à ${essai} erreurs.`;
            document.querySelector('h2').textContent = chance;
            document.querySelector('h2').style.color = "green";
        }
        // Sinon on affiche la phrase ci-dessous de couleur verte :
        else {
            chance = `Bon choix de lettre ! vous avez encore droit à ${essai} erreur.`;
            document.querySelector('h2').textContent = chance;
            document.querySelector('h2').style.color = "green";
        }
    }
    // Si la lettre choisie n'est pas dans le mot mystère, on affiche l'image du pendu correspond au nombre d'essais restant
    else {
        imagePendu[`${coupJoue}`] = `images/dessin-jeu-pendu${coupJoue}.png`;
        document.getElementById("imagependu").src = imagePendu[coupJoue];     
        essai = 9 - coupJoue;
        // Si le nombre d'essais restant est supérieur à 1 alors on affiche la phrase ci-dessous de couleur rouge :
        if (essai>1) {
            chance = `Mauvaise lettre ! vous avez encore droit à ${essai} erreurs.`;
            document.querySelector('h2').textContent = chance;
            document.querySelector('h2').style.color = "red";
        }
        // Sinon on affiche la phrase ci-dessous de couleur rouge :
        else {
            chance = `Mauvaise lettre ! vous avez encore droit à ${essai} erreur.`;
            document.querySelector('h2').textContent = chance;
            document.querySelector('h2').style.color = "red";
        }
        coupJoue++;
    }
    // On appelle la fonction rejouer()
    rejouer();
}

// Fonction qui permet de rejouer une partie
function rejouer() {
    // Si 10 erreurs ont été commises, on affiche le message ci-dessous et crée un dégradé de couleur rouge en arrière plan du dessin du pendu
    if (coupJoue == 10) {
        chance = `Vous avez perdu ! Réessayez en cliquant sur le bouton "Nouvelle partie".`;
        document.querySelector('h2').textContent = chance;
        dom = document.getElementById('image');
        dom.style.backgroundImage = 'linear-gradient(#FF0000, #8B0000)';
        // On désactive le clavier virtuel et on affiche le mot mystère
        clavierInactif();
        motMystere = "";
        for (var x = 0; x < motAtrouver.length; x++) {
            motMystere = motMystere + tableauLettreMotMystere[x];
        }
        document.interface.MotCache.value = motMystere;
    }
    // Sinon si le mystère est trouvé, on affiche le texte ci-dessous en vert et le gif animé bravo à la place du pendu :
    else {
        if (tableauLettreMotMystere.join() == tableauEtoileMotMystere.join()) {
            chance = `Vous avez gagné ! Rejouez en cliquant sur le bouton "Nouvelle partie".`;
            document.querySelector('h2').textContent = chance;
            document.querySelector('h2').style.color = "green";
            document.getElementById("imagependu").src = "images/bravo.gif";
            dom = document.getElementById('image');
            dom.style.backgroundImage = 'linear-gradient(#000000, #000000)';
            // On désactive le clavier virtuel
            clavierInactif();
        }
    }
}

function A() {
    lettre = "A";
    document.getElementById("toucheA").disabled = true;
    lettreTestee();
}

function B() {
    lettre = "B";
    document.getElementById("toucheB").disabled = true;
    lettreTestee();
}

function C() {
    lettre = "C";
    document.getElementById("toucheC").disabled = true;
    lettreTestee();
}

function D() {
    lettre = "D";
    document.getElementById("toucheD").disabled = true;
    lettreTestee();
}

function E() {
    lettre = "E";
    document.getElementById("toucheE").disabled = true;
    lettreTestee();
}

function F() {
    lettre = "F";
    document.getElementById("toucheF").disabled = true;
    lettreTestee();
}

function G() {
    lettre = "G";
    document.getElementById("toucheG").disabled = true;
    lettreTestee();
}

function H() {
    lettre = "H";
    document.getElementById("toucheH").disabled = true;
    lettreTestee();
}

function I() {
    lettre = "I";
    document.getElementById("toucheI").disabled = true;
    lettreTestee();
}

function J() {
    lettre = "J";
    document.getElementById("toucheJ").disabled = true;
    lettreTestee();
}

function K() {
    lettre = "K";
    document.getElementById("toucheK").disabled = true;
    lettreTestee();
}

function L() {
    lettre = "L";
    document.getElementById("toucheL").disabled = true;
    lettreTestee();
}

function M() {
    lettre = "M";
    document.getElementById("toucheM").disabled = true;
    lettreTestee();
}

function N() {
    lettre = "N";
    document.getElementById("toucheN").disabled = true;
    lettreTestee();
}

function O() {
    lettre = "O";
    document.getElementById("toucheO").disabled = true;
    lettreTestee();
}

function P() {
    lettre = "P";
    document.getElementById("toucheP").disabled = true;
    lettreTestee();
}

function Q() {
    lettre = "Q";
    document.getElementById("toucheQ").disabled = true;
    lettreTestee();
}

function R() {
    lettre = "R";
    document.getElementById("toucheR").disabled = true;
    lettreTestee();
}

function S() {
    lettre = "S";
    document.getElementById("toucheS").disabled = true;
    lettreTestee();
}

function T() {
    lettre = "T";
    document.getElementById("toucheT").disabled = true;
    lettreTestee();
}

function U() {
    lettre = "U";
    document.getElementById("toucheU").disabled = true;
    lettreTestee();
}

function V() {
    lettre = "V";
    document.getElementById("toucheV").disabled = true;
    lettreTestee();
}

function W() {
    lettre = "W";
    document.getElementById("toucheW").disabled = true;
    lettreTestee();
}

function X() {
    lettre = "X";
    document.getElementById("toucheX").disabled = true;
    lettreTestee();
}

function Y() {
    lettre = "Y";
    document.getElementById("toucheY").disabled = true;
    lettreTestee();
}

function Z() {
    lettre = "Z";
    document.getElementById("toucheZ").disabled = true;
    lettreTestee();
}

function clavierActif() {
    document.getElementById("toucheA").disabled = false;
    document.getElementById("toucheB").disabled = false;
    document.getElementById("toucheC").disabled = false;
    document.getElementById("toucheD").disabled = false;
    document.getElementById("toucheE").disabled = false;
    document.getElementById("toucheF").disabled = false;
    document.getElementById("toucheG").disabled = false;
    document.getElementById("toucheH").disabled = false;
    document.getElementById("toucheI").disabled = false;
    document.getElementById("toucheJ").disabled = false;
    document.getElementById("toucheK").disabled = false;
    document.getElementById("toucheL").disabled = false;
    document.getElementById("toucheM").disabled = false;
    document.getElementById("toucheN").disabled = false;
    document.getElementById("toucheO").disabled = false;
    document.getElementById("toucheP").disabled = false;
    document.getElementById("toucheQ").disabled = false;
    document.getElementById("toucheR").disabled = false;
    document.getElementById("toucheS").disabled = false;
    document.getElementById("toucheT").disabled = false;
    document.getElementById("toucheU").disabled = false;
    document.getElementById("toucheV").disabled = false;
    document.getElementById("toucheW").disabled = false;
    document.getElementById("toucheX").disabled = false;
    document.getElementById("toucheY").disabled = false;
    document.getElementById("toucheZ").disabled = false;
    document.getElementById("NouvellePartie").disabled = true;
}

function clavierInactif() {
    document.getElementById("toucheA").disabled = true;
    document.getElementById("toucheB").disabled = true;
    document.getElementById("toucheC").disabled = true;
    document.getElementById("toucheD").disabled = true;
    document.getElementById("toucheE").disabled = true;
    document.getElementById("toucheF").disabled = true;
    document.getElementById("toucheG").disabled = true;
    document.getElementById("toucheH").disabled = true;
    document.getElementById("toucheI").disabled = true;
    document.getElementById("toucheJ").disabled = true;
    document.getElementById("toucheK").disabled = true;
    document.getElementById("toucheL").disabled = true;
    document.getElementById("toucheM").disabled = true;
    document.getElementById("toucheN").disabled = true;
    document.getElementById("toucheO").disabled = true;
    document.getElementById("toucheP").disabled = true;
    document.getElementById("toucheQ").disabled = true;
    document.getElementById("toucheR").disabled = true;
    document.getElementById("toucheS").disabled = true;
    document.getElementById("toucheT").disabled = true;
    document.getElementById("toucheU").disabled = true;
    document.getElementById("toucheV").disabled = true;
    document.getElementById("toucheW").disabled = true;
    document.getElementById("toucheX").disabled = true;
    document.getElementById("toucheY").disabled = true;
    document.getElementById("toucheZ").disabled = true;
    document.getElementById("NouvellePartie").disabled = false;
}

// Code pour mise en plein écran du jeu
if (!Element.prototype.requestFullscreen) {
	Element.prototype.requestFullscreen = Element.prototype.mozRequestFullscreen || Element.prototype.webkitRequestFullscreen || Element.prototype.msRequestFullscreen;
}

if (!document.exitFullscreen) {
	document.exitFullscreen = document.mozExitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
}

if (!document.fullscreenElement) {

	Object.defineProperty(document, 'fullscreenElement', {
		get: function() {
			return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
		}
	});
	Object.defineProperty(document, 'fullscreenEnabled', {
		get: function() {
			return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled;
		}
	});
}

function pleinEcran(){
    if (document.fullscreenElement) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
	}
}