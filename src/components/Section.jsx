export default function Section({ id, title, backgroundColor }) {
  return (
    <div className="section-container" style={{ backgroundColor }}>
      <section id={id} className="section" style={{ backgroundColor }}>
        {{ children }}
      </section>
    </div>
  );
}
