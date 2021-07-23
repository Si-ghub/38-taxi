class Taxi {
    constructor(driverName) {
        this.driverName = driverName;
        this.pricePerKm = 1;
        this.profitInEur = 0;
        this.rideInKm = 0;
    }

    intro() {
        console.log(`Sveiki, as ${this.driverName} ir kilometro kaina su manimi yra ${this.pricePerKm.toFixed(2)} Eur.`);
    }

    updatePrice(updatedPrice) {
        this.pricePerKm = updatedPrice;
        console.log(`${this.driverName} nustate nauja kilometro kaina - ${updatedPrice} Eur.`);
    }

    ride(km) {
        this.rideInKm += km;
        this.profitInEur += this.pricePerKm * km;
        console.log(this.rideInKm);
    }

    stats() {
        console.log(`${this.driverName} nuvaziavo ${this.rideInKm} km ir uzdirbo ${this.profitInEur.toFixed(2)} Eur.`);
    }
}

module.exports = Taxi;