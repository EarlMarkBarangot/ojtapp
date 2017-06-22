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
	var n = $('input[name="name"]').val();
	var nm = $('input[name="nickname"]').val();
	var av = $('input[name="avatar"]')[0].files[0];

	var form = new FormData();
	form.append('name', n);
	form.append('nickname', nm);
	form.append('avatar', av);

    $.ajax({
            url: '/api/editprofile',
            type: "POST",
            /*data: {
		         name: $('input[name="name"]').val(),
		         nickname: $('input[name="nickname"]').val(),
		         _token: "{{ csrf_token }}",
		 	},
            dataType: "json",*/
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

/*new Vue({
	el: '#AuthEdit',
	data:{
		name: '',
		nickname: '',
	},
	methods: {
		editIt: function(){
			var url = "/api/editprofile";
			var token = "{{ csrf_token() }}";
			this.$http.post(link, {name: this.name, nickname: this.nickname, _token: token}).then((response) => {
				alert(response.data.msg);
			}, (response) => {
				alert('Something went wrong!');
			});
		}
	}
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





