import Contact from "../Contact/Contact";
import s from "../ContactList/ContactList.module.css"
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contactsSlice";
const ContactList = ({ icons }) => {

 const visibleContacts = useSelector(selectVisibleContacts)

  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} icons={icons} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;