import { extractSpecialAttacks } from "../..";

test('extractSpecialAttacks', () => {
  const character = {
    name: 'Гэндальф',
    type: 'Маг',
    health: 30,
    level: 8,
    attack: 40,
    defense: 40,
    special: [
      {
        id: 5,
        name: 'Огненное кольцо',
        icon: 'http://...',
        description: 'Создает огненное кольцо вокруг персонажа, которое наносит периодический урон врагам'
      },
      {
        id: 6,
        name: 'Ослепительный свет',
        icon: 'http://...'
      }
    ]
  };

  const result = extractSpecialAttacks(character);

  const expectedResult = [
    {
      id: 5,
      name: 'Огненное кольцо',
      icon: 'http://...',
      description: 'Создает огненное кольцо вокруг персонажа, которое наносит периодический урон врагам'
    },
    {
      id: 6,
      name: 'Ослепительный свет',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  expect(result).toEqual(expectedResult);
});
