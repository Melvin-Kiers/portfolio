import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Verzonden formulier:", formData);
    setStatus("Bedankt! Je bericht is verzonden 😊");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="container mb-5" style={{ marginTop: "125px"}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className="p-4 border rounded shadow-sm bg-white" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Contact</h2>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Naam</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Bericht</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Verzenden
              </button>
            </div>

            {status && (
              <p className="text-success text-center mt-3">{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
