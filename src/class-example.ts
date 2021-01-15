export class customArray<T> {
    private arr: T[] = [];

    getItems(arr: T[]) {
        return this.arr = arr;
    }

    addItem(item: T) {
        this.arr.push(item);
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    }
}
