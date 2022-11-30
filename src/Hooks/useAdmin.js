import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.role === 'Admin') {
                        setIsAdmin(true)
                    }
                })
        }
    }, [email])
    return [isAdmin];
}

export default useAdmin;