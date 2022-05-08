import React, { useState } from 'react';
import {
	MailOutlined,
	MessageOutlined,
	MenuUnfoldOutlined,
	DownOutlined,
	UserOutlined,
	HomeOutlined,
	BankOutlined,
	BookOutlined,
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import images from '../../assets/images/logonew.png';
import SidebarMenu from './SidebarMenu';
import Program_DB_Master from '../../assets/static/Program_DB_Master';

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
{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-212886792-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-212886792-2');
</script>

{/* !-- Global site tag (gtag.js) - Google Analytics -- */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2NFZCB02TG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag()dataLayer.push(arguments);
  gtag('js', new Date());

  gtag('config', 'G-2NFZCB02TG');
</script>
<script type="text/javascript">
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    (window, document, "clarity", "script", "a0my3jch7e");
</script>
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
						Programs <DownOutlined />
					</div>
					<div className='nav-dropdown-wrapper'>
						<div className='nav-dropdown'>
							{Program_DB_Master.map(({ pathname, nameOfProgram }, index) => {
								return (
									<Link
										to={pathname}
										onClick={(e) => e.stopPropagation()}
										key={index}
									>
										{nameOfProgram}
									</Link>
								);
							})}
							<Link to='/programs' onClick={(e) => e.stopPropagation()}>
								All Programs
							</Link>
						</div>
					</div>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'navbar__link active' : 'navbar__link'
					}
					to='/scholarship'
				>
					<div>
						<BookOutlined />
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
						<MailOutlined />
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
						<BankOutlined />
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
