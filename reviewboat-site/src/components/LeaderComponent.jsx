import Button from './Button';

export default function LeaderComponent({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <h2>Keep customers on your website</h2>
        <p>Get automatic reviews from experts on product pages. Close more sales.</p>
        <Button copy="Try Reviewboat" />
      </section>
    </div>
  );
}
