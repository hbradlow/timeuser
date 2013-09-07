function add_to_id(id,s){
    $(id).html(s);
}
$(function(){
    var background = chrome.extension.getBackgroundPage();
    var randomNumber = Math.random();
    var container = "<div id='container' style='background:black;height:50px;width:50px;position:fixed;top:300px;left:300px;'></div>";
    $("body").append(container);
    if (randomNumber < 0.5) {
    	background.retrieve_fun_fact("#container");
    }
    else {
    	background.pacman("#container");
    }
});
