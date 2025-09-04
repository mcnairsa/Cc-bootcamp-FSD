console.log("Connected");

const jobApplicationForm = document.querySelector("#job-application");

jobApplicationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent traditional form submission

  //currentTarget/target?

  console.log("currentTarget", event.currentTarget);

  const experienceInput = event.currentTarget.elements.experience;

  console.log("experience input", experienceInput);

  console.log("experience input value", experienceInput.value);

  console.log("is experience valid", validateExperience(experienceInput.value));

  if (!validateExperience(experienceInput.value)) {
    alert("Your experience is invalid");
  } else {
    // real submission code
    console.log("Form submitted!");
  }
});

// true or false
function validateExperience(text) {
  // does this have a particular value on it

  if (text.toLowerCase().includes("window")) {
    return false;
  }
  //make this valid for now
  return true;
}


// https://developer.mozilla.org/en-US/docs/Web/API/FormData

