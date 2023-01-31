
export type HTTPProtocol<T> = {
	code: number;
	msg: string;
	data: T;
};

export const ProtoTal = <T>(data: T) => {
	return {
		code: 0,
		msg: "成功",
		data: data
	}
}


export const ProtoTalResult = <T>(data: T) => {
	return new Promise<HTTPProtocol<T>>(resolve => {
		setTimeout(() => {
			resolve(
				ProtoTal(data)
			)
		}, 200)
	})
}
