import React from "react";
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
  handleAmountChange,
} from "../redux/actions";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !difficulty || !type || !amount) {
      alert("Please fill all fields before starting the quiz!");
      return;
    }
    dispatch(handleCategoryChange(category));
    dispatch(handleDifficultyChange(difficulty));
    dispatch(handleTypeChange(type));
    dispatch(handleAmountChange(amount));
    history.push("/questions");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      bgcolor="#f9f9f9"
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          mb={3}
        >
          Quiz Setup
        </Typography>

        {loading && <Typography>Loading categories...</Typography>}
        {error && <Typography color="error">Something went wrong!</Typography>}

        {!loading && !error && (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {response?.trivia_categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                  value={difficulty}
                  label="Difficulty"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="hard">Hard</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value="multiple">Multiple Choice</MenuItem>
                  <MenuItem value="boolean">True / False</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Number of Questions"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                inputProps={{ min: 1, max: 50 }}
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #8e24aa, #5e35b1)",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(90deg, #7b1fa2, #4527a0)",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>
          </form>
        )}
      </Paper>
    </Box>
  );
};

export default Settings;
