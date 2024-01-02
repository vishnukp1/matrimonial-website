import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import staff from "../assets/list";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function UserCard() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const selectedPerson = staff.find(
    (person) => person.id === parseInt(userId, 10)
  );
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <div
        className="col-sm pt-2 d-flex px-3"
        style={{
          backgroundColor: " rgb(233, 238, 247)",
        }}
      >
        <h2 style={{ fontFamily: "Roboto, sans-serif" }}>PROFILE</h2>
      </div>

      <div
        style={{
          flex: 1,
          height: "2.9px",
          backgroundColor: "#1B1E36",
        }}
      />
      <section
        className="vh-100"
        style={{ backgroundColor: "#f4f5f7", width: "100%" }}
      >
        <MDBContainer className="py-5 ">
          <MDBRow className="justify-content-center">
            <MDBCol lg="10" md="12" sm="12" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src={selectedPerson.thumbnail}
                      alt="Avatar"
                      className="my-5 rounded-circle"
                      style={{ width: "55%", height: "35%" }}
                      fluid
                    />
                    <div
                      className="mb-4"
                      style={{
                        flex: 1,
                        height: ".3px",
                        backgroundColor: "#1B1E36",
                      }}
                    />
                    <MDBTypography tag="h4" style={{ color: "black" }}>
                      {selectedPerson.name}
                    </MDBTypography>
                    <MDBTypography tag="h5" style={{ color: "black" }}>
                      {selectedPerson.email}
                    </MDBTypography>
                    <MDBCardText tag="h5" style={{ color: "black" }}>
                      {selectedPerson.job}
                    </MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h4">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Age</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.age}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.phone}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.email}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Location</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.location}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Gender</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.gender}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Education</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.education}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Date of Birth</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.dob}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Salary</MDBTypography>
                          <MDBCardText className="text-muted">
                            {selectedPerson.salary}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <MDBIcon fab icon="facebook me-3" size="lg" />
                        </a>
                        <a href="#!">
                          <MDBIcon fab icon="twitter me-3" size="lg" />
                        </a>
                        <a href="#!">
                          <MDBIcon fab icon="instagram me-3" size="lg" />
                        </a>
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="outline-danger"
                          onClick={handleBackClick}
                        >
                          Take Me Back
                        </Button>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default UserCard;
