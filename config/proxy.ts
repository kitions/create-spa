import { EnumAppENV } from "./../src/constants";

/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
const { REACT_APP_ENV } = process.env;

const GetAPPEnv =
	REACT_APP_ENV === EnumAppENV.Prod
		? "https://platform.aaa.cn"
		: "https://testplatform.aaa.cn";

// NOTE:: changeOrigin
// 可以从 http 代理到 https
// 依赖 origin 的功能可能需要这个，比如 cookie

export default {
	dev: {
		"/api": {
			target: GetAPPEnv + "/api/",
			changeOrigin: true,
			pathRewrite: { "^/api": "" },
		},
		// "/usercenter": {
		// 	target: GetAPPEnv + "/usercenter/",
		// 	changeOrigin: true,
		// 	pathRewrite: { "^/usercenter": "" },
		// },
	},
};
