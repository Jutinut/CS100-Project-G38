// chack Name
function validateName() {
  const names = document.getElementById("fullname").value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } 

  errorElement.textContent = ""; // Clear the error message when valid
  return true;
}

// chack StudentID
function validateStudentID() {
    const studentIDPattern = /^\d{10}$/;
    const errorElement = document.getElementById("studentIDError");
    
    if (!studentIDPattern.test(document.getElementById("studentID").value)) {
      errorElement.textContent = "Please enter a 10-digit Student ID.";
      return false;
    } 

    errorElement.textContent = ""; // Clear the error message when valid
    return true;
  }

// chack Name
  function validateEmail() {
    const emailPattern = /^.+@dome\.tu\.ac\.th$/;
    const errorElement = document.getElementById("emailError");

    if (!emailPattern.test(document.getElementById("email").value)) {
      errorElement.textContent =
      "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
      return false;
    } else 

    errorElement.textContent = ""; // Clear the error message when valid
    return true;
  }


function closePopUp() {
   document.querySelector('.background').style.display = "none"
}

function chackAgain() {
  validateName()
  validateStudentID()
  validateEmail()
}


function SubmitForm() {

    // Validate form inputs before submission
    if (!validateName() || !validateStudentID() || !validateEmail()) {
      chackAgain()
      window.scrollTo(0, 0)
      return "หยุดการทำงานของฟังชั่นนี้"
    }
    const All_id = [
      "fullname", "studentID", "email", "workTitle", "activityType", "academicYear",
      "semester",  "startDate", "endDate", "location", "description"
    ]

    //for chack input All
    for(let i = 0;i <= 10;i++){
      const ID = document.getElementById(All_id[i])
      if(ID.value === null || ID.value === ""){
        ID.style.border = "1.5px solid red"
        alert(`please fill ${All_id[i]}`)

        if(i<=2) 
        window.scrollTo(0, 0)
        else 
        window.scrollTo(0, 450)

        return"เลิกใช้ฟังชั่นนี้"
      }
      ID.style.border = "1px solid #ccc"
    }

    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

    if (endDate <= startDate && !!startDate && !!endDate) {
      alert("End datetime should be after the start datetime.");
      return;
    }

    
    // open popup
    document.querySelector('.background').style.display = "flex"

    let outPutText = ""
    All_id.forEach((item,index) => {
        outPutText += `<p><h3>${item} :</h3> ${document.getElementById(item).value}</p>`
        document.getElementById(item).value = null
    })
    document.querySelector('.ShowData').innerHTML = outPutText
}
