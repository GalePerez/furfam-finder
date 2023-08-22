import AdminAside from "./AdminAside";

function AdminContainer(props) {
    return (
        <>
            <div className="d-flex body p-4">
                <AdminAside  />
                <div className="d-flex justify-content-center flex-wrap">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default AdminContainer