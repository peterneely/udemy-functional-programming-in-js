
// const sequence2 = (f1, f2) =>
//     (...args) =>
//         f2(f1(...args));

// const sequence = (f1, ...fRest) =>
//     fRest.reduce(sequence2, f1);

const elevator = {
  floor: 5
};

const up = elevator => {
  return {
    floor: elevator.floor + 1
  }
};

const down = elevator => {
  return {
    floor: elevator.floor - 1
  }
};

const travel = (...moves) => lift => moves.reduce((newLift, move) => {
  const movedLift = move(lift);
  console.log(movedLift);
  return movedLift;
}, lift);

const newElevator = travel(up, up, down, up)(elevator);

console.log(newElevator);