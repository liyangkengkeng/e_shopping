$(function() {

    //分类菜单滑动效果

    $('#nav').on('mouseover', 'li', function() {
        $(this).find('.index100').addClass('mouse');
        $('#nav div').eq($(this).index()).show().css({ 'color': '#3e3e3e' });
    }).on('mouseout', 'li', function() {
        $(this).find('.index100').removeClass('mouse');
        $('#nav div').eq($(this).index()).hide();
    })

    //轮播图效果
    var opts1 = {
        boxh: 434, //盒子的高度
        w: 1000, //盒子的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 0, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30, //控制按钮宽度
        controlsH: 30, //控制按钮高度
        radius: 30 //控制按钮圆角度数
    };
    $("#carousel").tyslide(opts1);

    //图书 轮播图
    var opts2 = {
        boxh: 220, //盒子的高度
        w: 330, //盒子的宽度
        h: 220, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 7, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        radius: 2, //控制按钮圆角度数
        controlsColor: "#fff",
        controlsCurrentColor: "#ff6700"
    };
    $("#books_car").tyslide(opts2);
    // 图书 新书畅销榜
    $('#books .windth250').mouseover(function() {
        $('#books .windth250').children('span').removeClass('span_one');
        $('#books .windth250').removeClass('div_one');
        $('#books .windth250').children('p').removeClass('p_one');
        $(this).children('p').addClass('p_one');
        $(this).children('span').addClass('span_one');
        $(this).addClass('div_one');
    })


    //服装轮播
    var opts3 = {
        boxh: 338, //盒子的高度
        w: 425, //盒子的宽度
        h: 338, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 7, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        radius: 2, //控制按钮圆角度数
        controlsColor: "#fff",
        controlsCurrentColor: "#ff6700"
    };
    $("#sports_car").tyslide(opts3);

    //运动户外轮播
    var opts4 = {
        boxh: 338, //盒子的高度
        w: 425, //盒子的宽度
        h: 338, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 7, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 30, //控制按钮宽度
        controlsH: 2, //控制按钮高度
        radius: 2, //控制按钮圆角度数
        controlsColor: "#fff",
        controlsCurrentColor: "#ff6700"
    };
    $("#children_car").tyslide(opts4);



    // 电梯
    //1.楼梯什么时候显示，800px scroll--->scrollTop
    // $(window).on('scroll', function() {
    //     var $scroll = $(this).scrollTop();
    //     if ($scroll >= 200) {
    //         $('#loutinav').show();
    //     } else {
    //         $('#loutinav').hide();
    //     }

        //4.拖动滚轮，对应的楼梯样式进行匹配
    //     $('.louti').each(function() {
    //         console.log($(this));
    //         var $loutitop = $('.louti').eq($(this).index()).offset().top + 400;
    //         //console.log($loutitop);
    //         if ($loutitop > $scroll) { //楼层的top大于滚动条的距离
    //             $('#loutinav li').removeClass('active');
    //             $('#loutinav li').eq($(this).index()).addClass('active');
    //             return false; //中断循环
    //         }
    //     });
    // });
    // //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left

    // var $loutili = $('#loutinav li').not('.final');
    // $loutili.on('click', function() {
    //     $(this).addClass('active').siblings('li').removeClass('active');
    //     var $loutitop = $('.louti').eq($(this).index()).offset().top;
    //     //获取每个楼梯的offsetTop值
    //     $('html,body').animate({ //$('html,body')兼容问题body属于chrome
    //         scrollTop: $loutitop
    //     })
    // });
    // //3.回到顶部
    // $('.final').on('click', function() {
    //     $('html,body').animate({ //$('html,body')兼容问题body属于chrome
    //         scrollTop: 0
    //     })
    // });




    // 右侧助手点击事件
    var flag=false;
    $('.left_aide .button_img').click(function(){
        if(flag){
            $('.collar-neck').stop().hide(300);
            return flag=false;
        }else{
            $('.collar-neck').stop().show(300);
            return flag=true;
        }
        
    })


    // 搜索框事件

    $(window).scroll(function(){

        if($(this).scrollTop()>=200){
            $('.search_fixed').show();
            $('.search_fixed').append($('.search'));
            $('.search').css('color','#fff');
        }else{
            $('.search_div').append($('.search'));
            $('.search_fixed').hide();
        }

    })

});
