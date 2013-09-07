function add_to_id(id,s){
    $(id).html(s);
}
var background = chrome.extension.getBackgroundPage();
$(function(){
    background.test("#container");
});
