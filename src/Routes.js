
import { Switch, Route } from "react-router-dom"

import Home from "./Pages/Home/index"
import Sites from "./Pages/Sites/index"
import Stacks from "./Pages/Stacks/index"


export default () =>{
    return(
        <Switch>
            <Route exact path="/"> 
                <Home/>
            </Route>
            
            <Route exact path="/Stacks"> 
                <Stacks />
            </Route>

            <Route exact path="/Sites"> 
                <Sites />
            </Route>
        </Switch>
    );
}