function Bonus(){
	this.iType=parseInt(Math.random()*7);
	this.x=parseInt( Math.random()*32*12);
	this.y=parseInt( Math.random()*32*12);
	this.changenum=0;
	this.die=false;
	this.drawbonus=function(){
	this.changenum++;
	if(this.changenum>2000){ 
		this.die=true;
	}
	if(this.changenum%10==0){
		ctx.misc.clearRect(35 + this.x, 20 + this.y, 32, 32)
	}else{
	ctx.misc.drawImage(oImg.bonus, 32*this.iType, 0, 32, 32, 35 + this.x, 20 + this.y, 32, 32);}
		
	}

}
