export interface Product {
    id: number;
    cost: number;
    description: string;
    name: string;
    sku: string;
    profile: ProductProperties;
}

export interface ProductProperties {
    type: string;
    available: boolean;
    backlog: number;
}
