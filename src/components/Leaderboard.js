/*
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const sortedData = data.sort((a, b) => b.score - a.score);
    setLeaderboardData(sortedData);
  }, []);

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      {leaderboardData.length === 0 ? (
        <p>No leaderboard data available</p>
      ) : (
        <ul>
          {leaderboardData.map((entry, index) => (
            <li key={index}>
              <span>#{index + 1}</span>
              <span>{entry.name}</span>
              <span>{entry.score} points</span>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
};

export default Leaderboard;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from localStorage or initialize with an empty array
    const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const sortedData = data.sort((a, b) => b.score - a.score); // Sort in descending order of score
    setLeaderboardData(sortedData);
  }, []);

  const handleClearLeaderboard = () => {
    // Clear leaderboard data from localStorage and state
    localStorage.removeItem("leaderboard");
    setLeaderboardData([]);
  };

  return (
    <div className="leaderboard-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Leaderboard</h1>
      {leaderboardData.length === 0 ? (
        <p>No leaderboard data available</p>
      ) : (
        <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid black" }}>Rank</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid black" }}>#{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.name}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.score} points</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClearLeaderboard} style={{ marginRight: "10px" }}>
          Clear Leaderboard
        </button>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from localStorage or initialize with an empty array
    const fetchLeaderboardData = () => {
      const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
      const sortedData = data.sort((a, b) => b.score - a.score); // Sort in descending order of score
      setLeaderboardData(sortedData);
    };
    fetchLeaderboardData();
  }, []);

  const handleClearLeaderboard = () => {
    // Clear leaderboard data from localStorage and state
    localStorage.removeItem("leaderboard");
    setLeaderboardData([]);
  };

  return (
    <div className="leaderboard-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Leaderboard</h1>
      {leaderboardData.length === 0 ? (
        <p>No leaderboard data available</p>
      ) : (
        <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid black" }}>Rank</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid black" }}>#{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.name}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.score} points</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClearLeaderboard} style={{ marginRight: "10px" }}>
          Clear Leaderboard
        </button>
        <Link to="/Settings">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";

const headerBg = "#6a1b9a";      // purple
const headerText = "#ffffff";
const rowAlt = "#f3e5f5";        // light purple
const rowBg = "#efe2ff";         // slightly different for striping

export default function Leaderboard() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const sorted = [...data].sort((a, b) => b.score - a.score).slice(0, 10);
    setRows(sorted);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("leaderboard");
    setRows([]);
  };

  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Box width="min(680px, 92%)">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, color: headerBg, mb: 3, textShadow: "0 1px 0 rgba(0,0,0,.05)" }}
        >
          Leaderboard
        </Typography>

        {rows.length === 0 ? (
          <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
            <Typography>No leaderboard data available</Typography>
          </Paper>
        ) : (
          <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ background: headerBg }}>
                  <TableCell sx={{ color: headerText, fontWeight: 700 }}>RANK</TableCell>
                  <TableCell sx={{ color: headerText, fontWeight: 700 }}>NAME</TableCell>
                  <TableCell sx={{ color: headerText, fontWeight: 700 }}>SCORE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((r, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      background: i % 2 === 0 ? rowAlt : rowBg,
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600 }}>{`#${i + 1}`}</TableCell>
                    <TableCell sx={{ textTransform: "capitalize" }}>{r.name}</TableCell>
                    <TableCell>{`${r.score} points`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={clearAll}>
            Clear Leaderboard
          </Button>
          <Button component={Link} to="/Settings" variant="contained" sx={{ background: headerBg }}>
            Go Home
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
