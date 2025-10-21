// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "bootstrap/dist/css/bootstrap.min.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({ message: "", success: null });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setStatus({ message: "Verzenden...", success: null });

//     // 👇 Template params moeten exact overeenkomen met EmailJS template
//     const templateParams = {
//       name: formData.name || "Test Naam",
//       email: formData.email || "test@example.com",
//       message: formData.message || "Test bericht",
//       time: new Date().toLocaleString(),
//     };

//     console.log("Template Params:", templateParams);
//     console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
//     console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
//     console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

//     emailjs
//       .send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         setStatus({
//           message: "✅ Bedankt! Je bericht is verzonden.",
//           success: true,
//         });
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         console.error("EmailJS error:", error);
//         setStatus({
//           message: "❌ Er ging iets mis. Probeer opnieuw.",
//           success: false,
//         });
//       });
//   };

//   return (
//     <div
//       className="container d-flex justify-content-center mt-5"
//       style={{ minHeight: "80vh" }}
//     >
//       <div className="col-md-8">
//         <form
//           className="p-4 border rounded shadow-sm bg-light"
//           onSubmit={handleSubmit}
//         >
//           <h2 className="mb-4 text-center">Contact</h2>

//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Naam
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               E-mail
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="message" className="form-label">
//               Bericht
//             </label>
//             <textarea
//               className="form-control"
//               id="message"
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100">
//             Versturen
//           </button>

//           {status.message && (
//             <p
//               className={`mt-3 text-center ${
//                 status.success === true
//                   ? "text-success"
//                   : status.success === false
//                   ? "text-danger"
//                   : "text-secondary"
//               }`}
//             >
//               {status.message}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
