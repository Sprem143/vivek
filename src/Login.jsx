import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const api='https://vivek-backend.onrender.com'
    const local='http://localhost:10000'
    const handleSignIn = async () => {
        try {
            const { data } = await axios.post(`${api}/login`, { mobile, password });
            console.log(data)
            localStorage.setItem("admin_token", data.token);
            navigate("/admin");
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    const handleSignup = async () => {
        try {const name = 'Vivek Bhati'
            const mobile = 7366943700;
            const email ='vivek@gmail.com';
            const password = '12345'

            const { data } = await axios.post(`${api}/signup`, {name, mobile,email, password });
            localStorage.setItem("watrken_admin_token", data.token);
            navigate("/admin/profile");
        } catch (err) {
            alert("Invalid credentials");
        }
    };



    return (
        <div>
            <h1>Sign In</h1>
            <input type="number" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignup}>Sign UP</button>
        </div>
    );
};

export default Login;
