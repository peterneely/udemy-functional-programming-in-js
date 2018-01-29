SELECT students.name AS studentName, 
       COUNT( tests.id ) AS testCount 
FROM students 
LEFT JOIN tests
ON students.id = tests.studentID
GROUP BY students.id;