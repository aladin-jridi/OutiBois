import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

function AdminDADH() {
  const [newMachines, setnewMachines] = useState([]);
  const [oldMachines, setoldMachines] = useState([]);
  const [accessoires, setaccessoires] = useState([]);
  const [enPromotion, setenPromotion] = useState([]);
  const [devits, setdevits] = useState([]);
  const [current, setcurrent] = useState([]);
  const [name, setname] = useState("");
  const [discription, setdiscription] = useState("");
  const [categorie, setcategorie] = useState("");
  const [image, setimage] = useState(null);
  const [idRemove, setidRemove] = useState("");
  const [idUpdate, setidUpdate] = useState({
    id: "",
    name: "",
    discription: "",
  });
  const [updatename, setupdatename] = useState("");
  const [updatediscription, setupdatediscription] = useState("");
  const [toggleDevit, settoggleDevit] = useState(true);
  const [idDevit, setidDevit] = useState("");

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
      .then(() => {
        axios
          .get("http://localhost:5000/api/enPromotion/findAll")
          .then(({ data }) => {
            setenPromotion(data);
          });
      })
      .then(() => {
        axios
          .get("http://localhost:5000/api/devit/findAll")
          .then(({ data }) => {
            setdevits(data.reverse());
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
    } else if (current === accessoires) {
      axios
        .delete(`http://localhost:5000/api/accessoire/deleteOne/${id}`)
        .then(() => {
          fetchdata();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .delete(`http://localhost:5000/api/enPromotion/deleteOne/${id}`)
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
        axios.post(`http://localhost:5000/api/${categorie}/add`, machine);
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
    } else if (current === accessoires) {
      axios
        .put(
          `http://localhost:5000/api/accessoire/updateOne/${object.id}`,
          dataUpdate
        )
        .then(() => {
          fetchdata();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(
          `http://localhost:5000/api/enPromotion/updateOne/${object.id}`,
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

  const removeDevit = (id) => {
    axios
      .delete(`http://localhost:5000/api/devit/deleteOne/${id}`)
      .then(() => {
        fetchdata();
      })
      .catch((err) => {
        console.log(err);
      });
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
                    Gérer <b>les articles</b>
                  </h2>
                  <div className="toggle-machine">
                    <p
                      id="adminNav"
                      onClick={() => {
                        setcurrent(newMachines);
                        settoggleDevit(true);
                      }}
                    >
                      Nouvelle machines
                    </p>
                    <p
                      id="adminNav"
                      onClick={() => {
                        setcurrent(oldMachines);
                        settoggleDevit(true);
                      }}
                    >
                      Ancienne machines
                    </p>
                    <p
                      id="adminNav"
                      onClick={() => {
                        setcurrent(accessoires);
                        settoggleDevit(true);
                      }}
                    >
                      Outiage
                    </p>
                    <p
                      id="adminNav"
                      onClick={() => {
                        setcurrent(enPromotion);
                      }}
                    >
                      En promotion
                    </p>
                    <p
                      id="adminNav"
                      onClick={() => {
                        settoggleDevit(false);
                      }}
                    >
                      Demmande devis
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 add-machine-section">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Ajouter une nouvelle article </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              {toggleDevit ? (
                <table className="table table-striped table-hover">
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
                            cloudName="outibois"
                            public_id={machine.image[0]}
                            className="machine-image-admine-bord"
                            style={{
                              width: 100,
                              height: 100,
                            }}
                          />
                        </td>
                        <td className="discription-paragraph">
                          {machine.discription.split(".").map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </td>
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
                              onClick={() => {
                                idOfItemToUpdate({
                                  id: machine._id,
                                  name: machine.name,
                                  discription: machine.discription,
                                });
                              }}
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
                              onClick={() => {
                                idOfItemToDelete(machine._id);
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
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="devit-table-col">Information du client</th>
                      <th className="devit-table-col">Articles demmandés</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devits.map((devit, index) => (
                      <tr key={index}>
                        <td className="devit-table-col client-cell">
                          <ul>
                            <li>Nom: {devit.nom}</li>
                            <li>
                              E-mail:
                              {devit.email}
                            </li>
                            <li>Mobile: {devit.mobile}</li>
                            <li>Domaine: {devit.address}</li>
                            <li>Domaine: {devit.domaine}</li>
                          </ul>
                        </td>
                        <td className="devit-table-col">
                          {devit.machines.map((machine, i) => (
                            <p key={i}>{machine}</p>
                          ))}
                        </td>
                        <td>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                              onClick={() => {
                                setidDevit(devit._id);
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
              )}
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
                    <option value="enPromotion">En Promotion</option>
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
                    accept=".png,.jpg"
                    type="file"
                    multiple
                    className="form-control"
                    onChange={(e) => setimage(e.target.files)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>description</label>
                  <textarea
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
                  data-dismiss="modal"
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
                <h4 className="modal-title">Modifier</h4>
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
                  <input
                    defaultValue={idUpdate.name}
                    type="text"
                    className="form-control"
                    required
                    onChange={(e) => setupdatename(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>description</label>
                  <textarea
                    type="text"
                    className="form-control text-update"
                    required
                    defaultValue={idUpdate.discription}
                    onChange={(e) => setupdatediscription(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  value="Cancel"
                  onClick={() => {}}
                />
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Save"
                  onClick={() => {
                    update(idUpdate);
                  }}
                />
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
                <h4 className="modal-title">Supprimer</h4>
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
                <p>Etes-vous sûr de vouloir supprimer ces articles ?</p>
                <p className="text-warning">
                  <small>Cette action ne peut être annulée.</small>
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
                    if (toggleDevit) {
                      remove(idRemove);
                    } else {
                      removeDevit(idDevit);
                    }
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
