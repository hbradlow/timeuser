function pong(id){
    var s = "<canvas id='game'></canvas>" +
            "<script src='game.js' type='text/javascript'></script>" +
            "<script src='pong.js' type='text/javascript'></script>" +
            "<script src='activate.js' type='text/javascript'></script>";
    var popup = chrome.extension.getViews({type: "popup"})[0];
    popup.add_to_id(id,s);
}
