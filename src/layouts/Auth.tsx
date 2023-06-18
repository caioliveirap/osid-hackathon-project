import React from 'react';

// components

// import Navbar from "components/Navbars/AuthNavbar.js";
// import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }: any) {
	return (
		<>
			{/* <Navbar transparent /> */}
			{/* <main>
				<section className="relative w-full h-full py-40 min-h-screen m-0">
					<div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
					{children}
				</section>
			</main> */}
			<main className="h-screen">
				<section
					className="h-screen"
					style={{
						background: 'url("/images/login_bg.png")',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundColor: '#4DA2D5',
						backgroundBlendMode: 'multiply',
						overflow: 'auto',
					}}
				>
					{children}
				</section>
			</main>
		</>
	);
}
