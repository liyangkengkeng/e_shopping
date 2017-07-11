$(function() {

    $('.be li').hover(function(){
           $('.tab').hide();
     $('.be li').removeClass('shif_in_li');
     $(this).toggleClass('shif_in_li');
           $('.tab').eq($(this).index()).show();

    })


    //轮播图效果
    var opts1 = {
        boxh: 470, //盒子的高度
        w: 735, //盒子的宽度
        h: 470, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 0, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30, //控制按钮宽度
        controlsH: 30, //控制按钮高度
        radius: 30 //控制按钮圆角度数
    };
    $("#carousel").tyslide(opts1);


    // 2F移入效果

  
    $('.f2 .f1_goods').hover(function() {
        console.log('aa');
        $(this).find('.shopping_cart').show().fadeIn(100);
    }, function() {
        $(this).find('.shopping_cart').hide().fadeOut(100);
    })


    // 我的订单右侧

    $('.unit').css('text-align', 'center');
    $('.stste').css('text-align', 'center');
    $('tr [type=checkbox]').not($('[type=checkbox]:eq(0)')).css({ 'float': 'left', 'margin': '80px 0px 0px 20px', 'width': '16px', 'height': '16px' });

    // 删除按钮点击事件
    $('.del').click(function() {
        console.log('aa');
        $(this).parent().parent().next().remove();
        $(this).parent().parent().remove();

        console.log($(this).parent().parent().next());
    })

    // 商品价格
    $('tr [type=checkbox]').not($('[type=checkbox]:eq(0)')).click(function() {

        var add = 0;
        $('.price').each(function() {
            console.log($(this).parent().parent().find('[type=checkbox]').not($('[type=checkbox]:eq(0)')));
            if ($(this).parent().parent().find('[type=checkbox]').not($('[type=checkbox]:eq(0)')).prop('checked')) {
                var text=parseInt($(this).text());
                add += text;
            }

        })
        $('#add').text(add);
    })


})
