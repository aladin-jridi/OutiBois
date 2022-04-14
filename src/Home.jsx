import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import "./Home.css";
import MachineCard from "./machineCard.jsx";
import ShopCard from "./shopCard";
import Map from "./map";

function Home() {
	const [newMachines, setnewMachines] = useState([]);
	const [oldMachines, setoldMachines] = useState([]);
	const [accessoires, setaccessoires] = useState([]);
	const [enPromotion, setenPromotion] = useState([]);
	const [current, setcurrent] = useState([]);
	const [shopcard, setshopcard] = useState([]);
	const [displayedArray, setdisplayedArray] = useState([]);
	const [displayCard, setdisplayCard] = useState("machine-card-none");
	const [searchText, setsearchText] = useState("");
	const [active, setactive] = useState({
		filter1: "notHovered",
		filter2: "notHovered",
		filter3: "notHovered",
		filter4: "notHovered",
	});
	const [currentMachine, setcurrentMachine] = useState({
		image: "",
		name: "",
		discription: "",
	});

	const location = {
		address: "113 Av. Mustapha Mohsen, Ariana 2073",
		lat: 36.869913,
		lng: 10.212167,
	};

	const filter = () => {
		var arr = [];
		for (var i = 0; i < newMachines.length; i++) {
			if (
				newMachines[i].name.includes(searchText) ||
				newMachines[i].name.toUpperCase().includes(searchText) ||
				newMachines[i].name.includes(searchText.toUpperCase())
			) {
				arr.push(newMachines[i]);
			}
		}
		for (var i = 0; i < oldMachines.length; i++) {
			if (
				oldMachines[i].name.includes(searchText) ||
				newMachines[i].name.toUpperCase().includes(searchText) ||
				oldMachines[i].name.includes(searchText.toUpperCase())
			) {
				arr.push(oldMachines[i]);
			}
		}
		for (var i = 0; i < accessoires.length; i++) {
			if (
				accessoires[i].name.includes(searchText) ||
				newMachines[i].name.toUpperCase().includes(searchText) ||
				accessoires[i].name.includes(searchText.toUpperCase())
			) {
				arr.push(accessoires[i]);
			}
		}
		for (var i = 0; i < enPromotion.length; i++) {
			if (
				enPromotion[i].name.includes(searchText) ||
				newMachines[i].name.toUpperCase().includes(searchText) ||
				enPromotion[i].name.includes(searchText.toUpperCase())
			) {
				arr.push(enPromotion[i]);
			}
		}
		setcurrent(arr);
	};

	const fetchdata = () => {
		axios
			.get("/api/newMachine/findAll")
			.then(({ data }) => {
				setnewMachines(data);
				setcurrent(data.slice(0, 12));
				setdisplayedArray(data);
			})
			.then(() => {
				axios.get("/api/oldMachine/findAll").then(({ data }) => {
					setoldMachines(data);
				});
			})
			.then(() => {
				axios.get("/api/accessoire/findAll").then(({ data }) => {
					setaccessoires(data);
				});
			})
			.then(() => {
				axios.get("/api/enPromotion/findAll").then(({ data }) => {
					setenPromotion(data);
				});
			})
			.catch((err) => console.log(err));
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
					hide_onmobile: false,
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

	const addToCard = (item) => {
		setshopcard([...shopcard, item]);
	};

	const removeFromCard = (item) => {
		let card = shopcard.filter((ele) => ele._id !== item._id);
		setshopcard(card);
	};

	const [showCardShop, setshowCardShop] = useState(false);

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
				<nav id='primary-menu' className='navbar navbar-fixed-top'>
					{/* <div className='container navbar-logo-shop-card'> */}
					<img
						src='https://cdn.discordapp.com/attachments/902991650727538769/949754407799623721/white.png'
						alt='OutiBois'
						className='outieboisLogo'
					/>
					<div
						className='cardIconAndNumber'
						onClick={() => {
							setshowCardShop(!showCardShop);
						}}
					>
						<img
							width='30'
							height='30'
							src='https://cdn-icons-png.flaticon.com/512/4297/4297019.png'
							alt=''
							title=''
							className='loaded'
						></img>
						<span className='cart-label'>{shopcard.length}</span>
					</div>
				</nav>
				{showCardShop && (
					<ShopCard
						setshowCardShop={setshowCardShop}
						shopcard={shopcard}
						removeFromCard={removeFromCard}
					/>
				)}
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
										id='homeOutibois'
										style={{
											color: "#ffc527",
											fontSize: "7vw",
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
										className='picIcon'
										src='https://cdn.discordapp.com/attachments/902189923380121670/950056624645619752/001.png'
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
										className='picIcon'
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057235248218152/002.png'
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
										className='picIcon'
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057722064298094/003.png'
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
									id='hometext'
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
									Outibois bénéficie de la confiance
									<br />
									et le soutien de marque de renommé ce qui
									nous permet de présenter un service viable..
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950056624645619752/001.png'
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057235248218152/002.png'
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057722064298094/003.png'
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
									id='hometext'
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950056624645619752/001.png'
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057235248218152/002.png'
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
										src='https://cdn.discordapp.com/attachments/902189923380121670/950057722064298094/003.png'
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
			{/* searsh bar starts from here */}
			<div className='searshbar'>
				<div className='row height d-flex justify-content-center align-items-center'>
					<div className='col-md-8'>
						<div className='search'>
							<i className='fa fa-search'></i>
							<input
								onChange={(e) => setsearchText(e.target.value)}
								type='text'
								className='form-control'
								placeholder='Trouvez une machine'
							/>
							<button
								className='btn btn-warning'
								id='searchBTN'
								onClick={filter}
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* searsh bar ends here */}
			<section id='shop' className='shop-4 pt-0'>
				<div className='container'>
					<div className='row'>
						{/* Projects Filter============================================= */}
						<div className='col-xs-12 col-sm-12 col-md-12 shop-filter'>
							<ul className='list-inline'>
								<li
									id='homeNav'
									onClick={() => {
										setcurrent(newMachines.slice(0, 12));
										setdisplayedArray(newMachines);
										setactive({
											filter1: "active-filter",
											filter2: "notHovered",
											filter3: "notHovered",
											filter4: "notHovered",
										});
									}}
								>
									<a
										className={active.filter1}
										data-filter='*'
										id='pointer'
									>
										Nouvelle Machine
									</a>
								</li>
								<li
									id='homeNav'
									onClick={() => {
										setcurrent(oldMachines.slice(0, 12));
										setdisplayedArray(oldMachines);
										setactive({
											filter1: "notHovered",
											filter2: "active-filter",
											filter3: "notHovered",
											filter4: "notHovered",
										});
									}}
								>
									<a
										className={active.filter2}
										data-filter='.filter-best'
										id='pointer'
									>
										Ancienne Machine
									</a>
								</li>
								<li
									id='homeNav'
									onClick={() => {
										setcurrent(accessoires.slice(0, 12));
										setdisplayedArray(accessoires);
										setactive({
											filter1: "notHovered",
											filter2: "notHovered",
											filter3: "active-filter",
											filter4: "notHovered",
										});
									}}
								>
									<a
										className={active.filter3}
										data-filter='.filter-featured'
										id='pointer'
									>
										Outiage
									</a>
								</li>
								<li
									id='homeNav'
									onClick={() => {
										setcurrent(enPromotion.slice(0, 12));
										setdisplayedArray(enPromotion);
										setactive({
											filter1: "notHovered",
											filter2: "notHovered",
											filter3: "notHovered",
											filter4: "active-filter",
										});
									}}
								>
									<a
										className={active.filter4}
										data-filter='.filter-sale'
										id='pointer'
									>
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
										className='cloudinary-img prodItem'
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
									width='30'
									height='30'
									type='video/mp4'
									autoPlay='autoPlay'
									loop='loop'
								></video>
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
					<div
						className='row'
						onClick={() => setcurrent(displayedArray)}
						id='pointer'
					>
						<div className='col-xs-12 col-sm-12 col-md-12 text-center'>
							<a className='btn btn-secondary' id='moreProducts'>
								Afficher plus <i className='fa fa-plus ml-xs' />
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
												nous visiter
											</p>
											<p
												className='text-capitalize font-heading'
												id='location'
											>
												Avenue Mostapha Mohsen,
												Borjlouzir 2073 Ariana
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
												envoyez-nous un e-mail
											</p>
											<p className=' font-heading'>
												outiboistun@yahoo.com
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
												nous appeler
											</p>
											<p
												className='text-capitalize font-heading'
												id='location'
											>
												+216 98405401
												<br />
												+216 70680050
												<br />
												+216 70680044
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
				<div className='container info-section-map-section'>
					{/* <div className='widget-about-logo pull-left pull-none-xs'>
						<img
							src='src/assets/images/footer-logo.png'
							alt='logo'
						/>
					</div> */}
					<div className='row'>
						<div className='widget-about-info' id='textmap'>
							<h5 className='text-capitalize text-white'>
								OUTIBOIS
							</h5>
							<h4>
								<p className='mb-0'>
									La société OutiBois a été crée en 2002,
									spécialiste et leader dans la vente,
									réparation des machines a bois et outillages
									industriels neuf et occasion. La société
									OutiBois vous offre une large gamme de
									produit exposé sur plus de 1000m². Fort de
									notre expérience de plus de 40 ans dans la
									machinerie a bois, Nous sommes a l’écoute de
									nos clients .Nous leurs assurons bon
									conseils, la vente, la livraison et le
									service après vente.
								</p>
							</h4>
						</div>
					</div>
					<div className='map-section'>
						<h5 className='text-capitalize text-white'>
							Visiter nous
						</h5>
						<Map location={location} zoomLevel={16} />
					</div>
				</div>
				{/* Social bar============================================= */}
				<div className='widget-social'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-12 col-sm-12 col-md-6 mb-30-xs mb-30-sm'>
								<div className='widget-social-info pull-left text-capitalize pull-none-xs mb-15-xs'>
									<p className='mb-0'>
										follow us : <br />
										<b>on social networks</b>
									</p>
								</div>
								<div
									className='widget-social-icon pull-right text-right pull-none-xs'
									id='SMicons'
								>
									<a
										target='_blank'
										href='https://www.facebook.com/Outibois-102007439098989'
									>
										<i className='fa fa-facebook' />
										<i className='fa fa-facebook' />
									</a>
									<a href=''>
										<i className='fa fa-google-plus' />
										<i className='fa fa-google-plus' />
									</a>
								</div>
							</div>
							<div className='col-xs-12 col-sm-12 col-md-6'></div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
