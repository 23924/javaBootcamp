// vraag 1 t/m 5
var myVariable;

var vehicle = "car", car = "renault", type = "twingo";

var var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14, var15, var16;

var1 = "string1"; var2 = "string2"; var3 = "string3"; var4 = "string4";
var5 = "string5"; var6 = "string6"; var7 = "string7";

var8 = 8, var9 = 9, var10 = 10, var11 = 11, var12 = 12, var13 = 13, var14 = 14;

var15 = false, var16 = true;

var6 = "newValueString6";
var13 = "1300";

// vraag 6 (introspection1)
console.log("VRAAG 6");

console.log(typeof(var8 - 16));
console.log(typeof(var13));

// vraag 7 (coercion)
console.log("--------------");
console.log("VRAAG 7");

console.log("")
console.log( var8 + var9 ); // 7.1
console.log( var1 + var8 ); // 7.2
console.log(var14 + var16 ); // 7.3 (bool (true) wordt cijfer 1 dus 14+1)
console.log( var1 + var16 ); // 7.4 (bool wordt string)
console.log(var13 + var10 ); // 7.5 (string number wordt er achter geplakt)
console.log(var10 + var13 ); // 7.6 (string number wordt er achter geplakt)

// vraag 8 (introspection2)
console.log("--------------");
console.log("VRAAG 8");

console.log("");
console.log(typeof(var10 + var13));
console.log(typeof(var13 + var10));

// vraag 9
console.log("--------------");
console.log("VRAAG 9");

function addNumbers(int1, int2){
  return int1 + int2;
}
console.log("");
console.log(addNumbers(100, 50));
function times2minus20(int1){
  return int1 * 2 - 20;
}
console.log(times2minus20(12)); // wordt als het klopt 4

// vraag 10
console.log("--------------");
console.log("VRAAG 10");

console.log("");
var functie1 = function(int1, int2) { return int1 - int2; }
console.log(functie1(16, 13));
var functie2 = function(int1, int2) { return int1 + int2; }
console.log(functie2(16, 13));
console.log("");

/* Het verschil tussen function declaration (bij vraag 9) en
   function expression (bij vraag 10) is dat function decla-
   ration bij het laden van de pagina al wordt geladen, exp-
   ression pas als hij wordt gebruikt */

// vraag 11
var anonymousAddNumbers = function (x, y){return x + y};
var anonymousSubtractNumbers = function (x, y){return x - y};

// vraag 12 (IIFE, functie die direct wordt uitgevoerd)
!function () {window.alert("hello world");} ();

// vraag 13 (closures)
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

// vraag 14
console.log("--------------");
console.log("VRAAG 14");

var favRapper = "Witt Lowry";
function showFavRapper(a){
  favRapper = "MGK"
  console.log(a);
}
showFavRapper(favRapper);

// vraag 15 (arrays)
console.log("--------------");
console.log("VRAAG 15");

var carsArray = ["BMW", "Volvo", "Renault"];
var rappersArray = ["MGK", "Witt Lowry", "Hopsin"];
var numbersArray = [17, 579, 5];
console.log("");
console.log(carsArray.length);
console.log(rappersArray.length);
console.log(numbersArray.length);

// vraag 16 (push array)
console.log("--------------");
console.log("VRAAG 16");

var arrayVraag16 = [];
arrayVraag16.push("Hello World");
console.log("");
console.log(arrayVraag16);
console.log("");

// vraag 17 (slice array)
console.log("--------------");
console.log("VRAAG 17");

var arrayVraag17 = ["Witt Lowry", "MGK", "Eminem", "Hopsin", "Loui", "Willis", "Deandra", "Paula"];
console.log(arrayVraag17);
arrayVraag17.splice(0,1);
arrayVraag17.splice(1,1);
console.log(arrayVraag17);
console.log("");

// vraag 18 (pop)
console.log("--------------");
console.log("VRAAG 18");

arrayVraag17.pop(); // verwijderd laatste element
console.log(arrayVraag17);
console.log("");

// vraag 19 (shift)
console.log("--------------");
console.log("VRAAG 19");

arrayVraag17.shift(); // verwijderd eerste element
console.log(arrayVraag17);
console.log("");

// vraag 20
console.log("--------------");
console.log("VRAAG 20");

arrayVraag17.sort();
console.log(arrayVraag17);
arrayVraag17.reverse();
console.log(arrayVraag17);

// vraag 21
console.log("--------------");
console.log("VRAAG 21");

var arrayVraag21 = [6, 14, 2, 169];
arrayVraag21.sort();
console.log(arrayVraag21);

// vraag 22 (slice - copy part of array)
console.log("--------------");
console.log("VRAAG 22");

var arrayVraag22a = ["abaham", "adam", "willem", "eva", "joep", "klaas", "stan"];
var arrayVraag22b = arrayVraag22a.slice(1, 5);
console.log("");
console.log(arrayVraag22a);
console.log(arrayVraag22b);
arrayVraag22a[2] = "yara";
console.log(arrayVraag22a);
console.log(arrayVraag22b);

// vraag 23
console.log("--------------");
console.log("VRAAG 23");

var vraag23ArrayA = ["banaan", "appel", "ananas", "kiwi"];
var vraag23ArrayB = new Array(10);
console.log("");
console.log(vraag23ArrayA);
console.log(vraag23ArrayB);

// vraag 24
console.log("--------------");
console.log("VRAAG 24");
console.log("Zie pagina buttons");








// var test = [{name: 'Luc', age: 19}, {name:'Berend', age:34}];
// console.table(test);
