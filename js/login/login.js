$(function(){
	
	var condition={
		phonestate:false,    //用户名手机
		pwdstate:false,      //用户密码
}

	// 验证用户手机格式
	 $(".phone").blur(function(){
		 let reg= /^1[34578]\d{9}$/;  /*用户手机号*/
		 let $phone=$(this)
		   if($phone.val()==""){
		   			 $phone.parent().parent().prev().addClass("mistake").html("手机号不能为空")
		   			 return condition.phonestate=false
		   }else if(!reg.test($phone.val())){
		   			 $phone.parent().parent().prev().addClass("mistake").html("请输入正确的手机号~")
		   			 return condition.phonestate=false
		   }else{
							$phone.parent().parent().prev().removeClass("mistake").html("")
				if($(this).parent().parent().siblings(".from-group").find(".pptt").val().length>0){
                  $(".btn").addClass("active").removeClass("dis").attr("disabled",false)
			  }else{
								  $(".btn").addClass("dis").removeClass("active").attr("disabled","disabled")
							}
							return condition.phonestate=true
		   }
	 })
	 // 验证用户密码格式
	 $(".pwd").blur(function(){
		 let reg=/^[a-zA-Z0-9]{6,16}$/;; /*用户密码*/
		 let $pwd=$(this)
		 if($pwd.val()==""){
			 $pwd.parent().parent().prev().addClass("mistake").html("用户密码不能为空")
			 return condition.pwdstate=false
		 }else if(!reg.test($pwd.val())){
			 $pwd.parent().parent().prev().addClass("mistake").html("用户名密码格式错误 6~16位~")
			 return condition.pwdstate=false
		 }else{
			 $pwd.parent().parent().prev().removeClass("mistake").html("")
			if($(this).parent().parent().siblings(".from-group").find(".pptt").val().length>0){
			  	$(".btn").addClass("active").removeClass("dis").attr("disabled",false)
		}else{
			  	$(".btn").addClass("dis").removeClass("active").attr("disabled","disabled")
		}
		return condition.pwdstate=true
		 }
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
			var phone = $(".phone")
			var pwd = $(".pwd")
			console.log($(".btn"))
			if(!condition.phonestate){
				phone.focus()
				alert("手机错误")
				return false;
			}
			if(!condition.pwdstate){
				pwd.focus()
				
				alert("密码错误")
				return false;
			}
			else{
				alert("可以登录")
			}
		
	 })
	 

	})