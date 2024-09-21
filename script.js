const containerBox = document.getElementById("list-container");
const inputData = document.getElementById("input-box");


function addTask() {
    if (inputData.value === '') {
        alert('You must write Something')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputData.value;
        containerBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
    inputData.value = '';

}

inputData.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addTask();  // Call the addTask function
    }
});

containerBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)


function saveData() {
    localStorage.setItem("data", containerBox.innerHTML);
}
function showtask() {
    containerBox.innerHTML = localStorage.getItem("data");
}
showtask();