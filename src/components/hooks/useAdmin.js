import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin,setAdmin]=useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/admin?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[user])

    return [admin]
};

export default useAdmin;