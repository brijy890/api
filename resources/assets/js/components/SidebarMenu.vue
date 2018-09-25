<template>
	<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
		<div class="menu_section">
			<h3>General</h3>
			<ul class="nav side-menu">
				<router-link tag="li" to="/home"><a><i class="fa fa-home"></i>Dashboard</a></router-link>
				<router-link tag="li" to="/users"><a><i class="fa fa-user"></i>Users</a></router-link>
				<router-link tag="li" to="/products"><a><i class="fa fa-product-hunt"></i>Products</a></router-link>
			</ul>
		</div>
	</div>
</template>