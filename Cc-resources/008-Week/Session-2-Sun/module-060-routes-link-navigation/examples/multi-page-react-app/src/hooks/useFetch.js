import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock API responses based on URL
      let responseData;

      if (url.includes('/products')) {
        responseData = [
          {
            id: 1,
            name: 'Wireless Headphones',
            price: 99.99,
            category: 'Electronics',
            description: 'High-quality wireless headphones with noise cancellation.',
            image: 'https://via.placeholder.com/300x300?text=Headphones',
            stock: 50
          },
          {
            id: 2,
            name: 'Smart Watch',
            price: 199.99,
            category: 'Electronics',
            description: 'Feature-rich smartwatch with health monitoring.',
            image: 'https://via.placeholder.com/300x300?text=Smart+Watch',
            stock: 25
          },
          {
            id: 3,
            name: 'Laptop Backpack',
            price: 49.99,
            category: 'Accessories',
            description: 'Durable laptop backpack with multiple compartments.',
            image: 'https://via.placeholder.com/300x300?text=Backpack',
            stock: 100
          },
          {
            id: 4,
            name: 'USB-C Hub',
            price: 29.99,
            category: 'Electronics',
            description: 'Multi-port USB-C hub for enhanced connectivity.',
            image: 'https://via.placeholder.com/300x300?text=USB+Hub',
            stock: 75
          }
        ];
      } else if (url.includes('/testimonials')) {
        responseData = [
          {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Product Manager',
            content: 'Amazing products and excellent customer service!',
            rating: 5
          },
          {
            id: 2,
            name: 'Mike Chen',
            role: 'Developer',
            content: 'Fast shipping and exactly what I ordered.',
            rating: 5
          },
          {
            id: 3,
            name: 'Emily Davis',
            role: 'Designer',
            content: 'Great quality and competitive prices.',
            rating: 4
          }
        ];
      } else {
        responseData = { message: 'Data loaded successfully' };
      }

      setData(responseData);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

export default useFetch;