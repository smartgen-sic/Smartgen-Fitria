import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Pembukaan from "./components/pembukaan";
import Signup from "./components/signup/Signup";
import Fitur from "./components/fitur/Fitur";
import Akun from "./components/akun/Akun";
import Jurnal from "./components/jurnal/Jurnal"
 
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

                <Route exact path="/fitur">
                    <Fitur />
                </Route>

                <Route exact path="/akun">
                    <Akun />
                </Route>

                <Route exact path="/jurnal">
                    <Jurnal />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;