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

Vue.component('starter-pack', {
    template: '#starter1-plate'
});

Vue.component('see-profile', {
    template: '#seeprofile-plate'
});

Vue.component('edit-profile', {
    template: '#editprofile-plate',
    methods: {
        newInfo: function(){
            this.$http.post('/api/editprofile', retInfo()).then((response) => {
                swal(
                    response.data.msg,
                    'Information Updated!',
                    'success'
                );
            });
        }
    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

new Vue({
    data:{
    current:"starter-pack"
  },
  methods:{
    switchToMain:function(){
        this.current = 'starter-pack'
    },
    switchToProfile:function(){
        this.current = 'see-profile'
    },
    switchToEditProfile:function(){
        this.current = 'edit-profile'
    }
  },
  components:['starter-pack','see-profile','edit-profile'], 
}).$mount('#starthere');


function retInfo(){
    var form = new FormData();
    form.append('name', $('input[name="name"]').val());
    form.append('nickname', $('input[name="nickname"]').val());
    form.append('avatar', $('input[name="avatar"]')[0].files[0]);

    return form;
}


function changeUp(nick, name, filename){
    $('#upperprofname').html("");
    $('#upperprofname').append(nick);
    $('#nameofuser').html("");
    $('#nameofuser').append(name);
    $('#id_proc').html("");
    $('#id_proc').append('<img src="/uploads/avatar/'+filename+'" style="width: 150px; height:150px; border-radius: 50%;">');
    $('#profile-anchor').html("");
    $('#profile-anchor').append('<img src="/uploads/avatar/'+filename+'" class="img-circle" id="profile">')
}

function edit_profile(){
    var form = new FormData();
    form.append('name', $('input[name="name"]').val());
    form.append('nickname', $('input[name="nickname"]').val());
    form.append('avatar', $('input[name="avatar"]')[0].files[0]);

    $.ajax({
            url: '/api/editprofile',
            type: "POST",
            data: form,
            cache: false,
            contentType: false,
            processData: false,
            success: function(resp) {
                swal(
                    resp.msg,
                    'Information Updated!',
                    'success'
                );
                changeUp(resp.nick, resp.name, resp.avatar);
            },
            error: function(e) {
                alert("danger");
            },
    });

}

$("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#sidetest").toggleClass("toggled");
    $("#sidetest").addClass("navbar-fixed-top");
    $("section").toggleClass("move");
});

$("#menu-main").click(function(e){
    e.preventDefault();
    $("#sidetest").removeClass("navbar-fixed-top");
});

$(window).resize(function() {
    if($('#menu-toggle').is(':visible')){
        $("#sidetest").addClass("navbar-fixed-top");
    }else{
        $("#sidetest").removeClass("navbar-fixed-top");
        $("prof-edit").addClass("resize");
    }
});





