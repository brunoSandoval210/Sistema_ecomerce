export class Product {
    id: number = 0;
    src: string = '';
    name: string = '';
    description: string = '';
    price!: number;
    category!:string;
    quantity!: number;
    categorySex!:string;
}