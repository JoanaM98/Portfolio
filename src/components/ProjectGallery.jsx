import React from "react";
import Card from "./Card";
import TicTacToe from "../assets/Tic-Tac-Toe.png";
import FlipTheCoin from "../assets/Flip-The-Coin.png";

function ProjectGallery() {
  return (
    <div id="project-gallery" className="container">
      <h2>My Projects</h2>
      <div className="gallery-container">
        <Card
          src={TicTacToe}
          title="Tic Tac Toe"
          subtitle="My first ever web app!"
          description={
            <p className="card-description">
              In this simple game, 2 players take turns marking empty squares
              with their symbols (X and O). The first player to get three
              symbols in a row, horizontally, vertically, or diagonally, wins!{" "}
            </p>
          }
          html="HTML"
          css="CSS"
          js="Javascript"
          react="React"
          link="https://joanam98.github.io/TicTacToe/"
        />
        <Card
          src={FlipTheCoin}
          title="Flip the Coin"
          subtitle="Heads or Tails, Let Fate Decide!"
          description={
            <p className="card-description">
              This is an interactive web app that simulates the
              classic coin flipping experience. With a simple, animated coin
              flip and dynamic visuals, it offers a fun way to make quick
              decisions.
            </p>
          }
          html="HTML"
          css="CSS"
          js="Javascript"
          link="https://joanam98.github.io/FLip-the-Coin/"
        />
      </div>
    </div>
  );
}

export default ProjectGallery;
