var player=new playerTank(1);
function playerTank(type){
	
	
	//上 右 下 左
    this.type1=type;
	this.positionimg=[];//上 右 下 左
	this.x=32*5-16;
	this.y=32*12;
	this.die=false;
	this.xunhuannum=10;
	this.duraction1 = 0;//方向：上0下1左2右三 
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
	this.drawplayer=function (){


		//this.xunhuannum=delay(this.xunhuannum,10,this.move);
		this.xunhuannum=this.xunhuannum-1;
		if(this.xunhuannum==0){
			 
			this.xunhuannum=10
		}
if(this.bullet!=1){
			this.bullet.drawbullet();
		}
		//方向：上0下1左2右三//方向：上0下1左2右三 this.bulletduraction1;//0上1右2下3左
		if(this.duraction1==0){
			//上 右 下 左
			this.changewheel(); 
			ctx.role.drawImage(oImg.myTank, this.positionimg[0], this.positionimg[1+this.changewheel1], 32, 32,this.x, this.y, 32, 32);
		} 
		if(this.duraction1==1){
			//上 右 下 左
			this.changewheel(); 
	//console.log(this.positionimg[5+this.changewheel1])
			ctx.role.drawImage(oImg.myTank, this.positionimg[0], this.positionimg[5+this.changewheel1], 32, 32, this.x, this.y, 32, 32);
		}
		if(this.duraction1==2){
			//上 右 下 左
		this.changewheel(); 
			ctx.role.drawImage(oImg.myTank, this.positionimg[0], this.positionimg[7+this.changewheel1], 32, 32, this.x, this.y, 32, 32);
		}
		if(this.duraction1==3){
			//上 右 下 左
		this.changewheel(); 
			ctx.role.drawImage(oImg.myTank, this.positionimg[0], this.positionimg[3+this.changewheel1], 32, 32, this.x, this.y,32, 32);
		}
		
	}
	this.move= function (duraction2){
		//一次移动16px//方向：上0下1左2右三
		this.duraction1=duraction2;
		switch(duraction2){
			case 0:
			if( this.y-8<0||canmoveable(this.x,this.y-8)==1  ){/*
					console.log(canmoveable(this.x-8,this.y)+"a")
				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			*/}else{
				this.y=this.y-8;
				
			}
			break;
			case 1:
			if(this.y+8>390 ||canmoveable(this.x,this.y+8)==1 ){/*
					console.log(canmoveable(this.x-8,this.y)+"a")
				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			*/}else{
				this.y=this.y+8
			}
			break;
			case 2:
			if(this.x-8<0||canmoveable(this.x-8,this.y)==1 ){/*
					console.log(canmoveable(this.x-8,this.y)+"a")
				var a=parseInt(Math.random()*4)
				this.duraction1=a;
			*/}else{
				this.x=this.x-8;
			}
			break;
			case 3:
			if(this.x+8>390||canmoveable(this.x+8,this.y)==1 ){/*
					console.log(canmoveable(this.x-8,this.y)+"a")
			var a=parseInt(Math.random()*4)
				this.duraction1=a;
			*/}else{
				
				this.x=this.x+8;
			}
			break;
			
		}
	}
	function canmoveable(x,y){ 
		var a1=parseInt(x/16);
		var b1=parseInt(y/16);
		var a2=parseInt((x+31)/16);
		var b2=parseInt((y+31)/16);

		var a3=parseInt((x+31)/16);
		var b3=parseInt(y/16);
		var a4=parseInt(x/16);
		var b4=parseInt((y+31)/16);
		

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
