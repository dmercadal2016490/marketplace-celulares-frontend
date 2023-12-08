export class Transaccion{

    constructor(
        public _id: string,
        public fechaPublicacion : Date,
        public tipoTransaccion: string,
        public telefono: string,
        public usuario : string
    ){}
}