/**
 * Created by LoveJYl on 2017/1/20.
 */
$(window).load(function(){
    $("#_login-right li").click(function(){
        $("#_login-right li").removeClass("_pre-li");
        $(this).addClass("_pre-li");
        $("#_enter ._form").hide();
        $("#_enter ._form").eq($(this).index()).show();
    })
    var $a = 123;
    var $btn = true;
    $("._ck1").click(function(){
        if($btn){
            $(this).addClass("_ck2");
        }else{
            $(this).removeClass("_ck2");
        }
        $btn = !$btn;
    })
    $("._check span").hover(function(){
        $("._check strong").css("display","block");
    })
    $("._check span").mouseleave(function(){
        $("._check strong").css("display","none");
    })
   function inputChange(dom,art){
       $(dom).focus(function(){
           $(this).prop("placeholder","")
           $(this).prev().css({
               display:"block"
           })
       })
       $(dom).blur(function(){
           $(this).prop("placeholder",art);
           $(this).prev().css({
               display:"none"
           })
       })
   }
    inputChange("#_un1","手机号");
    inputChange("#_un2","手机号/邮箱/用户名");
    inputChange("#_pw","密码");
    inputChange("#_pw2","密码");
    /*function inputEmpty(dom,msg){
        $(dom).blur(function(){
            if(dom.val() == ""){
                $(this).parent().before($("<span>").text(msg).addClass("_wrong-msg"));
            }
        })
    }*/
    //inputEmpty("_un1","请输入有效的手机号");

    $("#_un1").blur(function(){
        var $rule = /[0-9]{11}/ ;
        if($rule.test($(this).val())){
            $(this).parent().prev().css("display","none");
        }else{
            $(this).parent().prev().css("display","block");
        }
    })
    $("#_pw").blur(function(){
        var $rule = /[0-9]{6}/ ;
        if($rule.test($(this).val())){
            $(this).parent().prev().css("display","none");
        }else{
            $(this).parent().prev().css("display","block");
        }
    })
    $("#_qr").click(function(){
        $("#_login-ph").css("display","block");
        $("#_login-right").css("display","none");
    })
    $("#_sqr").click(function(){
        $("#_login-ph").css("display","block");
        $("#_login-right").css("display","none");
    })
    $("#_pc-art").click(function(){
        $("#_login-ph").css("display","none");
        $("#_login-right").css("display","block");
    })
    $("#_pc-pic").click(function(){
        $("#_login-ph").css("display","none");
        $("#_login-right").css("display","block");
    })
})