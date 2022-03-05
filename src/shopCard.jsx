import React, { useState } from "react";
import { Image } from "cloudinary-react";
import "./shopCard.css";

const ShopCard = ({ shopcard, removeFromCard }) => {
	const [toggleIdShopCard, settoggleIdShopCard] = useState("");
	const [toggleIdForm, settoggleIdForm] = useState("display-none");
	const [nom, setnom] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [address, setaddress] = useState("");
	const [domaine, setdomaine] = useState("");
	return (
		<div className='module module-cart pull-left'>
			<div className='cart-icon'>
				<i className='fa fa-shopping-cart' />
				<span className='title'>shop cart</span>
				<span className='cart-label'>{shopcard.length}</span>
			</div>
			<div className='cart-box' id={toggleIdShopCard}>
				<div className='cart-overview'>
					<ul className='list-unstyled'>
						{shopcard.map((machine, index) => (
							<li key={index}>
								<Image
									className='img-responsive'
									cloudName='outibois'
									public_id={machine.image[0]}
								/>
								<div className='product-meta'>
									<h5 className='product-title'>
										{machine.name}
									</h5>
								</div>
								<a
									className='cancel'
									onClick={() => removeFromCard(machine)}
								>
									cancel
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='clearfix'></div>
				<div
					className='cart-control'
					onClick={() => {
						settoggleIdShopCard("display-none");
						settoggleIdForm("");
					}}
				>
					<a className='btn btn-secondary pull-right'>Devis</a>
				</div>
			</div>
			<div className='cart-box' id={toggleIdForm}>
				<label className='client-info-user'>Nom et Prénom</label>
				<input
					type='text'
					className='form-control'
					onChange={(e) => setnom(e.target.value)}
					required
				/>
				<label className='client-info-user'>Email</label>
				<input
					type='text'
					className='form-control'
					onChange={(e) => setemail(e.target.value)}
					required
				/>
				<label className='client-info-user'>Mobile</label>
				<input
					type='text'
					className='form-control'
					onChange={(e) => setmobile(e.target.value)}
					required
				/>
				<label className='client-info-user'>Addresse</label>
				<input
					type='text'
					className='form-control'
					onChange={(e) => setaddress(e.target.value)}
					required
				/>
				<label className='client-info-user'>Domaine d'activité</label>
				<input
					type='text'
					className='form-control'
					onChange={(e) => setdomaine(e.target.value)}
					required
				/>
				<div>
					<button className='form-control'>Confirmer</button>
					<button
						className='form-control'
						onClick={() => {
							settoggleIdShopCard("");
							settoggleIdForm("display-none");
						}}
					>
						Annuler
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShopCard;
