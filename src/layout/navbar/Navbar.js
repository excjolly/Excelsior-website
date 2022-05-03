import React, { useState } from 'react';
import {
	FileOutlined,
	StockOutlined,
	MessageOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import images from '../../assets/images/logonew.png';
import SidebarMenu from './SidebarMenu';

const Navbar = () => {
	const isSmallerDevice = useMediaQuery({ query: '(max-width: 940px)' });
	const [isSidebarMenuVisible, setIsSidebarMenuVisible] = useState(false);

	return (
		<nav className='navbar__container'>
			{isSmallerDevice && (
				<SidebarMenu
					visible={isSidebarMenuVisible}
					onClose={() => setIsSidebarMenuVisible(false)}
				/>
			)}

			<Link to='/home' className='navbar__brand'>
				<img className='sidebarmenu__brand-logo' src={images} alt='logo' />
			</Link>
			<div className='navbar__items'>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/home'
				>
					<div>
						<HomeOutlined />
						Home
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/blogs'
				>
					<div>
						<MessageOutlined />
						Blogs
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/programs'
				>
					<div>
						<UserOutlined />
						Programs
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/scholarship'
				>
					<div>
						<FileOutlined />
						Scholarship
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/contact'
				>
					<div>
						<StockOutlined />
						Contact
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/aboutus'
				>
					<div>
						<StockOutlined />
						About Us
					</div>
				</NavLink>
			</div>

			<div
				onClick={() => setIsSidebarMenuVisible(true)}
				className='navbar__mobile-toggle'
			>
				<MenuUnfoldOutlined
					style={{
						fontSize: 26,
						color: '#fff',
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
