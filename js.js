/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


var toegevoegd = document.querySelectorAll("button.toevoegen");
console.log(toegevoegd); // Test debug

var melding = document.querySelector("header nav section");
var meldingText = document.querySelector("header nav section p");

for(var i=0; i< toegevoegd.length; i++){
    toegevoegd[i].addEventListener("click", toevoegen);
}

function toevoegen(e) {
    var verandering = 0;

    if (this.classList.contains('toegevoegd')) {
        // Verwijderen
        this.classList.remove('toegevoegd');
        verandering = -1;
    } else {
        // Toevoegen
        this.classList.add('toegevoegd');
        verandering = 1;
    }

    if (!melding.classList.contains('aan')) {
        melding.classList.add('aan');
    }

    meldingText.innerText = parseInt(meldingText.innerText) + verandering;

}

// leeslijst downloaden button //
var downloadCheck = document.querySelector('.switch [type=checkbox]');
var downloadText = document.querySelector('.download');
var verhalenOverzicht = document.querySelector('.schilderijen');

downloadCheck.addEventListener('change', downloaden); //functie wordt aangeroepen, trigger//

function downloaden(e) {

    downloadText.innerText = 'Wordt gedownload...'; //bezig met downloaden

    verhalenOverzicht.classList.add('downloading'); //verhalen hebben opacity

    setTimeout(function() {
        verhalenOverzicht.classList.remove('downloading');
        downloadText.innerText = 'Leeslijst is gedownload'; //klaar
    }, 3000)
}

// Animate On Scroll source: http://michalsnik.github.io/aos/
AOS.init({
 easing: 'ease-in-out',

});

