$(function() {

    // 地址：opition


    // 商品
    var usersInfo = [
        { "img": "23338636-1_l_5", "goods": "疯狂经济学", "mono": "15.00" },
        { "img": "23338636-1_l_5", "goods": "疯狂经济学", "mono": "15.00" },
    ];
    init(usersInfo);

    function init(data) {
        var html = $('table').html();
        //console.log(html);
        if (data.length != 0) {
            for (var i = 0; i < data.length; i++) {
                var total = data[i].mono * $('[type=text]').val();
                //console.log($('[type=text]').val());
                var str = '<tr><td><input type="checkbox" class="checkbox"><img src="imags/书籍/' + data[i].img + '.jpg"></td><td>' + data[i].goods + '</td><td class="mono">' + data[i].mono + '</td><td><input type="button" value="+" class="pos_r"><input type="text" value="1" class="text"><input type="button" value="-" class="pos_r"></td><td class="total">' + total + '</td><td><span class="del">删除</span><br><span class="shift">移到我的关注</span></td></tr><tr><td colspan="6"><p></p></td></tr>';

                html += str;
            }
            $('table').html(html);
            $('tr').find('[type=button]').css('width', '25px');
            $('tr [type=text]').css('width', '75px');
            $('tr [type=checkbox]').not($('[type=checkbox]:eq(0)')).css({ 'float': 'left', 'margin': '80px 0px 0px 20px', 'width': '16px', 'height': '16px' });
        } else {
            html = '<tr><td colspan="6">暂无商品</td></tr>';
            html += str;
            $('table').html(html);
        }

    }





    function inAll() {
        // 总价
        var add = 0;
        var number = 0;
        $('.total:not(:first)').each(function() {
            
            if ($(this).parent().find('.checkbox').prop('checked')) {
                console.log('cccc');
                console.log($(this).parent().find('.checkbox'));
                add += parseFloat($(this).text());
                number += parseInt($(this).prev().find('.text').val());
            }
        })
        console.log(add);
        console.log(number);
        $('#add').text(add.toFixed(2));
        $('#amount').text(number);
    }

    // 商品小计
    $('.total').each(function() {
        $(this).text($(this).parent().find('.mono').text());
    });
    $('.pos_r').click(function() {
        var record = parseInt($(this).siblings('.text').val());
        if ($(this).val() == '+') {
            record++;
            $(this).next('.text').val(record);
            var total = record * $(this).parent().prev('.mono').text();
            $(this).parent().next('.total').text(total.toFixed(2));
            inAll();
        } else {
            if ($(this).prev('.text').val() == 1) {
                console.log('aa');
                $(this).css('disabled', true);
            } else {
                record--;
                $(this).prev('.text').val(record);
                var total = record * $(this).parent().prev('.mono').text();
                $(this).parent().next('.total').text(total.toFixed(2));
                inAll();
            }
        }

    })


    // 全选事件
    // 下面全选按钮
    $('[type=checkbox]:last').click(function() {
        console.log($(this).prop('checked'));
            if ($(this).prop('checked')) {
                $('[type=checkbox]:not(:last)').prop('checked', true);
            } else {
                $('[type=checkbox]:not(:last)').prop('checked', false);
            }
        })
        // 上面全选按钮
    $('[type=checkbox]:first').bind('click', function() {
        if ($(this).prop('checked')) {
            $('[type=checkbox]:not(:first)').prop('checked', true);
        } else {
            $('[type=checkbox]:not(:first)').prop('checked', false);
        }
    })

     // 选中，计算总价
    $('[type=checkbox]').click(function() {
        // $('[type=checkbox]').each(function(){
        //     console.log($(this).prop('checked'));
        // })
        inAll();
    })

    // 删除按钮
    $('.del').click(function(){
        $(this).parent().parent().remove();
        inAll();
    })
    $('.del_sel').click(function(){
        $('.checkbox:not(:first)').each(function(){
            if($(this).prop('checked')){
                $(this).parent().parent().remove();
            }
        });
        inAll();
    })




    // 提交事件,弹出蒙层
    $('.balance_button').click(function() {
        var h = $(document).height();
        console.log(h);
        var w = $(window).width();
        $('.cover').show().css({ 'width': w, 'height': h });
    })

    // 蒙层提示信息点击事件
    $('.confirm').click(function() {
        location.href = './order-form.html';
    })
    $('.cancel').click(function() {
        $('.cover').hide();
    })
    $('.shut_down').click(function() {
        $('.cover').hide();
    })











})
