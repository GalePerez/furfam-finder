import { Link } from "react-router-dom";


function AdminAside() {
    return (
        <>
            <div className="aside">
                <div className="button1">
                    <Link to="/admin-featured-pets">
                        <button>
                            Featured Pets
                        </button>
                    </Link>
                </div>
                <br/>
                <div className="button2">
                    <Link to="/admin-pet-list">
                        <button>
                            Pet List
                        </button>
                    </Link>
                </div>
                <br/>
                <div className="button3">
                    <Link to="/admin-adoption-list">
                        <button>
                            Adoption List
                        </button>
                    </Link>
                </div>
                <br/>
                <div className="button4">
                    <Link to="/admin-shelter-list">
                        <button>
                            Shelter List
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdminAside