







SELECT students.name AS studentName, 
       tests.title AS testTitle, 
       tests.score AS testScore
FROM tests 
JOIN students
ON students.id = tests.studentID
WHERE tests.score >= 0.7;