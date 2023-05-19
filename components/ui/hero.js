export default function Hero({ heading, text, children }) {
  return (
    <div className="hero">
      {heading && <h1> {heading}</h1>}
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
