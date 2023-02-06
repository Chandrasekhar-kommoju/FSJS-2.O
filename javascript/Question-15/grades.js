// 15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

function gradesEvaluation(marks) {
    if (marks >=80 && marks <= 100) {
        return 'grade A';
    } else if (marks >= 70 && marks <= 79) {
        return 'grade B';
    } else if (marks >=60 && marks <= 69){
        return 'grade C';
    }else if (marks >= 50 && marks <=59){
        return 'grade D';
    }else if (marks >= 0 && marks <= 49) {
        return 'grades f'
    } else {
        return ' please check the Hall-ticket number'
    }
}
const marksObatained = gradesEvaluation(95);
console.log(marksObatained);
