function mapScoresToGrades(tests, average) {
    let getGradeTest = average =>
        ((testScore) => testScore >= average ? 'A' : 'F');
    let gradeTest = getGradeTest(average);
    return tests.map(gradeTest);
}

const grades = mapScoresToGrades([0.3, 0.8, 1], 0.9);

console.log(grades);