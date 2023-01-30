import { DEFAULT_AVATAR } from "@/constants";
import { setAdminCookie } from "@/utils/cookie";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { history, useModel } from "@umijs/max";
import { Avatar, Menu, Spin } from "antd";
import React, { useCallback } from "react";
import HeaderDropdown from "../HeaderDropdown";
import styles from "./index.less";

export type GlobalHeaderRightProps = {
	menu?: boolean;
	avatar?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({avatar}) => {
	const { initialState, setInitialState } = useModel("@@initialState");
	const { name } = useModel("global");

	const loginOut = async () => {
		setAdminCookie(config.cookie_key, "", 0);
		history.push("/login");
	};

	const onMenuClick = useCallback(
		(event: { key: any }) => {
			const { key } = event;
			if (key === "logout") {
				setInitialState((s) => ({ ...s, currentUser: undefined }));
				loginOut();
				return;
			}
			if (key === "settings") {
				return;
			}
		},
		[setInitialState],
	);

	const loading = (
		<span className={`${styles.action} ${styles.account}`}>
			<Spin
				size="small"
				style={{
					marginLeft: 8,
					marginRight: 8,
				}}
			/>
		</span>
	);

	if (!initialState) {
		return loading;
	}

	const { currentUser } = initialState;

	const menuHeaderDropdown = (
		<Menu
			className={styles.menu}
			onClick={onMenuClick}
			items={[
				{
					key: "settings",
					label: (
						<>
							<SettingOutlined />
							修改密码
						</>
					),
				},
				{
					key: "logout",
					label: (
						<>
							<LogoutOutlined />
							退出登录
						</>
					),
				},
			]}
		/>
	);
	return (
		<HeaderDropdown overlay={menuHeaderDropdown}>
			<span className={`${styles.action} ${styles.account}`}>
				{avatar && (
					<Avatar
						className={styles.avatar}
						src={currentUser?.avatar || DEFAULT_AVATAR}
					/>
				)}
				<span className={`${styles.name} anticon`}>
					{currentUser?.fullname || name}
				</span>
			</span>
		</HeaderDropdown>
	);
};

export default AvatarDropdown;
