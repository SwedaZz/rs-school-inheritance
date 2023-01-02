class BuilderES6 {
    constructor(integer) {
        this.integer = integer || 0;
    }
}

class IntBuilder extends BuilderES6 {
    plus(...n) { 
        this.integer = [...arguments, this.integer].reduce((accum, curr) => accum + curr, 0);
        
        return this.integer;
    }

    minus(...n) {
        this.integer = [...arguments].reduce((accum, curr) => accum - curr, this.integer);

        return this.integer;
    }

    multiply(n) {
        this.integer *= n;

        return this.integer;
    }

    divide(n) {
        if (!n) {
            return Error;
        } else {
            this.integer = Math.floor(this.integer / n);
        }

        return this.integer;
    }

    mod(n) {
        if (!n) {
            return Error;
        } else {
            this.integer = this.integer % n;
        }

        return this.integer;
    }

    get() {
        return this.integer;
    }

    pow(exponent) {
        this.integer = Math.pow(this.integer, exponent);

        return this.integer;
    }

    static random(from, to) {
        return Math.round((Math.random() * (to - from) + from));
    }
}