import { useEffect, useState } from "react"
import "../style/featuredpets.css"
import axios from "axios"

function FeaturedPets() {
    const [featuredPets, setfeaturedPets] = useState({})

    const fetchfeaturedPets = async () => {
        const res = await axios('http://localhost:8000/api/v1/pets')
        const pet = res.data.data
        console.log(res)
        setfeaturedPets(pet.slice(0, 4))
        console.log(pet.slice(0, 4))
    }

    useEffect(() => {
        fetchfeaturedPets()
    }, [])
    return (
        <> 
            <div className="featured-pets-container">
            {featuredPets.map(pet => (
                <div key={pet.id} className="card" style={{ width: "18rem" }}>
                    <img src={pet.image} className="card-img-top" alt={pet.name} />
                    <div className="card-body">
                        <h5 className="card-title">{pet.species}</h5>
                        <p className="card-text">Name: {pet.name}</p>
                        <p className="card-text">Breed: {pet.breed}</p>
                    </div>
                </div>
            ))}
        </div>
             
        </>
    )
}

export default FeaturedPets