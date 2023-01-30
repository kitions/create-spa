import type { IApi } from "@umijs/max";

const test = `
<div style="display: flex; align-items: center; justify-content: center">
    <img src="./home-page-logo.png" width="64" style="margin-right: 8px" />
    Link
</div>
`;

// 插件
export default (api: IApi) => {
	api.modifyHTML(($) => {
		// $("body").append([test]);
		return $;
	});
};
