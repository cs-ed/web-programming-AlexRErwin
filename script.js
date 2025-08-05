window.onload = function() {
  const quote_collection = [ "first option" , "second option", "third option" ];
  let random_num = Math.floor(Math.random() * quote_collection.length);
  /*
  console.log(random_num);
  console.log(quote_collection[random_num]);
  */
  document.getElementById("quote_space").innerHTML = quote_collection[random_num];

};

document.getElementById("new_option").addEventListener("click", function()) {
  console.log("Requesting new option...");
};