import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return isAuthenticated ? <Home /> : <Login onLogin={() => setIsAuthenticated(true)} />;
}

export default App;
