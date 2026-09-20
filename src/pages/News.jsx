import news from '../data/news.js'
import './News.css'

function News() {
  return (
    <>
      {/* Page Header */}
      <section className="news-header">
        <div className="news-header-bg">
          <div className="news-grid-bg"></div>
        </div>
        
        <div className="container">
          <div className="news-header-content">
            <h1>Latest from URAN</h1>
            <p className="news-header-desc">
              Group launches, project milestones, research discussions, and activities shaping URAN.
            </p>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="section news-timeline-section">
        <div className="container">
          <div className="news-timeline">
            {news.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < news.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-type">{item.type}</div>
                  <div className="timeline-date">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
