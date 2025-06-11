export default function Publishers({ id, title, backgroundColor, componentContent }) {
  return (
    <div class="section-container" style={{ backgroundColor }}>
      <section id={id} class="section" style={{ backgroundColor }}>
        <div class="publisher-retailer-leader">
          <h2>For Publishers</h2>
          <p>Stop losing customers to Google. Reviewboat keeps high-intent shoppers on your site by surfacing reviews exactly when they need them—on your product pages.</p>
        </div>
        <div class="icon-section">
          <div class="icon-subsection">
            <img id="publishers-icon-1" src='/rbicon4.svg'></img>
            <h3> Passive revenue stream </h3>
            <p> Earn from your existing content. We license and distribute your reviews—no effort required. </p>
          </div>
          <div class="icon-subsection">
            <img id="publishers-icon-2" src='/rbicon5.svg'></img>
            <h3> Beat algorithm changes </h3>
            <p> Bypass SEO and affiliate noise. Reach purchase-ready audiences directly at the point of sale. </p>
          </div>
          <div class="icon-subsection">
            <img id="publishers-icon-2" src='/rbicon6.svg'></img>
            <h3> Don’t rely on affiliate </h3>
            <p> Affiliate is unpredictable. Reviewboat offers consistent visibility and revenue - no cookies, no commissions </p>
          </div>
        </div>
      </section>
    </div>
  );
}
