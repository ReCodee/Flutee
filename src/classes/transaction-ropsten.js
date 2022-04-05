export class Transaction {
    constructor(id, from, to, gasUsed) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.gasUsed = gasUsed;
    }
}