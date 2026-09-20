import './Notices.css'

const notices = [
  {
    date: 'September 2026',
    title: 'URAN is open to research conversations',
    text: 'Students, researchers, and collaborators interested in UAV autonomy, robotics, computer vision, and edge AI are welcome to contact the group.',
  },
  
]

function Notices() {
  return (
    <>
      <section className="notices-header">
        <div className="container notices-header__content">
          <h1>Notices from URAN</h1>
          <p>Important announcements and opportunities from the research group.</p>
        </div>
      </section>

      <section className="section notices-section">
        <div className="container notices-list">
          {notices.map((notice) => (
            <article className="notice-card" key={notice.title}>
              <span>{notice.date}</span>
              <h2>{notice.title}</h2>
              <p>{notice.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Notices
