import AdminAside from "./AdminAside";

function AdminContainer(props) {
    return (
        <>
            <div className="d-flex">
                <AdminAside />

                {props.children}
        
            </div>
        </>
    )
}

export default AdminContainer