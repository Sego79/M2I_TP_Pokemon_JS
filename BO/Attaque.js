export default class Attaque {

    constructor(attackName, nbeDegats) {
        this._attackName = attackName;
        this._nbeDegats = nbeDegats;
    }


    get attackName() {
        return this._attackName;
    }

    get nbeDegats() {
        return this._nbeDegats;
    }


    set attackName(value) {
        this._attackName = value;
    }

    set nbeDegats(value) {
        this._nbeDegats = value;
    }


}
