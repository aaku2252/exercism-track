class List {
    constructor(values) {
        this.values = values || [];
    }

    append(val) {
        return new List([...this.values, ...val.values]);
    }

    concat(val) {
        let newarr = this;
        for (let i = 0; i < val.values.length; i++) {
            newarr = newarr.append(val.values[i]);
        }
        return newarr;
    }

    filter(predicate) {
        let newarr = [];
        for (let i = 0; i < this.values.length; i++) {
            if (predicate(this.values[i])) {
                newarr.push(this.values[i]);
            }
        }
        return new List(newarr);
    }

    map(func) {
        let newarr = [];
        for (let i = 0; i < this.values.length; i++) {
            newarr.push(func(this.values[i]));
        }
        return new List(newarr);
    }

    length() {
        let len = 0;
        for (let i = 0; i < this.values.length; i++) {
            len++;
        }
        return len;
    }
}
