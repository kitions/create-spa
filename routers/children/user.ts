export default {
	path: "/user",
	name: "User",
	routes: [
		{
			path: "/user",
			redirect: "home",
		},
		{
			name: "首页asdsa",
			path: "home",
			component: "./Home",
			icon: "crown",
		},
	],
};
