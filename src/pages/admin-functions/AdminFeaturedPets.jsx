import FeaturedPets from "../../components/FeaturedPets"
import AdminContainer from "../../components/AdminContainer"
import { Link } from "react-router-dom"

function AdminFeaturedPets() {
    return (
        <>
            <AdminContainer>
                <FeaturedPets />
            </AdminContainer>
        </>
    )
}

export default AdminFeaturedPets 