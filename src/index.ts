//Interface for characters to use
interface CharacterInterface {
    Name: string
    Health: number
    ThrowPower: number
    DefensePower: number
    PlayerAction: string
    MaxPower: number

    SetHealth(health: number): void
    SetThrowPower(ThrowPower: number): void
    GetDefensePower(): number
}

//Character Class to implement interface
class Characters implements CharacterInterface{
    Name: string;
    Health: number;
    ThrowPower: number;
    DefensePower: number;
    PlayerAction: string;
    MaxPower: number;
    myThrow: ThrowBehaviorInterface;

    constructor(Name: string, Health: number, ThrowPower: number, DefensePower: number, PlayerAction: string, MaxPower: number, MyThrow: ThrowBehaviorInterface){
        this.Name = Name
        this.Health = Health
        this.ThrowPower =ThrowPower
        this.DefensePower = DefensePower
        this.PlayerAction = PlayerAction
        this.MaxPower = MaxPower
        this.myThrow = MyThrow
    }

    SetThrowBehavior(myThrow: ThrowBehaviorInterface): void {
        this.myThrow = myThrow
    }
    SetHealth(health: number): void {
        this.Health = this.Health
    }
    SetThrowPower(ThrowPower: number): void {
        this.ThrowPower = ThrowPower
    }
    GetDefensePower(): number {
        this.DefensePower = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        return this.DefensePower
    }

    BonusPower(otherPlayer: Characters):void {
        this.MaxPower = 1.2
        let damage: number = (otherPlayer.ThrowPower - this.DefensePower) * this.MaxPower
        if(damage < 0){
            console.log(`${otherPlayer.Name} ${otherPlayer.myThrow.ThrowType()} The enemy deals ${otherPlayer.ThrowPower} damage with a power multiplier of ${this.MaxPower} \nLuckily your defense was ${this.DefensePower} and the attack was inaffective`)
        }
        else{
            console.log(`${otherPlayer.Name} ${otherPlayer.myThrow.ThrowType()} The enemy deals ${otherPlayer.ThrowPower} damage. Your defense of ${this.MaxPower} and dealt ${damage} damage to your health \nThe attack was super effective`)
            this.Health = this.Health - damage
        }
        this.PlayerStats();
    }
    PlayerStats(): void{
        console.log(`Player Stats: \nName: ${this.Name} \nHealth: ${this.Health} \nFighting Style: ${this.PlayerAction}`)
    }

}

//Subclass for fry kids
class FryKids extends Characters{
    constructor(Name: string, Health: number, ThrowPower: number, DefensePower: number, PlayerAction: string, MaxPower: number, MyThrow: ThrowBehaviorInterface){
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow)
    }

}
//subclass for Hamburgler
class Hamburgler extends Characters{
    constructor(Name: string, Health: number, ThrowPower: number, DefensePower: number, PlayerAction: string, MaxPower: number, MyThrow: ThrowBehaviorInterface){
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow)
    }

}
//subclass for Ronald
class RonaldMcDonald extends Characters{
    constructor(Name: string, Health: number, ThrowPower: number, DefensePower: number, PlayerAction: string, MaxPower: number, MyThrow: ThrowBehaviorInterface){
        super(Name, Health, ThrowPower, DefensePower, PlayerAction, MaxPower, MyThrow)
    }

}

//Throw Behavior Interface
interface ThrowBehaviorInterface {
    AttackType: string
    Damage: number

    ThrowType():string
    ThrowDamage():number
}
//Hamburger Throw Class inherits from interface
class ThrowBurgers implements ThrowBehaviorInterface {
    AttackType: string;
    Damage: number;

    constructor(AttackType: string, Damage: number){
        this.AttackType = AttackType
        this.Damage = Damage
    }

    ThrowType(): string {
        return this.AttackType = 'Throws Hamburgers'
    }
    ThrowDamage(): number {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        return this.Damage
    }

}
//Fries Throw Class inherits from interface
class ThrowsFries implements ThrowBehaviorInterface {
    AttackType: string;
    Damage: number;

    constructor(AttackType: string, Damage: number){
        this.AttackType = AttackType
        this.Damage = Damage
    }

    ThrowType(): string {
        return this.AttackType = 'Throws French Fries'
    }
    ThrowDamage(): number {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        return this.Damage
    }
    
}
//Nuggets Throw Class inherits from interface
class ThrowsNuggets implements ThrowBehaviorInterface {
    AttackType: string;
    Damage: number;

    constructor(AttackType: string, Damage: number){
        this.AttackType = AttackType
        this.Damage = Damage
    }

    ThrowType(): string {
        return this.AttackType = 'Throws Nuggets'
    }
    ThrowDamage(): number {
        this.Damage = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        return this.Damage
    }
    
}

const fryThrow: ThrowBehaviorInterface = new ThrowsFries('', 0);

//console.log(`${fryThrow.ThrowType()}  ${fryThrow.ThrowDamage()}`)

const burgerThrow: ThrowBehaviorInterface = new ThrowBurgers('', 0);

//console.log(`${burgerThrow.ThrowType()}  ${burgerThrow.ThrowDamage()}`)

const nuggetThrow: ThrowBehaviorInterface = new ThrowsNuggets('', 0);

const fry: Characters = new FryKids('The Fry kids', 100, fryThrow.ThrowDamage(), fryThrow.ThrowDamage(), fryThrow.ThrowType(), 0, fryThrow);

const burger: Characters = new Hamburgler('The Hamburgler', 100, burgerThrow.ThrowDamage(), burgerThrow.ThrowDamage(), burgerThrow.ThrowType(), 0, burgerThrow);

fry.BonusPower(burger);