//calculate the rendered width and height of the rendered Zebra and print it's area
var zebra = document.getElementById('zebra');
var zebraWidth = zebra.offsetWidth;
var zebraHeight = zebra.offsetHeight;
var zebraArea = zebraWidth * zebraHeight;
//calculate the rendered width and height of the rendered aardvark and print it's area
var aardvark = document.getElementById('aardvark');
var aardvarkWidth = aardvark.offsetWidth;
var aardvarkHeight = aardvark.offsetHeight;
var aardvarkArea = aardvarkWidth * aardvarkHeight;
//calculate the rendered width and height of the rendered Cow and print it's area
var cow = document.getElementById('cow');
var cowWidth = cow.offsetWidth;
var cowHeight = cow.offsetHeight;
var cowArea = cowWidth * cowHeight;
//calculate the rendered width and height of the rendered pushmepullyou and print it's area
var pushmepullyou = document.getElementById('pushmepullyou');
var pushmepullyouWidth = pushmepullyou.offsetWidth;
var pushmepullyouHeight = pushmepullyou.offsetHeight;
var pushmepullyouArea = pushmepullyouWidth * pushmepullyouHeight;
//calculate the rendered width and height of the rendered hippopotamus and print it's area
var hippopotamus = document.getElementById('hippopotamus');
var hippopotamusWidth = hippopotamus.offsetWidth;
var hippopotamusHeight = hippopotamus.offsetHeight;
var hippopotamusArea = hippopotamusWidth * hippopotamusHeight;
//print Area's in order of size
document.write('Cow area: '+cowArea+'px<br>');
document.write('Hippopotamus area: '+hippopotamusArea+'px<br>');
document.write('Pushmepullyou area: '+pushmepullyouArea+'px<br>');
document.write('Zebra area: '+zebraArea+'px<br>');
document.write('Aardvark area: '+aardvarkArea+'px<br>');
// resort list in alphabetical order
var list = document.getElementsByClassName('animals');

var items = list.childNodes;
var itemsArr = [];
for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
    }
}

itemsArr.sort(function(a, b) {
  return a.innerHTML == b.innerHTML
          ? 0
          : (a.innerHTML > b.innerHTML ? 1 : -1);
});

for (i = 0; i < itemsArr.length; ++i) {
  list.appendChild(itemsArr[i]);
}