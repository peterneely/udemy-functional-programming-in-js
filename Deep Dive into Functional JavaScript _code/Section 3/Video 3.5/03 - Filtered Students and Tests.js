const students = [
    {
        id: 1,
        name: 'Marcus',
        birthDate: '1997-12-11'
    },
    {
        id: 2,
        name: 'Andrea',
        birthDate: '1993-09-08'
    },
    {
        id: 3,
        name: 'Max',
        birthDate: '1994-11-14'
    }
];

const tests = [
    {
        id: 1,
        studentID: 1,
        title: 'Fractals',
        score: 0.5
    },
    {
        id: 2,
        studentID: 1,
        title: 'Functional Programming',
        score: 0.75
    },
    {
        id: 3,
        studentID: 2,
        title: 'Functional Programming',
        score: 0.96
    }
];

const StudentTests = tests.filter(studentTest =>
    studentTest.score >= 0.7).map(test => {
        const student = students.find(student =>
            student.id === test.studentID);
        return {
            studentName: student.name,
            testTitle: test.title,
            testScore: test.score
        };
    });