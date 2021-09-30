import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Pembukaan from "./components/pembukaan";
import Signup from "./components/signup/Signup";
import Bot from "./components/bot/Bot";
import Fitur from "./components/fitur/Fitur";
import Akun from "./components/akun/Akun";
 
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Pembukaan />
                </Route>
                
                <Route exact path="/signup">
                    <Signup />
                </Route>

                <Route exact path="/bot">
                    <Bot />
                </Route>

                <Route exact path="/fitur">
                    <Fitur />
                </Route>

                <Route exact path="/akun">
                    <Akun />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;