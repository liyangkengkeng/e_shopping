$(function(){

	// 页头
	var flag=false;
	$('i').click(function(){
		$('#nav').toggle().addClass('none');
		if(flag){
			$(this).attr('class','fa fa-angle-up')
			return flag=false;
		}else{
			$(this).attr('class','fa fa-angle-down')
			return flag=true;
		}
	})

	//分类菜单滑动效果

    $('#nav').on('mouseover', 'li', function() {
        $(this).find('.index100').addClass('mouse');
        $('#nav div').eq($(this).index()).show().css({'color':'#3e3e3e'});
    }).on('mouseout', 'li', function() {
        $(this).find('.index100').removeClass('mouse');
        $('#nav div').eq($(this).index()).hide();
    })


    // 轮播图
    var opts1 = {
        boxh: 430, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 20//控制按钮圆角度数
    };
    $("#carousel").tyslide(opts1);

    //热销畅销
    $('#nav_carousel .dis').slice(3).css('background','#ccc');
	$('#nav_carousel .hove').hover(function(){
		$('#nav_carousel .hove').removeClass('height140');
		$('#nav_carousel .hove').children('img').removeClass('height140_img');
		$(this).addClass('height140');
		$(this).children('img').addClass('height140_img');
	})


	// 新书上架   主编推荐
    $('#new-books .windth250:eq(0)').css('height','120px');
    $('#new-books .windth250').mouseover(function(){
        $('#new-books .windth250').children('span').show();
        $('#new-books .windth250').children('p').hide();
        $('#new-books .windth250').css('height','50px');

        $(this).children('span').hide();
        $(this).children('p').show();
        $(this).css('height','120px');
    })


    // 独家推荐

    $('#exclusive ul li').hover(function(){
    	$('#exclusive ul li').removeClass('tab');
    	$(this).addClass('tab');
    });















})