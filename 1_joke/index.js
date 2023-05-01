//使HTMLX裡的#btn連結
const btnEL = document.getElementById("btn");
//使HTMLX裡的#joke連結
const jokeEL = document.getElementById("joke");

//串接API
const apiKey = "lJHnzVvQgXvSdtTbJE6yVw==amPDpA6wlmAXsEJc";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1 ";

//鼠標點一下就會啟動getJoke function
btnEL.addEventListener("click", getJoke);

//async 非同步
async function getJoke() {
    try {
        jokeEL.innerText = "Updating...";
        btnEL.disabled = true;  //btn無效
        btnEL.innerHTML = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        //joke生成後讓btn恢復點選
        btnEL.disabled = false;
        btnEL.innerHTML = "Tell me a Joke";

        jokeEL.innerText = data[0].joke;    //讓#joke裡的文字變成data[0].jok

    } catch (error) {
        jokeEL.innerText = "No internet, please try again.";
        btnEL.disabled = false;
        btnEL.innerHTML = "Tell me a Joke";
    }
}
