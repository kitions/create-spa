export const DEFAULT_NAME = "Admin";

export const DEFAULT_AVATAR = "https://tuchuang-1253437688.cos.ap-shanghai.myqcloud.com/%E4%B8%8B%E8%BD%BD.png";

export const SUCCESS_CODE = 0;

export const SUCCESS_CODE_NEWS = 100000;

// NOTE: 正确的CODE码
export const SUCCESS_CODE_LIST = [SUCCESS_CODE, SUCCESS_CODE_NEWS];

export enum EnumAppENV {
	DEV = "dev",
	Test = "testbuild",
	Prod = "prod",
}

// 自定义一些请求配置
export type CustomConfig = {
	hideError: boolean; // 是否关闭统一的报错（不正确的CODE）
};
