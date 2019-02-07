import Character from './character';

test('Создается персонаж с заданными свойствами', () => {
  const character = new Character('Number_One', 'Swordsman');
  const expected = {
    name: 'Number_One',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };

  expect(character).toEqual(expected);
});

test('Неверный тип персонажа приводит к ошибке создания', () => {
  const character = new Character('Batman', 'Batman');

  expect(character).toEqual(Error('Указан неверный тип персонажа'));
});


test('Некорректное имя персонажа приводит к ошибке создания', () => {
  const character = new Character('Optimus Prime', 'Undead');

  expect(character).toEqual(Error('Имя не соотвествует правилам'));
});
