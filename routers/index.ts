import Admin from "./children/admin";

export default [
	Admin,
	{
		path: "/login",
		component: "./Login",
		extra: true,
		layout: false,
	},
	{
		path: "/home",
		component: "./Test",
		layout: "top",
		menuRender: false,
	},

	{
		path: "/",
		redirect: "admin",
	},
	{
		title: '404',
		path: '404',
		component: '@/pages/404'
	},
];
