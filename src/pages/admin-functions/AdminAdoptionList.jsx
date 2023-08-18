import { useState } from "react";
import AdminContainer from "../../components/AdminContainer";

function AdminAdoptionList() {
    const [adoptions, setAdoptions] = useState([]);
    const [error, setError] = useState(null);
    return <>
    <AdminContainer>
      <div>
        <h3>Adoption List</h3>
        {error ? (
          <p>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Info</th>
                <th>Type of Pet</th>
                <th>Pet Name</th>
              </tr>
            </thead>
            <tbody>
              {adoptions.map((adoption) => (
                <tr key={adoption.id}>
                  <td>{adoption.id}</td>
                  <td>{adoption.firstName}</td>
                  <td>{adoption.lastName}</td>
                  <td>{adoption.contactInfo}</td>
                  <td>{adoption.typeOfPet}</td>
                  <td>{adoption.PetName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminContainer>
    </>
}

export default AdminAdoptionList