
function mapScoresToGrades(tests, average) {
    let getGradeTest = average =>
        ((testScore) => testScore >= average ? 'A' : 'F');
    let gradeTest = getGradeTest(average);
    return tests.map(gradeTest);
}

function getAverage(tests) {
    return tests.reduce((acc, elem) => acc + elem) / tests.length;
}

function gradeTests(tests) {
    const average = getAverage(tests);
    return mapScoresToGrades(tests, average);
}

console.log(gradeTests([0.1, 0.5, 1]));