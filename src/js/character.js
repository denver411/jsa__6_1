function Character(name, type) {
  // справочник типов героев с массивом свойств [атака, защита]
  const heroes = {
    Bowman: [25, 25],
    Swordsman: [40, 10],
    Magician: [10, 40],
    Daemon: [10, 40],
    Undead: [25, 25],
    Zombie: [40, 10],
  };

  // проверка правильности переданного типа
  const types = Object.keys(heroes);
  if (!types.includes(type)) return new Error('Указан неверный тип персонажа');

  // проверка правильности переданного имени
  if (name.length < 2 || name.length > 10) return new Error('Имя не соотвествует правилам');

  // создание свойств персонажа
  this.name = name;
  this.type = type;
  this.level = 1;
  this.health = 100;
  [this.attack, this.defence] = heroes[type];
}

export default Character;
