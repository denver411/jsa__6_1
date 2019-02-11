function Character(name, type) {
  // справочник типов героев с массивом свойств [атака, защита]
  const heroes = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
  };

  // проверка правильности переданного типа
  const types = Object.keys(heroes);
  if (!types.includes(type)) throw new Error('Указан неверный тип персонажа');

  // проверка правильности переданного имени
  if (name.length < 2 || name.length > 10) throw new Error('Имя не соотвествует правилам');

  // создание свойств персонажа
  this.name = name;
  this.type = type;
  this.level = 1;
  this.health = 100;
  this.attack = heroes[type].attack;
  this.defence = heroes[type].defence;
}

export default Character;
