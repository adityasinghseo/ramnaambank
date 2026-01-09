import { useState, useEffect } from "react";
import { wooCommerceService, WooCommerceProduct } from "@/services/woocommerce";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Loader2 } from "lucide-react";

const ShopPage = () => {
    const [products, setProducts] = useState<WooCommerceProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState<{ product: WooCommerceProduct; quantity: number }[]>([]);

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await wooCommerceService.getProducts({
                per_page: 20,
                orderby: "date",
                order: "desc",
            });
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            fetchProducts();
            return;
        }
        try {
            setLoading(true);
            const data = await wooCommerceService.searchProducts(searchTerm);
            setProducts(data);
        } catch (error) {
            console.error("Search failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const addToCart = (product: WooCommerceProduct) => {
        const existingItem = cart.find((item) => item.product.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { product, quantity: 1 }]);
        }
    };

    const createOrder = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        try {
            const orderData = {
                payment_method: "cod", // Cash on Delivery
                payment_method_title: "Cash on Delivery",
                set_paid: false,
                billing: {
                    first_name: "Customer",
                    last_name: "Name",
                    address_1: "Address Line 1",
                    city: "City",
                    state: "State",
                    postcode: "123456",
                    country: "IN",
                    email: "customer@example.com",
                    phone: "9876543210",
                },
                shipping: {
                    first_name: "Customer",
                    last_name: "Name",
                    address_1: "Address Line 1",
                    city: "City",
                    state: "State",
                    postcode: "123456",
                    country: "IN",
                },
                line_items: cart.map((item) => ({
                    product_id: item.product.id,
                    quantity: item.quantity,
                })),
            };

            const order = await wooCommerceService.createOrder(orderData);
            alert(`Order created successfully! Order ID: ${order.id}`);
            setCart([]);
        } catch (error) {
            console.error("Failed to create order:", error);
            alert("Failed to create order. Please try again.");
        }
    };

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + parseFloat(item.product.price) * item.quantity,
            0
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-hind">
                        Our Shop
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                            className="flex-1 px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-hind"
                        />
                        <Button
                            onClick={handleSearch}
                            className="bg-primary hover:bg-primary/90 text-white px-6"
                        >
                            <Search className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Cart Summary */}
                {cart.length > 0 && (
                    <div className="max-w-2xl mx-auto mb-8 p-4 bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold font-hind flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5" />
                                Cart ({cart.length} items)
                            </h3>
                            <p className="text-2xl font-bold text-primary">
                                ₹{getTotalPrice().toFixed(2)}
                            </p>
                        </div>
                        <Button
                            onClick={createOrder}
                            className="w-full bg-primary hover:bg-primary/90 text-white"
                        >
                            Checkout
                        </Button>
                    </div>
                )}

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Product Image */}
                            {product.images && product.images.length > 0 && (
                                <div className="aspect-square overflow-hidden bg-gray-100">
                                    <img
                                        src={product.images[0].src}
                                        alt={product.images[0].alt || product.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            <CardContent className="p-4">
                                {/* Product Name */}
                                <h3 className="font-bold text-lg mb-2 font-hind line-clamp-2">
                                    {product.name}
                                </h3>

                                {/* Product Price */}
                                <div className="mb-4">
                                    {product.on_sale ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-primary">
                                                ₹{product.sale_price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                ₹{product.regular_price}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-2xl font-bold text-primary">
                                            ₹{product.price}
                                        </span>
                                    )}
                                </div>

                                {/* Stock Status */}
                                <p className="text-sm mb-4">
                                    {product.stock_status === "instock" ? (
                                        <span className="text-green-600 font-semibold">In Stock</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Out of Stock</span>
                                    )}
                                </p>

                                {/* Add to Cart Button */}
                                <Button
                                    onClick={() => addToCart(product)}
                                    disabled={product.stock_status !== "instock"}
                                    className="w-full bg-primary hover:bg-primary/90 text-white disabled:bg-gray-300"
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* No Products Found */}
                {products.length === 0 && !loading && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500 font-hind">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopPage;
