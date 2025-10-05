import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './ProductDetail.css';

function ProductDetail({ cart, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  const { data: products } = useFetch('/api/products');

  // Find the specific product
  useEffect(() => {
    if (products) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct({
          ...foundProduct,
          images: [
            foundProduct.image,
            foundProduct.image.replace('300x300', '300x301'),
            foundProduct.image.replace('300x300', '300x302')
          ],
          specifications: {
            'Weight': '250g',
            'Dimensions': '15 x 10 x 5 cm',
            'Material': 'Premium Quality',
            'Warranty': '2 Years'
          },
          reviews: [
            {
              id: 1,
              author: 'John Doe',
              rating: 5,
              comment: 'Excellent product! Exactly what I was looking for.',
              date: '2024-01-15'
            },
            {
              id: 2,
              author: 'Jane Smith',
              rating: 4,
              comment: 'Good quality and fast shipping.',
              date: '2024-01-10'
            }
          ]
        });
      }
      setLoading(false);
    }
  }, [products, id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        onAddToCart(product);
      }
      alert(`Added ${quantity} ${product.name}(s) to cart!`);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/dashboard');
  };

  const isInCart = () => {
    return cart.some(item => item.id === product?.id);
  };

  const getRelatedProducts = () => {
    if (!products || !product) return [];
    return products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  };

  if (loading) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="loading-state">
            <h2>Loading Product...</h2>
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className="back-link">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts();

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="product-main">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="category-badge">{product.category}</div>
            <h1>{product.name}</h1>
            <div className="price">${product.price}</div>

            <div className="stock-status">
              {product.stock > 0 ? (
                <span className="in-stock">✓ In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">✗ Out of Stock</span>
              )}
            </div>

            <p className="description">{product.description}</p>

            {/* Quantity and Actions */}
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`add-to-cart ${isInCart() ? 'in-cart' : ''}`}
                >
                  {isInCart() ? '✓ In Cart' : 'Add to Cart'}
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="buy-now"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="product-details">
          <div className="details-grid">
            <div className="specifications">
              <h3>Specifications</h3>
              <div className="spec-list">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key}:</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviews">
              <h3>Customer Reviews</h3>
              <div className="reviews-list">
                {product.reviews.map(review => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <strong>{review.author}</strong>
                      <div className="rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h3>Related Products</h3>
            <div className="related-grid">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="related-card"
                >
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <h4>{relatedProduct.name}</h4>
                  <div className="price">${relatedProduct.price}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;