// 运行时配置

import { PageContainer, ProBreadcrumb, Settings } from "@ant-design/pro-components";
import {
	AxiosRequestConfig,
	AxiosResponse,
	history,
	matchRoutes,
	RequestConfig,
	RunTimeLayoutConfig,
} from "@umijs/max";
import { Space } from "antd";
import { CSSProperties } from "react";
import Notice from "./components/Notice";
import AvatarDropdown from "./components/RightContent/AvatarDropdown";
import { CustomConfig, DEFAULT_AVATAR, SUCCESS_CODE_LIST } from "./constants";
import { HTTPProtocol } from "./services/http";
import { getAdminCookie } from "./utils/cookie";
import { GetAPIHostURL } from "./utils/util";

import styles from "../src/components/RightContent/index.less";
import { IUserInfo } from "./common/interface/user";
import { ResultOK } from "./services/result";
import { getUserInfo } from "./services/user/login";
import { commonErrorHandler } from "./utils/error";
import { RouteObject } from "react-router";

const Styles: CSSProperties = {
	padding: "6px 24px 16px",
};

/**
 * request全局配置
 */
export const request: RequestConfig = {
	timeout: 8000,
	withCredentials: false,
	errorConfig: {
		// 错误抛出
		errorThrower: () => {
			// 抛出自定义的错误
		},
		// 错误接收及处理
		errorHandler: (error: any, opts: any) => {
			if (opts?.skipErrorHandler) throw error;
			commonErrorHandler(error);
		},
	},
	requestInterceptors: [
		(url, options) => {
			return {
				url: GetAPIHostURL(url),
				options: {
					...options,
					headers: {
						...(options?.headers ?? {}),
					},
				},
			};
		},
	],
	responseInterceptors: [
		(response): any => {
			const { data, status, config } = response as AxiosResponse<
				HTTPProtocol<any>
			>;
			// 自定义一些配置，详见 constants-> CustomConfig
			const customConfig = response.config as AxiosRequestConfig<any> &
				CustomConfig;

			if (status === 200) {
				if (!data || !SUCCESS_CODE_LIST.includes(data.code)) {
					console.log(`请求错误链接：${config.url}`);

					if (!customConfig.hideError) {
						Notice.error("请求出错", data.msg);
					}
				}
			}
			return response;
		},
	],
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
	settings?: Partial<Settings>;
	name?: string; // 企业名
	token?: string;
	currentUser?: IUserInfo; // 用户信息
}> {
	const fetchUserInfo = async () => {
		try {
			const info = await getUserInfo();
			if (ResultOK(info)) {
				return info.data;
			}
			return undefined;
		} catch (error) {
			history.push("/login");
		}
		return undefined;
	};
	const currentUser = await fetchUserInfo();

	return {
		currentUser,
		name: "admin",
		token: getAdminCookie(config.cookie_key) || "",
	};
}

export function onRouteChange({ location, clientRoutes }: {location: Location, clientRoutes: RouteObject[]}) {
	const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route
	if (!route) {
		history.push('/404');
	}
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
	return {
		title: initialState?.name,
		layout: "mix",
		fixedHeader: true,
		fixSiderbar: true,
		splitMenus: false,
		logo: "https://tuchuang-1253437688.cos.ap-shanghai.myqcloud.com/%E4%B8%8B%E8%BD%BD.png",
		menuHeaderRender: undefined,
		menuFooterRender: false,
		footerRender: false,
		hasSiderMenu: true,
		menu: {
			locale: false,
			type: "group",
		},
		// 设置布局颜色
		token: {
			header: {
				heightLayoutHeader: 48,
				// colorBgHeader: '#292f33',
			},
			colorTextAppListIconHover: "#fff",
			colorTextAppListIcon: "#dfdfdf",
			sider: {
				// 浅色
				colorMenuBackground: "#fff",
				colorTextMenu: "rgba(89, 89, 89, 0.6)",
				colorTextMenuSelected: "#000",
				colorTextMenuActive: "rgba(89, 89, 89, 1)",

				// 深色
				// colorBgCollapsedButton: '#fff',
				// colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
				// colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
				// colorMenuBackground: '#041527',
				// colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
				// colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
				// colorMenuItemDivider: 'rgba(255,255,255,0.15)',
				// colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
				// colorBgMenuItemSelected: '#448EF7 !important',
				// colorTextMenuSelected: '#fff',
				// colorTextMenuItemHover: '#fff',
				// colorTextMenu: 'rgba(255,255,255,0.75)',
				// colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
				// colorTextMenuTitle: 'rgba(255,255,255,0.95)',
				// colorTextMenuActive: 'rgba(255,255,255,0.95)',
				// colorTextSubMenuSelected: '#fff',
			},
			pageContainer: {
				paddingInlinePageContainerContent: 24,
				paddingBlockPageContainerContent: 8,
			},
		},
		avatarProps: {
			title: <Space key={1} className={`${styles.right}`}>
				<AvatarDropdown />
			</Space>,
			src: initialState?.currentUser?.avatar || DEFAULT_AVATAR
		},
		onPageChange: () => {
			if (!initialState?.token) {
				history.push("/login");
			}
		},
		rightContentRender: (props) => {
			if (props.layout === "mix") {
				return <Space className={`${styles.right}`}>
					<AvatarDropdown avatar />
				</Space>
			}
			return <></>
		},
		// 面包屑展示在头部  有点丑-。-
		// headerContentRender: () => {
		//   return <ProBreadcrumb />;
		// },
		childrenRender: (dom) => {
			return (
				<PageContainer header={{ title: "", style: Styles }}>
					{dom}
				</PageContainer>
			);
		},
	};
};
