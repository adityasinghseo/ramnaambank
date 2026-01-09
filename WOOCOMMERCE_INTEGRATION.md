# WooCommerce Integration Guide

## Overview
This guide explains how to integrate WooCommerce with your React/TypeScript application to fetch products, manage cart, and create orders.

## Architecture

```
┌─────────────────────┐
│   React Frontend    │
│  (Your Website)     │
└──────────┬──────────┘
           │
           │ REST API Calls
           │
┌──────────▼──────────┐
│  WooCommerce API    │
│   (WordPress)       │
└──────────┬──────────┘
           │
           │
┌──────────▼──────────┐
│  WooCommerce Store  │
│  (Products, Orders) │
└─────────────────────┘
```

## Setup Instructions

### 1. Install Required Packages

```bash
npm install @woocommerce/woocommerce-rest-api axios
npm install --save-dev @types/node
```

### 2. Get WooCommerce API Credentials

1. Log in to your WordPress admin panel
2. Go to **WooCommerce > Settings > Advanced > REST API**
3. Click **Add Key**
4. Fill in the details:
   - Description: "React App Integration"
   - User: Select your admin user
   - Permissions: **Read/Write**
5. Click **Generate API Key**
6. **IMPORTANT**: Copy the Consumer Key and Consumer Secret immediately (you won't see them again!)

### 3. Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_WOOCOMMERCE_URL=https://your-store.com
VITE_WOOCOMMERCE_CONSUMER_KEY=ck_xxxxxxxxxxxxx
VITE_WOOCOMMERCE_CONSUMER_SECRET=cs_xxxxxxxxxxxxx
```

**Security Note**: Never commit `.env` file to Git! Add it to `.gitignore`

### 4. Enable CORS (if needed)

If your WooCommerce store is on a different domain, add this to your WordPress `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        return $value;
    });
}, 15);
```

## Usage Examples

### Fetch All Products

```typescript
import { wooCommerceService } from '@/services/woocommerce';

const products = await wooCommerceService.getProducts({
  per_page: 20,
  page: 1,
  orderby: 'date',
  order: 'desc'
});
```

### Fetch Featured Products

```typescript
const featuredProducts = await wooCommerceService.getFeaturedProducts(10);
```

### Fetch Products on Sale

```typescript
const saleProducts = await wooCommerceService.getSaleProducts(10);
```

### Search Products

```typescript
const searchResults = await wooCommerceService.searchProducts('shirt');
```

### Get Products by Category

```typescript
const categoryProducts = await wooCommerceService.getProductsByCategory(15, 20);
```

### Create an Order

```typescript
const orderData = {
  payment_method: 'cod',
  payment_method_title: 'Cash on Delivery',
  set_paid: false,
  billing: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '123 Main St',
    city: 'Mumbai',
    state: 'MH',
    postcode: '400001',
    country: 'IN',
    email: 'john@example.com',
    phone: '9876543210'
  },
  shipping: {
    first_name: 'John',
    last_name: 'Doe',
    address_1: '123 Main St',
    city: 'Mumbai',
    state: 'MH',
    postcode: '400001',
    country: 'IN'
  },
  line_items: [
    {
      product_id: 123,
      quantity: 2
    }
  ]
};

const order = await wooCommerceService.createOrder(orderData);
console.log('Order ID:', order.id);
```

## Component Integration

### Example: Product Listing Component

```typescript
import { useState, useEffect } from 'react';
import { wooCommerceService, WooCommerceProduct } from '@/services/woocommerce';

const ProductList = () => {
  const [products, setProducts] = useState<WooCommerceProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await wooCommerceService.getProducts({ per_page: 12 });
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <img src={product.images[0]?.src} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};
```

## Available Methods

### Products
- `getProducts(params)` - Fetch all products with filters
- `getProduct(id)` - Fetch single product by ID
- `getProductBySlug(slug)` - Fetch product by slug
- `searchProducts(term, perPage)` - Search products
- `getFeaturedProducts(perPage)` - Get featured products
- `getSaleProducts(perPage)` - Get products on sale
- `getProductsByCategory(categoryId, perPage)` - Get products by category

### Categories
- `getCategories(params)` - Fetch all categories

### Orders
- `createOrder(orderData)` - Create a new order
- `getOrder(orderId)` - Fetch order by ID

## TypeScript Interfaces

All methods are fully typed. Key interfaces:

- `WooCommerceProduct` - Product data structure
- `WooCommerceCategory` - Category data structure
- `WooCommerceOrder` - Order creation data
- `WooCommerceOrderItem` - Order line item

## Error Handling

Always wrap API calls in try-catch blocks:

```typescript
try {
  const products = await wooCommerceService.getProducts();
  setProducts(products);
} catch (error) {
  console.error('Error:', error);
  // Show error message to user
}
```

## Payment Integration

### Supported Payment Methods

1. **Cash on Delivery (COD)**
   ```typescript
   payment_method: 'cod'
   ```

2. **Bank Transfer**
   ```typescript
   payment_method: 'bacs'
   ```

3. **Razorpay** (requires plugin)
   ```typescript
   payment_method: 'razorpay'
   ```

4. **PayPal** (requires plugin)
   ```typescript
   payment_method: 'paypal'
   ```

### Online Payment Flow

For online payments (Razorpay, PayPal, etc.):

1. Create order with `set_paid: false`
2. Get payment gateway URL from order response
3. Redirect user to payment gateway
4. Handle payment callback
5. Update order status via webhook

## Security Best Practices

1. ✅ **Never expose API keys in frontend code**
2. ✅ **Use environment variables**
3. ✅ **Enable HTTPS on your WooCommerce store**
4. ✅ **Use Read/Write permissions only when needed**
5. ✅ **Implement rate limiting**
6. ✅ **Validate all user inputs**
7. ✅ **Use webhooks for order status updates**

## Troubleshooting

### CORS Errors
- Enable CORS in WordPress (see Setup section)
- Check if API keys are correct
- Verify WooCommerce REST API is enabled

### Authentication Errors
- Verify Consumer Key and Secret
- Check if user has proper permissions
- Ensure `queryStringAuth: true` is set

### 404 Errors
- Verify WooCommerce is installed and activated
- Check permalink settings in WordPress
- Ensure REST API endpoint is accessible

## Production Deployment

### Checklist

- [ ] Move API keys to environment variables
- [ ] Enable HTTPS on WooCommerce store
- [ ] Set up proper CORS headers
- [ ] Implement error logging
- [ ] Add loading states
- [ ] Implement retry logic for failed requests
- [ ] Set up order confirmation emails
- [ ] Test payment gateway integration
- [ ] Implement order tracking
- [ ] Add analytics tracking

## Additional Resources

- [WooCommerce REST API Documentation](https://woocommerce.github.io/woocommerce-rest-api-docs/)
- [WooCommerce REST API npm package](https://www.npmjs.com/package/@woocommerce/woocommerce-rest-api)

## Support

For issues or questions:
1. Check WooCommerce REST API logs
2. Verify API credentials
3. Test endpoints with Postman
4. Check browser console for errors
