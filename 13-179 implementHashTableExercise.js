// There is something wrong here.
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    get(key) {
        var hash = this._hash(key);
        var index = this.data.indexOf(hash);
        return this.data[index + 1];
    }

    set(key, value) {
        this.data.push(this._hash(key), value);
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')  