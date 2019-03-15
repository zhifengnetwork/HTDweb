$(function(){


	// 验证用户手机格式
	 $(".phone").blur(function(){
		 let reg= /^1[34578]\d{9}$/;  /*用户手机号*/
		 let $phone=$(this)
		 
		   if($phone.val()==""){
		   			 $phone.parent().prev().addClass("mistake").html("手机号不能为空")
		   			 return _state_.push(false);
		   }else if(!reg.test($phone.val())){
		   			 $phone.parent().prev().addClass("mistake").html("请输入正确的手机号~")
		   			 return _state_.push(false);
		   }else{
							$phone.parent().prev().removeClass("mistake").html("")
							if($(this).parent().siblings(".from-group").children(".pptt").val().length>0){
                  $(".btn").addClass("active").removeClass("dis").attr("disabled",false)
							}else{
								  $(".btn").addClass("dis").removeClass("active").attr("disabled","disabled")
							}
		   			 return true;
		   }
	 })
	 // 验证用户密码格式
	 $(".pwd").blur(function(){
		 let reg=/^[a-zA-Z0-9]{6,16}$/;; /*用户密码*/
		 let $pwd=$(this)
<<<<<<< HEAD:js/user/login.js
		 if($pwd.val()==""){
			 $pwd.parent().prev().addClass("mistake").html("用户密码不能为空")
			 return false;
		 }else if(!reg.test($pwd.val())){
			 $pwd.parent().prev().addClass("mistake").html("用户名密码格式错误 6~16位~")
=======
		 verify(regg,$pwd,"密码")
	 })
     function verify(reg,pro,dd){
		 if(pro.val()==""){
			 pro.parent().prev().addClass("mistake").html(`${dd}不能为空`).show()
			 return false;
		 }else if(!reg.test(pro.val())){
			 pro.parent().prev().addClass("mistake").html(`${dd}格式错误`).show()

>>>>>>> 26328bd9925d4888b86d73e9c2bacfff903b7c73:js/login/login.js
			 return false;
		 }else{
			 $pwd.parent().prev().removeClass("mistake").html("")
			   if($(this).parent().siblings(".from-group").children(".pptt").val().length>0){
			  	$(".btn").addClass("active").removeClass("dis").attr("disabled",false)
		}else{
			  	$(".btn").addClass("dis").removeClass("active").attr("disabled","disabled")
		}
			 return true;
		 }
<<<<<<< HEAD:js/user/login.js
	 })
	 
	 // 返回上一页
	     function returnFun(){
	 	/*返回上一页*/
	 	if($('.headWrap_lb .returnBut_lb').attr('data-num') == 1 || $('.headWrap_lb .returnBut_lb').attr('data-num') == undefined ){
	 		window.history.back();
	 		console.log("返回上一页");
	 	}else {
	 		/*页面跳转*/
	 		window.location.href = $('.headWrap_lb .returnBut_lb').attr('data-num');
	 	}
	 	return false;
	 }
	
	//  登录
	  $(".btn").click(function(){
			var input = $("input")
			console.log(input)
			for (input in item){
				console.log(item)
			}
		})

=======
		
	 }
     
     /*登录*/
     $('.dis').on('click',function(){
 		window.location.href = '../home/index.html';
     })
     
>>>>>>> 26328bd9925d4888b86d73e9c2bacfff903b7c73:js/login/login.js
	})