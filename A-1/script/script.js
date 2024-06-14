$(document).ready(function(){
     

        //menu
        $(".mainmenu > li").mouseover(function(){
            $(".submenu").stop().slideDown(400);
        });
        $(".mainmenu > li").mouseout(function(){
            $(".submenu").stop().slideUp(400);
        });
        
        //slide 
        var currentIndex = 0;

        setInterval(function(){
            if(currentIndex < 2){
                currentIndex++;
            } else {
                currentIndex = 0;
            }

            var slidePosition = currentIndex * (-300)+"px";
            $(".slide-cont").animate({top:slidePosition},400);    

        },3000);

        //tabmenu 
        var tabBtn = $(".tab-btn > ul > li");
        var tabCon = $(".tab-cont > ul");
        
        tabCon.hide().eq(0).show();
        
        tabBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            tabBtn.removeClass("active");
            target.addClass("active");
            tabCon.css("display","none");
            tabCon.eq(index).css("display","block");
        });
        
        //popup
        $(".tab-cont li.on").click(function(){
            $(".layer-bg").show();
            $(".popup").show();
        });
        $(".popup .button").click(function(){
            $(".layer-bg").hide();
            $(".popup").hide(); 
        })

});




