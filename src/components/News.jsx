import { news } from "../data";
import "./News.css";

export default function News() {
  return (
    <section className="news">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Latest Updates</span>
          <h2 className="section-title">News & Highlights</h2>
        </div>
        <div className="news-grid">
          {news.map((n, i) => (
            <div key={i} className="news-card">
              <div className="news-card-img">
                <span className="news-emoji">{n.emoji}</span>
                <span className="news-card-img-tag">{n.tag}</span>
              </div>
              <div className="news-card-body">
                <div className="news-meta">
                  <span className="news-date">{n.date}</span>
                  <span className="news-category">{n.category}</span>
                </div>
                <h3 className="news-title">{n.title}</h3>
                {n.excerpt && <p className="news-excerpt">{n.excerpt}</p>}
                <a href="#" className="card-link news-read-more">Read more →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="news-footer">
          <a href="#" className="btn-outline-dark">View All News →</a>
        </div>
      </div>
    </section>
  );
}
