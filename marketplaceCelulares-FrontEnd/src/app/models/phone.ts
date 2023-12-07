export class Phone{

    constructor(
        public _id: string,
        public marca : string,
        public serie : string,
        public procesador: string,
        public ram : string,
        public bateria : string,
        public precio : number,
        public unidades: number,
        public publicado: Date,
        public image : string,
        public vendedor : []
    ){}
}