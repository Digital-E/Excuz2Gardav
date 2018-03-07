
var button = document.querySelector('.generate-button');
var resultField = document.querySelector('.result-field');
var ammorce = ['Wallah kestu raconte,', 'Frère...,', 'Sale loco,', 'Ta grande-daronne la chauve,', 'Sale BACeu,'];
var nom = ['ta daronne' , 'ta soeur', 'ta fille', 'ton daron', 'ton grand-daron', 'ton collègue', 'l\'inspecteur']
var lieu = ['au quartier', 'à la chicha', 'à Footlocker', 'au tertus', 'au ter-ter', 'en Espagne', 'à Miami', 'chez Philippe Plein', 'au grec']
var etat = ['en Y', 'en bédave', 'en claquettes-chaussettes', 'en T-Max', 'TN-Costla', 'en train 2 casser un tête']

// function Stringlength(){
//
// }

function random(string) {
  var stringLength = string.length;
  var randomIndex = Math.floor(Math.random()*Math.floor(stringLength));
  return string[randomIndex]

}

button.addEventListener('click', function(){
  resultField.innerHTML = ('\''+ random(ammorce) +' j\'étais '+ random(etat) +' '+ random(lieu) +' avec '+ random(nom) +'\'' );
})
