function TwoPart(props) {
  return (
    <div className="content">
      <h2 className="joke">{props.jokeQuiz}</h2>
      <h2 className="punch-line">{props.jokeAns}</h2>
    </div>
  );
}

export default TwoPart;