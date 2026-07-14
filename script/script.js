$(function(){

// etc 목록에 마우스 올렸을때 컨텐츠 나오게
 $(".etcmain",this).on({
  mouseenter:function(){
   $(this).find('.etcsub').stop(true).slideDown();
  },
  mouseleave:function(){
   $(this).find('.etcsub').stop(true).slideUp();
  }
 });

// about box에 마우스 올렸을때 컨텐츠 나오게
 $(".aboutinner .box1").on({
    mouseenter:function(){
     $(".aboutinner .box img").stop(true).show();
    },
    mouseleave:function(){
     $(".aboutinner .box img").stop(true).hide();
    }
   });
     
 // skill box에 마우스 올렸을때 컨텐츠 나오게
 $(".skillinner .box",this).on({
   mouseenter:function(){
    $(".page-loader",this).stop(true).show();
   },
   mouseleave:function(){
    $(".page-loader",this).stop(true).hide();
   }
  });
  $(document).ready(function(){
    let popupOpened = false;

$(document).ready(function(){

    let popupOpened = false; // 팝업 열림 상태 확인

    // 이미지 클릭 → 팝업 열기
    $(".detail img").click(function(e){
        e.stopPropagation(); 
        const imgSrc = $(this).attr('src');
        $("#popupImg").attr('src', imgSrc);
        $("#imagePopup").fadeIn(); // show 대신 fadeIn으로 부드럽게

        // 팝업 열릴 때 스크롤 맨 위로 이동
        if (!popupOpened) {
            $("#imagePopup").scrollTop(0);
            popupOpened = true;
        }
    });

    // 닫기 버튼 클릭 → 팝업 닫기
    $("#closePopup").click(function(e){
        e.stopPropagation(); // 버튼 클릭 이벤트가 부모로 전달 안 되게
        $("#imagePopup").fadeOut();
        popupOpened = false;
    });

    // 배경 클릭 → 팝업 닫기
    $("#imagePopup").click(function(e){
        if(e.target === this){ // #imagePopup 배경 클릭 시만
            $(this).fadeOut();
            popupOpened = false;
        }
    });

});

});


});
