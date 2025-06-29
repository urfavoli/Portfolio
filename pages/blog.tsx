import React from 'react';

const blogPostsData = [
  {
    id: 1,
    title: 'Design trends for 2024',
    category: 'Design',
    date: 'Jan 01, 2024',
    img: '/assets/images/blog-1.jpg',
    text: 'Exploring the latest design trends and how they impact web development, from minimalist designs to dark mode aesthetics.',
  },
  {
    id: 2,
    title: 'Building a responsive website with ease',
    category: 'Development',
    date: 'Feb 15, 2024',
    img: '/assets/images/blog-2.jpg',
    text: 'A guide to creating responsive web designs that adapt to various screen sizes, ensuring a seamless user experience.',
  },
  // Add more blog posts
];

const BlogPage = () => {
  return (
    <article className="page-article active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPostsData.map(post => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.img} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date.replace(/ /g, '-')}>{post.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default BlogPage;