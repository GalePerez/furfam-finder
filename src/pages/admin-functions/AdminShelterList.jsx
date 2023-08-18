import { useState } from "react";
import AdminContainer from "../../components/AdminContainer";

function AdminShelterList() {
  const [shelters, setShelters] = useState([]);
  const [error, setError] = useState(null);

  return <>

    <AdminContainer>
      <div>
        <h3>Shelter List</h3>
        {error ? (
          <p>{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Contact Info</th>
                <th>User ID</th>
              </tr>
            </thead>
            <tbody>
              {shelters.map((shelter) => (
                <tr key={shelter.id}>
                  <td>{shelter.id}</td>
                  <td>{shelter.name}</td>
                  <td>{shelter.location}</td>
                  <td>{shelter.contactInfo}</td>
                  <td>{shelter.user_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminContainer>

  </>
}

export default AdminShelterList