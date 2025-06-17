import s from "../SearchBox/SearchBox.module.css"
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/filtersSlice";

const SearchBox = () => {

  const filter = useSelector(selectFilters);

  const dispatch = useDispatch();

    

    const handleInputChange = (evt) => {
      dispatch(changeFilter(evt.target.value));
    };


    return (
    <div className={s.SearchBox}>
        <label className={s.label} >
            Find contacts by name
          <input onChange={handleInputChange} value={filter} className={s.input}></input>
      </label>
    </div>
    )
}
export default SearchBox;