import Admin from "./children/admin";
import User from "./children/user";

export default [
	Admin,
	User,
	{
		path: "/login",
		component: "./Login",
		extra: true,
		layout: false,
	},
	{
		path: "/",
		component: "@/layout/BasicLayout",
		routes: [
			{ path: "/list", component: "./Test" },
			{ path: "/admina", component: "./Test" },
		],
	},
	{
		path: "/home",
		component: "@/pages/Test",
		// layout: "top",
		menuRender: false,
	},
	{
		title: "404",
		path: "404",
		component: "@/pages/404",
	},
];
