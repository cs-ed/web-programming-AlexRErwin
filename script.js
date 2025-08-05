window.onload = function() {
  //alert("script.js has loaded!");
  const quote_collection = [ "first option" , "second option", "third option" ];
  let random_num = Math.floor(Math.random() * 10);
  document.getElementById("quote_space").innerHTML = quote_collection[random_num];

};