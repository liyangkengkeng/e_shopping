$(function(){

	// 提交事件,弹出蒙层
	$('.pay').click(function(){
		var h=$(document).height();
		console.log(h);
		var w=$(window).width();
		$('.cover').show().css({'width':w,'height':h});
		$('.cover').children('div').hide();
		$('.one').show();
	})

	// 蒙层提示信息点击事件


	$('.confirm').click(function(){
		$('.one').hide();
		$('.completa_payment').show();
	})
	$('.cancel1').click(function(){
		$('.cover').hide();

	})


	$('.cancel').click(function(){
		$('.one').hide();
		$('.pay_for_failure').show();
	})
	$('.cancel2').click(function(){
		$('.cover').hide();
	})


	$('.shut_down').click(function(){
		$('.cover').hide();
	})

	//点击确认后显示支付成功蒙层

})