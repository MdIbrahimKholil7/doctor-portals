import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.email
    useEffect(() => {
        (async () => {
            if (email) {
                const { data } = await axios.put(`http://localhost:5000/token`, { email })
                console.log(data)
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken)
            }
        })()
    }, [user])
    return [token]
};

export default useToken;