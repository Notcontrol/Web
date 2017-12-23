jQuery(document).ready(function($) {
    if($("meta[name=toTop]").attr("content")=="true"){
        $("<div id='toTop'><a href='#' class='gotop js-gotop'><i class='icon-arrow-up2'></i></a></div>").appendTo('body');
        $("#toTop").css({
            width: '50px',
            height: '50px',
            bottom:'10px',
            right:'15px',
            position:'fixed',
            cursor:'pointer',
            zIndex:'999',
        });
        if($(this).scrollTop()==0){
            $("#toTop").hide();
        }
        $(window).scroll(function(event) {
            /* Act on the event */
            if($(this).scrollTop()==0){
                $("#toTop").hide();
            }
            if($(this).scrollTop()!=0){
                $("#toTop").show();
            }
        });
    }
});