"use strict";
//Character Class to implement interface
class Characters {
    constructor(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow) {
        this.Name = Name;
        this.Health = Health;
        this.ThrowPower = ThrowPower;
        this.DefensePower = DefensePower;
        this.PlayerAction = PlayerAction;
        this.MaxPower = MaxPower;
        this.myThrow = MyThrow;
    }
    SetThrowBehavior(myThrow) {
        this.myThrow = myThrow;
    }
    SetHealth(health) {
        this.Health = this.Health;
    }
    SetThrowPower(ThrowPower) {
        this.ThrowPower = ThrowPower;
    }
    GetDefensePower() {
        this.DefensePower = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        return this.DefensePower;
    }
    BonusPower(otherPlayer) {
        this.MaxPower = 1.2;
        let damage = (otherPlayer.ThrowPower - this.DefensePower) * this.MaxPower;
        if (damage < 0) {
            console.log(`${otherPlayer.Name} ${otherPlayer.myThrow.ThrowType()} The enemy deals ${otherPlayer.ThrowPower} damage with a power multiplier of ${this.MaxPower} \nLuckily your defense was ${this.DefensePower} and the attack was inaffective`);
        }
        else {
            console.log(`${otherPlayer.Name} ${otherPlayer.myThrow.ThrowType()} The enemy deals ${otherPlayer.ThrowPower} damage. Your defense of ${this.MaxPower} and dealt ${damage} damage to your health \nThe attack was super effective`);
            this.Health = this.Health - damage;
        }
        this.PlayerStats();
    }
    PlayerStats() {
        console.log(`Player Stats: \nName: ${this.Name} \nHealth: ${this.Health} \nFighting Style: ${this.PlayerAction}`);
    }
}
//Subclass for fry kids
class FryKids extends Characters {
    constructor(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow) {
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow);
    }
}
//subclass for Hamburgler
class Hamburgler extends Characters {
    constructor(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow) {
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow);
    }
}
//subclass for Ronald
class RonaldMcDonald extends Characters {
    constructor(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow) {
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow);
    }
}
//Hamburger Throw Class inherits from interface
class ThrowBurgers {
    constructor(AttackType, Damage) {
        this.AttackType = AttackType;
        this.Damage = Damage;
    }
    ThrowType() {
        return this.AttackType = 'Throws Hamburgers';
    }
    ThrowDamage() {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        return this.Damage;
    }
}
//Fries Throw Class inherits from interface
class ThrowsFries {
    constructor(AttackType, Damage) {
        this.AttackType = AttackType;
        this.Damage = Damage;
    }
    ThrowType() {
        return this.AttackType = 'Throws French Fries';
    }
    ThrowDamage() {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        return this.Damage;
    }
}
//Nuggets Throw Class inherits from interface
class ThrowsNuggets {
    constructor(AttackType, Damage) {
        this.AttackType = AttackType;
        this.Damage = Damage;
    }
    ThrowType() {
        return this.AttackType = 'Throws Nuggets';
    }
    ThrowDamage() {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        return this.Damage;
    }
}
const fryThrow = new ThrowsFries('', 0);
//console.log(`${fryThrow.ThrowType()}  ${fryThrow.ThrowDamage()}`)
const burgerThrow = new ThrowBurgers('', 0);
//console.log(`${burgerThrow.ThrowType()}  ${burgerThrow.ThrowDamage()}`)
const nuggetThrow = new ThrowsNuggets('', 0);
const fry = new FryKids('The Fry kids', 100, fryThrow.ThrowDamage(), fryThrow.ThrowDamage(), fryThrow.ThrowType(), 0, fryThrow);
const burger = new Hamburgler('The Hamburgler', 100, burgerThrow.ThrowDamage(), burgerThrow.ThrowDamage(), burgerThrow.ThrowType(), 0, burgerThrow);
fry.BonusPower(burger);
