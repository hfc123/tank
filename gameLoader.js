// 游戏入口
var pasue = false;
var tanks = [];
var tanknum = 20;
var bullets = [];
var bonuses = [];
var tankid = 1;
var life = 4;
var homechanged = false;
var playertype = 0;
var logic = function() {
	if(homechanged) {
		homenum--
		if(homenum == 0) {
			homechanged = false;
			changeHome2();
			homenum = 2000;
		}
	}
	//draw保护罩
	if(baohuzhao) {
		drawbaohuzhao();
	}
	//炸掉全部
	if(boomall1){
		boomall();
	}
	if(tanks.length < 6) {
		if(tanknum > 0) {
			tankid++;
			var num = parseInt(Math.random() * 8 + 1)
			var enemytank = new EnemyTank1(num, tankid);
			if(enemytank.born) {
				tanks[tanks.length] = enemytank;
			}
		}
	}
	for(var i = 0; i < bonuses.length; i++) {
		if(bonuses[i].die) {
			bonuses.splice(i, 1)
		}
		bonuses[i].drawbonus();
		var bonus1 = 0 < bonuses[i].x + 32 - player.x && bonuses[i].x + 32 - player.x < 32
		var bonus2 = 0 < bonuses[i].y + 20 - player.y && bonuses[i].y + 20 - player.y < 32
		console.log(bonus1 + "," + bonus2 + "77777")
		if(bonus1 && bonus2) {

			bonuses[i].die = true
			ctx.misc.clearRect(35 + bonuses[i].x, 20 + bonuses[i].y, 32, 32)
			switch(bonuses[i].iType) {

				case 0:
				oAud.eat.play();
					homechanged = true;
					changeHome1()
					break;
				case 1:
				oAud.eat.play();
					playertype++;
					if(playertype < 4) {
						player.positionimg[0] = playertype * 32
						player.type1=playertype+1;
					}
					break;

				case 2:
				oAud.life.play();
					life++;
					break;

				case 3:
					baohuzhao = true;
					break;
				//爆炸
				case 4:
				oAud.bomb.play();
				boomall1=true;
					break;
				//暂停
				case 5:
				
					break;
			}
			bonuses.splice(i, 1)
		}
	}
	//绘制tank
	for(var i = 0; i < tanks.length; i++) {
		tanks[i].drawEnemy();
	}
	for(var i = 0; i < bullets.length; i++) {
		if(bullets[i].die) {
			bullets.splice(i, 1)
			return;
		}
		//子弹间的碰撞
		if(bullets[i].bulletx == player.bullet.bulletx && bullets[i].bullety == player.bullet.bullety) {
			bullets[i].die = true;
			player.bullet.die = true;
			bullets.splice(i, 1);
			return;
		}
		//子弹与player的碰撞
		var b1 = (bullets[i].bulletx < (player.x + 32));
		var b2 = (bullets[i].bullety < (player.y + 32));
		var b3 = (bullets[i].bulletx > (player.x))
		var b4 = (bullets[i].bullety > (player.y))
		if(b1 && b2 && b3 && b4) {
			//我方死亡
				oAud.explode.play();
			player.positionimg[0] = 0;
			bullets[i].tankboom = true;
			bullets[i].die = true;
			bullets.splice(i, 1);
			player.die = true;
			player.x = 32 * 5 - 16;
			player.y = 32 * 12;
		}
	}
	//bonus和player的碰撞

	//子弹和敌人的碰撞
	for(var i = 0; i < tanks.length; i++) {
		if(player.bullet.die) {
			return
		}
		var a3 = (player.bullet.bulletx < (tanks[i].x + 32));
		var a4 = (player.bullet.bulletx > (tanks[i].x));
		var a5 = (player.bullet.bullety < (tanks[i].y + 32));
		var a6 = (player.bullet.bullety > (tanks[i].y));

		if(a3 && a4 && a5 && a6) {
			if(tanks[i].type1 == 2 || tanks[i].type1 == 4 || tanks[i].type1 == 6 || tanks[i].type1 == 10) {
				//显示bonus
				console.log("bonus1111")
				var bonus1 = new Bonus();
				bonuses[bonuses.length] = bonus1;
			}
			tanknum--;
			console.log(123)
			oAud.explode.play();
			player.bullet.die = true;
			player.bullet.tankboom = true;
			tanks.splice(i, 1);
		}
	}
}
window.onload = function() {
	oAud.start.play();
	//setInterval(function(){
	/*	//oAud.start.play();
	},5000);*/
	keybind();
	drawmap();
	var requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();
	var a = 0;

	drawgamemap();
	/*changeHome1()
	changeHome2()*/
	function gameLoop() {
		if(pasue) {

		} else {
			// 循环执行函数
			a++;
			var b = a % 2;
			ctx.role.clearRect(0, 0, 417, 417)
			logic();
			player.drawplayer()
			/*ctx.role.drawImage(oImg.enemyTank, 0, 32*b, 32, 32, 0, a, 32, 32);*/

		}
		//ctx.role.drawImage(oImg.brick, 32 , 0 , 32, 32, 35+32*0, 20+32*1, 32, 32);

		requestAnimFrame(gameLoop);
	}
	gameLoop();

}
var homenum = 2000;

