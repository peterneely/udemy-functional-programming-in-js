const gradeTest =
    passGrade =>
        failGrade =>
            average =>
                testScore =>
                    testScore >= average ?
                        passGrade :
                        failGrade;

const tester =
    gradeTest('+')('-')(0.5);

tester(0.46);
tester(0.47);
tester(0.48);
tester(0.49);
tester(0.5);
tester(0.51);
tester(0.52);
tester(0.53);
tester(0.54);
tester(0.55); 