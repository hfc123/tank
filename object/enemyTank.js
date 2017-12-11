function EnemyTank1(type,tankid){
	this.tankid=tankid;
	//上 右 下 左
    this.type1=type;
    this.born=true;
    this.born1=true;
    this.born2=true;
    this.born3=true;
    this.bornposition;
	this.positionimg=[];//上 右 下 左
	for (var i = 0; i < tanks.length; i++) {
		if(tanks[i].x<32&&tanks[i].y<32){
			 this.born1=false
		}
		 if(32*5<tanks[i].x&&tanks[i].x<32*7&&tanks[i].y<32){
			 	this.born2=false	
		}
		if(32*11<tanks[i].x&&tanks[i].x<32*13&&tanks[i].y<32){
			 	this.born3=false		
		}
	}
	this.x=0;
	if( this.born1){
		this.x=32*6*0;
	}
	if( this.born2){
		this.x=32*6*1;
	}
	if( this.born3){
		this.x=32*6*2;
	}
	console.log(this.born1+"，"+this.born2+"，"+this.born3)
	if(this.born1||this.born2||this.born3){
		this.born=true;
	}else{
		this.born=false;
	}
	
	this.y=0;
	this.xunhuannum=10;
	this.xunhuannum2=20;
	this.die=false
	this.duraction1 = 1;//方向：上0下1左2右三 
	switch(type){
		case 1:
		this.positionimg[0]=0;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);

		}
		break;
		case 2:
		this.positionimg[0]=32;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1); 
		}
		break;
		case 3:
		this.positionimg[0]=32*2;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 4:
		this.positionimg[0]=32*3;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 5:
		this.positionimg[0]=32*4;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 6:
		this.positionimg[0]=32*5;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 7:
		this.positionimg[0]=32*6;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 8:
		this.positionimg[0]=32*7;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 9:
		this.positionimg[0]=32*8;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		case 10:
		this.positionimg[0]=32*9;
		for(var i=1;i<9;i++){
			this.positionimg[i]=32*(i-1);
		}
		break;
		
	}
	this.changewheel1=0;
	this.changewheel2=5;
	this.changewheel=function (){
			this.changewheel2=this.changewheel2-1;
		if(this.changewheel2==0){
		  if(this.changewheel1==0){
			this.changewheel1=1; 
		}else{
			this.changewheel1=0;
		}
			this.changewheel2=5
		}
		
	
	//	console.log(this.changewheel1)
	}
	this.drawEnemy=function (){
		//this.xunhuannum=delay(this.xunhuannum,10,this.move);
		this.xunhuannum=this.xunhuannum-1;
		if(this.xunhuannum2!=0){
			this.xunhuannum2=this.xunhuannum2-1;
		}
			
		if(this.xunhuannum==0){
			this.xunhuannum=10
			if(this.xunhuannum2==0){
				this.move();
			}
			
		}
		if(this.bullet==1){
			this.shoot();
		}else if(this.bullet.boomed){
			this.shoottimes=this.shoottimes-1;
			if(this.shoottimes==0){
				this.shoot();
				this.shoottimes=15;
			}
			
		}
		if(this.bullet!=1){
			this.bullet.drawbullet();
		}

		//方向：上0下1左2右三//方向：上0下1左2右三 this.bulletduraction1;//0上1右2下3左
		if(this.duraction1==0){
			//上 右 下 左
			this.changewheel(); 
			if(this.xunhuannum2!=0){
		ctx.role.drawImage(oImg.bonus, 32*(this.changewheel1+1), 64, 32, 32,this.x, this.y, 32, 32);
		}else{
			ctx.role.drawImage(oImg.enemyTank, this.positionimg[0], this.positionimg[1+this.changewheel1], 32, 32,this.x, this.y, 32, 32);
		}
			
		} 
		if(this.duraction1==1){
			//上 右 下 左
			this.changewheel(); 
	//console.log(this.positionimg[5+this.changewheel1])
		if(this.xunhuannum2!=0){
		ctx.role.drawImage(oImg.bonus, 32*(this.changewheel1+1), 64, 32, 32,this.x, this.y, 32, 32);
		}else{
			ctx.role.drawImage(oImg.enemyTank, this.positionimg[0], this.positionimg[5+this.changewheel1], 32, 32, this.x, this.y, 32, 32);
		}}
		if(this.duraction1==2){
			//上 右 下 左
		this.changewheel(); 
			if(this.xunhuannum2!=0){
		ctx.role.drawImage(oImg.bonus, 32*(this.changewheel1+1), 64, 32, 32,this.x, this.y, 32, 32);
		}else{
			ctx.role.drawImage(oImg.enemyTank, this.positionimg[0], this.positionimg[7+this.changewheel1], 32, 32, this.x, this.y, 32, 32);
		}
		}
		if(this.duraction1==3){
			//上 右 下 左
		this.changewheel(); 
		if(this.xunhuannum2!=0){
		ctx.role.drawImage(oImg.bonus, 32*(this.changewheel1+1), 64, 32, 32,this.x, this.y, 32, 32);
		}else{
			ctx.role.drawImage(oImg.enemyTank, this.positionimg[0], this.positionimg[3+this.changewheel1], 32, 32, this.x, this.y,32, 32);
		}
		}
		
	}
	this.move= function (){
	
		//一次移动16px//方向：上0下1左2右三
		switch(this.duraction1){
			case 0:
			if( this.y-8<0||canmoveable(this.x,this.y-8,tankid)==1  ){

				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			}else{
				this.y=this.y-8;
				
			}
			break;
			case 1:
			if(this.y+8>390 ||canmoveable(this.x,this.y+8,this.tankid)==1 ){

				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			}else{
				this.y=this.y+8
			}
			break;
			case 2:
			if(this.x-8<0||canmoveable(this.x-8,this.y,this.tankid)==1 ){

				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			}else{
				this.x=this.x-8;
			}
			break;
			case 3:
			if(this.x+8>390||canmoveable(this.x+8,this.y,this.tankid)==1 ){

			var a=parseInt(Math.random()*4)
				this.duraction1=a;
			}else{
				
				this.x=this.x+8;
			}
			break;
			
		}
	}
	function canmoveable(x,y,tankid){ 
		var a1=parseInt(x/16);
		var b1=parseInt(y/16);
		var a2=parseInt((x+31)/16);
		var b2=parseInt((y+31)/16);

		var a3=parseInt((x+31)/16);
		var b3=parseInt(y/16);
		var a4=parseInt(x/16);
		var b4=parseInt((y+31)/16);
		for (var i = 0; i < tanks.length; i++) {
			
			if(tanks[i].tankid!=tankid){
			
				var n1=	Math.abs(x-tanks[i].x);
			
				var n2=Math.abs(y-tanks[i].y);
					
				if(n1<32&&n2<32){
						return 1;		
				}
			}
		}
			
		if(roadMap[b1][a1]==0&&roadMap[b2][a2]==0&&roadMap[b3][a3]==0&&roadMap[b4][a4]==0){
			return 0;
		}else{
			return 1;
		}
	}
	this.bullet=1;
	this.shoottimes=10;
	this.shoot=function(){
		//射击延时
	this.bullet=new bullet();
bullets[bullets.length]=this.bullet;
	    //方向：上0下1左2右三//方向：上0下1左2右三 this.bulletduraction1;//0上1右2下3左

	    if(this.duraction1==0){
	    	this.bullet.init(this.x+16-4,this.y,this.duraction1);
	    }else if(this.duraction1==1){
	    	this.bullet.init(this.x+16-4,this.y+32,2);
	    }else if(this.duraction1==2){
	    	this.bullet.init(this.x,this.y+16-4,3);
	    }else if(this.duraction1==3){
	    	this.bullet.init(this.x+32,this.y+16-4,1);
	    }
		
	}
	
}
