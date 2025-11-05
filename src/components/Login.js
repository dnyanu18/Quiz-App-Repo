import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      localStorage.setItem("username", username);
      history.push("/settings");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <Box
      /* full-screen yellow panel (minus a small space for header) */
      sx={{
        bgcolor: "#FFFACD",
        height: "calc(100vh - 88px)",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 }
      }}
    >
      <Box
        sx={{
          width: "min(1300px, 96vw)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          flexWrap: { xs: "wrap", md: "nowrap" }
        }}
      >
        {/* Left: BIGGER login card */}
        <Paper
          elevation={8}
          sx={{
            width: { xs: "100%", sm: 520 },     /* ⬅ bigger */
            borderRadius: 3,
            px: { xs: 4, sm: 5 },
            py: { xs: 4, sm: 5 }
          }}
        >
          <Typography
            variant="h3"                      /* ⬅ bigger title */
            align="center"
            fontWeight={800}
            mb={3}
            sx={{ color: "#1976d2", lineHeight: 1.1 }}
          >
            User Login
          </Typography>

          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                size="medium"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                size="medium"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.4,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  background: "linear-gradient(90deg, #d81b60 0%, #5e35b1 100%)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #c2185b 0%, #512da8 100%)"
                  }
                }}
              >
                LOGIN
              </Button>
            </Stack>
          </form>
        </Paper>

        {/* Right: Welcome text (more content, bigger type) */}
        <Box sx={{ flex: 1, textAlign: "left", minWidth: 280, pr: { md: 2 } }}>
          <Typography
            variant="h5"
            fontWeight={800}
            gutterBottom
            sx={{ color: "#000" }}
          >
            Welcome!
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Enter your details and start playing the quiz.
          </Typography>

          <Typography sx={{ color: "#333", lineHeight: 1.7 }}>
            • Choose the <strong>category</strong>, <strong>difficulty</strong>, and
            <strong> type</strong> you like.<br />
            • Earn points for each correct answer.<br />
            • See how you stack up on the <strong>Leaderboard</strong>!<br />
            • Challenge yourself, improve knowledge, and have fun 🎯
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
