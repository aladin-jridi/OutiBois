import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

function AdminDADH() {
  // $(document).ready(function () {
  // 	// Activate tooltip
  // 	$('[data-toggle="tooltip"]').tooltip();

  // 	// Select/Deselect checkboxes
  // 	var checkbox = $('table tbody input[type="checkbox"]');
  // 	$("#selectAll").click(function () {
  // 		if (this.checked) {
  // 			checkbox.each(function () {
  // 				this.checked = true;
  // 			});
  // 		} else {
  // 			checkbox.each(function () {
  // 				this.checked = false;
  // 			});
  // 		}
  // 	});
  // 	checkbox.click(function () {
  // 		if (!this.checked) {
  // 			$("#selectAll").prop("checked", false);
  // 		}
  // 	});
  // });
  const [newMachines, setnewMachines] = useState([]);

  const [name, setname] = useState("");
  const [discription, setdiscription] = useState("");
  const [categorie, setcategorie] = useState("Nouvelle machine");
  const [image, setimage] = useState(null);

  const [deleteMachine, setdeleteMachine] = useState(null);
  function fetchData() {
    axios
      .get("http://localhost:5000/api/newMachine/findAllMachine")
      .then(({ data }) => {
        console.log(data);
        setnewMachines(data);
      });
  }
  useLayoutEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {});
  const uploadeImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", 499444684363352);
    formData.append("upload_preset", "lzyjffjz");
    return axios.post(
      "https://api.cloudinary.com/v1_1/da7abrbcz/image/upload",
      formData
    );
  };

  const add_machine = (e) => {
    e.preventDefault();
    console.log(image);
    uploadeImage(image)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
    console.log({
      name: name,
      discription: discription,
      cat: categorie,
      img: image,
    });
  };
  function remove(id) {
    axios
      .delete(`http://localhost:5000/api/newMachine/deleteOnenNewMachine/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="10">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Machine</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Machine</span>
                  </a>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>{" "}
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll"></label>
                      </span>
                    </th>
                    <th>Name of Machine</th>
                    <th>image</th>
                    <th>discription</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {newMachines.map((machine, index) => (
                    <tr key={index}>
                      <td>
                        <span className="custom-checkbox">
                          <input
                            type="checkbox"
                            id="checkbox1"
                            name="options[]"
                            value="1"
                          />
                          <label htmlFor="checkbox1"></label>
                        </span>
                      </td>
                      <td>{machine.name}</td>
                      <td>
                        <img
                          className="machine-image-admine-bord"
                          style={{ width: 100, height: 100 }}
                          src={machine.image[0]}
                        />
                      </td>
                      <td>{machine.discription}</td>
                      <td>
                        <a
                          href="#editEmployeeModal"
                          className="edit"
                          data-toggle="modal"
                        >
                          <i
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Edit"
                          >
                            &#xE254;
                          </i>
                        </a>
                        <a
                          href="#deleteEmployeeModal"
                          className="delete"
                          data-toggle="modal"
                        >
                          <i
                            onClick={() => {
                              setdeleteMachine(machine._id);
                            }}
                            className="material-icons"
                            data-toggle="tooltip"
                            title="Delete"
                          >
                            &#xE872;
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              ;
            </div>
          </div>
        </div>
      </div>

      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Add Machines</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="form-group">
                <label>Categorie</label>
                <select
                  className="form-control"
                  required
                  onChange={(e) => setcategorie(e.target.value)}
                >
                  <option value="newMachine">Nouvelle machine</option>
                  <option value="oldMachine">Ancienne machine</option>
                  <option value="accessorie">Outiage</option>
                </select>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Image</label>
                  <input
                    type="file"
                    className="form-control"
                    required
                    onChange={(e) => setimage(e.target.files[0])}
                  />
                </div>

                <div className="form-group">
                  <label>discription</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setdiscription(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={(image) => {
                    uploadeImage(image);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Delete Employee</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p className="text-warning">
                  <small>This action cannot be undone.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input
                  onClick={() => {
                    remove(deleteMachine);
                  }}
                  type="button"
                  className="btn btn-danger"
                  value="Delete"
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
