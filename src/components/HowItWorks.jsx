export default function HowItWorks({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <div>
          <div class="how-it-works-sub-section" id="how-section-0">
            <h2>How it works</h2>
            <p>Reviewboat helps ecommerce retailers boost conversion rates by embedding expert reviews directly into product pages. We license high-quality review content from trusted publishers—tech journalists, product testers, and niche experts—and automatically match it to the relevant products on site.</p>
          </div>
          <div class="how-it-works-sub-section" id="how-section-1">
            <div>
              <h2>We license content from the world’s best reviewers</h2>
              <p>User reviews are important, but reviews from experienced experts are better. We have relationships with some of the most trusted publications in the world. We license their review content, and save it in our database. We are extremely selective. And no AI. This is real expertise from journalists who’ve testing products for decades.</p>
            </div>
            <img id="how-it-works-image-1" src='image1.png'></img>
          </div>
          <div class="how-it-works-sub-section" id="how-section-2">
            <img id="how-it-works-image-2" src='image2.png'></img>
            <div>
              <h2>We license content from the world’s best reviewers</h2>
              <p>User reviews are important, but reviews from experienced experts are better. We have relationships with some of the most trusted publications in the world. We license their review content, and save it in our database. We are extremely selective. And no AI. This is real expertise from journalists who’ve testing products for decades.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
