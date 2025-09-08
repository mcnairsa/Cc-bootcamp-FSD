// fetch

// function in JS browser

// common errors
// go to a resource that doesn't exist

const url = "https://goweather.xyz/weather/Berlin";

// gives us back a 404 - not found
const typoUrl = "https://goweather.xyz/wether/Berlin";

fetch(typoUrl)
  // wait for the reponse to come back
  .then((response) => {
    if (response.status >= 400 && response.status < 500) {
      const errorMessage = handleClientErrors(response);
      throw new Error(errorMessage);
    }

    return response.json();
  })
  // and convert the json to a javascript object
  .then((data) => {
    // data is the object from the reponse body that we got});
    console.log("Did this work", data);
    //update the dom here and change the url so it works

  })
  .catch((error) => {
    console.error(error);
    document.getElementById("user-error").innerHTML = `
      <div class="error-message">
        <h3>Oops! ${error.message}</h3>
         </div>
    `;
  });

function handleClientErrors(response) {
  switch (response.status) {
    case 400:
      return "Bad Request - Check your data format";
    case 401:
      return "Unauthorized - You need to log in first";
    case 403:
      return "Forbidden - You don't have permission for this";
    case 404:
      return "Not Found - This item doesn't exist";
    case 422:
      return "Invalid Data - Check your input fields";
    default:
      return `Client Error ${response.status} - Check your request`;
  }
}
