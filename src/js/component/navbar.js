import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light" >
			<h2 className="text-success">LA GUERRA DE LAS GALAXIAS</h2>
			<button className="btn btn-success dropdown-toggle ms-auto mx-2 mb-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favoritos
			</button>
			<div className="dropdown-menu dropdown-menu-end p-2">
				<ul className="px-2">
					{store.favorites.map((favorite, index) => (
						<li className="navbar d-flex justify-content-between dropdown-menu-item" key={index}>
							<div>{favorite.name}</div>
							<div className="deleteFav mx-2" onClick={() => actions.deleteFav(favorite.name)}>
								<i className="fas fa-trash-alt"></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};