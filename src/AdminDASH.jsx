import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

function AdminDADH() {
  $(document).ready(function () {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function () {
      if (this.checked) {
        checkbox.each(function () {
          this.checked = true;
        });
      } else {
        checkbox.each(function () {
          this.checked = false;
        });
      }
    });
    checkbox.click(function () {
      if (!this.checked) {
        $("#selectAll").prop("checked", false);
      }
    });
  });

  const [newMachines, setnewMachines] = useState([]);
  const [oldMachines, setoldMachines] = useState([]);
  const [accessoires, setaccessoires] = useState([]);
  const [current, setcurrent] = useState([]);
  const [name, setname] = useState("");
  const [discription, setdiscription] = useState("");
  const [categorie, setcategorie] = useState("");
  const [image, setimage] = useState(null);

  useLayoutEffect(() => {
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
  }, []);

  // useEffect(() => {
  // 	console.log(newMachines);
  // });

  const uploadeImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lzyjffjz");
    return axios.post(
      "http://api.cloudinary.com/v1_1/outibois/image/upload",
      formData
    );
  };

  const add_machine = (e) => {
    e.preventDefault();
    console.log(image);
    uploadeImage(image)
      .then(({ data }) => {
        // console.log(data);
        console.log({
          name: name,
          discription: discription,
          cat: categorie,
          img: data.public_id,
        });
        let machine = {
          name: name,
          discription: discription,
          image: [data.public_id],
        };
        axios.post(`http://localhost:5000/api/${categorie}/add`, machine);
      })
      .catch((err) => console.log(err));
  };

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
                  <div className="toggle-machine">
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
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Machine</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Name of Machine</th>
                    <th>image</th>
                    <th>discription</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {current.map((machine, index) => (
                    <tr key={index}>
                      <td>{machine.name}</td>
                      <td>
                        <Image
                          cloudName="outibois"
                          public_id={machine.image[0]}
                          className="machine-image-admine-bord"
                          style={{
                            width: 100,
                            height: 100,
                          }}
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
              <div className="modal-body">
                <div className="form-group">
                  <label>Categorie</label>
                  <select
                    className="form-control"
                    required
                    onChange={(e) => setcategorie(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="newMachine">Nouvelle machine</option>
                    <option value="oldMachine">Ancien machine</option>
                    <option value="accessoire">Outiage</option>
                  </select>
                </div>
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
                    onChange={(e) => setimage(e.target.files[0])}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>discription</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setdiscription(e.target.value)}
                    required
                    style={{
                      height: 100,
                    }}
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
                  onClick={add_machine}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Edit Employee</h4>
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
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea className="form-control" required></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                />
                <input type="submit" className="btn btn-info" value="Save" />
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
                  type="submit"
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
