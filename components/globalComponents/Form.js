// "use client";

// import React, { useEffect, useRef } from "react";
// const Form = ({ showForm, setShowForm }) => {
//   const modalRef = useRef();
//   const handleOutsideClick = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       setShowForm(false);
//     }
//   };

//   useEffect(() => {
//     const loadScriptAndStyles = () => {
//       window.ee_form_widget_baseurl =
//         "https://eeconfigstaticfiles.blob.core.windows.net/staticfiles/ee-form-widget/";

//       if (!document.getElementById("__formWidgetCss")) {
//         const linkElement = document.createElement("link");
//         linkElement.id = "__formWidgetCss";
//         linkElement.rel = "stylesheet";
//         linkElement.href =
//           window.ee_form_widget_baseurl + "css/stylesheet.min.css";
//         linkElement.type = "text/css";
//         document.head.appendChild(linkElement);
//       }

//       const scriptElement = document.createElement("script");
//       scriptElement.type = "text/javascript";
//       scriptElement.src =
//         window.ee_form_widget_baseurl + "js/eeFormWidget.min.js";
//       scriptElement.onload = async function () {
//         try {
//           const _eeFormWidget = new eeFormWidget();
//           await _eeFormWidget.init("tisd", "form-2", "ee-form-2");
//         } catch (error) {}
//       };

//       document.head.appendChild(scriptElement);
//     };

//     if (showForm) {
//       loadScriptAndStyles();
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [showForm, setShowForm]);

//   return (
//     <>
//       {showForm && (
//         <div
//           style={{
//             borderRadius: "15px",
//             background: "rgba(0, 0, 0, 0.5)",
//             justifyContent: "center",
//             alignItems: "center",
//             display: "flex",
//             position: "fixed",
//             inset: "0px",
//             zIndex: "999",
//             width: "100%",
//             height: "100%",
//             outline: "2px solid transparent",
//             outlineOffset: "2px",
//             margin: "auto",
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#fff",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               maxWidth: "450px",
//               width: "100%",
//               borderRadius: "30px",
//             }}
//           >
//             <div
//               ref={modalRef}
//               id="extraedge"
//               style={{
//                 borderRadius: "30px",
//               }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Form;
