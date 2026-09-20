import './PageHeader.css'

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </section>
  )
}

export default PageHeader
