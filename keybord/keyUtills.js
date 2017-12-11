//H:72 j:74 w:87 s:83 a:65 d:68

function keybind(){
	
	addEventListener("keydown",function(ev){
		// 禁止btn上的click事件
			//ev.preventDefault();
		    keyCode = ev.keyCode;	
		    switch(keyCode){
		    	case 72:
		    	gamestartorpause();
		    	break;
		    	case 74:
		    	shoot();
		    	break;
		    	case 87:
		    	moveup();
		    	break;
		    	case 83:
		    	movedown();
		    	break;
		    	case 65:
		    	moveleft();
		    	break;
		    	case 68:
		    	moveright();
		    	break;	
		    }
		   
	}) 
	
}

function movedown(){
	console.log('down')
	player.move(1);
	
}
//上0下1左2右三 
function moveup(){
	console.log('up')
	player.move(0);
}

function moveright(){
	console.log('right')
	player.move(3);
}

function moveleft(){
	console.log('left')
	player.move(2);
}

function gamestartorpause(){
	console.log(72)
	if(pasue==false){
		oAud.pause.play();
		 pasue=true;
	}else{
		oAud.pause.play()
		pasue=false;
	}
   
}

function shoot(){
	console.log('j')
	if(player.bullet==1){
		oAud.att.play();
		player.shoot();
	}else if(player.bullet.die){
		oAud.att.play();
		player.shoot();
	}
	
}
