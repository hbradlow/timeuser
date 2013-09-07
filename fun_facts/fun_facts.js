var fun_fact_queue = [];

function retrieve_fun_fact(id) {
    var popup = chrome.extension.getViews({type: "popup"})[0];
    if (fun_fact_queue.length == 0) {
        var reddit_str = "";
        $.get("http://www.reddit.com/r/todayilearned/top.json?limit=50", function(data) {
            var reddit_arr = data.data.children;
            var reddit_arr_length = reddit_arr.length;
            for (var i = 0; i < reddit_arr_length; i++) {
                fun_fact_queue.push(reddit_arr[i].data.title);
            }
            popup.add_to_id(id, fun_fact_queue.pop());
        });
    } else {
        popup.add_to_id(id, fun_fact_queue.pop());
    }
}
