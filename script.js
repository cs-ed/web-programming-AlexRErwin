const quote_collection = [ "first option" , "second option", "third option" ];

function getNewOption() {
  let random_num = Math.floor(Math.random() * quote_collection.length);
  document.getElementById("quote_space").innerHTML = quote_collection[random_num];
};

window.onload = function() {
getNewOption();
};

document.getElementById("new_option").addEventListener("click", getNewOption);

