import { useState } from 'react';
import nanoId from 'nano-id';
import '../styles/header.scss';

export function Header({ currentRoute = '/' }) {
	const [menu, setMenu] = useState(false);

	const routes = [
		{ route: '/', name: 'Inicio' },
		{ route: 'nosotros', name: 'Nosotros' },
		{ route: 'planes', name: 'planes' },
		{ route: 'fibra', name: 'Fibra Optica' },
		{ contacto: 'contacto', name: 'Contacto' }
	];

	return (
		<header className="header">
			<img className="header__logo" src="./assets/logo.png" alt="Wisptic Perú" />

			<button onClick={() => setMenu(!menu)} className="header__menu"></button>

			<nav className={`header__navbar${(menu) ? ' header__navbar--hidden' : ''}`}>
				<ul className="header__list">
					{routes.map(({ route, name }) => {
						return (
							<li>
								<a
									key={nanoId()}
									className={`header__link${(currentRoute === route) ? ' header__link--active' : ''}`}
									href={route}
								>
									{name}
								</a>
							</li>
						)
					})}
					<li>
						<a href="tel:+51910827075" className="header__link--phone">
							<i className="fas fa-phone-alt header__icon"></i>
							910-827-075
						</a>
					</li>
					<li>
						<a href="#" className="header__link--button">
							<i className="far fa-user"></i>
							Mi cuenta
						</a>
					</li>
				</ul>
			</nav>
		</header>

	)
}