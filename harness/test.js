var i = 0;
function test(id){
    var s = "This is fun fact #" + i;
    i+=1;
    var popup = chrome.extension.getViews({type: "popup"})[0];
    popup.add_to_id(id,s);
}
