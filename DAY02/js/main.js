//변수선언
var html = document.documentElement;
var vw_mobile = 320;
var vw_tablet = 768;
var vw_desktop = 1100;
var veiwportW;
var dvp = document.querySelector('.detect-viewport');


function detectViewportWidth (){
	viewportW = window.innerWidth || html.clientWidth;
	if (viewportW < vw_tablet){
		html.className ='mobile';
	} else if(viewportW >= vw_tablet && viewportW < vw_desktop){
			html.className ='tablet';
	}else{
		html.className ='desktop';
	}
	dvp.innerWidth = html.className;	
}
window.onlode = window.onresize = detectViewportWidth;
