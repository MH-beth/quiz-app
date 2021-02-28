import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">Votre Resultat est de {score} / 5 </div>
    <button className="playBtn" onClick={playAgain}>
      Rejouer
    </button>
  </div>
);

export default Result;
