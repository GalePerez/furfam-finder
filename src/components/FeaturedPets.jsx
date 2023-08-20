import { useEffect, useState } from "react"
import "../style/featuredpets.css"
import axios from "axios"
import { Link } from "react-router-dom"

function FeaturedPets(props) {
    const { id, image, species, name, breed } = props
    console.log(name)
    return (
        <> 
            <div className="featured-pets-container">
            <Link to={`/pet-info/${id}`}>
                <div key={id} className="card" style={{ width: "20rem" }}>
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{species}</h5>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Breed: {breed}</p>
                    </div>
                </div>
            </Link>
        </div>
             
        </>
    )
}

export default FeaturedPets