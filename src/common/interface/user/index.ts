export type LoginFormType = {
	username: string;
	password: string;
};

export interface loginResult {
	email_verify: string;
	token: string;
}

export type IUserInfo = {
	app: any[];
	create_at: number;
	email: string;
	expire_at: number;
	fullname: string;
	id: number;
	is_supper: boolean;
	last_login_ip: string;
	last_login_time: number;
	avatar?: string;
};
