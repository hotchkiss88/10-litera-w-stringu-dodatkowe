let one = "Szkoła Programowania Akademia 108";
let two = "a";



function stringCount(txt) {
  
  var storage = [];
 
  if (typeof txt === "string") {
    storage = txt.toLowerCase().split('');
  }
  let score = [];
  for (i = 0; i < storage.length; i++) {
    score = storage.filter(element => element === two);

  }

  console.log("Litera \"a\" wystąpiła " +
    score.length + " razy");
}

stringCount(one);