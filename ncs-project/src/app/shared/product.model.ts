export class Product{
    public name: string;
    public amount:number;
    public imagePath: string;

    constructor(name: string, amount:number, imagePath: string){
        this.name = name;
        this.amount = amount;
        this.imagePath = imagePath;
    }
}