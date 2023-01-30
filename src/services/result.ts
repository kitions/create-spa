import { SUCCESS_CODE_LIST } from "@/constants";
import { HTTPProtocol } from "./http";

export const ResultOK = <T>(data: HTTPProtocol<T>) => {
	if (data && SUCCESS_CODE_LIST.includes(data.code)) {
		return true;
	}
	return false;
};
