
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";
import Firstcontext from "./Context Api/ContextApi";
import EditTodo from "./Components/EditTodo";
import About from "./Components/About";

// import firstcontext from "./Context Api/ContextApi";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    
 <Router>
    
    <Navbar/>
   <Switch>

   <Route exact path="/">
<Todos />
</Route>
<Route exact path="/edittodo/:id/:title">
<EditTodo />
</Route>
<Route path="/about">
<About />
</Route>
    </Switch>
    </Router>




  
   
    
  );
}

export default App;
