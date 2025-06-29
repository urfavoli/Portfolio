import React, { useState } from 'react';
import { IoEyeOutline, IoChevronDown } from 'react-icons/io5';

const projectsData = [
  { id: 1, title: 'Project One', category: 'web design', img: '/assets/images/project-1.jpg' },
  { id: 2, title: 'Project Two', category: 'applications', img: '/assets/images/project-2.jpg' },
  { id: 3, title: 'Project Three', category: 'web development', img: '/assets/images/project-3.jpg' },
  // Add more project data
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const handleFilterChange = (newFilter: React.SetStateAction<string>) => {
    setFilter(newFilter);
    setIsSelectOpen(false); // Close select box on selection
  };

  return (
    <><article className="page-article active" data-page="portfolio">
          <header>
              <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
              {/* Filter buttons for larger screens */}
              <ul className="filter-list">
                  <li><button className={`filter-item button ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</button></li>
                  <li><button className={`filter-item button ${filter === 'web design' ? 'active' : ''}`} onClick={() => handleFilterChange('web design')}>Web Design</button></li>
                  <li><button className={`filter-item button ${filter === 'applications' ? 'active' : ''}`} onClick={() => handleFilterChange('applications')}>Applications</button></li>
                  <li><button className={`filter-item button ${filter === 'web development' ? 'active' : ''}`} onClick={() => handleFilterChange('web development')}>Web Development</button></li>
              </ul>

              {/* Filter select box for smaller screens */}
              <div className={`filter-select-box ${isSelectOpen ? 'active' : ''}`}>
                  <button className={`filter-select ${isSelectOpen ? 'active' : ''}`} onClick={() => setIsSelectOpen(!isSelectOpen)} data-select>
                      <div className="select-icon">
                          <IoChevronDown />
                      </div>
                  </></div>
          </button>
          <ul className="select-list">
              <li className="select-item"><button onClick={() => handleFilterChange('all')} data-select-item>All</button></li>
              <li className="select-item"><button onClick={() => handleFilterChange('web design')} data-select-item>Web design</button></li>
              <li className="select-item"><button onClick={() => handleFilterChange('applications')} data-select-item>Applications</button></li>
              <li className="select-item"><button onClick={() => handleFilterChange('web development')} data-select-item>Web Development</button></li>
          </ul>
      </div><ul className="project-list">
              {filteredProjects.map(project => (
                  <li className="project-item active" key={project.id} data-filter-item data-category={project.category}>
                      <a href="#">
                          <figure className="project-img">
                              <IoEyeOutline />
                              <ion-icon name="eye-outline"></ion-icon>
                          </div>
                          <img src={project.img} alt={project.title} loading="lazy" />
                      </figure>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-category">{project.category}</p>
                  </a>))}
          </li></>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PortfolioPage;