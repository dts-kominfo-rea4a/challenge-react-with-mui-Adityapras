// import './App.css';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';

import React, { useState } from "react";
import Header from "./components/Header.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState([
    {
      name: "Monica",
      phone: "085367653673",
      email: "monica@email.com",
      photo: "http://placekitten.com/500",
    },
    {
      name: "Devi",
      phone: "084857384793",
      email: "devi@email.com",
      photo: "http://placekitten.com/400",
    },
    {
      name: "Withered",
      phone: "087577588432",
      email: "withered@email.com",
      photo: "http://placekitten.com/300",
    },
    {
      name: "Flowers",
      phone: "088487547211",
      email: "flowers@email.com",
      photo: "http://placekitten.com/600",
    },
  ]);

  const createNewContact = (data) => {
    setContacts([...contacts, data]);
  };
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", gap: "20px" }}>
        <ContactForm fnCreateNewContact={createNewContact} />

        <div
          style={{
            backgroundColor: "#C6EBC5",
            width: "50%",
            borderRadius: "4px",
            padding: "10px",
            marginTop: "70px",
            marginRight: "10px",
          }}
        >
          {contacts.map((contact) => {
            return <Contact data={contact} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
