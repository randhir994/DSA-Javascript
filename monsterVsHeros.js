class Hero {
    constructor(name, power, speed, health) {
      this.name = name;
      this.power = power;
      this.speed = speed;
      this.health = health;
    }
  
    attack(monster) {
      monster.health -= this.power;
    }
  
    retreat() {
      console.log(`${this.name} retreats from the dungeon.`);
    }
  }
  
  class Monster {
    constructor(name, power, speed, health) {
      this.name = name;
      this.power = power;
      this.speed = speed;
      this.health = health;
    }
  
    attack(hero) {
      hero.health -= this.power;
    }
  }
  
  function fight(hero, monster) {
    while (hero.health > 0 && monster.health > 0) {
      if (hero.speed > monster.speed) {
        hero.attack(monster);
      } else {
        monster.attack(hero);
      }
    }
  
    if (hero.health <= 0) {
      console.log(`${monster.name} wins!`);
    } else {
      console.log(`${hero.name} wins!`);
    }
  }
  
  const hero = new Hero('Arthur', 10, 8, 100);
  const monster = new Monster('Goblin', 5, 6, 50);
  
  fight(hero, monster);