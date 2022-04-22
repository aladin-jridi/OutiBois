import React, { useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import "./shopCard.css";

const ShopCard = ({ shopcard, removeFromCard, setshowCardShop }) => {
	const [toggleIdShopCard, settoggleIdShopCard] = useState("");
	const [toggleIdForm, settoggleIdForm] = useState("display-none");
	const [nom, setnom] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [address, setaddress] = useState("");
	const [domaine, setdomaine] = useState("");

	const submitDevis = () => {
		setshowCardShop(false);
		let devis = {
			nom,
			email,
			mobile,
			address,
			domaine,
			machines: shopcard.map((item) => item.name),
		};
		axios
			.post("/api/devit/adddevit", devis)
			.then(({ data }) => {
				alert("Votre demande de devis a été envoyer avec succéss");
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='shopCardContainer'>
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
				<div>
					<label>Nom et Prénom</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setnom(e.target.value)}
						required
					/>
				</div>
				<div className='client-info-user'>
					<label>Email</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setemail(e.target.value)}
						required
					/>
				</div>
				<div className='client-info-user'>
					<label>Mobile</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setmobile(e.target.value)}
						required
					/>
				</div>
				<div className='client-info-user'>
					<label>Addresse</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setaddress(e.target.value)}
						required
					/>
				</div>
				<div className='client-info-user'>
					<label>Domaine d'activité</label>
					<input
						type='text'
						className='form-control'
						onChange={(e) => setdomaine(e.target.value)}
						required
					/>
				</div>
				<div className='client-info-user'>
					<button
						className='btn btn-secondary pull-left shop-card-btn shopCardBtn'
						onClick={submitDevis}
					>
						Confirmer
					</button>
					<button
						className='btn btn-secondary pull-right shop-card-btn shopCardBtn'
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
