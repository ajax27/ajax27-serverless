import React from "react";
import { Accent2 } from "../styled/Random";
import { CTA } from "../styled/CTA";
import { StyledTitle } from "../styled/Random";
import { useAuth0 } from '../auth';

export default function Home() {
  const { user } = useAuth0();
  return (
    <div>
    <h2>Welcome</h2>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or Type '<Accent2>s</Accent2>' to start playing
      </CTA>
    </div>
  );
}
