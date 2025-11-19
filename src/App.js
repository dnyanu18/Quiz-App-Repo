
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
