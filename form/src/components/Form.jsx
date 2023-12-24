import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    emailId: "",
    phoneNumber: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { fullName, emailId, phoneNumber, query } = form;

    if (fullName && emailId && phoneNumber && query) {
      fetch("http://localhost:8080/api/v1/createFormForMySql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert(result.msg);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please enter the details in order to submit!");
    }
  };
  return (
    <>
      <section className="myForm">
        <div className="container my-5">
          <div className="myForm-card">
            <div className="title">
              <h2>Help & Support</h2>
              <p>Please don't hesitate to contact us</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-8 mx-auto">
                <div className="mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="name"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 mx-auto">
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="emailId"
                    id="email"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 mx-auto">
                <div className="mb-2">
                  <label htmlFor="number">Phone</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id="number"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 mx-auto">
                <div className="mb-2">
                  <label htmlFor="query">Your Query</label>
                  <input
                    type="text"
                    name="query"
                    id="query"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-8 mx-auto">
                <div className="my-2">
                  <div className="submit">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
