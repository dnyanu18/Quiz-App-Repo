
import { Button, CircularProgress, Typography, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default function Questions() {
  const { question_category, question_difficulty, question_type, amount_of_question, score } =
    useSelector((s) => s);
  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) apiUrl += `&category=${question_category}`;
  if (question_difficulty) apiUrl += `&difficulty=${question_difficulty}`;
  if (question_type) apiUrl += `&type=${question_type}`;

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const q = response.results[questionIndex];
      const answers = [...q.incorrect_answers];
      answers.splice(getRandomInt(answers.length + 1), 0, q.correct_answer);
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={12}>
        <CircularProgress />
      </Box>
    );
  }

  const onAnswer = (e) => {
    const q = response.results[questionIndex];
    if (e.target.textContent === decode(q.correct_answer)) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box mt={5} display="flex" justifyContent="center">
      <Paper elevation={4} sx={{ p: 4, width: 560, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={800} gutterBottom>
          Question {questionIndex + 1}
        </Typography>

        <Typography
          sx={{
            background: "#e8f5e9",
            borderRadius: 2,
            p: 2,
            mb: 2,
            fontWeight: 600,
          }}
        >
          {decode(response.results[questionIndex].question)}
        </Typography>

        <Stack spacing={1.5} sx={{ mt: 2 }}>
          {options.map((opt, idx) => (
            <Button key={idx} onClick={onAnswer} variant="contained" sx={{ py: 1.2 }}>
              {decode(opt)}
            </Button>
          ))}
        </Stack>

        <Typography sx={{ mt: 3, fontWeight: 700, color: "#3949ab" }}>
          Score: {score} / {response.results.length}
        </Typography>
      </Paper>
    </Box>
  );
}

