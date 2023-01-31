import mockjs from 'mockjs';
import { ProtoTal } from './proto';


export default {
	'GET /api/users': [
		{ id: 1, name: 'foo' },
		{ id: 2, name: 'bar' }
	],

	'GET /api/tags': (req: any, res: any) => {
		res.json(
			ProtoTal(mockjs.mock(
				{
					'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
				})
			)
		)
	},

	"GET /api/v1/queryUserList": (req: any, res: any) => {
		res.json({
			code: 0,
			msg: "成功",
			data: {
				list: [
					{ id: 0, name: "Umi", nickName: "U", gender: "MALE" },
					{ id: 1, name: "Fish", nickName: "B", gender: "FEMALE" },
				]
			},
		});
	},
	"PUT /api/v1/user": (req: any, res: any) => {
		res.json({
			code: 0,
			msg: "成功",
		});
	},
};
