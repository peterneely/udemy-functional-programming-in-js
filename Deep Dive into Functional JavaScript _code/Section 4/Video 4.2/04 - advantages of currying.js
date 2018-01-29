const uncurriedGradeTest =
    (passGrade, failGrade, average, testScore) =>
        testScore >= average ?
            passGrade :
            failGrade;







uncurriedGradeTest('+', '-', 0.5, 0.46);
uncurriedGradeTest('+', '-', 0.5, 0.47);
uncurriedGradeTest('+', '-', 0.5, 0.48);
uncurriedGradeTest('+', '-', 0.5, 0.49);
uncurriedGradeTest('+', '-', 0.5, 0.5);
uncurriedGradeTest('+', '-', 0.5, 0.51);
uncurriedGradeTest('+', '-', 0.5, 0.52);
uncurriedGradeTest('+', '-', 0.5, 0.53);
uncurriedGradeTest('+', '-', 0.5, 0.54);
uncurriedGradeTest('+', '-', 0.5, 0.55);