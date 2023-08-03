import React from "react";
import ContactUserCard from "./ContactUserCard.jsx";
import "../styles/contacts.css"

const Contacts = () => {
return (
  <div className="contacts-container">
    <h2>Contacts</h2>
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
  </div>
);
}

export default Contacts;