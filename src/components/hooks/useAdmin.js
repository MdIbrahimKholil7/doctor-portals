import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(null)
    const [adminLoading, setAdminLoading] = useState(true)
    
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/admin?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setAdminLoading(false)
                    setAdmin(data)
                })
        }
    }, [user])
   
    return [admin, adminLoading]
};

export default useAdmin;