/*var click_1 = false;
var count = 0;
var width;
var height;

$(document).ready(function() {
    width = window.innerWidth;
    height = window.innerHeight;
});

$("#menu-toggle").click(function() {
    if(count==0 || click_1==false){
        $("#sidetest").velocity({left: "150px"});
        $("section").velocity({left: "150px", marginRight: "10%"});
        click_1 = true;
        count++;
    }else{
        $("#sidetest").velocity({left: "0px"});
        $("section").velocity({left: "0px", marginRight: "0%"});
        click_1 = false;
    }   
});

$("#menu-main").click(function() {
    $('#sidetest').css('left', '0px');
    click_1 = false;
});

$(window).resize(function() {
    if(getBack()==false){
        $("#sidetest").velocity({left: "0px"});
        $("section").velocity({left: "0px", marginLeft: "5%", marginRight: "5%"});
    }
    click_1 = false;
});

function getBack(){
    if((width==$(window).height()) && (height==$(window).width)){
        $("#sidetest").velocity({left: "0px"});
        $("section").velocity({left: "0px", marginRight: "0%"});
        return true;
    }
    return false;
}


$(window).resize(function(e) {
    e.preventDefault();
    $("section").toggleClass("retract");
});
*/