import { defineConfig } from "@umijs/max";
import routes from "../routers";
import proxy from "./proxy";
import devConfig from "./config.dev.testbuild";
import prodConfig from "./config.dev.prod";
import { EnumAppENV } from "./../src/constants";
const { REACT_APP_ENV } = process.env;
const more = REACT_APP_ENV === EnumAppENV.Prod ? prodConfig : devConfig;

export default defineConfig({
	antd: {},
	access: {},
	model: {},
	initialState: {},
	request: {
		dataField: "",
	},
	fastRefresh: true,
	outputPath: "build/dist",
	history: {
		type: "hash",
	},
	layout: {
		navTheme: "realDark",
		locale: true,
	},
	locale: {
		antd: true,
	},
	legacy: {
		nodeModulesTransform: false,
	},
	ignoreMomentLocale: true,
	proxy: proxy["dev"],
	routes: routes,
	npmClient: "pnpm",
	devtool: process.env.UMI_ENV === "dev" ? "source-map" : false,
	headScripts:
		REACT_APP_ENV !== "dev"
			? [
				"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.production.min.js",
				"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.production.min.js",
			]
			: [
				// 'https://unpkg.com/react@18/umd/react.development.js',
				// 'https://unpkg.com/react-dom@18/umd/react-dom.development.js'
			],
	...more,
});
