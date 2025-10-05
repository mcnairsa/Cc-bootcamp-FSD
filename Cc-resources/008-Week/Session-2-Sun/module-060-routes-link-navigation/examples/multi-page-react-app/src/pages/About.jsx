import { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [stats, setStats] = useState({
    customers: 0,
    products: 0,
    years: 0,
    satisfaction: 0
  });

  // Animate stats counter
  useEffect(() => {
    const finalStats = {
      customers: 10000,
      products: 500,
      years: 8,
      satisfaction: 98
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        customers: Math.floor(finalStats.customers * progress),
        products: Math.floor(finalStats.products * progress),
        years: Math.floor(finalStats.years * progress),
        satisfaction: Math.floor(finalStats.satisfaction * progress)
      });

      if (currentStep >= steps) {
        setStats(finalStats);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Passionate about bringing cutting-edge technology to everyone.',
      image: 'https://via.placeholder.com/200x200?text=Sarah'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'CTO',
      bio: 'Tech enthusiast with 15+ years in software development.',
      image: 'https://via.placeholder.com/200x200?text=Mike'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Head of Design',
      bio: 'Creating beautiful, user-centered design experiences.',
      image: 'https://via.placeholder.com/200x200?text=Emily'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About TechStore</h1>
          <p className="hero-subtitle">
            We're on a mission to make cutting-edge technology accessible to everyone
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2016, TechStore began as a small startup with a big vision:
                to democratize access to the latest technology. What started in a garage
                has grown into a trusted platform serving thousands of customers worldwide.
              </p>
              <p>
                We believe that technology should enhance lives, not complicate them.
                That's why we carefully curate our product selection, focusing on quality,
                innovation, and value. Every product we sell has been thoroughly tested
                and vetted by our expert team.
              </p>
              <p>
                Today, we're proud to be a leading destination for tech enthusiasts,
                professionals, and everyday users looking for reliable, cutting-edge products
                at competitive prices.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://via.placeholder.com/400x300?text=Our+Journey"
                alt="Our Journey"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{stats.customers.toLocaleString()}+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.products}+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.years}</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{stats.satisfaction}%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We constantly seek out the latest technology trends and innovations to bring you the most advanced products.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Quality</h3>
              <p>Every product undergoes rigorous testing to ensure it meets our high standards for quality and reliability.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💝</div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority. We provide exceptional support and stand behind every product we sell.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices and supporting sustainable technology solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;