import { getAdminCookie } from "@/utils/cookie";
import { request } from "@umijs/max";

type options = { [key: string]: any };

export type HTTPProtocol<T> = {
	code: number;
	msg: string;
	data: T;
};

export const jsonToForm = (json?: Record<string, any>): string => {
	if (!json) {
		return `${encodeURIComponent("admin_token")}=${encodeURIComponent(
			getAdminCookie(config.cookie_key),
		)}`;
	}
	json["admin_token"] =
		json["admin_token"] || getAdminCookie(config.cookie_key);
	const str = [];
	for (const key in json) {
		if (Object.prototype.hasOwnProperty.call(json, key)) {
			str.push(
				`${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`,
			);
		}
	}
	return str.length > 0 ? str.join("&") : "";
};

export const applyToken = (url: string) => {
	try {
		if (getAdminCookie(config.cookie_key)) {
			return url + `?admin_token=${getAdminCookie(config.cookie_key)}`;
		}
		return url;
	} catch (error) {
		return url;
	}
};

export async function getRequestData<T, U>(
	url: string,
	params: T,
	options?: options,
) {
	return request<HTTPProtocol<U>>(applyToken(url), {
		method: "GET",
		params: {
			...params,
		},
		...(options || {}),
	});
}

export async function postFormData<T, U = any>(
	url: string,
	body?: T extends Record<string, any> ? any : any,
	options?: options,
) {
	return request<HTTPProtocol<U>>(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
		data: jsonToForm(body),
		...(options || {}),
	});
}

export async function postJsonData<T, U>(
	url: string,
	body?: T,
	options?: options,
) {
	return request<HTTPProtocol<U>>(applyToken(url), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: body,
		...(options || {}),
	});
}
