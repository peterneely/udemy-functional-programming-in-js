const getGradeTest =
    passGrade =>
        failGrade =>
            average =>
                testScore =>
                    testScore >= average ? passGrade : failGrade;

const passFailTester = getGradeTest('Pass')('Fail')(0.2);

console.log(passFailTester(0.19), passFailTester(0.21));

const uncurriedGetGradeTest =
    (passGrade, failGrade, average, testScore) =>
        testScore >= average ? passGrade : failGrade;

console.log(uncurriedGetGradeTest('+', '-', 0.5, 0.51));