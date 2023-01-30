import { notification } from "antd";

export default abstract class Notice {
	static success(title: string, des: string = "") {
		notification.success({
			message: title,
			description: des,
			duration: 3,
		});
	}

	static warning(title: string, des: string = "") {
		notification.warning({
			message: title,
			description: des,
			duration: 3,
		});
	}
	static info(title: string, des: string = "") {
		notification.info({
			message: title,
			description: des,
			duration: 3,
		});
	}

	static error(title: string, des: string = "") {
		notification.error({
			message: title,
			description: des,
			duration: 3,
		});
	}
}
