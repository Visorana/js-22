export const extractSpecialAttacks = ({ special }) => special
  .map((el) => ({ ...el, description: el.description || 'Описание недоступно' }));

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defense: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

const extractedAttacks = extractSpecialAttacks(character);
console.log(extractedAttacks);
