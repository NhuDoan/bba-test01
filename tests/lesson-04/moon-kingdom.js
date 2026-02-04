// Bài 1
function createCharacters() {
  const characters = [
    { name: "nhudoan", level: "100", health: "300" },
    { name: "thieny", level: "198", health: "400" },
  ];
  const charactersPowerUp = characters.map((characters) => ({
    name: characters.name.toUpperCase(),
    level: characters.level * 2,
    health: characters.health * 3,
  }));
  const possibleWinners = charactersPowerUp.filter(
    (characters) => characters.health > 1000
  );
  return { charactersPowerUp, possibleWinners };
}
const final = createCharacters();
console.log("Mảng mới là: ", final.charactersPowerUp);
console.log("Người thắng là: ", final.possibleWinners);

// Bài 2
function printLeaderBoard() {
  const players = [
    { name: "Mario", score: "1,000" },
    { name: "Luigi", score: "900" },
    { name: "Peach", score: "850" },
    { name: "Yoshi", score: "800" },
    { name: "Phong", score: "500" },
  ];
  players.sort((a, b) => b.score - a.score);
  for (let i = 0; i < players.length; i++) {
    let rank = i + 1;
    let medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "  ";

    console.log(
      medal + " " + rank + ". " + players[i].name + " - " + players[i].score + " pts"
    );
  }
}
printLeaderBoard();
