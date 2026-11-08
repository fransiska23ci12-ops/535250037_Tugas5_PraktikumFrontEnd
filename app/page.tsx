import SiteNavbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const products = [
  {
    name: "Cappuccino",
    description:
      "Espresso dengan perpaduan susu dan foam lembut.",
    price: "Rp25.000",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=700",
  },
  {
    name: "Cafe Latte",
    description:
      "Kopi espresso dengan susu creamy yang nikmat.",
    price: "Rp28.000",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700",
  },
  {
    name: "Americano",
    description:
      "Kopi hitam dengan rasa kuat dan aroma khas.",
    price: "Rp22.000",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700",
  },
];

export default function Home() {
  return (
    <>
      <SiteNavbar />

      <main>
        {/* HERO CAROUSEL */}
        <section id="home">
          <HeroSection />
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="row align-items-center g-5">

              <div className="col-lg-6">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000"
                  alt="Interior Kopi Senja"
                  className="about-image"
                />
              </div>

              <div className="col-lg-6">
                <span className="section-label">
                  ABOUT US
                </span>

                <h2 className="section-title">
                  More Than Just a Cup of Coffee
                </h2>

                <p className="section-description">
                  Kopi Senja adalah tempat untuk menikmati
                  kopi berkualitas dengan suasana nyaman.
                  Kami menghadirkan berbagai pilihan kopi
                  dengan biji kopi pilihan dan racikan terbaik.
                </p>

                <p className="section-description">
                  Setiap cangkir dibuat dengan penuh perhatian
                  untuk memberikan pengalaman kopi yang
                  istimewa dalam setiap momen.
                </p>

                <a href="#menu" className="dark-button">
                  Discover Our Menu
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="menu-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">
                OUR MENU
              </span>

              <h2 className="section-title">
                Our Popular Coffee
              </h2>

              <p className="section-description">
                Temukan kopi favoritmu dari pilihan menu
                terbaik Kopi Senja.
              </p>
            </div>

            <div className="row g-4">
              {products.map((product, index) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >
                  <div className="product-card">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-content">
                      <h3>{product.name}</h3>

                      <p>{product.description}</p>

                      <div className="product-bottom">
                        <span>{product.price}</span>

                        <a href="#contact">
                          Order Now
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WHY US SECTION */}
        <section id="why-us" className="why-section">
          <div className="container">

            <div className="section-heading">
              <span className="section-label">
                WHY CHOOSE US
              </span>

              <h2 className="section-title">
                Why People Love Our Coffee
              </h2>
            </div>

            <div className="row g-4">

              <div className="col-md-4">
                <div className="why-card">
                  <div className="why-icon">☕</div>
                  <h3>Premium Quality</h3>
                  <p>
                    Menggunakan biji kopi pilihan
                    dengan kualitas terbaik.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-card">
                  <div className="why-icon">♡</div>
                  <h3>Made with Love</h3>
                  <p>
                    Setiap minuman dibuat dengan
                    perhatian dan sepenuh hati.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-card">
                  <div className="why-icon">✦</div>
                  <h3>Cozy Atmosphere</h3>
                  <p>
                    Suasana nyaman untuk bersantai
                    dan menikmati waktu.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="container">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>Lets Enjoy a Cup of Coffee</h2>

            <p>
              Kunjungi Kopi Senja dan nikmati pengalaman
              kopi yang berbeda bersama kami.
            </p>

            <div className="contact-info">
              <p>📍 Jakarta, Indonesia</p>
              <p>🕒 Monday - Sunday, 09.00 - 22.00</p>
              <p>✉ hello@kopisenja.com</p>
            </div>

            <a
              href="mailto:hello@kopisenja.com"
              className="hero-button"
            >
              Contact Us
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">

          <h3>KOPI SENJA<span>.</span></h3>

          <p>
            Good Coffee, Good Mood, Good Moments.
          </p>

          <div className="footer-line"></div>

          <small>
            © 2026 Kopi Senja. All Rights Reserved.
          </small>

        </div>
      </footer>
    </>
  );
}
