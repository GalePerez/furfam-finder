import axios from "axios";
import { useEffect, useState } from "react";
import { setPets } from "../store/animalReducers";
import { useDispatch } from "react-redux";

function FilterPanel({ onFilter }) {
    const dispatch = useDispatch()
    const [filterOption, setFilterOption] = useState({
      size: "",
      gender: "",
      
    });

    const handleFilterChange = async (e) => {
        const res = await axios('http://localhost:8000/api/v1/pets')
        dispatch(setPets(res.data.data))
        const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFilterOption((prevFilters) => ({
      ...prevFilters,
      [name]: newValue,
    }));
      };
  
    const handleSearch = () => {
        onFilter(filterOption);
      };
  
    const handleReset = () => {
      setFilterOption({
        
        size: "",
        gender: "",
       
      });
      onFilter({})
    };

    useEffect(() => {
        handleFilterChange()
    })
  
    
    return (
        <>
        <div className="border d-flex flex-column">
            <h4>Filter Section</h4>
            
      <label>
        Size:
        <select
          name="size"
          value={filterOption.size}
          onChange={handleFilterChange}
        >
          <option value="">Any</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="giant">Large</option>
        </select>
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={filterOption.gender}
          onChange={handleFilterChange}
        >
          <option value="">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <div className="filter-buttons">
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>

        </>
    )
}


export default FilterPanel