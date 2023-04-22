import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Main.css";

function Main() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<NavLink to='/'>
        <button id="logo">Georgian Virtual<br/> Life</button>
      </NavLink>

			<nav ref={navRef}>

        <li className="link">
          <NavLink to='/howtoplay' activeClassName='active'>
            <button className="link">როგორ ვითამაშო?</button>
          </NavLink>
        </li>

        <li className="link">
          <NavLink to='/admintest' activeClassName='active'>
            <button className="link">ადმინ-ტესტი</button>
          </NavLink>
        </li>

        <li className="link">
          <NavLink to='/links' activeClassName='active'>
            <button className="link">ბმულები</button>
          </NavLink>
        </li>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Main;