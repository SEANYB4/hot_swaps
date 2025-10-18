import React, {useState, useEffect, FormEvent, ChangeEvent} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";
import axios from "axios";


interface loginDetails {
    username: string;
    password: string;
}

const Login = () => {

    const [loginDetails, setLoginDetails] = useState<loginDetails>({username: '', password: ''});

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        
        event.preventDefault();
    
        try {

            const response = await axios.post('http://localhost:5000/api/login', loginDetails);
        
            if (response.status == 200) {
                navigate('/');
            } else {
                console.error("Login failed...", response.status);
                alert("Error occurred during login");
            }

        } catch(error) {
            console.error("Error: ", error);
            alert("Error occurred during login");
        }
       
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value})
    }


   

    return (

        <div>
            <h1>Login</h1>


            <form onSubmit={handleSubmit} className="loginForm">
                <label>
                    Username:
                    <input type="text" onChange={handleChange}/>
                </label>

                <label>
                    Password:
                    <input type="password" onChange={handleChange}/>
                </label>


                <button type="submit">Login</button>
                
            </form>

        </div>
    )
}



export default Login;