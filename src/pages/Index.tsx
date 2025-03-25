
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BarChart, Droplets, Wind, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const Index = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container navbar">
          <div className="logo">EcoSustain</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#stats">Statistics</a></li>
              <li><a href="#cta">Take Action</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with added background image */}
      <section className="hero" style={{ 
        background: `linear-gradient(rgba(249, 247, 248, 0.85), rgba(233, 180, 188, 0.5)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fadeIn" style={{ color: 'var(--color-foreground)' }}>Sustaining Our Planet</h1>
            <h2 className="hero-subtitle animate-fadeIn" style={{ animationDelay: '0.2s', color: 'var(--color-secondary-dark)' }}>
              Environmental degradation and climate change demand urgent action through innovative
              systems and technologies to promote sustainability and reduce ecological harm.
            </h2>
            <div style={{ animationDelay: '0.4s' }} className="animate-fadeIn">
              <a href="#cta" className="btn btn-primary">Join Our Mission</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with images */}
      <section id="features" className="features" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--color-primary-dark)' }}>Innovative Solutions</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Sustainable Energy" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <Leaf size={48} />
              </div>
              <h3 className="feature-title">Sustainable Energy</h3>
              <p>Developing renewable energy solutions that reduce carbon footprints and dependency on fossil fuels.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Water Conservation" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <Droplets size={48} />
              </div>
              <h3 className="feature-title">Water Conservation</h3>
              <p>Implementing advanced water management systems to preserve and protect our most valuable resource.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Carbon Reduction" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <BarChart size={48} />
              </div>
              <h3 className="feature-title">Carbon Reduction</h3>
              <p>Creating technology and practices that measurably reduce greenhouse gas emissions.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Air Quality" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <Wind size={48} />
              </div>
              <h3 className="feature-title">Air Quality</h3>
              <p>Developing monitoring and filtration systems to ensure cleaner air for all communities.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Global Cooperation" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <Globe size={48} />
              </div>
              <h3 className="feature-title">Global Cooperation</h3>
              <p>Building frameworks for international collaboration to address environmental challenges.</p>
            </div>
            <div className="feature-card">
              <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Ecosystem Restoration" className="feature-image" />
              <div className="feature-icon" style={{ color: 'var(--color-primary)' }}>
                <Leaf size={48} />
              </div>
              <h3 className="feature-title">Ecosystem Restoration</h3>
              <p>Implementing projects to restore damaged ecosystems and protect biodiversity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with gradient background */}
      <section id="stats" className="stats" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
      }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Climate Impact</h2>
          <div className="stats-grid">
            <div className="stat-item animate-float">
              <div className="stat-number">1.5°C</div>
              <div className="stat-label">Global Warming Target</div>
            </div>
            <div className="stat-item animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="stat-number">50%</div>
              <div className="stat-label">Emissions Reduction Goal by 2030</div>
            </div>
            <div className="stat-item animate-float" style={{ animationDelay: '1s' }}>
              <div className="stat-number">1M+</div>
              <div className="stat-label">Species at Risk of Extinction</div>
            </div>
            <div className="stat-item animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="stat-number">8M</div>
              <div className="stat-label">Metric Tons of Plastic Enter Oceans Yearly</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with background image */}
      <section id="cta" className="cta" style={{ 
        background: `linear-gradient(rgba(249, 247, 248, 0.9), rgba(249, 247, 248, 0.85)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container">
          <h2 className="cta-title" style={{ color: 'var(--color-primary-dark)' }}>Join Our Environmental Initiative</h2>
          <p className="cta-subtitle">
            Be part of the solution. Together, we can create sustainable technologies
            and practices that protect our planet for future generations.
          </p>
          <div className="cta-buttons">
            <Popover>
              <PopoverTrigger asChild>
                <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                  Volunteer <ChevronDown size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="volunteer-options">
                <div className="volunteer-menu">
                  <Link to="/volunteer#volunteer-options" className="volunteer-option">Local Clean-up Events</Link>
                  <Link to="/volunteer#volunteer-options" className="volunteer-option">Tree Planting Initiatives</Link>
                  <Link to="/volunteer#volunteer-options" className="volunteer-option">Community Education</Link>
                  <Link to="/volunteer#volunteer-options" className="volunteer-option">Recycling Programs</Link>
                  <Link to="/volunteer#volunteer-options" className="volunteer-option">Tech Development</Link>
                </div>
              </PopoverContent>
            </Popover>
            <Link to="/volunteer" className="btn btn-outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: 'var(--color-foreground)' }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">EcoSustain</div>
              <p>Dedicated to developing innovative solutions for a sustainable future.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#stats">Statistics</a></li>
                <li><a href="#cta">Take Action</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:info@ecosustain.org">info@ecosustain.org</a></li>
                <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                <li><a href="#">123 Green Street</a></li>
                <li><a href="#">Eco City, EC 12345</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 EcoSustain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
