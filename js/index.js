$(function(){
	var $box=$('.bannnerbig');
    var $imgs=$(".box1 a");
    var $lis=$('.anniu li');
    var $btnR=$(".bannnerbig .btn-right");
    var $btnL=$(".bannnerbig .btn-left");
    //图片宽度
    var flag=true;
    var $widths=$imgs.eq(0).width();
    
    $(".box1 a:not(:first)").css({left:$widths+"px"});
    $lis.eq(0).css({background:"#fff"});

    //记录下标
    var index=0;
    var next=0;
    //启动轮播
    var t=setInterval(moveR,1000)
    function moveR(){
        //更新下标
        next++;
        //判断边界
        if(next==$imgs.length){
            next=0;
        }
        //就位
         $(window).resize(function(){
    	 $widths=$imgs.width();
        })
        $lis.eq(index).css({background:"#ccc"});
        $lis.eq(next).css({background:"#fff"});
        $imgs.eq(next).css({left:$widths+"px"});
        $imgs.eq(index).animate({left:-$widths})
        $imgs.eq(next).animate({left:0},function(){
            flag=true;
        });
        index=next;

    }
    //box移入和离开
    $box.mouseover(function(){
        clearInterval(t)
    })
    $box.mouseout(function(){
        t=setInterval(moveR,1000)
    })
    // //选项卡
    $lis.click(function(){
        var indexs=$(this).index();
        if(indexs==index){
            return;
        }
        // 		//就位
        $lis.css({background:"#ccc"});
        $lis.eq(indexs).css({background:"#fff"});
        // 		//动画
        if(index>indexs){
            $imgs.eq(indexs).css({left:$widths+"px"});
            $imgs.eq(index).animate({left:-$widths})
            $imgs.eq(indexs).animate({left:0},function(){
                flag=true;
            })
        }

        if(index<indexs){
            $imgs.eq(indexs).css({left:-$widths+"px"});
            $imgs.eq(index).animate({left:$widths})
            $imgs.eq(indexs).animate({left:0},function(){
                flag=true;
            })
        }

        // 		//更新
        index=indexs;
        // 		//保证上面和下面的同步
        next=index;
    })
    // 	}
    // };
    // //左右按键
    $btnR.click(function(){
        if(flag){
            flag=false;
            moveR();
        }
    })
    $btnL.click(function(){
        if(flag){
            flag=false;
            moveL();
        }
    })
    function moveL(){
        next--;
        //判断边界
        if(next<0){
            next=$imgs.length-1;
        }
        //就位

        $lis.eq(index).css({background:"#ccc"});
        $lis.eq(next).css({background:"#fff"});
        $imgs.eq(next).css({left:-$widths+"px"});
        $imgs.eq(index).animate({left:$widths});
        $imgs.eq(next).animate({left:0},function(){
            flag=true;
        });
        index=next;

    }
})