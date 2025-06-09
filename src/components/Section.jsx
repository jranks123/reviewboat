export default function Section({ id, title, backgroundColor }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        {{ children }}
      </section>
    </div>
  );
}
