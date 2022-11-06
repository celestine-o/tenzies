import React from "react";
import Dice from "./Dice";

export default function Main() {

    return(
        <div className="main">
            <h1>Tenzies</h1>
            <p>
                Roll untill all dice are the same. Click each die to freeze
                it at its current value between rolls.
            </p>
            <div className="die-container">
                <Dice />
            </div>
            <button>Roll</button>
        </div>
    )
}