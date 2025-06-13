import s from './App.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
// import { useState } from 'react';
// import { useEffect } from 'react';

function App() {
  const icons = [<IoPerson />, <FaPhoneAlt />];
  // const [contacts, setContacts] = useState(() => {
  //   const savedObject = window.localStorage.getItem("saved-contacts");
  //   if (savedObject !== null) {
  //     return JSON.parse(savedObject);
  //   }
  //   return [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ]
  // });
  
  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  // }, [contacts]);



  
  return (
    <section className="section">
      <div className="container">
        <h1 className={s.header}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList icons={icons} />
      </div>
    </section>
  );
}

export default App
