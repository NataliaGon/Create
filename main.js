
//FULL SCREEN
var allStudentsBtns = document.querySelectorAll('.choose-student-btn');

for (var i = 0; i < allStudentsBtns.length; i++) {
    var studentBtn = allStudentsBtns[i];
    studentBtn.addEventListener('click', function (event) {

        var idx = Array.prototype.indexOf.call(allStudentsBtns, event.target);
        console.log(idx);
        findStudentInfo(idx);

    })
}

var ArrayEachStudentInfo = document.querySelectorAll('.each-student-info');
function findStudentInfo(idx) {
    for (var i = 0; i < ArrayEachStudentInfo.length; i++) {
        var studentInfo = ArrayEachStudentInfo[i];

        if (i == idx) {            
            var allSiblins = studentInfo.parentNode.children;           
            for (var j = 0; j < allSiblins.length; j++) {
                var sibling = allSiblins[j];
                sibling.classList.remove('visible-student');
                studentInfo.classList.add('visible-student');  
                
            }
             
            
        }

    }
}
//MOBILE SCREEN
var allStudentsBtnsMob = document.querySelectorAll('.choose-student-mob-btn');
for (var i = 0; i < allStudentsBtnsMob.length; i++) {
    var studentBtnMob = allStudentsBtnsMob[i];
    studentBtnMob.addEventListener('click', function (event) {

        var index = Array.prototype.indexOf.call(allStudentsBtnsMob, event.target);
        console.log(index);
        findStudentInfoMob(index);
    })
}

var ArrayEachStudentInfoMob = document.querySelectorAll('.student-info-mob');

function findStudentInfoMob(index) {
    for (var i = 0; i < ArrayEachStudentInfoMob.length; i++) {
        var studentInfoMob = ArrayEachStudentInfoMob[i];
        var studentsLine = studentInfoMob.parentNode;
        let position=0;
        if (i == index) {            
             position = position-i;
             move(position,studentsLine);
            
        }

    }
}
function move(position,studentsLine) {
    studentsLine.style.width = position * 100 + '%';
    
}
//popUp 
var btnsStudents = document.querySelectorAll('.btn-student');
var popUp = document.getElementsByClassName('popup');

    for (var i = 0; i < btnsStudents.length; i++) {
        var btnStudent = btnsStudents[i];
        btnStudent.addEventListener('click', function () {
            console.log(popUp);
            popUp[0].style.display = 'block';


     

var closePopBtn = document.getElementById('x-close');
closePopBtn.addEventListener('click', function (){
    popUp[0].style.display = 'none';

})
})
}