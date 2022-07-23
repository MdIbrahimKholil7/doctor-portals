import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.email
    useEffect(() => {
        (async () => {
            if (email) {
                const { data } = await axios.put(`https://mysterious-plateau-40111.herokuapp.com/token`, { email })
                console.log(data)
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken)
            }
        })()
    }, [user])
    return [token]
};

export default useToken;