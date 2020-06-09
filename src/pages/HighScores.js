import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLi } from "../styled/HighScores";

export default function HighScores() {
  const [highScores, setHighScores] = useState([])
  // use fetch API to call getHighScores function
  useEffect(() => {
    console.log('High Scores');
    const loadHighScores = async () => {
      try {
        const res = await fetch('/.netlify/functions/getHighScores');
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.error(err);
      }
    }
    loadHighScores();
  }, []);
  return (
    <div>
      <h1>High Scores</h1>
      <ScoresList>
        {highScores.map(score => (
          <ScoreLi key={score.id}>
            {score.fields.name}: {" "}{score.fields.score}
          </ScoreLi>
        ))}
      </ScoresList>
    </div>
  );
}
