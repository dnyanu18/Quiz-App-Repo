
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

