
const elevator = {
    floor: 5,
    up() {
        this.floor += 1;
        return this;
    },
    down() {
        this.floor -= 1;
        return this;
    }
};

const newFloor = elevator
    .up()
    .up()
    .down()
    .up()
    .floor;

console.log(newFloor);