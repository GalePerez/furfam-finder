import AdminAdoptionList from "./admin-functions/AdminAdoptionList"
import AdminPetList from "./admin-functions/AdminPetList"
import AdminShelterList from "./admin-functions/AdminShelterList"

function Admin() {
    return <>

    <AdminPetList />
    <AdminAdoptionList />
    <AdminShelterList />    
    </>
}

export default Admin