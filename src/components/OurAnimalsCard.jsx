import { Link } from "react-router-dom"

function OurAnimalCard(props) {
  const { id, image, species, name, breed } = props
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt={image} />
            <div className="card-body">
              <h5 className="card-title">{species}</h5>
              <p className="card-text">Name: {name}</p>
              <p className="card-text">Breed: {breed}</p>
              <Link to={`/pet-info/${id}`}>Full Details</Link>
          </div>
      </div>
    </>
  )
    

}

export default OurAnimalCard