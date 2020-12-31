//@ts-ignore
import React from "react";
import GlitchClip from "react-glitch-effect/core/Clip";
// import GlitchText from 'react-glitch-effect/core/Text';

export default function GlitchText({ children }) {
  

  return (
    <GlitchClip onHover>
      {children}
    </GlitchClip>
  );
}
