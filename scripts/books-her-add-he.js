$(function() {
    // 页头
    var flag = false;
    $('i').click(function() {
            $('#nav').toggle().addClass('none');
            console.log(flag);
            if (flag) {
                $(this).attr('class', 'fa fa-angle-up')
                return flag = false;
                console.log(flag);
            } else {
                $(this).attr('class', 'fa fa-angle-down')
                return flag = true;
                console.log(flag);
            }
        })
        //分类菜单滑动效果

    $('#nav').on('mouseover', 'li', function() {
        $(this).find('.index100').addClass('mouse');
        $('#nav div').eq($(this).index()).show().css({ 'color': '#3e3e3e' });
    }).on('mouseout', 'li', function() {
        $(this).find('.index100').removeClass('mouse');
        $('#nav div').eq($(this).index()).hide();
    })


    // 正文
    $(function() {
        var showproduct = {
            "boxid": "showbox",
            "sumid": "showsum",
            "boxw": 340, //大图的宽度(该版本中请把宽高填写成一样)
            "boxh": 350, //大图的高度
            "sumw": 56, //列表每个小图宽度
            "sumh": 56, //列表每个小图高度
            "sumi": 7, //列表间隔
            "sums": 4, //列表显示个数
            "sumsel": "sel", //小图的活动的边框
            "sumborder": 2, //列表边框，没有边框填写0，边框在css中修改
            "lastid": "showlast",
            "nextid": "shownext"
        };
        //参数定义
        $.ljsGlasses.pcGlasses(showproduct); //方法调用，务必在加载完后执行
    });


    // 书本种类

    $('.pack').click(function() {
        $('.pack i').hide();
        $('.pack').removeClass('pack_css');
        $(this).children('i').show();
        $(this).toggleClass('pack_css');

    })

    //购物车数量
    var init = parseInt($('.text').val());
    $('.pos_r').on('click', '.button', function() {
        if ($(this).index() == 1) {
            init += 1;
            console.log(init);
            $('.text').val(init);
        } else {
            if (init > 1) {
                init -= 1;
                $('.text').val(init);
            } else {
                init = 1;
                $('.text').val(init);
            }
        }
    })

    // 购物车
    $('.append').click(function() {

    })


    // 评论区 tab
    $('#discuss .assess p').hover(function() {
        $('#discuss .assess p').removeClass('p_css');
        $('.assess_div').hide();
        $('.present_div').hide();
        $(this).toggleClass('p_css');
        console.log($(this).index());
        if ($(this).index() == 0) {
            $('.present_div').show();
        } else {
            $('.assess_div').show();
        }
    })

    // 评论数量 tab

    $('#discuss .discuss_num p').click(function() {
        $('#discuss .discuss_num p').removeClass('red');
        $(this).toggleClass('red');

    })

    //评论提交
    $('#discuss button').click(function() {
        var val = $('.discuss_bottom textarea').val();
        var length = $('.discuss_tail p').length + 1;
        if (confirm('确认提交吗？')) {

            $('.discuss_tail').prepend('<p>' + val + '<span>' + length + '楼</span></p>');
            $('.discuss_tail p').css({
                'min-height': '100px',
                'border-bottom': '1px solid #ccc',
                'font-size': '16px',
                'padding': '20px',
                'position': 'relative'
            })
            $('.discuss_tail p span').css({
                'position': 'absolute',
                'right': '0px',
                'bottom': '0px',
                'font-size': '12px'

            })

        }





    })














})
