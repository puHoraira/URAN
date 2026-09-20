import './Gallery.css'
import { assetPath } from '../utils/assetPath.js'

const images = [
  {
    src: assetPath('/projects/mission-adaptive-uav/outdoor.jpeg'),
    alt: 'URAN UAV during an outdoor flight test',
    title: 'Outdoor flight test',
    description: 'Testing the aircraft in an open field environment.',
  },
  {
    src: assetPath('/projects/mission-adaptive-uav/indoor.png'),
    alt: 'URAN UAV during a controlled indoor flight test',
    title: 'Controlled test environment',
    description: 'Early flight work in a more controlled setting.',
  },
  {
    src: assetPath('/projects/mission-adaptive-uav/platform.jpeg'),
    alt: 'URAN multirotor platform viewed from above',
    title: 'Current multirotor platform',
    description: 'The aircraft platform being prepared for future experiments.',
    platform: true,
  },
]

function Gallery() {
  return (
    <>
      <section className="gallery-page-header">
        <div className="container gallery-page-header__content">
          <h1>URAN Gallery</h1>
          <p>A visual archive of our research, people, projects, events, experiments, and activities.</p>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <div className="gallery-page-grid">
            {images.map((image) => (
              <figure className="gallery-page-item" key={image.src}>
                <div className={`gallery-page-item__image${image.platform ? ' gallery-page-item__image--platform' : ''}`}>
                  <img src={image.src} alt={image.alt} />
                </div>
                <figcaption>
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
