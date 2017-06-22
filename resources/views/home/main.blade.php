<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	
	<meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes">
	<meta id="token"  name="csrf-token" content="{{ csrf_token() }}">
	<title>@yield('title')</title>
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
	<link href="/css/app.css" rel="stylesheet">
	<link href="/css/sidebar.css" rel="stylesheet">
	<link href="/css/content.css" rel="stylesheet">
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="//cdn.bootcss.com/pixeden-stroke-7-icon/1.2.3/dist/pe-icon-7-stroke.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.css" rel="stylesheet">
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

			<div class="container-fluid" id="credent">
			<div class="row dropdown" id="right-menu">
				<a class="navbar-brand" id="profile-anchor"><img src="/uploads/avatar/{{ Auth::user()->avatar }}" class="img-circle" id="profile"></a>
				<a class="navbar-brand dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" id="upperprofname"><span id="profname">{{ Auth::user()->nickname }}</span></a>
				<ul class="dropdown-menu" role="menu" style="top: 51px; right: 15px; width: 100%; margin: 0 auto;">
					<li role="presentation">
						<a href="#"  id="nameofuser" @click="switchToMain">{{ Auth::user()->name }}</a>
					</li>
					<li role="presentation">
						<a href="#" @click="switchToEditProfile" >My Profile</a>
					</li>
				</ul>
				<a class="navbar-brand" id="logout" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();"><span id="lbll" class="pe-7s-unlock pe-lg"></span></a>
			</div>
			</div>

		</div>
	</nav>
	<input type="checkbox" id="navBtn" class="navBtn"/>
	<div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
		<nav class="navbar navbar-inverse sidebar navbar-fixed-top" role="navigation" id="sidetest">
			<a class="navbar-brand" id="menu-toggle" for="navBtn"><span id="lbll1" class="pull-right hidden-xs showopacity fa fa-bars"></a>
			<div id="wrapper" class="active">
				
				<ul class="nav navbar-nav" id="testt">
					<li id="alpha">
		            	<a href="#" @click="switchToMain">{{ Auth::user()->name }}<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-cog"></span></a>
		            </li>
		            <li id="alpha">
		            	<a href="#" @click="switchToEditProfile">My Profile<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-cog"></span></a>
		            </li>
		            <li>
		            	<a href="#" @click="switchToMain">Jarvis<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-cog"></span></a>
		            </li>
		            <li>
		            	<a href="#">Dashboard<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-home"></span></a>
		            </li>
		            <li>
		            	<a href="#">Financials<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-bank"></span></a>
		            </li>
		            <li>
		            	<a href="#">My Preferences<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-dot-circle-o"></span></a>
		            </li>
		            <li id="alpha">
		            	<a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">Log Out<span id="lbll1" class="pull-right hidden-xs showopacity fa fa-sign-out"></span></a>
		            </li>
				</ul>
			</div>
		</nav>
		<br>
	</div>
</div>
<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
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
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript">
		$.ajaxSetup({
		   headers: { 'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content') }
		});
		</script>
    <script type="text/javascript" src="/js/home.js"></script>
</body>
</html>