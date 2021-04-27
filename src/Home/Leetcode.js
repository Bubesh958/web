import React, { useEffect, useState } from "react";
import { contest } from "./Leetcode.contest";
import { problems } from "./Leetcode.problems";
import html from "./yo.htm";

function Leetcode() {
  var [data, setData] = useState(problems);
  var [activeButton, setActiveButton] = useState("Problems");

  useEffect(() => {}, [data, activeButton]);

  const changeContent = function (button) {
    switch (button) {
      case "Problems":
        setActiveButton(button);
        setData(problems);
        break;
      case "Contest":
        setActiveButton(button);
        setData(contest);
        break;
    }
  };

  const isItActive = function (button) {
    if (button == activeButton) return true;
    return false;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ul className="NavBar">
        <li>
          <a
            className={isItActive("Problems") ? "active" : ""}
            onClick={() => changeContent("Problems")}
          >
            Problems
          </a>
        </li>
        <li>
          <a
            className={isItActive("Contest") ? "active" : ""}
            onClick={() => changeContent("Contest")}
          >
            Contest
          </a>
        </li>
        <li style={{ float: "right" }}>
          <a href="/">Home</a>
        </li>
      </ul>
      <hr />
      <br />
      <div style={{ display: "inline-block" }}>
        <div
          style={{ textAlign: "left" }}
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </div>
  );
}

export default Leetcode;
