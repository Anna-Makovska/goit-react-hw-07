import s from './App.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector} from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactList from "./components/ContactList/ContactList";
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import {selectIsLoading, selectError} from './redux/contactsSlice'

function App() {
  const icons = [<IoPerson />, <FaPhoneAlt />];
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  

  
  
  useEffect(() => {
dispatch(fetchContacts())
  }, [dispatch]);



  
  return (
    <section className='section'>
      <div className='container'>
        <h1 className={s.header}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList icons={icons} />
      </div>
    </section>
  );
}

export default App