function changeHome1() {
	/*  ctx.bg.drawImage(oImg.brick,32*3,0,32*5,32*12,32,32)
				ctx.bg.drawImage(oImg.brick,32*3,0,32*7,32*12,32,32)
				ctx.bg.drawImage(oImg.brick,32*17,0,32*5,32*11,32,32)
				ctx.bg.drawImage(oImg.brick,32*18,0,32*7,32*11,32,32)
				ctx.bg.drawImage(oImg.brick,32*4,0,32*6,32*11,32,32)
				roadMap[11][25]=0
				roadMap[11][24]=0
				roadMap[11][23]=0
				roadMap[12][23]=0
				roadMap[13][23]=0
				roadMap[14][23]=0
				roadMap[14][25]=0
				roadMap[14][24]=0	*/
	ctx.bg.clearRect(32 * 5 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.clearRect(32 * 7 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.clearRect(32 * 5 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.clearRect(32 * 7 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.clearRect(32 * 6 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 8, 0, 32, 32, 32 * 5 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 10, 0, 32, 32, 32 * 7 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 20, 0, 32, 32, 32 * 5 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 19, 0, 32, 32, 32 * 7 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 9, 0, 32, 32, 32 * 6 + 32, 32 * 11 + 20, 32, 32)

	roadMap[25][11] = 2
	roadMap[24][11] = 2
	roadMap[23][11] = 2
	roadMap[23][12] = 2
	roadMap[23][13] = 2
	roadMap[23][14] = 2
	roadMap[25][14] = 2
	roadMap[24][14] = 2
}

function changeHome2() {
	/*  ctx.bg.drawImage(oImg.brick,32*3,0,32*5,32*12,32,32)
				ctx.bg.drawImage(oImg.brick,32*3,0,32*7,32*12,32,32)
				ctx.bg.drawImage(oImg.brick,32*17,0,32*5,32*11,32,32)
				ctx.bg.drawImage(oImg.brick,32*18,0,32*7,32*11,32,32)
				ctx.bg.drawImage(oImg.brick,32*4,0,32*6,32*11,32,32)
				roadMap[11][25]=0
				roadMap[11][24]=0
				roadMap[11][23]=0
				roadMap[12][23]=0
				roadMap[13][23]=0
				roadMap[14][23]=0
				roadMap[14][25]=0
				roadMap[14][24]=0	*/
	ctx.bg.clearRect(32 * 5 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.clearRect(32 * 7 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.clearRect(32 * 5 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.clearRect(32 * 7 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.clearRect(32 * 6 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 3, 0, 32, 32, 32 * 5 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 5, 0, 32, 32, 32 * 7 + 32, 32 * 12 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 18, 0, 32, 32, 32 * 5 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 17, 0, 32, 32, 32 * 7 + 32, 32 * 11 + 20, 32, 32)
	ctx.bg.drawImage(oImg.brick, 32 * 4, 0, 32, 32, 32 * 6 + 32, 32 * 11 + 20, 32, 32)

	roadMap[25][11] = 1
	roadMap[24][11] = 1
	roadMap[23][11] = 1
	roadMap[23][12] = 1
	roadMap[23][13] = 1
	roadMap[23][14] = 1
	roadMap[25][14] = 1
	roadMap[24][14] = 1
}
var baohuzhaonum = 1000;
var baohuzhao = false;
var baohuzhaochange = 10;

function drawbaohuzhao() {
	baohuzhaonum--;
	baohuzhaochange--;
	if(baohuzhaochange == 0) {
		baohuzhaochange = 10
	}
	if(baohuzhaonum == 0) {
		baohuzhaonum = 1000;
		baohuzhao = false;
	}
	if(baohuzhaochange > 5) {
		ctx.role.clearRect(player.x, player.y, 32, 32);
		ctx.role.drawImage(oImg.misc, 32, 0, 32, 32, player.x, player.y, 32, 32)
	} else {
		ctx.role.clearRect(player.x, player.y, 32, 32);
		ctx.role.drawImage(oImg.misc, 32 * 2, 0, 32, 32, player.x, player.y, 32, 32)
	}

}
var boomallnum=15;
var boomall1=false;
function boomall(){
	boomallnum--;
	
	for (var i = 0; i < tanks.length; i++) {
		if(boomallnum>7){
			ctx.role.drawImage(oImg.boom,64*3,0,64,64,tanks[i].x, tanks[i].y, 64, 64)
		}else{
		ctx.role.drawImage(oImg.boom,64*4,0,64,64,tanks[i].x, tanks[i].y, 64, 64)	
		}
	
	}
	if(boomallnum==0){
		boomallnum=15;
		tanks.splice(0,tanks.length);
		tanknum=tanknum-tanks.length;
		boomall1=false
	}
		
		
}
