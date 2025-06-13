import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css"
import { useSelector } from "react-redux";
const ContactList = ({ icons }) => {

  const contactsData = useSelector((state) => state.contacts.contacts); 
  const filter = useSelector((state) => state.filters.filters.name);

  const contacts = contactsData ? contactsData.items : []; 

  const filteredContacts = contacts.filter((contact) => {
    const contactName = contact.name || '';
    const searchTerm = filter || '';

    return contactName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} icons={icons} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;