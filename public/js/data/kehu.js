/**
 * Created with JetBrains WebStorm.
 * User: bli111
 * Date: 11/30/14
 * Time: 1:29 PM
 * To change this template use File | Settings | File Templates.
 */


var Data = function(){

    var city = ['南京市','上海市','南通市','苏州市','泰州市','北京市'];
    var laiyuan = ['独立开发','电话来访','老客户','客户介绍','合作网站','媒体宣传','促销活动','代理商','公开招标','网站','其他'];
    var hangye = ['教育','服装','机械','互联网','交通运输','化工','传媒'];
    var jibie = ['A','B','C','D','E'];
    var zhuangtai = ['意向客户','潜在客户','已成交客户','失败客户'];
    var kehuming = ['难','飞','我','去','公','牛','大','和','司'];

    function random(n){
        return parseInt(Math.random()*n);
    }

    function getRandomName(n){
        var s = "";
        if(n == 0)
            n = 3;
        for(var i=0;i<n;i++){
            s += kehuming[random(9)];
        }
        return s;
    }

    var loadKehu = function(num){
        for(var i=0;i<num;i++){
            var $tr = $('<tr></tr>');
           // $tr.appendChild($('<td></td>').html('sss'));
            $('<td><input type="checkbox" class="checkboxes" value="1" /></td>').appendTo($tr);
            $('<td><a href="/kehu/detail">' + getRandomName(random(10))+ '</a></td>').appendTo($tr);
            $('<td>021 - 22222222</td>').appendTo($tr);
            $('<td>' + city[random(city.length)] + '</td>').appendTo($tr);
            $('<td>' + laiyuan[random(laiyuan.length)] + '</td>').appendTo($tr);
            $('<td>' + hangye[random(hangye.length)] + '</td>').appendTo($tr);
            $('<td>10000人以上</td>').appendTo($tr);
            $('<td>' + jibie[random(jibie.length)] + '</td>').appendTo($tr);
            $('<td>' + zhuangtai[random(zhuangtai.length)] + '</td>').appendTo($tr);
            $('<td>2014-11-30 12:38:31</td>').appendTo($tr);
            $('<td><a href="#">杨经理</a></td>').appendTo($tr);
            $('<td>' + random(10) + '</td>').appendTo($tr);
            $('<td>意向很强力</td>').appendTo($tr);

            $('<td><div class="btn-group pull-right"> <a href="#" class="btn dropdown-toggle mini purgle" data-toggle="dropdown"><i class="icon-angle-down"></i></a>' +
                '<ul class="dropdown-menu pull-right"> <li><a href="#">添加联系记录</a></li> <li><a href="#">创建联系人</a></li> <li><a href="#">添加备注</a></li><li><a href="#">发送短信</a></li></ul>' +
                ' </div><a href="#" class="btn mini purple"><i class="icon-edit"></i></a> <a href="#" class="btn mini black"><i class="icon-trash"></i></a> <a href="/kehu/detail" class="btn mini green-stripe">查看</a></td>').appendTo($tr);


            $('#sample_1 tbody').append($tr);
        }

    }

    return {
        loadData : function(num){
            loadKehu(num);
        }
    }
}()
