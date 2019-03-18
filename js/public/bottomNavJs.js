/**底部nav切换(未-点击)_按循序
 *  *bottomTabArrOne.length来循环
 * **/
var bottomTabArrOne = [
	"../image/public/bottomNav/home-icon-1@2x.png",
	"../image/public/bottomNav/wallet-icon-1@2x.png",
	"../image/public/bottomNav/user-icon-1@2x.png"
];
/*底部nav切换(已-点击)_按循序*/
var bottomTabArrTwo = [
	"../image/public/bottomNav/home-icon-2@2x.png",
	"../image/public/bottomNav/wallet-icon-2@2x .png",
	"../image/public/bottomNav/user-icon-2@2x.png"
];
/*底部nav-title_按循序*/
var buttonNavTitle = [
	"首页",
	"钱包",
	"我的"
];
/*底部nav-点击url路径_按循序*/
var buttonNavUrl = [];
/*未-登陆路径*/
var loginFalse = [
	"'../home/index.html'",
	"'../login/login.html'",
	"'../login/login.html'",
]
/*已-登陆路径*/
var loginTrue = [
	"'../home/index.html'",
	"'../wallet/wallet.html'",
	"'../my/my.html'",
]

/**对应登陆状态=>路径
 * 未登录=> 0;
 * 已登陆=> 1;
 * **/
if(Number($('#bottomNavWrap').attr('data-state')) == 0){
	for(var l=0;l<bottomTabArrOne.length;l++){
		buttonNavUrl[l] = loginFalse[l]
	}
}else {
	for(var q=0;q<bottomTabArrOne.length;q++){
		buttonNavUrl[q] = loginTrue[q]
	}
}
console.log('最终路径:',buttonNavUrl);

/*js动态创建-底部导航栏*/
var botNavdStr = '';
for(var g = 0; g < bottomTabArrOne.length; g++) {
	/*<!--项，
		1、点击时 font-color：class="bNavYseFontColor";
		2、（未点击时）字体颜色:class="bNavNoFontColor";
	-->*/
	botNavdStr += '<div class="bottomNavTerm">';
	/*<!--icon box-->*/
	botNavdStr += '<p class="bottomNavIconBox" onclick="window.location.href=' + buttonNavUrl[g] + '">';
		botNavdStr += '<img class="bottomNavIcon" src="' + bottomTabArrOne[g] + '" />';
	botNavdStr += '</p>';
	/*<!--title
		1、（点击时）字体颜色:class="bNavYseFontColor";
	-->*/
	botNavdStr += '<p class="bottomNavTitle bNavNoFontColor">' + buttonNavTitle[g] + '</p>';
	botNavdStr += '</div>';
}

/*生产=> 底部导航栏*/
$('#bottomNavWrap').html(botNavdStr);

/*底部导航栏=> 切换*/
var thisInd = Number($.trim($('.pageTopTitle').attr('page-id')));
/*当前=> 替换*/
/*icon*/
$('#bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavIcon').attr('src', bottomTabArrTwo[thisInd]);
/*title的color*/
$('#bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavTitle').addClass('bNavYseFontColor').removeClass('bNavNoFontColor');

$(document).ready(function() {
	
	/**获取焦点
	 * 手机端=>input=>点击隐藏=>底部导航栏
	 * **/
	$('input').focus(function() {
		/*底部导航栏*/
		$('.bottomNavWrap').hide();
	})
	/*失去焦点*/
	$('input').blur(function() {
		/*底部导航栏*/
		$('.bottomNavWrap').show();
	})
})