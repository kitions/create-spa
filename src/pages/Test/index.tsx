import { LoginFormType } from "@/common/interface/user";
import Notice from "@/components/Notice";
import { ResultOK } from "@/services/result";
import { sendLogin } from "@/services/user/login";
import { setAdminCookie } from "@/utils/cookie";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm, ProFormText } from "@ant-design/pro-components";
import { history } from "@umijs/max";
import { CSSProperties } from "react";
import style from "./index.scss";

const Test = () => {
	return (
		<div>
			<div className={style.bg}>fsdfdsfffdsf</div>
			1231231231212312312
		</div>
	);
};

export default Test;
