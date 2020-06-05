import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";

export default function GameOver({ history }) {
  const [score] = useScore();

  if (score === -1) {
    history.push("/");
  }
  return (
    <div>
      <h1 style={{ color: "orange" }}>Game Over</h1>
      <p style={{ marginBottom: "33px" }}>Your Score: {score}</p>
      <StyledLink style={{ marginRight: "40px" }} to="/">
        Back Home
      </StyledLink>{" "}
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  );
}
