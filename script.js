const quote_collection = [ "first option" , "second option", "third option" ];

function getNewOption() {
  let random_num

do{
  random_num = Math.floor(Math.random() * quote_collection.length);
  console.log("Generated random number: " + random_num + " which is quote " + quote_collection[random_num]);} 
while( quote_collection[random_num] == document.getElementById("quote_space").innerHTML );
document.getElementById("quote_space").innerHTML = quote_collection[random_num];
};

window.onload = function() {
  /*
  for(let index = 0;index < quote_collection.length; index++) {    
    console.log("Option at location " + index + " is: " + quote_collection[index]);
  }
    */
  for(let option of quote_collection) {
    console.log("Option is: " + option);
  getNewOption();
   };
};

document.getElementById("new_option").addEventListener("click", getNewOption);

document.getElementById("add_goal").addEventListener("click", function() {
  const input_length = document.getElementById("goal_input").value.length;
  if( input_length >= 10) {
    const goal_block = document.createElement("div");
    goal_block.className = "outcome_blocks";
    goal_block.innerHTML = document.getElementById("goal_input").value;
    document.getElementById("my_goals").appendChild(goal_block);
    document.getElementById("goal_error").innerHTML = "";
    document.getElementById("goal_input").value = "";
  }else if(input_length < 10 && input_length > 0 ){
    document.getElementById("goal_error").innerHTML = "Please enter a goal of at least 10 characters.";
  }else{
    document.getElementById("goal_error").innerHTML = "Please enter a goal before adding.";
  }
});