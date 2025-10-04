// pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  ArrowRight,
  Search
} from 'lucide-react';
import blogData from './blogData.json';
import './Blog.scss';


const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const { categories, posts } = blogData;

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blogPage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">Blog</h1>
      </section>

      {/* Blog Section */}
      <section className="blogSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Latest Articles</h2>
            <p>Thoughts, insights və yazılarım</p>
          </div>

          {/* Controls */}
          <div className="blogControls">
            <div className="searchBox">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="categoryTabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`categoryTab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blogGrid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blogCard">
                <Link to={`/blog/${post.slug}`} className="cardLink">
                  <div className="cardImage">
                    <img src={post.image} alt={post.title} className="cardActualImage" />
                  </div>

                  <div className="cardContent">
                    <span className="cardCategory">{post.category}</span>
                    
                    <h3 className="cardTitle">{post.title}</h3>
                    <p className="cardExcerpt">{post.excerpt}</p>

                    <div className="cardMeta">
                      <div className="metaItem">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="metaItem">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="cardFooter">
                      <span className="readMore">
                        Read More
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="noResults">
              <p>Heç bir məqalə tapılmadı.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
