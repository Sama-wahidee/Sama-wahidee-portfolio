import { useState } from "react";
import murabDemo from "../assets/murab/Demo.mp4";

function ProjectGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  return (
    <>
      <div className="project-gallery">
        <button
          type="button"
          className="project-main-image-button"
          onClick={() => setIsFullscreen(true)}
          aria-label="Open image fullscreen"
        >
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="project-main-image"
          />

          <div className="image-expand-hint">⛶</div>
        </button>

        <div className="project-gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`thumbnail-button ${
                selectedImage === index ? "active" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="project-thumbnail"
              />
            </button>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fullscreen-gallery"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            className="fullscreen-close"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="fullscreen-arrow fullscreen-arrow-left"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="fullscreen-image-container"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="fullscreen-image"
            />

            <div className="fullscreen-counter">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          <button
            type="button"
            className="fullscreen-arrow fullscreen-arrow-right"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}

function Projects() {
  const [showMurabDemo, setShowMurabDemo] = useState(false);
  const getMurabImage = (filename) =>
    new URL(`../assets/murab/${filename}`, import.meta.url).href;

  const getTruckPartImage = (filename) =>
    new URL(`../assets/truck-parts/${filename}`, import.meta.url).href;

  const murabImages = [
    {
      src: getMurabImage("murab-home.png"),
      alt: "Murab equestrian platform home page",
    },
    {
      src: getMurabImage("murab-breeding1.png"),
      alt: "Murab horse breeding pre recommendation system",
    },
    {
      src: getMurabImage("murab-breeding2.png"),
      alt: "Murab horse breeding post recommendation system",
    },
    {
      src: getMurabImage("murab-marketplace.png"),
      alt: "Murab horse marketplace",
    },
    {
      src: getMurabImage("murab-championships.png"),
      alt: "Murab championship management",
    },
    {
      src: getMurabImage("murab-stables.png"),
      alt: "Murab stables directory",
    },
  ];

  const truckPartsImages = [
    {
      src: getTruckPartImage("truck-dashboard.png"),
      alt: "Truck Parts ERP dashboard",
    },
    {
      src: getTruckPartImage("truck-boxes.png"),
      alt: "Truck Parts ERP sales management",
    },
    {
      src: getTruckPartImage("truck-purchases.png"),
      alt: "Truck Parts ERP purchases management",
    },
    {
      src: getTruckPartImage("truck-suppliers.png"),
      alt: "Truck Parts ERP suppliers management",
    },
    {
      src: getTruckPartImage("truck-reports.png"),
      alt: "Truck Parts ERP reports",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">PROJECTS</p>

          <h2>Selected work</h2>

          <p className="section-intro">
            A selection of applications I've designed and built.
          </p>
        </div>

        {/* =========================
            PROJECT 01 — MURAB
        ========================= */}

        <article className="project-featured">
          <ProjectGallery images={murabImages} />

          <div className="project-content">
            <div className="project-number">01</div>

            <p className="project-type">FULL-STACK WEB PLATFORM</p>

            <h3>Murab</h3>

            <p className="project-subtitle">
              Equestrian Marketplace & Management Platform
            </p>

            <p className="project-description">
              An integrated digital platform designed for the equestrian
              community, connecting horse owners, breeders, buyers, trainers,
              stable owners, and competition organizers.
            </p>

            <div className="project-role">
              <strong>My Role</strong>

              <span>QA / Project Management/ Backend Development</span>
            </div>

            <div className="project-technologies">
              <span>React</span>
              <span>Node.js</span>
              <span>FastAPI</span>
              <span>MySQL</span>
              <span>AWS</span>
              <span>VIKOR MCDM</span>
            </div>

            <div className="project-features">
              <div>
                <span>✓</span>
                Horse marketplace
              </div>

              <div>
                <span>✓</span>
                VIKOR breeding recommendations
              </div>

              <div>
                <span>✓</span>
                Horse profiles
              </div>

              <div>
                <span>✓</span>
                Championship management
              </div>

              <div>
                <span>✓</span>
                Stables directory
              </div>

              <div>
                <span>✓</span>
                Articles & knowledge hub
              </div>
            </div>

            <div className="project-actions">
              <button
                type="button"
                className="project-demo"
                onClick={() => setShowMurabDemo(true)}
              >
                View Demo
                <span>▶</span>
              </button>
            </div>
          </div>
        </article>

        {/* =========================
            PROJECT 02 — TRUCK PARTS
        ========================= */}

        <article className="project-featured project-second">
          <ProjectGallery images={truckPartsImages} />

          <div className="project-content">
            <div className="project-number">02</div>

            <p className="project-type">FULL-STACK DESKTOP APPLICATION</p>

            <h3>Truck Parts ERP System</h3>

            <p className="project-description">
              A complete ERP solution designed for truck spare-parts businesses,
              covering inventory, sales, purchases, customers, suppliers,
              financial transactions, stock transfers, and business reporting.
            </p>

            <div className="project-role">
              <strong>My Role</strong>

              <span>Full-Stack Developer</span>
            </div>

            <div className="project-technologies">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>Electron</span>
            </div>

            <div className="project-features">
              <div>
                <span>✓</span>
                Inventory & warehouse management
              </div>

              <div>
                <span>✓</span>
                Sales & purchase invoices
              </div>

              <div>
                <span>✓</span>
                Customers & suppliers
              </div>

              <div>
                <span>✓</span>
                Financial transactions & cheques
              </div>

              <div>
                <span>✓</span>
                Stock transfers and reporting
              </div>

              <div>
                <span>✓</span>
                Electron desktop application
              </div>
            </div>

            <div className="project-actions"></div>
          </div>
        </article>
      </div>
      {showMurabDemo && (
        <div className="demo-modal" onClick={() => setShowMurabDemo(false)}>
          <div
            className="demo-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="demo-modal-close"
              onClick={() => setShowMurabDemo(false)}
              aria-label="Close demo"
            >
              ×
            </button>

            <video className="demo-video" src={murabDemo} controls autoPlay />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
