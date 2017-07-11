$(function() {
    $("form").validate({
        rules: { //验证的规则
            // 用户名验证
            user_name: {
                required: true,
                rangelength: [3, 8]
            },
            // 密码验证
            password: {
                required: true,
                rangelength: [6, 12]
            },
            // 确认密码
            Repeat: {
                required: true,
                equalTo: ".password"
            }
        },
        messages: { //验证出错提示信息
            user_name: {
                required: "<ms>请输入用户名</ms>",
                rangelength: "<ms>用户名长度必须在3到8个字符之间</ms>"
            },

            password: {
                required: "<ms>请输入密码</ms>",
                rangelength: "<ms>密码必须在6到12之间</ms>"
            },
            Repeat: {
                required: "<ms>请输入确认密码</ms>",
                equalTo: "<ms>两次输入的密码不一致</ms>"
            }
        }
    });

    // 手机号验证
    $('[name=cell_phone]').blur(function () {
        var cellRE = /^(((13[0-9]{1})|(15[0-9]{1}))+d{8})$/;
        if($(this).val()==''){
            $('.cell_none').eq(1).show();
        }else if(!cellRE.test($(this).val())) {
            $('.cell_none').eq(0).show();
            $('.cell_none').eq(1).hide();
        }
    })
    $('[type=submit]').click(function(){
        
    })


});
