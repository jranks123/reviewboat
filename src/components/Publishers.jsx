export default function Publishers({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
      </section>
    </div>
  );
}
