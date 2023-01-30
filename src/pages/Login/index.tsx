import { LoginFormType } from "@/common/interface/user";
import Notice from "@/components/Notice";
import { ResultOK } from "@/services/result";
import { sendLogin } from "@/services/user/login";
import { setAdminCookie } from "@/utils/cookie";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { history } from "@umijs/max";
import { CSSProperties } from "react";

const Styles: CSSProperties = {
	backgroundColor: "white",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const Login = () => {
	return (
		<div style={Styles}>
			<LoginForm
				logo="https://tuchuang-1253437688.cos.ap-shanghai.myqcloud.com/%E4%B8%8B%E8%BD%BD.png"
				title="公司"
				subTitle="公共后台管理"
				initialValues={{
					username: "test",
					password: "e10adc3949ba59abbe56e057f20f883e",
				}}
				onFinish={async (values: LoginFormType) => {
					if (
						values.username === "test" &&
						values.password === "e10adc3949ba59abbe56e057f20f883e"
					) {
						setAdminCookie(
							config.cookie_key,
							"link-cookie",
							2 * 24 * 3600 * 1000,
						);
						history.push("/admin");

						// const data = await sendLogin({
						// 	username: values.username,
						// 	password: values.password,
						// });

						// if (ResultOK(data)) {
						// 	setAdminCookie(
						// 		config.cookie_key,
						// 		data.data.token,
						// 		2 * 24 * 3600 * 1000,
						// 	);
						// 	history.push("/home");
						// }
					} else Notice.error("登录失败", "用户名或密码错误！");

					return true;
				}}
			>
				<>
					<ProFormText
						name="username"
						fieldProps={{
							size: "large",
							prefix: <UserOutlined className={"prefixIcon"} />,
						}}
						placeholder={"用户名: admin"}
						rules={[
							{
								required: true,
								message: "请输入用户名!",
							},
						]}
					/>
					<ProFormText.Password
						name="password"
						fieldProps={{
							size: "large",
							prefix: <LockOutlined className={"prefixIcon"} />,
						}}
						placeholder={"密码: 123456"}
						rules={[
							{
								required: true,
								message: "请输入密码！",
							},
						]}
					/>
				</>
			</LoginForm>
		</div>
	);
};

export default Login;
