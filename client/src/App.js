import "./reset.css";
import "./App.css";
import Header from "./Components/Header";
import MyList from "./Pages/MyList2";
import CreateList from "./Pages/CreateList";
import Inspiration from "./Pages/Inspiration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBtn from "./Components/LoginBtn";
import LogoutBtn from "./Components/LogoutBtn";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="column">
                    <h1>Auth0 Login</h1>
                    <LoginBtn />
                    <LogoutBtn />
                </div>
                <Header />

                <Routes>
                    <Route path="/mylist" element={<MyList />} />
                    <Route path="/createlist" element={<CreateList />} />{" "}
                    <Route path="/inspiration" element={<Inspiration />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
