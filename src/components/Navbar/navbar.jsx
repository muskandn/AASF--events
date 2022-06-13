import React, { useEffect, useState } from 'react';
import './navbar.css';
import AASFLogo from '../../assets/svgIcons/aasflogo';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const handleOpenNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const handleCloseNav = () => {
		setIsNavOpen(false);
	};

	const isActiveClass = (isActive) => {
		const activeClassName = isActive ? 'nav-links navbar-active' : 'nav-links';
		return activeClassName;
	};

	const handleNavLinkClick = () => {
		if (isNavOpen) {
			handleOpenNav();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 120);
		});
	}, []);

	return (
		<div
			className={
				scroll
					? 'navbar-container navbar-backdrop'
					: 'navbar-container navbar-opaque'
			}
		>
			<div
				className={isNavOpen ? 'navbar-main-container' : ''}
				onClick={() => handleCloseNav()}
			/>
			<nav className='navbar flex-centre' onClick={(e) => e.stopPropagation()}>
				<div className='nav-container flex-centre'>
					<div className='nav-logo'>
						<NavLink exact to='/'>
							<AASFLogo width={73} height={84} />
						</NavLink>
					</div>
					<ul className={isNavOpen ? 'nav-menu navbar-active' : 'nav-menu'}>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/abhishar'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Abhishar
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/blogs'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Blogs
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/events'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Events
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/team'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Team
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								exact='true'
								to='/contact'
								className={({ isActive }) => isActiveClass(isActive)}
								onClick={handleNavLinkClick}
							>
								Contact Us
							</NavLink>
						</li>
					</ul>
					<div className='nav-icon' onClick={handleOpenNav}>
						<i className={isNavOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
