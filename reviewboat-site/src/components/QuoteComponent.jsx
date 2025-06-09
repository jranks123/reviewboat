export default function QuoteComponent({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <p>‘People trust online reviews. 92% find them reliable, and 38% find them very or extremely reliable.’</p>
        <p>Expert Reviews Survey, 2023</p>
      </section>
    </div>
  );
}
