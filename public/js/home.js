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


/*var addInfo = new Vue({ 
	el: '#starthere',
	methods:{
		addInfo:function(){
			$.ajax({
		        url: '/api/edit-profile',
		        contentType: 'application/json; charset=utf-8',
		        mimeType: "multipart/form-data",
		        data: JSON.stringify({
		                name: $('name["name"]').val(),
		                nickname: $('name["nickname"]').val()
		        }),
		        type: "POST",
		        dataType: "json",
		        success: function (resp) {
		        	alert(resp);
		        },

		        error: function(e){
		            alert("danger! Something went wrong in logging in!");
		        },

		    });
		}
	},
});*/



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



/*function myProfile(){
	$('#starthere').load('/profile/');
}

function editProfile(){
	$('#starthere').load('/editprofile/');
}*/




