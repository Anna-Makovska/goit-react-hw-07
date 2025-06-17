import s from "../Contact/Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ contact: { id, name, number }, icons }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.mainBox}>
      <div className={s.submainBox}>
        <div className={s.wrapper}>
          <i className={s.icon}>{icons[0]}</i>
          <span className={s.name}>{name} </span>
        </div>
        <div className={s.wrapper}>
          <i className={s.icon}>{icons[1]}</i>
          <span className={s.number}>{number}</span>
        </div>
      </div>

      <button onClick={() => handleDelete()} className={s.contactButton}>
        Delete
      </button>
    </div>
  );
};
export default Contact;