import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import Projects from "./Projects";
import githubLogo from "./25231.png";
import { authentication } from "../App";

function Home() {
  const code = new URLSearchParams(window.location.search).get("code");
  var loginWithGithubUrl = "https://secure-coast-89399.herokuapp.com/";
  var data = (
    <div style={{ backgroundColor: "red" }}>
      <div
        style={{
          width: "38px",
          margin: "auto",
          paddingTop: "35px",
          transform: "translateX(-50%)",
        }}
      >
        <a href={loginWithGithubUrl}>
          <img src={githubLogo} alt="githubLogo" width="50px" />
        </a>
      </div>
      <div
        style={{
          width: "240px",
          margin: "auto",
          marginTop: "3px",
        }}
      >
        Login with github to View Notes
      </div>
      <br />
      <br />
      <hr
        style={{
          height: "8px",
          backgroundColor: "black",
        }}
      />
    </div>
  );

  const originalNotes = <Notes />;

  const [notes, setNotes] = useState(data);

  var getData = () =>
    fetch("https://secure-coast-89399.herokuapp.com/oauth-callback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "code=" + code,
    }).then((res) => {
      if (res.status == 200) {
        return originalNotes;
      }
      return notes;
    });
  useEffect(() => {
    if (getCookie("GithubAuthorized").length == 0) {
      if (code != null && code.length == 20) {
        getData().then((data) => setNotes(data));
        setCookie("GithubAuthorized", "Yes", 5);
      }
    } else {
      setNotes(originalNotes);
    }
  }, []);

  return (
    <div>
      <div
        style={{
          marginTop: "3%",
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        Hey! I'm <br />
        <div style={{ fontSize: "80px" }}>Bubesh</div>
        &nbsp; Software Engineer @ Accolite Digital
      </div>
      <hr />
      <div>
        <div style={{ backgroundColor: "#4CAF50" }}>
          <h1
            style={{
              width: "70px",
              margin: "auto",
              transform: "translateX(-50%)",
            }}
          >
            Projects
          </h1>
        </div>
        <Projects />
      </div>
      <br /> <br />
      <div>
        <div style={{ backgroundColor: "#4CAF50" }}>
          <h1
            style={{
              width: "50px",
              margin: "auto",
              transform: "translateX(-50%)",
            }}
          >
            Notes
          </h1>
        </div>
        {notes}
      </div>
    </div>
  );
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default Home;
