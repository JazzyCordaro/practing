console.log('inventory.js sourced')
//global vars
var inventory;
var selectedSize ='none';
var selectedColor = 'none';

var addItem= function(color, anme, size){
  console.log( 'adding item: ' + name + '' + color + '' + size );
}// end addItem

// var getSizeSelection = function(){
//   console.log('in getSizeSelection');
//   console.log('selected size:', document.getElementById('sizeIn').value);
// }//end getSizeSelection

var searchInventory = function() {
  console.log('in searchInventory');
  // get size from user
  selectedSize = document.getElementById('sizeIn').value;
  console.log('looking for something of size', selectedSize);
  //get color from user
  selectedColor = document.getElementById('colorIn').value;
  console.log('looking for something of color:', selectedColor);
  //chick if an item fits this description
}// end searchInventory



addItem( 'blue', 'Smurf', 'Small');
addItem( 'red' ,' Stop Sign', 'Large');
