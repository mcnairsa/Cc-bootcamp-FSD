import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './Home.css';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { data: testimonials, loading: testimonialsLoading } = useFetch('/api/testimonials');

  // Simulate featured products fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setFeaturedProducts([
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          image: 'https://via.placeholder.com/200x200?text=Headphones'
        },
        {
          id: 2,
          name: 'Smart Watch',
          price: 199.99,
          image: 'https://via.placeholder.com/200x200?text=Smart+Watch'
        }
      ]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechStore</h1>
          <p>Discover the latest technology products at unbeatable prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500x300?text=Latest+Tech"
            alt="Latest Technology"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          {featuredProducts.length > 0 ? (
            <div className="product-grid">
              {featuredProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="product-card"
                >
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="loading">Loading featured products...</div>
          )}
          <div className="view-all">
            <Link to="/products">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          {testimonialsLoading ? (
            <div className="loading">Loading testimonials...</div>
          ) : (
            <div className="testimonials-grid">
              {testimonials?.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="stars">
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                  </div>
                  <p>"{testimonial.content}"</p>
                  <div className="author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers and experience the difference</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;