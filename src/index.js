export default function extractSpecialAttacks({ special }) {
  const extractedAttacks = [];

  special.forEach((attack) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = attack;
    extractedAttacks.push({
      id, name, description, icon,
    });
  });

  return extractedAttacks;
}

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
