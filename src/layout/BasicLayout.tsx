import React from "react";
import { Outlet } from "@umijs/max";
import style from "./index.scss";

const Layout = () => {
	return (
		<div>
			<div className={style.bg}>wrapper :12312</div>
			<Outlet />
		</div>
	);
};

export default Layout;
