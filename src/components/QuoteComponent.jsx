export default function QuoteComponent({ id, title, backgroundColor, componentContent }) {
  return (
    <div className="section-container" style={{ backgroundColor }}>
      <section id={id} className="section" style={{ backgroundColor }}>
        <p className="standard-text">‘People trust online reviews. 92% find them reliable, and 38% find them very or extremely reliable.’</p>
        <p className="small-text">Expert Reviews Survey, 2023</p>
      </section>
    </div>
  );
}
