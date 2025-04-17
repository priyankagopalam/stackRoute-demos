import React, { useState } from 'react'
import { login } from './api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    async function loginUser() {
        setLoading(true);
        try {
            const result = await login(email, password);
            console.log(result);
            setSuccess('Login Successful');
            setError('');
        } catch (err: any) {
            setError(`Login failed: ${err.message}`);
            setSuccess('');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input data-testid="email" type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">*</span>
                        <input data-testid="password" type="text" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                    </div>
                    {
                        error && (<div role="alert" style={{ color: "red" }}>
                            {error}
                        </div>)
                    }
                    {
                        success && (<div role="status" style={{ color: "green" }}>
                            {success}
                        </div>)
                    }
                    <div className="mt-2">
                        <button role="button" data-testid="btnSubmit" className="btn btn-primary" onClick={loginUser} disabled={loading}>
                            {loading ? 'Submitting...' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
