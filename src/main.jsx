import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App.jsx";
import "./index.css";

// Create a container element
const appContainer = document.createElement("div");
appContainer.id = "root"; // Set an appropriate ID for your container

// Append the container to the document body or another desired parent element
document.body.appendChild(appContainer);

// Use the container as the root for your application
createRoot(appContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
