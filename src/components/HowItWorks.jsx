export default function HowItWorks({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <div class="how-it-works-section-container">
          <div class="how-it-works-sub-section" id="how-section-0">
            <h2>How it works</h2>
            <p>Reviewboat helps ecommerce retailers boost conversion rates by embedding expert reviews directly into product pages. We license high-quality review content from trusted publishers—tech journalists, product testers, and niche experts—and automatically match it to the relevant products on site.</p>
          </div>

          <div class="how-it-works-sub-section" id="how-section-1">
            <div id="how-section-1-1">
              <h2>We license content from the world’s best reviewers</h2>
              <p>User reviews are important, but reviews from experienced experts are better. We have relationships with some of the most trusted publications in the world. We license their review content, and save it in our database. We are extremely selective. And no AI. This is real expertise from journalists who’ve been testing products for decades.</p>
            </div>
            <img id="how-it-works-image-1" src='/image1.png'></img>
          </div>

          <div class="how-it-works-sub-section" id="how-section-2">
            <img id="how-it-works-image-2" src='/image2.png'></img>
            <div id="how-section-2-1">
              <h2>Reviews are automatically matched to products</h2>
              <p>Our algorithm matches product titles on e-commerce sites to the 1000s of reviews in our database. It selects the most relevant review to be displayed - and all with just one line of code.</p>
            </div>
          </div>

          <div class="how-it-works-sub-section" id="how-section-3">
            <div id="how-section-3-1">
              <h2>Customers see reviews from experts on product pages</h2>
              <p>A preview quote is displayed on the product page. When clicked, this reveals the full review in a pop-up modal. The customer gets the answer they need, from a top reviewer. No navigating away from the page.</p>
            </div>
            <img id="how-it-works-image-3" src='/image3.png'></img>

          </div>

        </div>
      </section>
    </div>
  );
}
