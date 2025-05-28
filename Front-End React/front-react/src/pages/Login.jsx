import { useState } from "react";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // Simulação de autenticação
        if (email === "admin@admin.com" && password === "admin") {
            setError("");
            onLogin();
        } else {
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
            <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 32, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: 320 }}>
                <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
                <div style={{ marginBottom: 16 }}>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 8, marginTop: 4 }} required />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Senha</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: 8, marginTop: 4 }} required />
                </div>
                {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" style={{ cursor: "pointer", padding: 10, background: "#1976d2", color: "#fff", border: "none", borderRadius: 4, fontWeight: "bold" }}>
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
