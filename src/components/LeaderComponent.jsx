import Button from './Button';

export default function LeaderComponent({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <h2 class='extra-big-text'>Instant reviews from experts on product pages</h2>
        <div class="leader-subheading-container"> 
          <div class="leader-subheading">          
            <img id="pen-icon" class="leader-subheading-icon" src='/pen.svg'></img>
            <p>Retailers close more sales.</p>
          </div>
          <div class="leader-subheading">          
            <img id="shopping-icon" class="leader-subheading-icon" src='/shopping.svg'></img>
            <p>Publishers sell more content.</p>
          </div>
        </div>
        <Button copy="Try Reviewboat" />
      </section>
    </div>
  );
}
