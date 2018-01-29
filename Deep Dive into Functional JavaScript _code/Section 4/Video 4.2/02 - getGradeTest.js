let getGradeTest =
    average =>
        testScore =>
            testScore >= average ? 'A' : 'F';

const tester = getGradeTest(0.8);

console.log(tester(0.79));
console.log(tester(0.81));

const newTester = getGradeTest(0.5);

console.log(newTester(0.79));