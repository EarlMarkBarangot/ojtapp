<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	
	<meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes">
	<meta id="token"  name="csrf-token" content="{{ csrf_token() }}" value="{{ csrf_token() }}">
	<title>@yield('title')</title>
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
	<link href="/css/app.css" rel="stylesheet">
	<link href="/css/sidebar.css" rel="stylesheet">
	<link href="/css/content.css" rel="stylesheet">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="//cdn.bootcss.com/pixeden-stroke-7-icon/1.2.3/dist/pe-icon-7-stroke.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.css" rel="stylesheet">
	<link rel='stylesheet' href="/css/nprogress.css">
</head>
<body class="float-landing sidebar-open" data-spy="scroll" data-offset="70" data-taget=".navbar-default">
	<div id="starthere">
	<!--header-->
	<div>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-header">
			<button type="button" id="menu-main" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">JARVIS</a>

			<div class="container-fluid" id="top_menu">
			<div class="row dropdown" id="right_menu">
				<a class="navbar-brand dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" id="profile_anchor"><img :src="currentAvatar" class="img-circle" id="profile_pic"></a>
				<a class="navbar-brand dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" id="upperprofname"><span id="profname">@{{currentNickName}}</span></a>
				<ul class="dropdown-menu bubble" role="menu" id="separateForm">
					<li>
						<router-link to="/home" class="top-sub-menu" tag="li">&nbsp;My Home</router-link>
					</li>
					<li>
						<router-link to="/profile" class="top-sub-menu" tag="li">&nbsp;My Profile</router-link>
					</li>
				</ul>
				<a class="navbar-brand" id="logout" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();"><span id="top_logout_icon" class="pe-7s-unlock pe-lg"></span></a>
			</div>
			</div>

		</div>
	</nav>
	<input type="checkbox" id="navBtn" class="navBtn"/>
	<div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
		<nav class="navbar navbar-default sidebar navbar-fixed-top" role="navigation" id="sidetest">
			<a class="navbar-brand" id="menu-toggle" for="navBtn"><span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-bars"></a>
			<div id="wrapper" class="active">
				
				<ul class="nav navbar-nav" id="menu_Items">
		            <li id="key_menu">
		            	<router-link to="/home">@{{currentName}}<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-cog"></span></router-link>
		            </li>
		            <li id="key_menu">
		            	<router-link to="/profile">My Profile<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-cog"></span></router-link>
		            </li>
		            <li>
		            	<router-link to="/home">Jarvis<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-cog"></span></router-link>
		            </li>
		            <li>
		            	<a href="#">Dashboard<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-home"></span></a>
		            </li>
		            <li>
		            	<a href="#">Financials<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-bank"></span></a>
		            </li>
		            <li>
		            	<a href="#">My Preferences<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-dot-circle-o"></span></a>
		            </li>
		            <li id="key_menu">
		            	<a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Log Out<span id="menu_icons" class="pull-right hidden-xs showopacity fa fa-sign-out"></span></a>
		            </li>
				</ul>
			</div>
		</nav>
		<br>
	</div>
</div>
<form id="logout-form" action="{{ route('logout') }}" method="POST">
                                            {{ csrf_field() }}
                                        </form>

	<br><br><br>
	<!--header end-->

	@yield('content')

	<br><br>
	<footer class="footer navbar-fixed-bottom">
        <div class="container text-center">
            <span>&copy; Test Span</span>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.js"></script>
    <script type="text/javascript" src="/js/velocity.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-strap/1.1.37/vue-strap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/2.6.0/vue-router.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript" src="/js/nprogress.js"></script>
    <script type="text/javascript" src="/js/home.js"></script>
</body>
</html>