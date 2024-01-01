import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useNavigate } from "react-router-dom";
import staff from "../assets/list";
import { MDBCol } from "mdb-react-ui-kit";
import "../styles/UserList.css";

function TableView() {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const [filteredList, setFilterCriteria] = useState({
    minAge: "",
    maxAge: "",
    location: "",
    name: "",
  });

  const filteredProfiles = staff.filter((profile) => {
    const age = profile.age;
    const location = profile.location.toLowerCase();
    const name = profile.email.toLowerCase();

    const isAgeValid =
      (!filteredList.minAge || age >= parseInt(filteredList.minAge, 10)) &&
      (!filteredList.maxAge || age <= parseInt(filteredList.maxAge, 10));

    const isLocationValid =
      !filteredList.location ||
      location.includes(filteredList.location.toLowerCase());

    const isNameValide =
      !filteredList.name || name.includes(filteredList.name.toLowerCase());

    return isAgeValid && isLocationValid && isNameValide;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProfiles = filteredProfiles.slice(startIndex, endIndex);

  const handleNameClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="mx-3">
      <div>
        <div
          className="col-sm mt-1 me-2 d-flex justify-content-between"
          style={{
            backgroundColor: " rgb(233, 238, 247)",
          }}
        >
          <div className="d-flex ">
            <h2 style={{ fontFamily: "Roboto, sans-serif" }}>USER LISTS</h2>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            height: "2.9px",
            backgroundColor: "#1B1E36",
          }}
        />

        <div className="d-flex gap-5 mt-4 justify-content-between">
          <div className="d-sm-flex flex-column d-lg-flex flex-lg-row">
            <div>
              {" "}
              <MDBCol md="14">
                <div className="active-pink-3 active-pink-4 mb-4 ">
                  <input
                    className="form-control-pages"
                    type="text"
                    placeholder="Search Name"
                    aria-label="Search"
                    value={filteredList.name}
                    onChange={(e) =>
                      setFilterCriteria({
                        ...filteredList,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </MDBCol>
            </div>
            <div className="mx-lg-5">
              {" "}
              <MDBCol md="14">
                <div className="active-pink-3 active-pink-4 mb-4 ">
                  <input
                    className="form-control-pages"
                    type="text"
                    placeholder="Search Location"
                    aria-label="Search"
                    value={filteredList.location}
                    onChange={(e) =>
                      setFilterCriteria({
                        ...filteredList,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
              </MDBCol>
            </div>
          </div>

          <div className="d-flex flex-column ">
            <label className="text-center ">Age</label>
            <div>
              <input
                type="number"
                value={filteredList.minAge}
                placeholder="min"
                onChange={(e) =>
                  setFilterCriteria({
                    ...filteredList,
                    minAge: e.target.value,
                  })
                }
                style={{ width: "50px" }}
              />

              <input
                className="mb-2 mx-2"
                type="number"
                placeholder="max"
                value={filteredList.maxAge}
                onChange={(e) =>
                  setFilterCriteria({
                    ...filteredList,
                    maxAge: e.target.value,
                  })
                }
                style={{ width: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-div">
        <Table className="table-text" striped bordered hover size="sm">
          <thead style={{ height: "3rem" }}>
            <tr className="table-head text-center">
              <th style={{ width: "3%", background: "#cad8fa" }}>#</th>
              <th style={{ width: "14%", background: "#cad8fa" }}>Name</th>
              <th style={{ width: "2%", background: "#cad8fa" }}>Photo</th>
              <th style={{ width: "6%", background: "#cad8fa" }}>Age</th>
              <th style={{ width: "16%", background: "#cad8fa" }}>Location</th>
              <th style={{ width: "14%", background: "#cad8fa" }}>Phone</th>
              <th style={{ width: "14%", background: "#cad8fa" }}>Email</th>
            </tr>
          </thead>
          {currentProfiles.length > 0 ? (
            <tbody className="table-body  text-center">
              {currentProfiles.map((post, index) => (
                <tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNameClick(post.id)}
                >
                  <td>{index + 1}</td>
                  <td>{post.name}</td>
                  <td>
                    <img
                      style={{
                        height: "55px",
                        width: "55px",
                        objectFit: "cover",
                      }}
                      src={post.thumbnail}
                      alt="User"
                    />
                  </td>
                  <td>{post.age}</td>
                  <td>{post.location}</td>
                  <td style={{ minWidth: "8rem" }}>{post.phone}</td>
                  <td>{post.email}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
      <PaginationControl
        page={currentPage}
        between={4}
        total={filteredProfiles.length}
        limit={itemsPerPage}
        changePage={(page) => setCurrentPage(page)}
        ellipsis={1}
      />
    </div>
  );
}

export default TableView;
