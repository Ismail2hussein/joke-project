import TwoPart from "./TwoPart";
import SingleJoke from "./SingleJoke";
import { useState,useEffect } from "react";

export default function App() {
  const [joke, setJoke] = useState({});
  async function getJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
      const data = await response.json();
      setJoke(data);
      console.log(data);
    } catch (reason) {
      console.log(reason);
    }
  }
  useEffect(()=>getJoke,[])
  return (
    <div className="app">
      <h2 className="heading">😂 Jokes! 😂</h2>
      {joke.type === "single" ? (
        <SingleJoke joke={joke.joke} />
      ) : (
        <TwoPart jokeQuiz={joke.setup} jokeAns={joke.delivery} />
      )}

      <div className="buttons">
        <button onClick={getJoke} className="another">
          Another Joke!😆
        </button>
      </div>
    </div>
  );
}