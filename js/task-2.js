class Storage {

    constructor(params){
        this.storage = params;
    }

    getItems(){
        return this.storage;
    }

    addItem(newItem){
        this.storage.push(newItem);
    }

    removeItem(itemToRemove){
        if (this.storage.includes(itemToRemove)) {
            this.storage.splice(this.storage.indexOf(itemToRemove), 1);
        }
    }
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]