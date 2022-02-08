/*
  array elements in order:
  1. Piece placement
    Pawn kNight Bishop Rook Queen King
    Capital letters for white
    Small letters for black
  2. Active color (w / b)
  3. Castling availability
    - none
    KQ white can castle king or queen side
    kq black can castle king or queen side
  4. En passant (- / square behind pawn that can be taken)
  5. Halfmove clock - used for fifty-move rule
  6. Fullmove number - number of moves
*/

const chalk = require("chalk");

const blackPieces = "pnbrqk";
const whitePieces = "PNBRQK";

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

exports.printFen = (fenString) => {
  let fen_arr = fenString.split(" ");

  let boardRows = fen_arr[0].split("/");
  console.log(chalk.yellow("  +----------------+"));
  boardRows.forEach((row, ind) => {
    process.stdout.write(chalk.yellow(`${ind} |`));
    for (let i = 0; i < row.length; i++) {
      let intCast = parseInt(row[i]);
      if (intCast) {
        for (let j = 0; j < intCast; ++j) {
          process.stdout.write(" .");
        }
      } else {
        if (isUpperCase(row[i])) {
          process.stdout.write(" " + chalk.white(row[i]));
        } else {
          process.stdout.write(" " + chalk.red(row[i].toUpperCase()));
        }
      }
    }

    process.stdout.write(chalk.yellow("|\n"));
  });
  console.log(chalk.yellow("  +----------------+"));
  console.log(chalk.yellow("    a b c d e f g h"));
};
