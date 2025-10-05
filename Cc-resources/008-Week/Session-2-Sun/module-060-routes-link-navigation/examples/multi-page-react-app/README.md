# Multi-Page React Application - TechStore

A comprehensive multi-page React application demonstrating advanced routing, state management, custom hooks, and modern React patterns. This project showcases all the concepts covered in the React Intermediate & Routing curriculum (Modules 055-061).

## 🚀 Features

### Core Functionality
- **Multi-page Navigation** - Seamless routing between 5+ pages
- **React Router Integration** - Modern routing with hooks and protected routes
- **Global State Management** - Shared state across routes with localStorage persistence
- **Dark/Light Theme Toggle** - Dynamic theming with CSS variables
- **Shopping Cart** - Add/remove items with quantity management
- **User Authentication** - Simulated login/logout with protected dashboard

### Advanced Features
- **URL Parameters** - Dynamic product detail pages with `/products/:id`
- **Search Parameters** - Product filtering with URL query parameters
- **Custom Hooks** - Reusable hooks for localStorage, authentication, and data fetching
- **Data Fetching** - Simulated API calls with loading states and error handling
- **Responsive Design** - Mobile-first design that works on all devices
- **404 Error Handling** - Custom not found page with helpful navigation

## 🚦 Getting Started

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🎯 Learning Objectives Demonstrated

### Must Have Requirements ✅
- ✅ **BrowserRouter Setup** - Proper router configuration at app root
- ✅ **Navigation Components** - Link and NavLink with active styling
- ✅ **Multiple Pages** - 6 distinct pages with routing
- ✅ **useEffect Implementation** - Data fetching and side effects
- ✅ **Dependency Arrays** - Proper effect control and optimization
- ✅ **Cleanup Functions** - Memory leak prevention patterns
- ✅ **Component Architecture** - Well-organized component hierarchy
- ✅ **State Management** - Global and local state with persistence
- ✅ **Responsive Design** - Mobile-first responsive layout

### Could Have Bonuses ✅
- ✅ **URL Parameters** - Dynamic routes with useParams
- ✅ **Custom Hooks** - Reusable hook composition and patterns
- ✅ **Protected Routes** - Authentication-based route protection
- ✅ **Advanced Search** - URL parameter integration for filtering
- ✅ **Professional Polish** - 404 pages, animations, and localStorage

## 🎮 User Guide

### Navigation
- **Home** - Explore featured products and testimonials
- **About** - Learn about the company with animated statistics
- **Products** - Browse and search the product catalog
- **Contact** - Send messages through the contact form
- **Dashboard** - Access user account (requires login)

### Key Features to Test

#### Product Browsing
1. Visit `/products` to see the full catalog
2. Use search and category filters
3. Click on products to view details at `/products/:id`
4. Add items to cart and see the count update

#### URL Parameters
1. Search for products - notice URL updates with `?search=term`
2. Filter by category - see `?category=Electronics` in URL
3. Visit `/products/1` directly to see URL parameter routing

#### Authentication Flow
1. Visit `/dashboard` without logging in
2. Use any email/password to simulate login
3. Access protected dashboard features
4. Logout and see state persistence

#### Theme & Persistence
1. Toggle between light/dark themes
2. Add items to cart
3. Refresh the page - settings and cart persist
4. Open in new tab - state is maintained

## 🏗️ Technical Implementation

### React Router Features
```javascript
// Dynamic routing with parameters
<Route path="/products/:id" element={<ProductDetail />} />

// Search parameters for filtering
const [searchParams, setSearchParams] = useSearchParams();

// Programmatic navigation
const navigate = useNavigate();
navigate('/dashboard');
```

### useEffect Patterns
```javascript
// Data fetching with cleanup
useEffect(() => {
  let isCancelled = false;
  fetchData().then(data => {
    if (!isCancelled) setData(data);
  });
  return () => { isCancelled = true; };
}, []);
```

### Custom Hook Examples
```javascript
// localStorage persistence
const [user, setUser] = useLocalStorage('user', null);

// Authentication state
const { isAuthenticated, login, logout } = useAuth(user, setUser);

// Data fetching
const { data, loading, error } = useFetch('/api/products');
```

---

**Built with:** React 18, React Router v6, Vite, and modern CSS
