import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";
import { StyledCharacter, StyledMessage } from '../styled/Game';
import { StyledTitle } from "../styled/Random";

export default function GameOver({ history }) {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");

  if (score === -1) {
    history.push("/");
  }

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({ name: 'Jane', score })
        }
        const res = await fetch('/.netlify/functions/saveHighScore', options);
        const data = await res.json();
        if (data.id) {
          setScoreMessage("Your High Score has been recorded");
        } else {
          setScoreMessage("Sorry, your score is not high enough to be recorded, please try again!");
        }
      } catch (err) {
        console.error(err);
      }
    }
    saveHighScore();
  }, [score]);

  return (
    <div>
      <StyledTitle style={{ color: "orange" }}>Game Over</StyledTitle>
        <StyledCharacter style={{ marginBottom: "33px", fontSize: '6rem' }}>Your Score: {score}</StyledCharacter>
          <StyledLink style={{ marginRight: "40px" }} to="/">
            Back Home
          </StyledLink>{" "}
        <StyledLink to="/game">Play Again</StyledLink>
      <StyledMessage>{scoreMessage}</StyledMessage>
    </div>
  );
}
