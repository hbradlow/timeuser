function add_to_id(id,s){
    $(id).html(s);
}
var background = chrome.extension.getBackgroundPage();
$(function(){
    var randomNumber = Math.random();
    if (randomNumber < 0.5) {
    	background.retrieve_fun_fact("#container");
    }
    else {
    	background.pacman("#container");
    }

});
