import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// WooCommerce API Configuration
const api = new WooCommerceRestApi({
    url: import.meta.env.VITE_WOOCOMMERCE_URL || "https://shop.clickstraight.com", // Your WooCommerce store URL
    consumerKey: import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY || "",
    consumerSecret: import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET || "",
    version: "wc/v3",
    queryStringAuth: true // Force Basic Authentication as query string
});

// TypeScript Interfaces
export interface WooCommerceProduct {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: string;
    date_modified: string;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number | null;
    stock_status: string;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    sold_individually: boolean;
    weight: string;
    dimensions: {
        length: string;
        width: string;
        height: string;
    };
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    related_ids: number[];
    upsell_ids: number[];
    cross_sell_ids: number[];
    parent_id: number;
    purchase_note: string;
    categories: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
    tags: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
    images: Array<{
        id: number;
        date_created: string;
        date_modified: string;
        src: string;
        name: string;
        alt: string;
    }>;
    attributes: any[];
    default_attributes: any[];
    variations: number[];
    grouped_products: number[];
    menu_order: number;
    meta_data: any[];
}

export interface WooCommerceCategory {
    id: number;
    name: string;
    slug: string;
    parent: number;
    description: string;
    display: string;
    image: {
        id: number;
        src: string;
        name: string;
        alt: string;
    } | null;
    menu_order: number;
    count: number;
}

export interface WooCommerceOrderItem {
    product_id: number;
    quantity: number;
    variation_id?: number;
}

export interface WooCommerceOrder {
    payment_method: string;
    payment_method_title: string;
    set_paid: boolean;
    billing: {
        first_name: string;
        last_name: string;
        address_1: string;
        address_2?: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
        email: string;
        phone: string;
    };
    shipping: {
        first_name: string;
        last_name: string;
        address_1: string;
        address_2?: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
    };
    line_items: WooCommerceOrderItem[];
    shipping_lines?: Array<{
        method_id: string;
        method_title: string;
        total: string;
    }>;
}

// WooCommerce Service Class
class WooCommerceService {
    // Fetch all products
    async getProducts(params?: {
        per_page?: number;
        page?: number;
        category?: number;
        featured?: boolean;
        on_sale?: boolean;
        search?: string;
        orderby?: string;
        order?: "asc" | "desc";
    }): Promise<WooCommerceProduct[]> {
        try {
            const response = await api.get("products", params);
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }

    // Fetch single product by ID
    async getProduct(productId: number): Promise<WooCommerceProduct> {
        try {
            const response = await api.get(`products/${productId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    }

    // Fetch product by slug
    async getProductBySlug(slug: string): Promise<WooCommerceProduct | null> {
        try {
            const response = await api.get("products", { slug });
            return response.data[0] || null;
        } catch (error) {
            console.error("Error fetching product by slug:", error);
            throw error;
        }
    }

    // Fetch all categories
    async getCategories(params?: {
        per_page?: number;
        page?: number;
        parent?: number;
        hide_empty?: boolean;
    }): Promise<WooCommerceCategory[]> {
        try {
            const response = await api.get("products/categories", params);
            return response.data;
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    }

    // Create an order
    async createOrder(orderData: WooCommerceOrder): Promise<any> {
        try {
            const response = await api.post("orders", orderData);
            return response.data;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    }

    // Get order by ID
    async getOrder(orderId: number): Promise<any> {
        try {
            const response = await api.get(`orders/${orderId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching order:", error);
            throw error;
        }
    }

    // Search products
    async searchProducts(searchTerm: string, perPage: number = 10): Promise<WooCommerceProduct[]> {
        try {
            const response = await api.get("products", {
                search: searchTerm,
                per_page: perPage,
            });
            return response.data;
        } catch (error) {
            console.error("Error searching products:", error);
            throw error;
        }
    }

    // Get featured products
    async getFeaturedProducts(perPage: number = 10): Promise<WooCommerceProduct[]> {
        try {
            const response = await api.get("products", {
                featured: true,
                per_page: perPage,
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching featured products:", error);
            throw error;
        }
    }

    // Get products on sale
    async getSaleProducts(perPage: number = 10): Promise<WooCommerceProduct[]> {
        try {
            const response = await api.get("products", {
                on_sale: true,
                per_page: perPage,
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching sale products:", error);
            throw error;
        }
    }

    // Get products by category
    async getProductsByCategory(categoryId: number, perPage: number = 10): Promise<WooCommerceProduct[]> {
        try {
            const response = await api.get("products", {
                category: categoryId,
                per_page: perPage,
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching products by category:", error);
            throw error;
        }
    }
}

// Export singleton instance
export const wooCommerceService = new WooCommerceService();
export default wooCommerceService;
