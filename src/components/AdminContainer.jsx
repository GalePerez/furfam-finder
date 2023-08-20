import AdminAside from "./AdminAside";

function AdminContainer(props) {
    return (
        <>
            <div className="d-flex body">
                <AdminAside />

                {props.children}
        
            </div>
        </>
    )
}

export default AdminContainer