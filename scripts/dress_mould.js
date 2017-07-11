$(function() {

    $('.class li').hover(function() {
        $(this).parent().children('li').removeClass('pitch_on');
        $(this).addClass('pitch_on');

    })

//服装轮播
var opts3 = {
    boxh: 338, //盒子的高度
    w: 427, //盒子的宽度
    h: 340, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 7, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 30, //控制按钮宽度
    controlsH: 2, //控制按钮高度
    radius: 2, //控制按钮圆角度数
    controlsColor: "#fff",
    controlsCurrentColor: "#ff6700"
};
$("#dress_car").tyslide(opts3);




})
