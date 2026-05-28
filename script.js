
const gradeInput = document.getElementById("gradeInput");
const addButton = document.querySelector("#addButton");
const gradeList = document.querySelector("#gradeList");

console.log(gradeInput);
console.log(addButton);
console.log(gradeList);

addButton.addEventListener("click", function(){
    const grades = gradeInput.value;
    if(grades === ""){
        console.log("please write a grade");
    }else {
        console.log(grades);
        const li = document.createElement("li");
        console.log(li);
        li.textContent = grades;
        gradeList.appendChild(li);
        gradeInput.value = "";
        focus()
    }
});


