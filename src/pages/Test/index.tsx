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
			123123
		</div>
	);
};

export default Login;
