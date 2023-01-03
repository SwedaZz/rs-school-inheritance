// ES5 version

function BuilderES5 (str) {
    this.str = str;
}

function StringBuilder (str) {
    BuilderES5.call(this, str);
}
    
StringBuilder.prototype.plus = function (...str) {
    this.str = [this.str, ...arguments].join('');
    return this.str;
}

StringBuilder.prototype.minus = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        this.str = this.str.slice(0, this.str.length - n);
        return this.str;
    }
}

StringBuilder.prototype.multiply = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        let subStr = '';
        for (let i = 0; i < n; i++) {
            subStr += this.str;
        }
        this.str = subStr;
        return this.str;
    }
}

StringBuilder.prototype.divide = function (n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        const k = Math.floor(this.str.length / n);
        let subStr = this.str.slice(0, k);
        this.str = subStr;
        return this.str;
    }
}

StringBuilder.prototype.remove = function (str) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        const arrStored = this.str.split('');
        const arrDeleted = str.split('');
        this.str = arrStored.filter(char => !arrDeleted.includes(char)).join('');
        return this.str;
    }
}

StringBuilder.prototype.sub = function (from, n) {
    if (!this.str) {
        throw "String is empty!";
    } else {
        this.str = this.str.slice(from, n+1);
        return this.str;
    }
}

StringBuilder.prototype.get = function () {
    return this.str;
}

StringBuilder.prototype.reverse = function () {
    this.str = this.str.split('').reverse().join('');
    return this.str;
}