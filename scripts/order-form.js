$(function(){
	var all=parseInt($('.price').text())+parseInt($('.freight').text());
	$('.all').text(all);

	// 收货人地址点击事件
	$('.url .detailed').click(function(){
		$('.url .detailed').removeClass('detailed_click');
		$(this).toggleClass('detailed_click');
	})
	// 支付方式点击事件
	$('.money .detailed').click(function(){
		$('.money .detailed').removeClass('detailed_click');
		$(this).toggleClass('detailed_click');
	})
	// 快递点击事件
	$('.distrbution .detailed').click(function(){
		$('.distrbution .detailed').removeClass('detailed_click');
		$(this).toggleClass('detailed_click');
	})



	// 提交事件,弹出蒙层
	$('.button').click(function(){
		var h=$(document).height();
		console.log(h);
		var w=$(window).width();
		$('.cover').show().css({'width':w,'height':h});
	})

	// 蒙层提示信息点击事件
	$('.confirm').click(function(){
		location.href='http://www.baidu.com/';
	})
	$('.cancel').click(function(){
		$('.cover').hide();
	})
	$('.shut_down').click(function(){
		$('.cover').hide();
	})


})