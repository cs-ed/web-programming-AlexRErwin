const quote_collection = [ "first option" , "second option", "third option" ];

function getNewOption() {
  let random_num
  do{
    random_num = Math.floor(Math.random() * quote_collection.length);
  console.log("Generated random number: " + random_num + "which is quote " + quote_collection[random_num]);} 
  while( quote_collection[random_num] == document.getElementById("quote_space").innerHTML );
    document.getElementById("quote_space").innerHTML = quote_collection[random_num];
};

window.onload = function() {
getNewOption();
};

document.getElementById("new_option").addEventListener("click", getNewOption);

