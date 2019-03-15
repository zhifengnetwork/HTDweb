$(function(){
	 $(".phone").blur(function(){
		 let regg= /^1[34578]\d{9}$/;  /*用户手机号*/
		 let $phone=$(this)
		 verify(regg,$phone,"手机号")
	 })
	 $(".pwd").blur(function(){
		 let regg=/^[a-zA-Z0-9]{6,16}$/;; /*用户密码*/
		 let $pwd=$(this)
		 verify(regg,$pwd,"密码")
	 })
     function verify(reg,pro,dd){
		 if(pro.val()==""){
			 pro.parent().prev().addClass("mistake").html(`${dd}不能为空`).show()
			 return false;
		 }else if(!reg.test(pro.val())){
			 pro.parent().prev().addClass("mistake").html(`${dd}格式错误`).show()

			 return false;
		 }else{
			 pro.parent().prev().removeClass("mistake").html("").hide();
			 return true;
		 }
		
	 }
     
     /*登录*/
     $('.dis').on('click',function(){
     	window.location.href = '../home/index.html'
     })
	})