/*import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleAddToLeaderboard = () => {
    const name = prompt("Enter your name for the leaderboard:");
    if (name) {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push({ name, score });
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      alert("Your score has been added to the leaderboard!");
    }
    dispatch(handleScoreChange(0)); // Reset score after adding to leaderboard
    history.push("/leaderboard");
  };

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0)); // Reset score when returning to settings
    dispatch(handleAmountChange(50));
    history.push("/settings");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score: {score}
      </Typography>
      <Box display="flex" gap={2}>
        <Button onClick={handleBackToSettings} variant="outlined">
          Back to Home
        </Button>
        <Button onClick={handleAddToLeaderboard} variant="contained" color="primary">
          Add to Leaderboard
        </Button>
      </Box>
    </Box>
  );
};

export default FinalScreen;
*/
import { Button, Typography, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

export default function FinalScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const addToBoard = () => {
    const name = prompt("Enter your name for the leaderboard:");
    if (name) {
      const list = JSON.parse(localStorage.getItem("leaderboard")) || [];
      list.push({ name, score });
      localStorage.setItem("leaderboard", JSON.stringify(list));
    }
    dispatch(handleScoreChange(0));
    history.push("/leaderboard");
  };

  const backHome = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(10));
    history.push("/settings");
  };

  return (
    <Box mt={8} display="flex" justifyContent="center">
      <Paper elevation={4} sx={{ p: 4, width: 420, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Final Score: {score}
        </Typography>
        <Typography sx={{ mb: 3, opacity: 0.8 }}>
          Well done! Choose your next action.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button onClick={backHome} variant="outlined">
            BACK TO HOME
          </Button>
          <Button onClick={addToBoard} variant="contained">
            ADD TO LEADERBOARD
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

