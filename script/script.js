$(document).ready(function(){

    // 1. etcmain 클릭 시 서브메뉴 
    $(".etcmain").off("click").on("click", function(e){
        var $sub = $(this).find('.etcsub'); 
        var $btnDown = $(this).find('img[alt="btndown"]');
        var $btnUp = $(this).find('img[alt="btnup"]');

   
        $('.etcsub').not($sub).slideUp(300);
        $('.etcmain').not(this).find('img[alt="btndown"]').show();
        $('.etcmain').not(this).find('img[alt="btnup"]').hide();

   
        $sub.stop(true, true).slideToggle(300, function(){
            if($sub.is(':visible')){
                $btnDown.hide();
                $btnUp.show();
            } else {
                $btnDown.show();
                $btnUp.hide();
            }
        });
    });

  


    // 2. about box에 마우스 올렸을 때 컨텐츠
    $(".aboutinner .box1").on({
        mouseenter: function(){
            $(".aboutinner .box img").stop(true).show();
        },
        mouseleave: function(){
            $(".aboutinner .box img").stop(true).hide();
        }
    });

    // 3. skill box에 마우스 올렸을 때 컨텐츠 
    $(".skillinner .box").on({
        mouseenter: function(){
            $(".page-loader", this).stop(true).show();
        },
        mouseleave: function(){
            $(".page-loader", this).stop(true).hide();
        }
    });

    // 4. 이미지 팝업 관련
    let popupOpened = false; // 팝업 열림 상태 확인

    // 이미지 클릭 → 팝업 
    $(".detail img").click(function(e){
        e.stopPropagation(); 
        const imgSrc = $(this).attr('src');
        $("#popupImg").attr('src', imgSrc);
        $("#imagePopup").fadeIn(); 

        // 팝업 열릴 때 스크롤 맨 위로
        if (!popupOpened) {
            $("#imagePopup").scrollTop(0);
            popupOpened = true;
        }
    });

    // 닫기 버튼
    $("#closePopup").click(function(e){
        e.stopPropagation(); 
        $("#imagePopup").fadeOut();
        popupOpened = false;
    });

    // 배경 클릭하면 닫히게
    $("#imagePopup").click(function(e){
        if(e.target === this){ 
            $(this).fadeOut();
            popupOpened = false;
        }
    });

});
