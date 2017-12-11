const canRol = document.getElementById('canvas-role');
const canbg = document.getElementById('canvas-bg');
const canmisc = document.getElementById('canvas-misc');

 ctx = {
	role: canRol.getContext("2d"),
	bg: canbg.getContext('2d'),  
	misc: canmisc.getContext('2d'),
	l: 416, // l表示canRol的长与宽
	w: 516, // canBg的宽度
	h: 456 // canBg的高度
}
// 用来控制画布所在区域的背景
const gameBox = {
    box: document.getElementById('game-box'),
    border: document.getElementById('game-box-border')
};
// 所有的图片
const oImg = {
    ui: document.getElementById('UI'),
    myTank: document.getElementById('myTank'),
    enemyTank: document.getElementById('enemyTank'),
    bonus: document.getElementById('bonus'),
    misc: document.getElementById('Misc'),
    brick: document.getElementById('brick'),
    boom: document.getElementById('boom'),  
    score: document.getElementById('getScore')
};
// 所有的音频
const oAud = {
    start: document.getElementById('start'),
    over: document.getElementById('over'),
    att: document.getElementById('attack'),
    explode: document.getElementById('explode'),
    attOver: document.getElementById('attackOver'),
    eat: document.getElementById('eat'),
    bomb: document.getElementById('bomb'),
    miscSound: document.getElementById('miscSound'),
    life: document.getElementById('life'),
    pause: document.getElementById('pause')
};
//循环函数循环num次后执行方法
function delay(num, delayNum, fn) {
    if (num) {
        num--;
    } else {
        num = delayNum;
        fn();
    }
    return num;
}
//老家位置
const aHomeData = [
    [20, 9, 19, 8, 10],
    [18, 4, 17, 3, 5]
];