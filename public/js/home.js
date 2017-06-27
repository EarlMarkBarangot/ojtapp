Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.use(VueRouter);

var homeg = Vue.component('starter-pack', {
	template: '#starter1-plate'
});

Vue.component('see-profile', {
	template: '#seeprofile-plate'
});

var profg = Vue.component('edit-profile', {
	template: '#editprofile-plate',
	components: {
		'modal': VueStrap.modal
	},
	data: function(){
		return {
			name: '',
			nickname: '',
			avatar: '',
			modalShown: false
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
				this.loadInfo();
				this.toggleModal();
				this.$parent.alertNow(response.data.name, response.data.nick, response.data.avatar);
			});
		},
		toggleModal() {
        	this.modalShown = true;
    	}
	}
});

const routes = [
	{ path: '/profile', name:'Profile', component: profg},
	{ path: '/home', name:'Home', component: homeg},
	{ path: '*', redirect: { name: 'Home' } }
];

const router = new VueRouter({
	routes,
	mode: 'history'
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
    parentLoadInfo:function(){
		Vue.http.get('/api/getcurrentprofile').then((response) => {
			this.currentName = response.data.name;
			this.currentNickName = response.data.nickname;
			this.currentAvatar = response.data.avatar;
			console.log(this.currentNickname);
		});
	},
	alertNow: function(newName, newNickName, newAvatar){
		this.currentName = newNickName;
		this.currentNickName = newNickName;
		this.currentAvatar = newAvatar;
	}
  },
  components:['starter-pack','see-profile','edit-profile'], 
  router
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





