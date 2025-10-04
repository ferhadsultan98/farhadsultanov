// pages/BlogDetails.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import blogData from '../Blog/blogData.json';
import './BlogDetails.scss';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogData.posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blogDetailsPage">
        <div className="container">
          <div className="notFound">
            <h2>Məqalə tapılmadı</h2>
            <Link to="/blog" className="backButton">
              <ArrowLeft size={18} />
              <span>Blog-a qayıt</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Mock blog content - real proyektdə API və ya markdown-dan gələcək
  const content = {
    introduction: "Bu məqalədə React-ın əsaslarını və müasir development praktikalarını öyrənəcəyik. React JavaScript kitabxanasıdır və istifadəçi interfeyslərini yaratmaq üçün ən məşhur alətlərdən biridir.",
    
    sections: [
      {
        heading: "React nədir?",
        content: "React Facebook tərəfindən yaradılmış açıq mənbə JavaScript kitabxanasıdır. Component-based arxitektura ilə işləyir və virtual DOM istifadə edərək yüksək performans təmin edir."
      },
      {
        heading: "Niyə React?",
        content: "React-ın populyarlığının bir neçə səbəbi var: component-based struktur, reusability, böyük community, virtual DOM və rich ecosystem. Bu xüsusiyyətlər onu müasir web development üçün ideal edir."
      },
      {
        heading: "Başlanğıc",
        content: "React ilə işə başlamaq üçün Node.js və npm quraşdırmalısınız. Sonra Create React App istifadə edərək yeni proyekt yarada bilərsiniz. Bu sizə hazır development environment verir."
      }
    ],

    codeExample: `import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;`,

    conclusion: "React öyrənmək müasir web developer üçün vacibdir. Bu məqalədə öyrəndiklərinizi praktikada tətbiq edin və öz proyektlərinizi yaradın."
  };

  const relatedPosts = blogData.posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="blogDetailsPage">
      {/* Article Header */}
      <header className="articleHeader">
        <div className="container">
          <button onClick={() => navigate('/blog')} className="backButton">
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </button>

          <div className="articleMeta">
            <span className="categoryBadge">{post.category}</span>
            <div className="metaInfo">
              <span className="metaItem">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="metaItem">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="articleTitle">{post.title}</h1>
          <p className="articleExcerpt">{post.excerpt}</p>
        </div>
      </header>

      {/* Featured Image */}
      <section className="featuredImage">
        <div className="container">
          <div className="imageWrapper">
            <img src={post.image} alt={post.title} className="actualImage" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="articleContent">
        <div className="container">
          <div className="contentGrid">
            {/* Main Content */}
            <div className="blogMainContent">
              {/* Introduction */}
              <p className="introduction">{content.introduction}</p>

              {/* Sections */}
              {content.sections.map((section, index) => (
                <div key={index} className="contentSection">
                  <h2>{section.heading}</h2>
                  <p>{section.content}</p>
                </div>
              ))}

              {/* Code Example */}
              <div className="codeBlock">
                <div className="codeHeader">
                  <span>Example Code</span>
                </div>
                <pre><code>{content.codeExample}</code></pre>
              </div>

              {/* Conclusion */}
              <div className="conclusion">
                <h3>Nəticə</h3>
                <p>{content.conclusion}</p>
              </div>

              {/* Tags */}
              <div className="articleTags">
                <Tag size={18} />
                <span className="tagItem">React</span>
                <span className="tagItem">JavaScript</span>
                <span className="tagItem">Web Development</span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              {/* Share */}
              <div className="sidebarCard">
                <h4>Share Article</h4>
                <div className="shareButtons">
                  <button className="shareBtn" aria-label="Share on Twitter">
                    <Twitter size={18} />
                  </button>
                  <button className="shareBtn" aria-label="Share on LinkedIn">
                    <Linkedin size={18} />
                  </button>
                  <button className="shareBtn" aria-label="Share on Facebook">
                    <Facebook size={18} />
                  </button>
                  <button className="shareBtn" aria-label="Copy link">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="sidebarCard">
                <h4>Contents</h4>
                <ul className="tocList">
                  {content.sections.map((section, index) => (
                    <li key={index}>
                      <a href={`#section-${index}`}>{section.heading}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relatedPosts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="relatedGrid">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`} 
                  className="relatedCard"
                >
                  <div className="relatedImage">
                     <img src={relatedPost.image} alt={relatedPost.title} className="actualImage" />
                  </div>
                  <div className="relatedContent">
                    <span className="relatedCategory">{relatedPost.category}</span>
                    <h3>{relatedPost.title}</h3>
                    <div className="relatedMeta">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
