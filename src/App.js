/*import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
//import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";




function App() {
  return (
    
    <Router>
     
     <Container maxWidth="sm">
     <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact><Login/></Route>
     
          
            <Route path="/settings" >
              <Typography variant="h2" fontWeight="bold" color="red">
                PRO QUIZ
              </Typography>
              
              <Settings />
            </Route>
            <Route path="/question" >
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Switch>
          </Box>
          </Container>
      
    </Router>
    
  );
}

export default App;


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Leaderboard from "./components/Leaderboard";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";


function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold" color="red" gutterBottom>
            PRO QUIZ
          </Typography>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Login from "./components/Login";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Box textAlign="center" mt={4} mb={2}>
          <Typography variant="h3" fontWeight={800} color="red">
            Pro Quiz
          </Typography>
        </Box>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/settings" component={Settings} />
          <Route path="/questions" component={Questions} />
          <Route path="/score" component={FinalScreen} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      </Container>
    </Router>
  );
}
