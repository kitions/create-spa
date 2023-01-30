import React from 'react';
import { Outlet } from '@umijs/max';

const Layout = (props) =>{
	return (
		<div>
			wrapper :12312
			<Outlet />
		</div>
	);
}

export default Layout
