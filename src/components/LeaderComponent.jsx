import Button from './Button';

export default function LeaderComponent({ id, backgroundColor, onRequestDemo }) {
  

  return (
    <div className="section-container" style={{ backgroundColor }}>
      <section id={id} className="section" style={{ backgroundColor }}>
        <p id="leader-tagline"> The #1 tool for expert product opinions </p>
        <h2 className='extra-big-text'>Instant reviews from experts on product pages</h2>
        <div className="leader-subheading-container"> 
          <div className="leader-subheading">          
            <img id="pen-icon" className="leader-subheading-icon" src='/pen.svg'></img>
            <p>Retailers close more sales.</p>
          </div>
          <div className="leader-subheading">          
            <img id="shopping-icon" className="leader-subheading-icon" src='/shopping.svg'></img>
            <p>Publishers sell more content.</p>
          </div>
        </div>
        <Button id="try-reviewboat-button" copy="Try Reviewboat" onClick={onRequestDemo}/>
      </section>
    </div>
  );
}
