export default {
	path: "/admin",
	name: "ADMIN",
	routes: [
		{
			path: "/admin",
			redirect: "home",
		},
		{
			name: "首页",
			path: "home",
			component: "./Home",
			icon: "crown",
		},
	],
};
