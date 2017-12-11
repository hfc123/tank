var gameover=false;
function bullet(){
	this.bulletx;
	this.bullety;
	this.bulletduraction1;//0上1右2下3左
	this.die=false;
	this.boomed=false;	
	this.boomedtimes=15;
	this.tankboom=false;
	this.init=function(x,y,bulletduraction){     
		this.bulletx=x;
		this.bullety=y;

		this.bulletduraction1=bulletduraction;
		
	}
	this.drawbullet=function(){
		if(this.boomed){
			return;
		}
		if(this.die){
			
		}else{
			this.bulletmove();
		}
		if(this.die){
			//通过老家结束
			if(gameover){
				
			this.boomedtimes--;
			if(this.boomedtimes>7){
					ctx.role.drawImage(oImg.boom,64*3,0,64,64,this.bulletx-30, this.bullety-16-16, 64, 64)
			}else{
				ctx.role.drawImage(oImg.boom,64*4,0,64,64,this.bulletx-30, this.bullety-16-16, 64, 64)
				if(this.boomedtimes==0){
					this.boomedtimes=15;
					oAud.over.play();
					this.boomed=true;
					ctx.bg.clearRect(32*6+32,32*12+20,32,32)
					/*ctx.bg.drawImage(oImg.brick,32*17,0,32,32,this.bulletx-30, this.bullety-16, 32, 32)*/
					  	ctx.bg.drawImage(oImg.brick,32*16,0,32,32,32*6+32,32*12+20, 32, 32)

				}
			}
			}else if (this.tankboom){
				
			this.boomedtimes--;
			if(this.boomedtimes>7){
					ctx.role.drawImage(oImg.boom,64*3,0,64,64,this.bulletx-30, this.bullety-16-16, 64, 64)
			}else{
				ctx.role.drawImage(oImg.boom,64*4,0,64,64,this.bulletx-30, this.bullety-16-16, 64, 64)
				if(this.boomedtimes==0){
					this.boomedtimes=15;
					this.boomed=true;
					ctx.bg.clearRect(32*6+32,32*12+20,32,32)
					/*ctx.bg.drawImage(oImg.brick,32*17,0,32,32,this.bulletx-30, this.bullety-16, 32, 32)*/
					  	ctx.bg.drawImage(oImg.brick,32*16,0,32,32,32*6+32,32*12+20, 32, 32)

				}
			}
			 
			}else{
			//smallboom
			this.boomedtimes--;
			if(this.boomedtimes>10){
			ctx.role.drawImage(oImg.boom,64*0,16,64,32,this.bulletx-30, this.bullety-16, 64, 32)
			}else if(this.boomedtimes>5){
				ctx.role.drawImage(oImg.boom,64*1,16,64,32,this.bulletx-30, this.bullety-16, 64, 32)
			}else{
				ctx.role.drawImage(oImg.boom,64*2,16,64,32,this.bulletx-30, this.bullety-16, 64, 32)
				if(this.boomedtimes==0){
					this.boomedtimes=15;
					this.boomed=true;
				}
			}
		}
		}else{
			ctx.role.drawImage(oImg.misc, this.bulletduraction1 * 8, 0, 8, 8, this.bulletx, this.bullety, 8, 8);
		}
		
	}
	this.bulletmove=function(){
		var a1=parseInt(this.bulletx/16);
		var b1=parseInt(this.bullety/16);		
		if(this.bulletx<0 || this.bulletx>417 ||this.bullety<0||this.bullety>417){
			this.die=true;
		} //0上1右2下3左
		//console.log(this.bulletduraction1)
		if(this.bulletduraction1==0){
			//console.log("00000")
			if(roadMap[b1][a1]==5 ||roadMap[b1][a1+1]==5){
				gameover=true;
			}
			if(roadMap[b1][a1]!=0 ||roadMap[b1][a1+1]!=0 ){
					this.die=true;
			}
			if(roadMap[b1][a1]==1){
				roadMap[b1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect(a1*16+35,b1*16+20+8,16 ,8)
			}else if(roadMap[b1][a1]==0.5){
				roadMap[b1][a1]=0;
				this.die=true;
				ctx.bg.clearRect(a1*16+35,b1*16+20,16 ,16)
			}
			if(roadMap[b1][a1+1]==1){
				roadMap[b1][a1+1]=0.5;
				this.die=true;
				ctx.bg.clearRect((a1+1)*16+35,b1*16+20+8,16,8)
			}else if(roadMap[b1][a1+1]==0.5){
				roadMap[b1][a1+1]=0;
				this.die=true;
				ctx.bg.clearRect((a1+1)*16+35,b1*16+20,16 ,16)
			} 
		}else if(this.bulletduraction1==2){
			if(roadMap[b1][a1]==5 ||roadMap[b1][a1+1]==5){
				gameover=true;
			}
			if(roadMap[b1][a1]!=0 ||roadMap[b1][a1+1]!=0 ){
					this.die=true;
			}
			if(roadMap[b1][a1]==1){
				roadMap[b1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect(a1*16+35,b1*16+20,16 ,8)
			}else if(roadMap[b1][a1]==0.5){
				roadMap[b1][a1]=0;
				this.die=true;
				ctx.bg.clearRect(a1*16+35,b1*16+20,16 ,16)
			}
			if(roadMap[b1][a1+1]==1){
				roadMap[b1][a1+1]=0.5;
				this.die=true;
				ctx.bg.clearRect((a1+1)*16+35,b1*16+20,16,8)
			}else if(roadMap[b1][a1+1]==0.5){
				roadMap[b1][a1+1]=0;
				this.die=true;
				ctx.bg.clearRect((a1+1)*16+35,b1*16+20,16 ,16)
			}
			
		}else if(this.bulletduraction1==1){
			if(roadMap[b1][a1]==5 ||roadMap[b1+1][a1]==5){
				gameover=true;
			}
			if(roadMap[b1][a1]!=0 ||roadMap[b1+1][a1]!=0 ){
					this.die=true;
			}
				if(roadMap[b1][a1]==1){
				roadMap[b1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect(a1*16+35,b1*16+20,8 ,16)
			}else if(roadMap[b1][a1]==0.5){
				this.die=true;
				roadMap[b1][a1]=0;
				ctx.bg.clearRect(a1*16+35,b1*16+20,16 ,16)
			}
			if(roadMap[b1+1][a1]==1){
				roadMap[b1+1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect((a1)*16+35,(b1+1)*16+20,8 ,16)
			}else if(roadMap[b1+1][a1]==0.5){
				roadMap[b1+1][a1]=0;
				this.die=true;
				ctx.bg.clearRect((a1)*16+35,(b1+1)*16+20,16 ,16)
			}
		}else {
			if(roadMap[b1][a1]==5 ||roadMap[b1+1][a1]==5){
				gameover=true;
			}
			if(roadMap[b1][a1]!=0 ||roadMap[b1+1][a1]!=0 ){
					this.die=true;
			}
			if(roadMap[b1][a1]==1){
				roadMap[b1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect(a1*16+35+8,b1*16+20,8 ,16)
			}else if(roadMap[b1][a1]==0.5){
				this.die=true;
				roadMap[b1][a1]=0;
				ctx.bg.clearRect(a1*16+35,b1*16+20,16 ,16)
			}
			if(roadMap[b1+1][a1]==1){
				roadMap[b1+1][a1]=0.5;
				this.die=true;
				ctx.bg.clearRect((a1)*16+35+8,(b1+1)*16+20,8 ,16)
			}else if(roadMap[b1+1][a1]==0.5){
				roadMap[b1+1][a1]=0;
				this.die=true;
				ctx.bg.clearRect((a1)*16+35,(b1+1)*16+20,16 ,16)
			}
		}
	
		switch(this.bulletduraction1){
			case 0://0上1右2下3左
			this.bullety=this.bullety-2;
			break;
			case 1:
			this.bulletx=this.bulletx+2;
			break;
			case 2:
			this.bullety=this.bullety+2;
			break;
			case 3:
			this.bulletx=this.bulletx-2;
			break;
		}
	}
	
}
