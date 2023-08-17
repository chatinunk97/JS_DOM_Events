const jobs = [
  { id: 1, title: "Learn HTML", done: false },
  { id: 2, title: "Learn CSS", done: false },
  { id: 3, title: "Learn Javascript", done: false },
  { id: 4, title: "Learn DOM", done: false },
  { id: 5, title: "Learn React", done: false },
  { id: 6, title: "Learn Node.js", done: false },
];

let editIdx = -1;
let replacedTitle = "";
let sortZA = true;

let jobList = document.querySelector(".job-list");
let jobForm = document.querySelector(".job-form");

function render() {
  let allJobItems = jobs.map((el, i) => {
    if (i !== editIdx) {
      return `
        <div class='job-item'>
        <input type="text" readonly value="${el.title}" onclick="changeStatus(${
        el.id
      })" class="${el.done ? "done" : "undone"}"/>
        <button onclick="setEdit(${el.id})">Edit</button>
        <button onclick="deleteJob(${el.id})">Delete</button>
        </div>
        `;
    } else {
      return `
        <div class='job-item'>
        <input type="text" value="${el.title}" class="editmode" onkeyup="setReplaceTitle(event)"/>
        <button onclick="changeTitle(${el.id})">Save</button>
        <button onclick="deleteJob(${el.id})">Delete</button>
        </div>
        `;
    }
  });

  jobList.innerHTML = allJobItems.join("");
  if (editIdx !== -1) {
    let input = jobList.children[editIdx].children[0];
    let end = input.value.length;
    input.setSelectionRange(0, end);
    jobList.children[editIdx].children[0].focus();
  }
}

render();

jobForm.addEventListener("submit", (e) => {
  e.preventDefault(); //-> submit normally refresh the webpage we don't want that
  console.log(e.target); // -> submit's target is always the form
  console.log(e.target.children[0]); // -> the first children of the target is the input from form so we can use .value
  let newTitle = e.target.children[0].value;
  if (!newTitle.trim()) return;
  let newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
  //          if the job.length is < 0 that means the data array has nother so we check that
  //                   if it's > 0 then go get the job.length which would be 1 greater than the real amount
  //                    use that length - 1 which is the last index to query the object
  //                     jobs[jobs.length-1] now returns the LAST object now we get that object id then
  ///                     we add +1 to that id number cause the next object will be put in there
  let newJob = {
    id: newId,
    title: newTitle,
    done: false,
  };
  jobs.push(newJob);

  jobForm.reset();
  render();
});

//////////////////////// Explain the below code///////////////////////

function deleteJob(id) {
  // idx = jobs.findIndex((element)=>element["id"]==id)
  jobs.splice(
    jobs.findIndex((element) => element["id"] == id),
    1
  );
  render();
}

function setEdit(id) {
  let idx = jobs.findIndex((el) => el.id === id);
  editIdx = idx;
  replacedTitle = jobs[idx].title;
  render();
}
function changeTitle(id) {
  let idx = jobs.findIndex((el) => el.id === id);
  jobs[idx].title = replacedTitle;
  editIdx = -1;
  render();
}
function setReplaceTitle(e) {
  if (e.key === "Escape") {
    editIdx = -1;
    render();
  }
  if (e.target.value.trim()) replacedTitle = e.target.value;
  console.log(replacedTitle);
}

function changeStatus(id) {
  let idx = jobs.findIndex((el) => el.id === id);
  jobs[idx].done = !jobs[idx].done;
  render();
}

let sortBtn = document.querySelector(".sort-btn");
sortBtn.onclick = function () {
  if (sortZA) {
    sortBtn.innerHTML = '<i class="fa-solid fa-arrow-down-a-z">';
    jobList.style.flexDirection = "column";
    sortZA = false;
  } else {
    sortBtn.innerHTML = `<i class="fa-solid fa-arrow-down-z-a">`;
    jobList.style.flexDirection = "column-reverse";
    sortZA = true;
  }
};
