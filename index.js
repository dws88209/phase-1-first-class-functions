function receivesAFunction(water){
    water();
}
//recievesAFunction(function() { return "I am thirsty"});
function returnsANamedFunction(drink){
  return function drink(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}
