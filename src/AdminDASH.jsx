import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

function AdminDADH() {
	const [newMachines, setnewMachines] = useState([]);
	const [oldMachines, setoldMachines] = useState([]);
	const [accessoires, setaccessoires] = useState([]);
	const [current, setcurrent] = useState([]);
	const [name, setname] = useState("");
	const [discription, setdiscription] = useState("");
	const [categorie, setcategorie] = useState("");
	const [image, setimage] = useState(null);
	const [idRemove, setidRemove] = useState("");
	// const [idUpdate, setidUpdate] = useState("");
	const [idUpdate, setidUpdate] = useState({
		id: "",
		name: "",
		discription: "",
	});
	const [updatename, setupdatename] = useState("");
	const [updatediscription, setupdatediscription] = useState("");
	// const [machineData, setmachineData] = useState({ name: "", discription: "" });

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

	// const fetchWithId = (id) => {
	//   axios
	//     .get(`http://localhost:5000/api/newMachine/findOnen/${id}`)
	//     .then(({ data }) => {
	//       console.log(data);
	//       setnameById(data.name);
	//     })
	//     .catch((err) => console.log(err));
	// };

	useLayoutEffect(() => {
		fetchdata();
	}, []);

	const uploadeImage = (file) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "lzyjffjz");
		return axios.post(
			"http://api.cloudinary.com/v1_1/outibois/image/upload",
			formData
		);
	};

	function remove(id) {
		if (current === newMachines) {
			axios
				.delete(`http://localhost:5000/api/newMachine/deleteOne/${id}`)
				.then(() => {
					fetchdata();
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (current === oldMachines) {
			axios
				.delete(`http://localhost:5000/api/oldMachine/deleteOne/${id}`)
				.then(() => {
					fetchdata();
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.delete(`http://localhost:5000/api/accessoire/deleteOne/${id}`)
				.then(() => {
					fetchdata();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	// const add_machine = (e) => {
	// 	e.preventDefault();
	// 	uploadeImage(image)
	// 		.then(({ data }) => {
	// 			let machine = {
	// 				name: name,
	// 				discription: discription,
	// 				image: [data.public_id],
	// 			};
	// 			axios.post(
	// 				`http://localhost:5000/api/${categorie}/add`,
	// 				machine
	// 			);
	// 		})
	// 		.then(() => {
	// 			fetchdata();
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	//////////////////
	const add_machine = (e) => {
		e.preventDefault();
		let image_id = [];
		for (let i = 0; i < image.length; i++) {
			image_id.push(uploadeImage(image[i]));
		}
		let imagesCloudineryIds = [];
		Promise.all(image_id)
			.then((result) => {
				imagesCloudineryIds = result.map((elem) => elem.data.public_id);
			})
			.then(() => {
				console.log(imagesCloudineryIds);
				let machine = {
					name: name,
					discription: discription,
					image: imagesCloudineryIds,
				};
				axios.post(
					`http://localhost:5000/api/${categorie}/add`,
					machine
				);
			})
			.then(() => {
				fetchdata();
			})
			.catch((err) => console.log(err));
	};

	const update = (object) => {
		let dataUpdate = {
			name: updatename,
			discription: updatediscription,
		};
		if (current === newMachines) {
			axios
				.put(
					`http://localhost:5000/api/newMachine/updateOne/${object.id}`,
					dataUpdate
				)
				.then(() => {
					fetchdata();
				})
				.catch((err) => console.log(err));
		} else if (current === oldMachines) {
			axios
				.put(
					`http://localhost:5000/api/oldMachine/updateOne/${object.id}`,
					dataUpdate
				)
				.then(() => {
					fetchdata();
				})
				.catch((err) => console.log(err));
		} else {
			axios
				.put(
					`http://localhost:5000/api/accessoire/updateOne/${object.id}`,
					dataUpdate
				)
				.then(() => {
					fetchdata();
				})
				.catch((err) => console.log(err));
		}
	};
	const idOfItemToDelete = (id) => {
		setidRemove(id);
	};

	const idOfItemToUpdate = (object) => {
		setidUpdate(object);
	};

	return (
		<div className='10'>
			<div className='container-xl'>
				<div className='table-responsive'>
					<div className='table-wrapper'>
						<div className='table-title'>
							<div className='row'>
								<div className='col-sm-6'>
									<h2>
										Manage <b>Machine</b>
									</h2>
									<div className='toggle-machine'>
										<p
											onClick={() => {
												setcurrent(newMachines);
											}}
										>
											Nouvelle machine
										</p>
										<p
											onClick={() => {
												setcurrent(oldMachines);
											}}
										>
											Ancienne machine
										</p>
										<p
											onClick={() => {
												setcurrent(accessoires);
											}}
										>
											Outiage
										</p>
										<p>Demmande devis</p>
									</div>
								</div>
								<div className='col-sm-6'>
									<a
										href='#addEmployeeModal'
										className='btn btn-success'
										data-toggle='modal'
									>
										<i className='material-icons'>
											&#xE147;
										</i>{" "}
										<span>Add New Machine</span>
									</a>
								</div>
							</div>
						</div>
						<div>
							<table className='table table-striped table-hover'>
								<thead>
									<tr>
										<th>Name of Machine</th>
										<th>image</th>
										<th>description</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{current.map((machine, index) => (
										<tr key={index}>
											<td>{machine.name}</td>
											<td>
												<Image
													cloudName='outibois'
													public_id={machine.image[0]}
													className='machine-image-admine-bord'
													style={{
														width: 100,
														height: 100,
													}}
												/>
											</td>
											<td className='discription-paragraph'>
												{machine.discription
													.split(".")
													.map((line, i) => (
														<div key={i}>
															{line}
														</div>
													))}
											</td>
											<td>
												<a
													href='#editEmployeeModal'
													className='edit'
													data-toggle='modal'
												>
													<i
														className='material-icons'
														data-toggle='tooltip'
														title='Edit'
														onClick={() => {
															idOfItemToUpdate({
																id: machine._id,
																name: machine.name,
																discription:
																	machine.discription,
															});
														}}
													>
														&#xE254;
													</i>
												</a>
												<a
													href='#deleteEmployeeModal'
													className='delete'
													data-toggle='modal'
												>
													<i
														className='material-icons'
														data-toggle='tooltip'
														title='Delete'
														onClick={() => {
															idOfItemToDelete(
																machine._id
															);
															// setmachineData({
															//   name: machine.name,
															//   discription: machine.discription,
															// });
														}}
													>
														&#xE872;
													</i>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div id='addEmployeeModal' className='modal fade'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<form>
							<div className='modal-header'>
								<h4 className='modal-title'>Add Machines</h4>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'
								>
									&times;
								</button>
							</div>
							<div className='modal-body'>
								<div className='form-group'>
									<label>Categorie</label>
									<select
										className='form-control'
										required
										onChange={(e) =>
											setcategorie(e.target.value)
										}
									>
										<option value=''></option>
										<option value='newMachine'>
											Nouvelle machine
										</option>
										<option value='oldMachine'>
											Ancien machine
										</option>
										<option value='accessoire'>
											Outiage
										</option>
									</select>
								</div>
								<div className='form-group'>
									<label>Name</label>
									<input
										type='text'
										className='form-control'
										required
										onChange={(e) =>
											setname(e.target.value)
										}
									/>
								</div>
								<div className='form-group'>
									<label>Image</label>
									<input
										accept='.png,.jpg'
										type='file'
										multiple
										className='form-control'
										onChange={(e) =>
											setimage(e.target.files)
										}
										required
									/>
								</div>

								<div className='form-group'>
									<label>description</label>
									<textarea
										type='text'
										className='form-control'
										onChange={(e) =>
											setdiscription(e.target.value)
										}
										required
										style={{
											height: 100,
										}}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<input
									type='button'
									className='btn btn-default'
									data-dismiss='modal'
									value='Cancel'
								/>
								<button
									type='submit'
									className='btn btn-success'
									onClick={add_machine}
									data-dismiss='modal'
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div id='editEmployeeModal' className='modal fade'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<form>
							<div className='modal-header'>
								<h4 className='modal-title'>Edit machine</h4>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'
								>
									&times;
								</button>
							</div>
							<div className='modal-body'>
								<div className='form-group'>
									<label>Name</label>
									<input
										defaultValue={idUpdate.name}
										type='text'
										className='form-control'
										required
										onChange={(e) =>
											setupdatename(e.target.value)
										}
									/>
								</div>
								<div className='form-group'>
									<label>image</label>
									<input
										type='file'
										className='form-control'
									/>
								</div>

								<div className='form-group'>
									<label>description</label>
									<input
										type='text'
										className='form-control'
										required
										defaultValue={idUpdate.discription}
										onChange={(e) =>
											setupdatediscription(e.target.value)
										}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<input
									type='button'
									className='btn btn-default'
									data-dismiss='modal'
									value='Cancel'
									onClick={() => {}}
								/>
								<input
									type='submit'
									className='btn btn-info'
									value='Save'
									onClick={() => {
										update(idUpdate);
									}}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div id='deleteEmployeeModal' className='modal fade'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<form>
							<div className='modal-header'>
								<h4 className='modal-title'>Delete Employee</h4>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'
								>
									&times;
								</button>
							</div>
							<div className='modal-body'>
								<p>
									Are you sure you want to delete these
									Records?
								</p>
								<p className='text-warning'>
									<small>This action cannot be undone.</small>
								</p>
							</div>
							<div className='modal-footer'>
								<input
									type='button'
									className='btn btn-default'
									data-dismiss='modal'
									value='Cancel'
								/>
								<input
									onClick={() => {
										remove(idRemove);
									}}
									type='button'
									className='btn btn-danger'
									value='Delete'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminDADH;
