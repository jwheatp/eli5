// Array.prototype.random = function () {
//   return this[Math.floor((Math.random()*this.length))];
// }

var notions = [
  "Variable",
  "Fonction",
  "Argument",
  "Booléen",
  "String",
  "Tableau / Array",
  "Condition If",
  "Opérateurs",
  "= vs ==",
  "Boucle",
  "Algorithme",
  "Evénement JS",
  "Object JS/JSON",
  "Console JS",
  "jQuery",
  "DOM",
  "Callback JS"
]

var index = 0;

function printNotion() {
  if(index >= notions.length) {
    print = `<img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif">`;
  }
  else {
    print = notions[index];
    index = index + 1;
  }

  document.getElementById('notion').classList.remove("consigne");
  document.getElementById('notion').innerHTML = print;
}

document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode == 13 || e.keyCode == 32) {
      printNotion();
    }
};
