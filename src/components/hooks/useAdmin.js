import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(null)
    const [adminLoading, setAdminLoading] = useState(true)
    
    useEffect(() => {
        if (user?.email) {
            fetch(`https://mysterious-plateau-40111.herokuapp.com/admin?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data)
                    setAdminLoading(false)
                })
        }
    }, [user])
   
    return [admin, adminLoading]
};

export default useAdmin;