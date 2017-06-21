Vue.component('starter-pack', {
	template: '#starter1-plate'
});

Vue.component('see-profile', {
	template: '#seeprofile-plate'
});

Vue.component('edit-profile', {
	template: '#editprofile-plate'
});

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


function edit_profile(){

    $.ajax({
            url: '/api/editprofile',
            contentType: 'application/json; charset=utf-8',
            data: {
		         name: $('input[name="name"]').val(),
		         nickname: $('input[name="nickname"]').val()
		 	},
			type: "POST",
            dataType: "json",
            success: function(resp) {
                alert(resp.msg);
            },
            error: function(e) {
        		alert("danger");
   			},
   			/*beforeSend: function(xhr){
   				var token = $('meta[name="csrf-token"]').attr('content');
	            if (token) {
	                  return xhr.setRequestHeader('X-CSRF-TOKEN', token);
	            }
   			},*/
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





