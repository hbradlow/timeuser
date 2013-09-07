var i = 0;
function test(id){
    // var s = "This is fun fact #" + i;
	// i+=1;
    var pacman = " \
		<canvas id='myCanvas' width='510' height='510'> \
        </canvas> \
        <script type='text/javascript' src='../games/Javascript-Pacman/Pacman.js'></script> \
        <script type='text/javascript' src='../games/Javascript-Pacman/Ghost.js'></script> \
        <script type='text/javascript' src='../games/Javascript-Pacman/Grid.js'></script> \
        <script type='text/javascript' src='../games/Javascript-Pacman/Game.js'></script>";
    var popup = chrome.extension.getViews({type: "popup"})[0];
    popup.add_to_id(id,pacman);
}
