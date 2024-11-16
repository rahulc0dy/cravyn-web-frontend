import "@styles/loader.css";

export default function LoadingSpinner() {
  return (
    <div className="card">
      <div className="loader">
        <p>loading</p>
        <div className="words">
          <span className="word">buttons</span>
          <span className="word">forms</span>
          <span className="word">links</span>
          <span className="word">cards</span>
          <span className="word">buttons</span>
        </div>
      </div>
    </div>
  );
}
