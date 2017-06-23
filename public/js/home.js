Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

Vue.component('starter-pack', {
	template: '#starter1-plate'
});

Vue.component('see-profile', {
	template: '#seeprofile-plate'
});

Vue.component('edit-profile', {
	template: '#editprofile-plate',
	data: function(){
		return {
			name: '',
			nickname: '',
			avatar: ''
		}
	},
	created: function(){
		this.loadInfo();
	},
	methods: {
		loadInfo: function(){
			this.$http.get('/api/getcurrentprofile').then((response) => {
				this.name = response.data.name;
				this.nickname = response.data.nickname;
				this.avatar = response.data.avatar;
			});
		},
		newInfo: function(){
			this.$http.post('/api/editprofile', retInfo()).then((response) => {
				swal(
  					response.data.msg,
  					'Information Updated!',
  					'success'
				);
				this.loadInfo();
				this.$parent.$options.methods.parentLoadInfo();
			});
		}
	}
});


new Vue({
	data:{
  		current:"starter-pack",
  		currentName: '',
  		currentNickName: '',
  		currentAvatar: '',
  },
  created: function(){
  	this.parentLoadInfo();
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
    },
    parentLoadInfo:function(){
		Vue.http.get('/api/getcurrentprofile').then((response) => {
			this.currentName = response.data.name;
			this.currentNickName = response.data.nickname;
			this.currentAvatar = response.data.avatar;
			console.log(this.currentNickname);
		});
	},
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





