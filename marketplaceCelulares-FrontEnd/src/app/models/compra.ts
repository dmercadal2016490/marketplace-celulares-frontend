export class Compra{

    constructor(
        public _id: string,
        public fechaCompra: Date,
        public unidadesCompradas: number,
        public total: Number,
        public qr: string,
        public telefono : string
    ){}
}