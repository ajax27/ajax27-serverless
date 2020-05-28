import React from "react";
import { Accent2 } from "../styled/Random";
import { CTA } from "../styled/CTA";
import { StyledTitle } from "../styled/Random";

export default function Home() {
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or Type '<Accent2>s</Accent2>' to start playing
      </CTA>
    </div>
  );
}
