export const getAdminCookie = (key?: string) => {
	const cookie = document.cookie;
	const reg = new RegExp(`(^| )${key || config.cookie_key}=([^;]*)(;|$)`);
	const arr = cookie && cookie.match(reg);
	if (arr) {
		return arr[2];
	}
	return "";
};

export const setAdminCookie = (
	key: string,
	value: string,
	expires: number | string,
	domain?: string,
	path?: string,
) => {
	if (!key) {
		return;
	}
	let cookie = `${key}=${encodeURIComponent(value)}`;
	if (typeof expires === "number") {
		const date = new Date();
		date.setTime(date.getTime() + expires);
		cookie += `;expires=${date.toUTCString()}`;
	}
	cookie += `;domain=${domain || config.cookie_domain}`;
	cookie += `;path=${path || "/"}`;
	document.cookie = cookie;
};
