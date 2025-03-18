import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Spinner, Button } from "react-bootstrap";

export default function Admin() {

    const navigate = useNavigate()
    useEffect(() => {
      getprofile()
    },[])

    const [profile, setProfile] = useState({})
    const local = 'http://localhost:10000'

    const getprofile = async () => {
        let token = localStorage.getItem('admin_token');
        if(!token){ navigate('/')}
        try {
            let admin = await fetch(`${api}/getprofile`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            admin = await admin.json();
            if (admin.admin.mobile !== undefined) {
                console.log(admin.admin)
                setProfile(admin.admin);
            } else {
                navigate('/')
            }
        } catch (err) {
            navigate('/')
        }
    }
    return (
        <>
            <h1>Admin Profile</h1>
        </>
    )
}