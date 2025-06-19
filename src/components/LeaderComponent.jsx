import Button from './Button';

export default function LeaderComponent({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <h2 class='extra-big-text'>Instant reviews from experts on product pages</h2>
        <p>Get automatic reviews from experts on product pages. Close more sales.</p>
        <Button copy="Try Reviewboat" />
      </section>
    </div>
  );
}
