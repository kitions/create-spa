import { IUserInfo, LoginFormType, loginResult } from "@/common/interface/user";
import { getRequestData, postFormData, postJsonData } from "../http";

export function sendLogin(
	body: LoginFormType,
	options?: { [key: string]: any },
) {
	return postFormData<LoginFormType, loginResult>(
		"/admincenter/admin/user/login",
		body,
		{ ...options },
	);
}

export async function getUserInfo() {
	return postFormData<null, IUserInfo>("/admincenter/admin/token/info");
}

// DELETE:
export function sendLoginv2(
	body: LoginFormType,
	options?: { [key: string]: any },
) {
	return postJsonData<LoginFormType, loginResult>(
		"/admincenter/admin/user/login",
		body,
		{ ...options },
	);
}

// DELETE:
export function sendLoginv3(
	body: LoginFormType,
	options?: { [key: string]: any },
) {
	return getRequestData<LoginFormType, loginResult>(
		"/admincenter/admin/user/login",
		body,
		{ ...options },
	);
}
