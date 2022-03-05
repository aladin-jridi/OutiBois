import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import "./Home.css";
import MachineCard from "./machineCard.jsx";
import ShopCard from "./shopCard";

function Home() {
	const [newMachines, setnewMachines] = useState([]);
	const [oldMachines, setoldMachines] = useState([]);
	const [accessoires, setaccessoires] = useState([]);
	const [current, setcurrent] = useState([]);
	const [shopcard, setshopcard] = useState([
		// {
		// 	discription:
		// 		"Utilisation de la table coulissante 405mm largeur haute résistance en alliage d'aluminium et de magnésium. - La lame peut basculer entre 0 degrés et 45 degrés avec affichage numérique montrant le degré. - La structure haute de la plaque de la force dans le corps de la machine peut assurer une grande stabilité et calme lorsque la machine fonctionne. -Vitesse de rotation peut être ajustée à 4500 / 5500rpm qui peut couper parfaitement. Il existe de nombreux accessoires en option, qui peuvent répondre à la plupart de vos besoins dans le travail quotidien. Dimension table coulissante: 3200mm * 405mm (3800 * 405 en option) La capacité de coupe brut 3200mm (3800mm en option) Largeur de coupe entre lame et guide de refente 1350mm Inclinaison lame de scie 0 ° à 45 ° Style d’inclinaison Manuel Hauteur maximale de coupe: 95mm (90 °) 55 mm (45 °) Taille maximale de la lame :350mm * 30mm Diamètre inciseur :120 * 20mm",
		// 	image: ["pyj1gs4dtccwrcfl90xi"],
		// 	name: "SCIE A PANNEAUX ESMAK ",
		// },
		// {
		// 	discription:
		// 		"Utilisation de la table coulissante 405mm largeur haute résistance en alliage d'aluminium et de magnésium. - La lame peut basculer entre 0 degrés et 45 degrés avec affichage numérique montrant le degré. - La structure haute de la plaque de la force dans le corps de la machine peut assurer une grande stabilité et calme lorsque la machine fonctionne. -Vitesse de rotation peut être ajustée à 4500 / 5500rpm qui peut couper parfaitement. Il existe de nombreux accessoires en option, qui peuvent répondre à la plupart de vos besoins dans le travail quotidien. Dimension table coulissante: 3200mm * 405mm (3800 * 405 en option) La capacité de coupe brut 3200mm (3800mm en option) Largeur de coupe entre lame et guide de refente 1350mm Inclinaison lame de scie 0 ° à 45 ° Style d’inclinaison Manuel Hauteur maximale de coupe: 95mm (90 °) 55 mm (45 °) Taille maximale de la lame :350mm * 30mm Diamètre inciseur :120 * 20mm",
		// 	image: ["pyj1gs4dtccwrcfl90xi"],
		// 	name: "SCIE A PANNEAUX ESMAK ",
		// },
	]);
	const [displayCard, setdisplayCard] = useState("machine-card-none");
	const [currentMachine, setcurrentMachine] = useState({
		image: "",
		name: "",
		discription: "",
	});

	const fetchdata = () => {
		axios
			.get("http://localhost:5000/api/newMachine/findAll")
			.then(({ data }) => {
				// console.log(data);
				setnewMachines(data);
				setcurrent(data);
			})
			.then(() => {
				axios
					.get("http://localhost:5000/api/oldMachine/findAll")
					.then(({ data }) => {
						setoldMachines(data);
					});
			})
			.then(() => {
				axios
					.get("http://localhost:5000/api/accessoire/findAll")
					.then(({ data }) => {
						setaccessoires(data);
					});
			})
			.catch((err) => console.log(err));
	};

	const addToCard = (item) => {
		setshopcard([...shopcard, item]);
		console.log(shopcard);
	};

	const removeFromCard = (item) => {
		let card = shopcard.filter((ele) => ele._id !== item._id);
		setshopcard(card);
		console.log(shopcard);
	};

	useLayoutEffect(() => {
		fetchdata();
	}, []);

	useEffect(() => {
		jQuery("#slider1").revolution({
			sliderType: "standard",
			sliderLayout: "auto",
			delay: 6000,
			disableProgressBar: "on",
			spinner: "off",
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				onHoverStop: "off",
				arrows: {
					style: "arrow",
					enable: true,
					hide_onmobile: true,
					hide_onleave: false,
					tmp: "",
					left: {
						h_align: "left",
						v_align: "bottom",
						h_offset: 110,
						v_offset: 35,
					},
					right: {
						h_align: "left",
						v_align: "bottom",
						h_offset: 150,
						v_offset: 35,
					},
				},
			},
			gridwidth: 1230,
			gridheight: 800,
		});
	});

	return (
		<div className='App'>
			<div className='preloader'>
				<div className='spinner'>
					<div className='bounce1'></div>
					<div className='bounce2'></div>
					<div className='bounce3'></div>
				</div>
			</div>
			<header id='navbar-spy' className='transparent-header'>
				<nav
					id='primary-menu'
					className='navbar navbar-fixed-top style-1'
				>
					<div className='container'>
						{/* Brand and toggle get grouped for better mobile display */}
						<div className='navbar-header'>
							{/* <button
								type='button'
								className='navbar-toggle collapsed'
								data-toggle='collapse'
								data-target='#bs-example-navbar-collapse-1'
								aria-expanded='false'
							>
								<span className='sr-only'>
									Toggle navigation
								</span>
								<span className='icon-bar' />
								<span className='icon-bar' />
								<span className='icon-bar' />
							</button> */}
							<a className='logo'>
								<img
									src='https://media.discordapp.net/attachments/902991650727538769/949309108853555261/web_logo-removebg-preview.png'
									alt='OutiBois'
								/>
							</a>
						</div>
						{/* Collect the nav links, forms, and other content for toggling */}
						<div
							className='collapse navbar-collapse pull-right'
							id='bs-example-navbar-collapse-1'
						>
							{/* .module-cart */}
							<ShopCard
								shopcard={shopcard}
								removeFromCard={removeFromCard}
							/>
							{/* .module-cart end */}
						</div>
						{/* /.navbar-collapse */}
					</div>
					{/* /.container-fluid */}
				</nav>
			</header>
			{/* Hero Section============================================= */}
			<section id='hero' className='hero hero-4'>
				{/* START REVOLUTION SLIDER 5.0 */}
				<div className='rev_slider_wrapper'>
					<div id='slider1' className='rev_slider' data-version={5.0}>
						<ul>
							{/* slide 1 */}
							<li
								data-transition='zoomout'
								data-slotamount='default'
								data-easein='Power4.easeInOut'
								data-easeout='Power4.easeInOut'
								data-masterspeed={2000}
								style={{
									backgroundColor: "rgba(34, 34, 34, 0.3)",
								}}
							>
								{/* MAIN IMAGE */}
								<img
									src='src/assets/images/sliders/1.jpg'
									alt=''
									width={1920}
									height={1280}
								/>
								{/* LAYER NR. 1 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-100}
									data-whitespace='nowrap'
									data-width='none'
									data-height='none'
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;'
									data-start={750}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','15','15']"
									data-lineheight="['45','45','25','25']"
									data-fontweight="['600','500','600','300']"
									data-color='#f9f9f9'
									style={{ fontFamily: "Raleway" }}
								>
									Bienvenue à
								</div>
								{/* LAYER NR. 2 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-50}
									data-width='none'
									data-height='none'
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;'
									data-start={1000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['75','17','17','17']"
									data-lineheight="['100','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#ffc527'
									style={{
										fontFamily: "Montserrat",
										textAlign: "center",
									}}
								>
									<h1
										style={{
											color: "#ffc527",
											fontSize: "55px",
										}}
									>
										OUTIBOIS
									</h1>
								</div>
								{/* LAYER NR. 3 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={30}
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle='o:1;'
									data-transform_in='x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={2000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['19','19','19','19']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									Notre promesse en tant que fournisseur est
									de garantir la qualité de nos produits à des
									prix imbattables.
									<br />
									tout en offrant une expérience
									professionnelle.
								</div>
								{/* LAYER NR. 4 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={-120}
									data-y='center'
									data-voffset={130}
									data-whitespace='nowrap'
									data-width="['80','70','70','100']"
									data-height="['80','70','70','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;'
									data-start={2500}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/brush.png'
										alt='brush'
									/>
								</div>
								{/* LAYER NR. 5 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={130}
									data-whitespace='nowrap'
									data-width="['80','70','70','100']"
									data-height="['80','70','70','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;'
									data-start={2700}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/hook.png'
										alt='hook'
									/>
								</div>
								{/* LAYER NR. 6 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={120}
									data-y='center'
									data-voffset={130}
									data-whitespace='nowrap'
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;'
									data-start={2900}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/shovel.png'
										alt='shovel'
									/>
								</div>
							</li>
							{/* slide 2 */}
							<li
								data-transition='scaledownfromright'
								data-slotamount='default'
								data-easein='Power4.easeInOut'
								data-easeout='Power4.easeInOut'
								data-masterspeed={2000}
							>
								{/* MAIN IMAGE */}
								<img
									src='src/assets/images/sliders/2.jpg'
									alt=''
									width={1920}
									height={1280}
								/>
								{/* LAYER NR. 1 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-100}
									data-width='none'
									data-height='none'
									data-transform_idle='o:1;'
									data-transform_in='x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={1000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','17','17']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									Pourquoi nous choisir ?
								</div>
								{/* LAYER NR. 2 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-50}
									data-whitespace='nowrap'
									data-width='none'
									data-height='none'
									data-transform_idle='o:1;'
									data-transform_in='x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={2000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['75','17','15','15']"
									data-lineheight="['100','45','25','25']"
									data-fontweight="['700','500','600','300']"
									data-color='#ffc527'
									style={{ fontFamily: "montserrat" }}
								>
									Marques renommées &amp; Pris compétitifs
								</div>
								{/* LAYER NR. 3 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={30}
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle='o:1;'
									data-transform_in='x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={2500}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','17','17']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									<b>OUTIEBOIS</b> vous offre une large gamme
									de produits de qualité assurant à ses
									clients efficacité, Sécurité et confort.
									<br />
									Fier de notre réputation établie, la société
									Outibois bénéficie de la confiance et le
									soutien de marque de renommé ce qui nous
									permet de présenter un service viable..
								</div>
								{/* LAYER NR. 4 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={-120}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-start={3000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','15','15']"
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/brush.png'
										alt='brush'
									/>
								</div>
								{/* LAYER NR. 5 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-start={3800}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','15','15']"
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/hook.png'
										alt='hook'
									/>
								</div>
								{/* LAYER NR. 6 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={120}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:[100%];s:inherit;e:inherit;'
									data-start={4000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','15','15']"
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/shovel.png'
										alt='shovel'
									/>
								</div>
							</li>
							{/* slide 3 */}
							<li
								data-index='rs-367'
								data-transition='fadetotopfadefrombottom'
								data-slotamount='default'
								data-easein='default'
								data-easeout='default'
								data-masterspeed='default'
							>
								{/* MAIN IMAGE */}
								<img
									src='src/assets/images/sliders/3.jpg'
									alt=''
									width={1920}
									height={1280}
								/>
								{/* LAYER NR. 1 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-100}
									data-width='none'
									data-height='none'
									data-transform_idle='o:1;'
									data-transform_in='x:-50px;skX:100px;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-start={1000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','17','17']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									De confiance internationale !
								</div>
								{/* LAYER NR. 2 */}
								<div
									className='tp-caption text-uppercase color-theme'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={-50}
									data-whitespace='nowrap'
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle='o:1;'
									data-transform_in='x:[-105%];z:0;rX:0deg;rY:0deg;rZ:-90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={1500}
									data-splitin='chars'
									data-splitout='none'
									data-responsive_offset='on'
									data-elementdelay='0.05'
									data-fontsize="['95','17','15','15']"
									data-lineheight="['100','45','25','25']"
									data-fontweight="['700','500','600','300']"
									data-color='#ffc527'
									style={{ fontFamily: "montserrat" }}
								>
									Nous nous soucions de votre satisfaction
								</div>
								{/* LAYER NR. 3 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={30}
									data-width="['auto','auto','auto','auto']"
									data-height="['auto','auto','auto','auto']"
									data-transform_idle='o:1;'
									data-transform_in='x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;'
									data-transform_out='s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;'
									data-mask_in='x:0px;y:0px;s:inherit;e:inherit;'
									data-start={2000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-fontsize="['17','17','17','17']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									Nous disposons d'une équipe de spécialistes
									capables de maximiser le résultat et de
									délivrer les produits.
								</div>
								{/* LAYER NR. 4 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={-120}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:-30px;rX:70deg;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-start={3000}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/brush.png'
										alt='brush'
									/>
								</div>
								{/* LAYER NR. 5 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={0}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:-30px;rX:70deg;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-start={3500}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/hook.png'
										alt='hook'
									/>
								</div>
								{/* LAYER NR. 6 */}
								<div
									className='tp-caption'
									data-x='center'
									data-hoffset={120}
									data-y='center'
									data-voffset={130}
									data-width="['80','90','100','100']"
									data-height="['80','90','100','100']"
									data-transform_idle='o:1;'
									data-transform_in='y:-30px;rX:70deg;opacity:0;s:2000;e:Power4.easeInOut;'
									data-transform_out='s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;'
									data-start={3800}
									data-splitin='none'
									data-splitout='none'
									data-responsive_offset='on'
									data-lineheight="['80','100','100','100']"
									style={{
										fontFamily: "raleway",
										backgroundColor:
											"rgba(255, 197, 39, 0.8)",
										textAlign: "center",
									}}
								>
									<img
										src='src/assets/images/sliders/icons/shovel.png'
										alt='shovel'
									/>
								</div>
							</li>
						</ul>
					</div>
					{/* END REVOLUTION SLIDER */}
				</div>
				{/* END OF SLIDER WRAPPER */}
			</section>
			{/* #hero end */}
			{/* Shop Filter============================================= */}
			<section id='shop' className='shop-4 pt-0'>
				<div className='container'>
					<div className='row'>
						{/* Projects Filter============================================= */}
						<div className='col-xs-12 col-sm-12 col-md-12 shop-filter'>
							<ul className='list-inline'>
								<li onClick={() => setcurrent(newMachines)}>
									<a
										className='active-filter'
										data-filter='*'
									>
										Nouvelle Machine
									</a>
								</li>
								<li onClick={() => setcurrent(oldMachines)}>
									<a data-filter='.filter-best'>
										Ancienne Machine
									</a>
								</li>
								<li onClick={() => setcurrent(accessoires)}>
									<a data-filter='.filter-featured'>
										Outiage
									</a>
								</li>
								<li>
									<a data-filter='.filter-sale'>
										En Promotion
									</a>
								</li>
							</ul>
						</div>
						{/* .projects-filter end */}
					</div>
					{/* .row end */}
					{/* Projects Item ============================================= */}
					<div id='shop-all' className='row'>
						{/* Product Item #1 */}
						{current.map((machine, index) => (
							<div
								className='col-xs-12 col-sm-6 col-md-3 product-item filter-best'
								key={index}
							>
								<div className='product-img'>
									<Image
										className='cloudinary-img'
										cloudName='outibois'
										public_id={machine.image[0]}
									/>

									<div className='product-hover'>
										<div
											className='product-cart'
											onClick={() => addToCard(machine)}
										>
											<a className='btn btn-secondary btn-block'>
												Ajouter au panier
											</a>
										</div>
									</div>
								</div>
								{/* .product-img end */}
								<div className='product-bio'>
									<h4>
										<a>{machine.name}</a>
									</h4>
									<p className='product-price'>
										{/* {machine.discription} */}
									</p>
								</div>
								<video
									className='down-arrow-show-card'
									onClick={() => {
										setcurrentMachine(machine);
										setdisplayCard("machine-card-disdplay");
									}}
									loading='lazy'
									muted='muted'
									src='https://cdnl.iconscout.com/lottie/premium/thumb/down-arrow-5016011-4171811.mp4'
									width='25'
									height='25'
									type='video/mp4'
									autoPlay='autoPlay'
									loop='loop'
								></video>
								{/* .product-bio end */}
							</div>
						))}
						<MachineCard
							display={displayCard}
							setdisplay={setdisplayCard}
							machine={currentMachine}
						/>
						{/* .product-item end */}
					</div>
					{/* .row end */}
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12 text-center'>
							<a className='btn btn-secondary'>
								more products <i className='fa fa-plus ml-xs' />
							</a>
						</div>
						{/* .col-md-12 end */}
					</div>
					{/* .row End */}
				</div>
				{/* .container end */}
			</section>
			{/* Testimonials #1============================================= */}
			{/* #testimonials end */}
			{/* Shortcode #9 ============================================= */}
			<section id='clients' className='shortcode-9'>
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12'>
							<div className='heading heading-2 text-center'>
								<div className='heading-bg'>
									<p className='mb-0'>They Always Trust Us</p>
									<h2>Our Clients</h2>
								</div>
							</div>
							{/* .heading end */}
						</div>
						{/* .col-md-12 end */}
					</div>
					{/* .row end */}
					<div className='row'>
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/1.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/2.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/3.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/4.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/5.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
						{/* Client Item */}
						<div className='col-xs-12 col-sm-4 col-md-2'>
							<div className='brand last'>
								<img
									className='img-responsive center-block'
									src='src/assets/images/clients/6.png'
									alt='brand'
								/>
							</div>
						</div>
						{/* .col-md-2 end */}
					</div>
					{/* .row End */}
				</div>
				{/* .container end */}
			</section>
			{/* #clients end*/}
			<footer id='footer' className='footer-1'>
				{/* Contact Bar============================================= */}
				<div className='container footer-widgtes'>
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12'>
							<div className='widgets-contact'>
								<div className='row'>
									<div className='col-xs-12 col-sm-12 col-md-4 widget'>
										<div className='widget-contact-icon pull-left'>
											<i className='lnr lnr-map' />
										</div>
										<div className='widget-contact-info'>
											<p className='text-capitalize text-white'>
												visit us
											</p>
											<p className='text-capitalize font-heading'>
												tanta , alGharbia, egypt.
											</p>
										</div>
									</div>
									{/* .widget end */}
									<div className='col-xs-12 col-sm-12 col-md-4 widget'>
										<div className='widget-contact-icon pull-left'>
											<i className='lnr lnr-envelope' />
										</div>
										<div className='widget-contact-info'>
											<p className='text-capitalize text-white'>
												email us
											</p>
											<p className='text-capitalize font-heading'>
												7oroof@7oroof.com
											</p>
										</div>
									</div>
									{/* .widget end */}
									<div className='col-xs-12 col-sm-12 col-md-4 widget'>
										<div className='widget-contact-icon pull-left'>
											<i className='lnr lnr-phone' />
										</div>
										<div className='widget-contact-info'>
											<p className='text-capitalize text-white'>
												call us
											</p>
											<p className='text-capitalize font-heading'>
												002 01065370701
											</p>
										</div>
									</div>
									{/* .widget end */}
								</div>
								{/* .row end */}
							</div>
							{/* .widget-contact end */}
						</div>
						{/* .col-md-12 end */}
					</div>
					{/* .row end */}
				</div>
				{/* .container end */}
				{/* Widget Section
	============================================= */}
				<div className='container'>
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12 widgets-links'>
							<div className='col-xs-12 col-sm-12 col-md-4 widget-about text-center-xs mb-30-xs'>
								<div className='widget-about-logo pull-left pull-none-xs'>
									<img
										src='src/assets/images/footer-logo.png'
										alt='logo'
									/>
								</div>
								<div className='widget-about-info'>
									<h5 className='text-capitalize text-white'>
										OUTIBOIS
									</h5>
									<p className='mb-0'>
										La société OutiBois a été crée en 1990,
										spécialiste et leader dans la vente,
										réparation des machines a bois et
										outillages industriels neuf et occasion.
										La société OutiBois vous offre une large
										gamme de produit exposé sur plus de
										1000m². Fort de notre expérience de plus
										de 40 ans dans la machinerie a bois,
										Nous sommes a l’écoute de nos clients
										.Nous leurs assurons bon conseils, la
										vente, la livraison et le service après
										vente.
									</p>
								</div>
							</div>
							<div className='col-xs-12 col-sm-6 col-md-3 widget-navigation text-center-xs mb-30-xs'>
								<h5 className='text-capitalize text-white'>
									navigation
								</h5>
								<div className='row'>
									<div className='col-xs-6 col-sm-6 col-md-6'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a> about us</a>
											</li>
											<li>
												<a> careers</a>
											</li>
											<li>
												<a> pricing plans</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-6 col-sm-6 col-md-6'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a> team</a>
											</li>
											<li>
												<a> projects</a>
											</li>
											<li>
												<a> FAQs</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='col-xs-12 col-sm-6 col-md-5 widget-services text-center-xs'>
								<h5 className='text-capitalize text-white'>
									services
								</h5>
								<div className='row'>
									<div className='col-xs-4 col-sm-4 col-md-4'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a> design &amp; build</a>
											</li>
											<li>
												<a> tiling &amp; painting</a>
											</li>
											<li>
												<a> revonations</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-4 col-sm-4 col-md-4'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a> management</a>
											</li>
											<li>
												<a> wood flooring</a>
											</li>
											<li>
												<a> work consulting</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-4 col-sm-4 col-md-4'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a> wood flooring</a>
											</li>
											<li>
												<a> green building</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Social bar
	============================================= */}
				<div className='widget-social'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 col-sm-12 col-md-6 mb-30-xs mb-30-sm'>
								<div className='widget-social-info pull-left text-capitalize pull-none-xs mb-15-xs'>
									<p className='mb-0'>
										follow us
										<br />
										on social networks
									</p>
								</div>
								<div className='widget-social-icon pull-right text-right pull-none-xs'>
									<a>
										<i className='fa fa-facebook' />
										<i className='fa fa-facebook' />
									</a>
									<a>
										<i className='fa fa-google-plus' />
										<i className='fa fa-google-plus' />
									</a>
									<a>
										<i className='fa fa-twitter' />
										<i className='fa fa-twitter' />
									</a>
									<a>
										<i className='fa fa-linkedin' />
										<i className='fa fa-linkedin' />
									</a>
									<a>
										<i className='fa fa-vimeo-square' />
										<i className='fa fa-vimeo-square' />
									</a>
									<a>
										<i className='fa fa-pinterest' />
										<i className='fa fa-pinterest' />
									</a>
									<a>
										<i className='fa fa-flickr' />
										<i className='fa fa-flickr' />
									</a>
									<a>
										<i className='fa fa-rss' />
										<i className='fa fa-rss' />
									</a>
								</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-6'>
								<div className='widget-newsletter-info pull-left text-capitalize pull-none-xs mb-15-xs'>
									<p className='mb-0'>
										subsribe
										<br />
										on our newsletter
									</p>
								</div>
								<div className='widget-newsletter-form pull-right text-right'>
									{/* Mailchimp Form =============================================*/}
									<form className='mailchimp'>
										<div className='subscribe-alert'></div>
										<div className='input-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Type Your Email Account'
											/>
											<span className='input-group-btn'>
												<button
													className='btn text-capitalize'
													type='button'
												>
													join
												</button>
											</span>
										</div>
										{/* /input-group */}
									</form>
									{/*Mailchimp Form End*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
