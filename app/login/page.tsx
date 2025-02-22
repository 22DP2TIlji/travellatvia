"use client"
import './login.css';
export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" id="email" placeholder="Email" required/>
                <input type="password" id="password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

