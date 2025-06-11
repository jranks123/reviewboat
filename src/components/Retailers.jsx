export default function Retailers({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <div class="publisher-retailer-leader">
          <h2>For Retailers</h2>
          <p>Stop losing customers to Google. Reviewboat keeps high-intent shoppers on your site by surfacing reviews exactly when they need them—on your product pages.</p>
        </div>
        <div class="icon-section">
          <div class="icon-subsection">
            <img id="retailers-icon-1" src='/rbicon1.svg'></img>
            <h3> Avoid losing customers </h3>
            <p> Keep shoppers on your site with expert product reviews embedded directly on product pages. Reduce bounce and stop losing sales to Google. </p>
          </div>
          <div class="icon-subsection">
            <img id="retailers-icon-2" src='/rbicon2.svg'></img>
            <h3> Higher conversion rates </h3>
            <p> Trusted expert reviews increase buyer confidence and drive more purchases—typically boosting conversion rates by 10–25%. </p>
          </div>
          <div class="icon-subsection">
            <img id="retailers-icon-2" src='/rbicon3.svg'></img>
            <h3> No manual licensing </h3>
            <p> One line of code. No tagging, no chasing reviews. Content updates automatically across your catalogue. </p>
          </div>
        </div>
      </section>
    </div>
  );
}
