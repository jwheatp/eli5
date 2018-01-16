// Array.prototype.random = function () {
//   return this[Math.floor((Math.random()*this.length))];
// }

var notions = [
  "Variable & Tableau-Array",
  "Fonction",
  "Argument",
  "Booléen",
  "String",
  "Condition If, Then, Else",
  "= vs ==",
  "Boucle For et While",
  "Object JS",
  "DOM"
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

  if(document.getElementById("list")) {
    document.getElementById('main').innerHTML = "<h1 id='notion'></h1>";
  }

  document.getElementById('notion').innerHTML = print;
}

document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode == 13 || e.keyCode == 32) {
      printNotion();
    }
};

function init() {
  var ul = document.getElementById("list");

  for( var i = 0; i < notions.length; i++ )
  {
    o = notions[i];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Groupe " + i + " : " + o));
    ul.appendChild(li);
  }
}

init();
