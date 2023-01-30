import { EnumAppENV } from "@/constants";

export const GetAPIHostURL = (url: string) => {	
	if (REACT_APP_ENV === EnumAppENV.DEV) {
		// 开代理
		return url;
	} else {
		// 不开代理
		return UMI_ENV !== EnumAppENV.DEV || !REACT_APP_ENV
			? config.api_host + url
			: url;
	}
};
