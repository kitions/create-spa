import { defineConfig } from "@umijs/max";

const { UMI_ENV, REACT_APP_ENV } = process.env;

export default defineConfig({
	define: {
		UMI_ENV,
		REACT_APP_ENV,
		config: {
			cookie_domain: "",
			cookie_key: "admin_auth_token",
			change_pwd: "target_page=edit_password",
			api_host: "https://platform.aaa.cn",
			upload_dir:
				"https://platform.aaa.cn/appcenter/admin/upload_image_dir",
		},
	},
});
