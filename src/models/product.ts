export interface Product {
    id: number;
    name: string;
    style: any;
    description: string;
    price: number;
    discountPrice: number;
    pictures: Array<Image>;
}

export interface Image {
    id: number;
    uri: string;
}