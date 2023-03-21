import "../styles/loading_screen.css";

const LoadingScreen = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <img alt="#" src={process.env.PUBLIC_URL + "/img/spinner.gif"} />
    </div>
  );
};

export default LoadingScreen;
