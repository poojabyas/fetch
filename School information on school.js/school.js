// // Problem 10: countCalculation [1]


const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

//   Problem 10: countCalculation [1]
//   function countCalculation(school){
//     const {departments: {
//         math : {teachers: mathTeachersCount, students: mathStudentsCount},
//         history: {teachers: historyTeachersCount, students: historyStudentsCount}
//     }
// }= school;

// return{mathTeachersCount,mathStudentsCount,historyTeachersCount,historyStudentsCount}

//   }
//   console.log(countCalculation(school))


// Problem 11: findTopStudent [1]
// function findTopStudent(school,courseName){

// const topStudent =  school.students.reduce((pre,cur)=>{
//     return cur.scores[courseName]>pre.scores[courseName]?cur:pre

// })
// return topStudent
// }
// console.log(findTopStudent(school,"math"))



// //Problem 12: addNewDept [1]
// let newDepartment = {art:{teachers:6, students:120}}
// function addNewDept(school,newDepartment){
// const updateDept = {...school.departments,...newDepartment}
// return{...school, departments : updateDept}


// }
// console.log(addNewDept(school,newDepartment))


// Problem 13: highestStudentCountDepartment[1]

