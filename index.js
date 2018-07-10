$(function() {
    // 侧边栏内容开始
    var bookTypes = JSON.parse(localStorage.getItem('bookTypes'))
    // console.log(bookTypes);
    for (var i in bookTypes) {
        var div = $("<div class='ad1' name=" + i + "></div>");
        var p = $("<p class='px'>" + '<a>' + bookTypes[i].title + '</a>' + '<i class="icon-arrow-right-copy iconfont"></i>' + '</p>');
        div.append(p);
        var p1 = $("<p class='pxx'></p>");
        for (var j = 0; j < bookTypes[i].list.length; j++) {
            var span = $('<span>' + '<a>' + bookTypes[i].list[j].name + '</a>' + '</span>')
            p1.append(span);
        }
        div.append(p1);
        $('.fenlei').append(div);

    }
    $('.fenlei').append("<p class='more'>全部商品分类.....</p>");
    //侧边栏插入内容结束
    // 轮播图导入
    for (var k in slides) {
        var div1 = $("<div class='swiper-slide'></div>");
        var img = $("<img src=slides/" + slides[k] + ">");
        div1.append(img);
        $('.swiper-wrapper').append(div1);
    }
    new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    // 轮播图结束
    //侧边栏点击效果开始 
    $('.ad1').mouseover(function() {
        $('.ad1').css("background", "white");
        $('.onmouse').html('');
        $('.onmouse').css("display", "block");
        $('.onmouse').css("background", "white");
        $(this).css("background", "gray");
        var name = $(this).attr('name');
        console.log(name);
        console.log(bookTypes[name]);
        for (var j = 0; j < bookTypes[name].list.length; j++) {
            var div2 = $("<div><p>" + bookTypes[name].list[j].name + "</p></div>")
            var p2 = $('<p></p>');
            for (var k = 0; k < bookTypes[name].list[j].content.length; k++) {
                var span1 = $("<span><a>" + bookTypes[name].list[j].content[k] + "</a></span>")
                p2.append(span1);
            }
            div2.append(p2);
            $('.onmouse').append(div2);

        }
    });

    $(".ad1").mouseout(function() {
        $('.onmouse').css("display", "none");
    });

    $('.onmouse').hover(function() {
        $(this).css("display", "block");
    }, function() {
        $(this).css("display", "none");
    });
    // 侧边栏点击效果结束
    //中间点击效果开始
    var bestSelling = JSON.parse(localStorage.getItem('bestSelling'))
    // console.log(bestSelling);
    for (i in bestSelling) {
        if (i < 9) {
            var div3 = $("<div class='bookName'><p><a>0" + (i * 1 + 1) + '.' + bestSelling[i] + "</a></p><p><i class='icon-arrow-right-copy iconfont cxk'></i></p></div>");
            $('.changxiao').append(div3);
        } else {
            var div3 = $("<div class='bookName'><p><a>" + (i * 1 + 1) + '.' + bestSelling[i] + "</a></p><p><i class='icon-arrow-right-copy iconfont cxk'></i></p></div>");
            $('.changxiao').append(div3);
        }
    }
    $('.cai').mouseover(function() {
        $('.cai').css('color', 'orange');
        $('.cai').css('border-top', '3px solid orange');
        $('.jingxuan,.zhubiantuijian').css('fontWeight', 'bolder');
        $('.jingxuan,.zhubiantuijian').css('color', 'gray');
        $('.jingxuan,.zhubiantuijian').css('border-top', 'transparent');
    });
    $('.jingxuan').mouseover(function() {
        $('.jingxuan').css('color', 'orange');
        $('.jingxuan').css('border-top', '3px solid orange');
        $('.cai,.zhubiantuijian').css('fontWeight', 'bolder');
        $('.cai,.zhubiantuijian').css('color', 'gray');
        $('.cai,.zhubiantuijian').css('border-top', 'transparent');
    });
    $('.zhubiantuijian').mouseover(function() {
        $('.zhubiantuijian').css('color', 'orange');
        $('.zhubiantuijian').css('border-top', '3px solid orange');
        $('.jingxuan,.cai').css('fontWeight', 'bolder');
        $('.jingxuan,.cai').css('color', 'gray');
        $('.jingxuan,.cai').css('border-top', 'transparent');
    });
    var guessLikes = JSON.parse(localStorage.getItem('guessLikes'));
    for (i in guessLikes) {
        if (i == 0) {
            $('.Thefirst').html('');
            $('.Thebottom').html('');
            var div4 = $('<div class="picleft"><img src="imgs/guessLikes/' + guessLikes[0].img + '"></div>');
            var div5 = $('<div><div class="bookname1">' + guessLikes[0].title + '</div><div class="newPrice">' + '￥' + guessLikes[0].newPrice + '</div><div class="desc">' + guessLikes[0].desc + '</div></div>');
            $('.Thefirst').append(div4);
            $('.Thefirst').append(div5);
        } else {
            var div6 = $('<div class="picbottom"><img src="imgs/guessLikes/' + guessLikes[i].img + '"><div class="title1">' + guessLikes[i].title + '</div><div class="newPrice2">' + '￥' + guessLikes[i].newPrice + '</div><div class="oldPrice2">' + '<del>' + '￥' + guessLikes[i].oldPrice + '</del>' + '</div></div>')
            $('.Thebottom').append(div6);
        }
    }

    $('.cai').click(function() {
        var guessLikes = JSON.parse(localStorage.getItem('guessLikes'));
        for (i in guessLikes) {
            if (i == 0) {
                $('.Thefirst').html('');
                $('.Thebottom').html('');
                var div4 = $('<div class="picleft"><img src="imgs/guessLikes/' + guessLikes[0].img + '"></div>');
                var div5 = $('<div><div class="bookname1">' + guessLikes[0].title + '</div><div class="newPrice">' + '￥' + guessLikes[0].newPrice + '</div><div class="oldPrice">' + '<del>' + '￥' + guessLikes[0].oldPrice + '</del>' + '</div><div class="desc">' + guessLikes[0].desc + '</div></div>');
                $('.Thefirst').append(div4);
                $('.Thefirst').append(div5);
            } else {
                var div6 = $('<div class="picbottom"><img src="imgs/guessLikes/' + guessLikes[i].img + '"><div class="title1">' + guessLikes[i].title + '</div><div class="newPrice2">' + '￥' + guessLikes[i].newPrice + '</div><div class="oldPrice2">' + '<del>' + '￥' + guessLikes[i].oldPrice + '</del>' + '</div></div>')
                $('.Thebottom').append(div6);
            }
        }
        $('.second').css({
            position: 'relative',
            left: '650px'
        });
        $('.second').animate({
            left: '0px'
        });
    });
    $('.jingxuan').click(function() {
        var recommend = JSON.parse(localStorage.getItem('recommend'));
        console.log(recommend);
        for (i in recommend) {
            if (i == 0) {
                $('.Thefirst').html('');
                $('.Thebottom').html('');
                var div4 = $('<div class="picleft"><img src="imgs/recommend/' + recommend[0].img + '"></div>');
                var div5 = $('<div><div class="bookname1">' + recommend[0].title + '</div><div class="newPrice">' + '￥' + recommend[0].newPrice + '</div><div class="oldPrice">' + '<del>' + '￥' + recommend[0].oldPrice + '</del>' + '</div><div class="desc">' + recommend[0].desc + '</div></div>');
                $('.Thefirst').append(div4);
                $('.Thefirst').append(div5);
            } else {
                var div6 = $('<div class="picbottom"><img src="imgs/recommend/' + recommend[i].img + '"><div class="title1">' + recommend[i].title + '</div><div class="newPrice2">' + '￥' + recommend[i].newPrice + '</div><div class="oldPrice2">' + '<del>' + '￥' + recommend[i].oldPrice + '</del>' + '</div></div>');
                $('.Thebottom').append(div6);
            }

        }
        $('.second').css({
            position: 'relative',
            left: '650px'
        });
        $('.second').animate({
            left: '0px'
        });
    });
    $('.zhubiantuijian').click(function() {
        var selected = JSON.parse(localStorage.getItem('selected'));
        console.log(guessLikes);
        for (i in selected) {
            if (i == 0) {
                $('.Thefirst').html('');
                $('.Thebottom').html('');
                var div4 = $('<div class="picleft"><img src="imgs/selected/' + selected[0].img + '"></div>');
                var div5 = $('<div><div class="bookname1">' + selected[0].title + '</div><div class="newPrice">' + '￥' + selected[0].newPrice + '</div><div class="oldPrice">' + '<del>' + '￥' + selected[0].oldPrice + '</del>' + '</div><div class="desc">' + selected[0].desc + '</div></div>');
                $('.Thefirst').append(div4);
                $('.Thefirst').append(div5);
            } else {
                var div6 = $('<div class="picbottom"><img src="imgs/selected/' + selected[i].img + '"><div class="title1">' + selected[i].title + '</div><div class="newPrice2">' + '￥' + selected[i].newPrice + '</div><div class="oldPrice2">' + '<del>' + '￥' + selected[i].oldPrice + '</del>' + '</div></div>');
                $('.Thebottom').append(div6);
            }

        }
        $('.second').css({
            position: 'relative',
            left: '650px'
        });
        $('.second').animate({
            left: '0px'
        });
    });
    // 中间点击状态结束
    // 淘书团开始
    var taoshutuan = JSON.parse(localStorage.getItem('taoshutuan'));
    // console.log(taoshutuan);
    for (i in taoshutuan) {
        var div7 = $('<div class="pic4"><img src="imgs/taoshu/' + taoshutuan[i].img + '"><p><a>' + taoshutuan[i].desc + '</a></p><span class="price">团购价' + ':' + '￥' + taoshutuan[i].newPrice + '</span><span class="oldprice">' + '￥' + '<del>' + taoshutuan[i].oldPrice + '</del></span><span class="publishing">' + taoshutuan[i].publishing + '</span></div>')
        $('.father').append(div7);
    }
    // 淘书团结束
    // 新书上架热销开始
    var newbooks = JSON.parse(localStorage.getItem('newbooks'));
    for (i in newbooks) {
        var div8 = $('<div class="pic5"><p>' + newbooks[i].title + '</p><p>' + newbooks[i].author + '</p><span class="price">' + '￥' + newbooks[i].newPrice + '</span><div class="newbookold">' + '<del>' + '￥' + newbooks[i].oldPrice + '</del>' + '</div><div class="newbookpic"><img src="imgs/newbooks/' + newbooks[i].img + '"></div></div>');
        $('.father2').append(div8);
    }
    $(".newbookpic img").hover(function() {
        $(this).css({
            transform: "translate(-20px,0)",
            transition: "transform 0.5s linear"
        });
    }, function() {
        $(this).css({
            transform: "translate(0px,0)",
            transition: "transform 0.5s linear"
        });
    });
    //新书上架热销结束
    // 平台自营开始
    var selfSupport = JSON.parse(localStorage.getItem('selfSupport'));
    for (i in selfSupport) {
        var span3 = $('<span  name=' + i + '>' + selfSupport[i].title + '</span>');
        $('.fourzuhe').append(span3);
    }
    var div9 = $('<div><img src="imgs/selfSupport/novel/' + selfSupport[0].list[0].img + '"><div class="leftbiaoti">' + selfSupport[0].list[0].title + '/' + selfSupport[0].list[0].author + '</div><div><span>' + selfSupport[0].list[0].newPrice + '</span><span>' + selfSupport[0].list[0].oldPrice + '</span></div></div>');
    $('.leftpic1').append(div9);
    for (var j = 0; j < selfSupport[0].list.length; j++) {
        var div10 = $('<div class="rightdiv" name=' + i + '><img src="imgs/selfSupport/novel/' + selfSupport[0].list[j].img + '"><div>' + selfSupport[0].list[j].title + '-' + selfSupport[0].list[j].author + '</div><div><span class="morenew">' + selfSupport[0].list[j].newPrice + '</span><span class="moreold">' + '<del>' + selfSupport[0].list[j].oldPrice + '</del>' + '</span></div></div></div>');
        $('.rightpic1').append(div10);
    }

    var arry = ['novel', 'poetry', 'suspense', 'youth'];
    $('.fourzuhe span').hover(function() {
        $('.rightpic1').html('');
        $('.leftpic1>div:eq(1)').html('');
        $(this).css('color', 'orange');
        $(this).css('border-top', '3px solid orange');
        var name2 = $(this).attr('name');
        // console.log(selfSupport[name2]);
        // console.log(name2);
        var div16 = $('<div><img src="imgs/selfSupport/' + arry[name2] + '/' + selfSupport[name2].list[0].img + '"><div class="leftbiaoti">' + selfSupport[name2].list[0].title + '/' + selfSupport[name2].list[0].author + '</div><div><span>' + selfSupport[name2].list[0].newPrice + '</span><span>' + selfSupport[name2].list[0].oldPrice + '</span></div></div>');
        $('.leftpic1>div:eq(1)').append(div16);
        for (var i = 0; i < selfSupport[name2].list.length; i++) {
            var div11 = $('<div class="rightdiv"><img src="imgs/selfSupport/' + arry[name2] + '/' + selfSupport[name2].list[i].img + '"><div >' + selfSupport[name2].list[i].title + '-' + selfSupport[name2].list[i].author + '</div><div><span class="morenew">' + selfSupport[name2].list[i].newPrice + '</span><span class="moreold">' + '<del>' + selfSupport[name2].list[i].oldPrice + '</del>' + '</span></div></div></div>');
            $('.rightpic1').append(div11);
        }
    }, function() {
        $(this).css('color', 'black');
        $(this).css('border-top', '3px solid #ccc');
    });
    //平台自营结束
    //出版社直销开始
    var pressList = JSON.parse(localStorage.getItem('pressList'));
    // console.log(pressList);
    for (i in pressList) {
        var div12 = $('<div onmouseover="change(' + i + ')">' + pressList[i].name + '</div>');
        $('.leftpic2>div:first-child').append(div12);
    }
    $('.leftpic2>div:first-child div').mouseover(function() {
        $('.leftpic2>div:first-child div').removeClass('divcss');
        $(this).addClass('divcss');
    });
    var div13 = $('<div><h2>' + pressList[0].name + '</h2><p>' + pressList[0].desc + '</p></div>');
    $('.rightpic3').append(div13);
    var div15 = $('<div class="div15"></div>');
    for (var j = 0; j < pressList[0].list.length; j++) {
        var div14 = $('<div class="div14"><div class="picbottom"><img src="imgs/press/' + pressList[0].list[j].img + '"></div><div>' + pressList[0].list[j].title + '</div><div><span>'+'￥' + pressList[0].list[j].newPrice + '</span><span>' + '<del>' +'￥'+ pressList[0].list[j].oldPrice + '</del></span></div></div>');
        div15.append(div14);
    }
    $('.rightpic3').append(div15);

    $(".biaozhifu i:last-child").click(function() {
        $(".leftpic2>div:first-child div").animate({
            bottom: 400 
        }, 250);
    });
    $(".biaozhifu i:first-child").click(function() {
        $(".leftpic2>div:first-child div").animate({
            bottom: 0
        }, 250);
    });
});

function change(obj){
        // console.log(obj);
        // console.log(pressList[obj]);
        $('.rightpic3').html('');
          var div17=$('<div><h2>'+pressList[obj].name+'</h2><p>'+pressList[obj].desc+'</p></div>')
             $('.rightpic3').append(div17);
             var div15=$('<div class="div15"></div>') 
      for(var j=0;j<pressList[obj].list.length;j++){
        var div18=$('<div class="div14"><div class="picbottom"><img src="imgs/press/'+pressList[obj].list[j].img+'"></div><div>'+pressList[obj].list[j].title+'</div><div><span>'+'￥'+pressList[obj].list[j].newPrice+'</span><span>'+'<del>'+'￥'+pressList[obj].list[j].oldPrice+'</del></span></div></div>')
            div15.append(div18);  
             }
              $('.rightpic3').append(div15);

     }
         // 出版社结束