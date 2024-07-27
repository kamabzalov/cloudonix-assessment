export interface Product {
    id: number;
    cost: number;
    description: string;
    name: string;
    sku: string;
    profile: Record<string, string>;
}
