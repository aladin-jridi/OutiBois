import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Home.css";

function Home() {
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
							<button
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
							</button>
							<a className='logo' href='index.html'>
								<img
									src='src/assets/images/logo/logo-light.png'
									alt='Yellow Hats'
								/>
							</a>
						</div>
						{/* Collect the nav links, forms, and other content for toggling */}
						<div
							className='collapse navbar-collapse pull-right'
							id='bs-example-navbar-collapse-1'
						>
							<ul className='nav navbar-nav navbar-left'>
								<li className='has-dropdown active'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										Home
									</a>
									<ul className='mega-menu'>
										<li>
											<ul>
												<li>
													<a href='home-1.html'>
														home page 1
													</a>
												</li>
												<li>
													<a href='home-2.html'>
														home page 2
													</a>
												</li>
												<li>
													<a href='home-3.html'>
														home page 3
													</a>
												</li>
												<li>
													<a href='home-4.html'>
														home page 4
													</a>
												</li>
												<li>
													<a href='home-5.html'>
														home page 5
													</a>
												</li>
												<li>
													<a href='home-6.html'>
														home page 6
													</a>
												</li>
											</ul>
										</li>
										<li>
											<ul>
												<li>
													<a href='home-7.html'>
														home page 7
													</a>
												</li>
												<li>
													<a href='home-8.html'>
														home page 8
													</a>
												</li>
												<li>
													<a href='home-9.html'>
														home one page
													</a>
												</li>
												<li>
													<a href='home-10.html'>
														home shop page
													</a>
												</li>
												<li>
													<a href='home-11.html'>
														home architect
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										about
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												about us
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='about-1.html'>
														about us 1
													</a>
												</li>
												<li>
													<a href='about-2.html'>
														about us 2
													</a>
												</li>
												<li>
													<a href='about-me.html'>
														about me
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												our team
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='team-1.html'>
														team 1
													</a>
												</li>
												<li>
													<a href='team-2.html'>
														team 2
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='testimonials.html'>
												testimonials
											</a>
										</li>
										<li>
											<a href='faq.html'>FAQS</a>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										services
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												our services
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='services-1.html'>
														service 1
													</a>
												</li>
												<li>
													<a href='services-2.html'>
														service 2
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='services-single.html'>
												single service
											</a>
										</li>
										<li>
											<a href='services-blocks.html'>
												blocks
											</a>
										</li>
										<li>
											<a href='pricing.html'>pricing</a>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										projects
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												project grid
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='projects-grid-2col.html'>
														2 column
													</a>
												</li>
												<li>
													<a href='projects-grid-3col.html'>
														3 column
													</a>
												</li>
												<li>
													<a href='projects-grid-4col.html'>
														4 column
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												project fullwidth
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='projects-fullwidth-2col.html'>
														2 column
													</a>
												</li>
												<li>
													<a href='projects-fullwidth-3col.html'>
														3 column
													</a>
												</li>
												<li>
													<a href='projects-fullwidth-4col.html'>
														4 column
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												single project
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='project-single-1.html'>
														single 1
													</a>
												</li>
												<li>
													<a href='project-single-2.html'>
														single 2
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										features
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												pages
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='404.html'>404</a>
												</li>
												<li>
													<a href='soon.html'>
														coming soon
													</a>
												</li>
												<li>
													<a href='maintenance.html'>
														maintenance
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												Headers
											</a>
											<ul className='mega-menu left'>
												<li>
													<ul>
														<li>
															<a href='header-1.html'>
																header 1
															</a>
														</li>
														<li>
															<a href='header-2.html'>
																header 2
															</a>
														</li>
														<li>
															<a href='header-3.html'>
																header 3
															</a>
														</li>
														<li>
															<a href='header-4.html'>
																header 4
															</a>
														</li>
														<li>
															<a href='header-5.html'>
																header 5
															</a>
														</li>
														<li>
															<a href='header-6.html'>
																header 6
															</a>
														</li>
														<li>
															<a href='header-7.html'>
																header 7
															</a>
														</li>
													</ul>
												</li>
												<li>
													<ul>
														<li>
															<a href='header-8.html'>
																header 8
															</a>
														</li>
														<li>
															<a href='header-9.html'>
																header 9
															</a>
														</li>
														<li>
															<a href='header-10.html'>
																header 10
															</a>
														</li>
														<li>
															<a href='header-11.html'>
																header 11
															</a>
														</li>
														<li>
															<a href='header-12.html'>
																header 12
															</a>
														</li>
														<li>
															<a href='header-13.html'>
																header 13
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												Footers
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='footer-1.html#footer'>
														Footer 1
													</a>
												</li>
												<li>
													<a href='footer-2.html#footer'>
														Footer 2
													</a>
												</li>
												<li>
													<a href='footer-3.html#footer'>
														Footer 3
													</a>
												</li>
												<li>
													<a href='footer-4.html#footer'>
														Footer 4
													</a>
												</li>
												<li>
													<a href='footer-5.html#footer'>
														Footer 5
													</a>
												</li>
												<li>
													<a href='footer-6.html#footer'>
														Footer 6
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												page title
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='elements-page-title-1.html'>
														page title 1
													</a>
												</li>
												<li>
													<a href='elements-page-title-2.html'>
														page title 2
													</a>
												</li>
												<li>
													<a href='elements-page-title-3.html'>
														page title 3
													</a>
												</li>
												<li>
													<a href='elements-page-title-4.html'>
														page title 4
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='elements-cta.html'>
												call to action
											</a>
										</li>
										<li>
											<a href='elements-heading.html'>
												heading
											</a>
										</li>
										<li>
											<a href='elements-shortcodes.html'>
												shortcodes
											</a>
										</li>
										<li>
											<a href='elements-testimonials.html'>
												testimonials
											</a>
										</li>
										<li>
											<a href='elements-typography.html'>
												typogrpahy
											</a>
										</li>
										<li>
											<a href='elements-widget.html'>
												widgets
											</a>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										blog
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												grid
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='blog-grid-left-sidebar.html'>
														left sidebar
													</a>
												</li>
												<li>
													<a href='blog-grid-right-sidebar.html'>
														right sidebar
													</a>
												</li>
												<li>
													<a href='blog-grid-full-width.html'>
														full width
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												standard
											</a>
											<ul className='dropdown-menu'>
												<li>
													<a href='blog-standard-left-sidebar.html'>
														left sidebar
													</a>
												</li>
												<li>
													<a href='blog-standard-right-sidebar.html'>
														right sidebar
													</a>
												</li>
												<li>
													<a href='blog-standard-full-width.html'>
														full width
													</a>
												</li>
											</ul>
										</li>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												single
											</a>
											<ul className='dropdown-menu left'>
												<li>
													<a href='blog-single-left-sidebar.html'>
														single left sidebar
													</a>
												</li>
												<li>
													<a href='blog-single-right-sidebar.html'>
														single right sidebar
													</a>
												</li>
												<li>
													<a href='blog-single-full-width.html'>
														single full width
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										shop
									</a>
									<ul className='dropdown-menu'>
										<li className='dropdown-submenu'>
											<a
												href='#'
												data-toggle='dropdown'
												className='dropdown-toggle'
											>
												shop products
											</a>
											<ul className='dropdown-menu left'>
												<li>
													<a href='shop-right-sidebar.html'>
														shop right sidebar
													</a>
												</li>
												<li>
													<a href='shop-left-sidebar.html'>
														shop left sidebar
													</a>
												</li>
												<li>
													<a href='shop-full-width.html'>
														shop fullwidth
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='shop-category.html'>
												shop category
											</a>
										</li>
										<li>
											<a href='shop-single.html'>
												shop single
											</a>
										</li>
										<li>
											<a href='shop-cart.html'>
												shop cart
											</a>
										</li>
									</ul>
								</li>
								{/* li end */}
								<li className='has-dropdown pull-left'>
									<a
										href='#'
										data-toggle='dropdown'
										className='dropdown-toggle'
									>
										contact
									</a>
									<ul className='dropdown-menu'>
										<li>
											<a href='contact-1.html'>
												contact 1
											</a>
										</li>
										<li>
											<a href='contact-2.html'>
												contact 2
											</a>
										</li>
									</ul>
								</li>
								{/* li end */}
							</ul>
							{/* Mod*/}
							<div className='module module-search pull-left'>
								<div className='search-icon'>
									<i className='fa fa-search' />
									<span className='title'>search</span>
								</div>
								<div className='search-box'>
									<form className='search-form'>
										<div className='input-group'>
											<input
												type='text'
												className='form-control'
												placeholder='Type Your Search Words'
											/>
											<span className='input-group-btn'>
												<button
													className='btn'
													type='button'
												>
													<i className='fa fa-search' />
												</button>
											</span>
										</div>
										{/* /input-group */}
									</form>
								</div>
							</div>
							{/* .module-search*/}
							{/* .module-cart */}
							<div className='module module-cart pull-left'>
								<div className='cart-icon'>
									<i className='fa fa-shopping-cart' />
									<span className='title'>shop cart</span>
									<span className='cart-label'>2</span>
								</div>
								<div className='cart-box'>
									<div className='cart-overview'>
										<ul className='list-unstyled'>
											<li>
												<img
													className='img-responsive'
													src='src/assets/images/shop/thumb/1h.png'
													alt='product'
												/>
												<div className='product-meta'>
													<h5 className='product-title'>
														CST/Berger
													</h5>
													<p className='product-price'>
														Price: $68.00{" "}
													</p>
													<p className='product-quantity'>
														Quantity: 1
													</p>
												</div>
												<a className='cancel' href='#'>
													cancel
												</a>
											</li>
											<li>
												<img
													className='img-responsive'
													src='src/assets/images/shop/thumb/2h.png'
													alt='product'
												/>
												<div className='product-meta'>
													<h5 className='product-title'>
														Charger/Radio
													</h5>
													<p className='product-price'>
														Price: $180.00{" "}
													</p>
													<p className='product-quantity'>
														Quantity: 1
													</p>
												</div>
												<a className='cancel' href='#'>
													cancel
												</a>
											</li>
										</ul>
									</div>
									<div className='cart-total'>
										<div className='total-desc'>
											<h5>CART SUBTOTAL :</h5>
										</div>
										<div className='total-price'>
											<h5>$248.00</h5>
										</div>
									</div>
									<div className='clearfix'></div>
									<div className='cart-control'>
										<a className='btn btn-primary' href='#'>
											view cart
										</a>
										<a
											className='btn btn-secondary pull-right'
											href='#'
										>
											check out
										</a>
									</div>
								</div>
							</div>
							{/* .module-cart end */}
						</div>
						{/* /.navbar-collapse */}
					</div>
					{/* /.container-fluid */}
				</nav>
			</header>
			{/* Hero Section
============================================= */}
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
									Welcome To
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
										Yellow Hats Shop
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
									data-fontsize="['17','17','17','17']"
									data-lineheight="['26','26','25','25']"
									data-fontweight="['700','500','500','500']"
									data-color='#fff'
									style={{
										fontFamily: "raleway",
										textAlign: "center",
									}}
								>
									Our promise as a contractor is to build
									community value into every project while
									<br />
									delivering professional expertise.
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
									What We Can Do ?
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
									Design &amp; Build
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
									Yellow Hats is a leading developer of
									A-grade commercial,
									<br />
									industrial and residential projects in USA.
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
									Internationally Trusted !
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
									WE DESIGN
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
									We have a team of specialists capable of
									maximizing the result and delivering the
									projects.
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
			{/* Shop Filter
============================================= */}
			<section id='shop' className='shop-4 pt-0'>
				<div className='container'>
					<div className='row'>
						{/* Projects Filter
			============================================= */}
						<div className='col-xs-12 col-sm-12 col-md-12 shop-filter'>
							<ul className='list-inline'>
								<li>
									<a
										className='active-filter'
										href='#'
										data-filter='*'
									>
										All Products
									</a>
								</li>
								<li>
									<a href='#' data-filter='.filter-best'>
										Best Selling
									</a>
								</li>
								<li>
									<a href='#' data-filter='.filter-featured'>
										Featured
									</a>
								</li>
								<li>
									<a href='#' data-filter='.filter-sale'>
										On Sale
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
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-best'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/1.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>CST/Berger</a>
								</h4>
								<p className='product-price'>$68.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #2 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-sale'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/2.jpg'
									alt='product'
								/>
								<div className='product-sale'>sale</div>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>Titan Measures</a>
								</h4>
								<p className='product-price'>
									<span>$40.00</span>
									$32.00
								</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #3 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-best'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/3.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>Charger/Radio</a>
								</h4>
								<p className='product-price'>$180.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #4 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-featured'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/4.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>Plate Compactor</a>
								</h4>
								<p className='product-price'>$230.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #5 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-best'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/5.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>Black Tape</a>
								</h4>
								<p className='product-price'>$12.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #6 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-best filter-featured'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/6.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>ICS Concrete Saw</a>
								</h4>
								<p className='product-price'>$40.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #7 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-featured'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/7.jpg'
									alt='product'
								/>
								<div className='product-new'>new</div>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>NorthStar Asphalt</a>
								</h4>
								<p className='product-price'>$150.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
						{/* Product Item #8 */}
						<div className='col-xs-12 col-sm-6 col-md-3 product-item filter-best'>
							<div className='product-img'>
								<img
									src='src/assets/images/shop/grid/8.jpg'
									alt='product'
								/>
								<div className='product-hover'>
									<div className='product-cart'>
										<a
											className='btn btn-secondary btn-block'
											href='#'
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
							{/* .product-img end */}
							<div className='product-bio'>
								<h4>
									<a href='#'>Keson Fiberglass</a>
								</h4>
								<p className='product-price'>$550.00</p>
							</div>
							{/* .product-bio end */}
						</div>
						{/* .product-item end */}
					</div>
					{/* .row end */}
					<div className='row'>
						<div className='col-xs-12 col-sm-12 col-md-12 text-center'>
							<a className='btn btn-secondary' href='#'>
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
				{/* Contact Bar
	============================================= */}
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
										yellow hats
									</h5>
									<p className='mb-0'>
										Yellow Hats is a leading of A-grade
										commercial, industrial and residential
										projects in USA. Since its foundation
										the company has doubled its turnover
										year on year, with its staff numbers
										swelling accordingly.
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
												<a href='#'> about us</a>
											</li>
											<li>
												<a href='#'> careers</a>
											</li>
											<li>
												<a href='#'> pricing plans</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-6 col-sm-6 col-md-6'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a href='#'> team</a>
											</li>
											<li>
												<a href='#'> projects</a>
											</li>
											<li>
												<a href='#'> FAQs</a>
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
												<a href='#'>
													{" "}
													design &amp; build
												</a>
											</li>
											<li>
												<a href='#'>
													{" "}
													tiling &amp; painting
												</a>
											</li>
											<li>
												<a href='#'> revonations</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-4 col-sm-4 col-md-4'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a href='#'> management</a>
											</li>
											<li>
												<a href='#'> wood flooring</a>
											</li>
											<li>
												<a href='#'> work consulting</a>
											</li>
										</ul>
									</div>
									<div className='col-xs-4 col-sm-4 col-md-4'>
										<ul className='list-unstyled text-capitalize'>
											<li>
												<a href='#'> wood flooring</a>
											</li>
											<li>
												<a href='#'> green building</a>
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
									<a href='#'>
										<i className='fa fa-facebook' />
										<i className='fa fa-facebook' />
									</a>
									<a href='#'>
										<i className='fa fa-google-plus' />
										<i className='fa fa-google-plus' />
									</a>
									<a href='#'>
										<i className='fa fa-twitter' />
										<i className='fa fa-twitter' />
									</a>
									<a href='#'>
										<i className='fa fa-linkedin' />
										<i className='fa fa-linkedin' />
									</a>
									<a href='#'>
										<i className='fa fa-vimeo-square' />
										<i className='fa fa-vimeo-square' />
									</a>
									<a href='#'>
										<i className='fa fa-pinterest' />
										<i className='fa fa-pinterest' />
									</a>
									<a href='#'>
										<i className='fa fa-flickr' />
										<i className='fa fa-flickr' />
									</a>
									<a href='#'>
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
