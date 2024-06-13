$(document).ready(function(){
  // ******  메뉴  ****** //
  $('.navi>li').mouseover(function(){
	  $(this).find('.subMenu').stop().slideDown(500);
  }).mouseout(function(){
	  $(this).find('.subMenu').stop().slideUp(500);
  });


 
  const imgs = 2;
  let now = 0;
  //[2] 이미지슬라이드의 첫번째 이미지의 형제 들을 모두 marginTop 적용
  $(".imgSlide>a").eq(0).siblings().animate({marginTop:"-400px"});
  //[3] setInterval 메소드 3초 간격으로 실행
  setInterval(function(){
      now = now==imgs ? 0 : now+=1;
      $(".imgSlide>a").eq(now-1).animate({marginTop:"-400px"});
      $(".imgSlide>a").eq(now).animate({marginTop:"0"});
  },3000);
  


   // ******  Modal 팝업  ****** //
  $(".notice li:first").click(function(){
	   $("#modalWrap").addClass("active");
  });
    $(".btn").click(function(){
	$("#modalWrap").removeClass("active");
  });
  
});