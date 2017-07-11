$(function() {

    $('.battn span').hover(function() {
        $('.battn span').removeClass('main_color');
        $('.battn').siblings('div').hide();
        $(this).toggleClass('main_color');
        console.log($(this).index());
        $('.back_code div').eq($(this).index()).show();
    })




    // 账号输入框事件
    $('.back_pasw input:eq(0)').focus(function() {
        $('.back_pasw input:eq(0)').keyup(function() {
        		$('.del').show();
        })


        $('.del').click(function(){
        	$('.back_pasw input:eq(0)').val('');
        	$(this).hide();
        })

    })






















})
