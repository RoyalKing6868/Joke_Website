const button = document.querySelector('.btn');
const joke = document.querySelector('.content p');
button.addEventListener('click' , getJoke);
async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            Accept : 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    joke.innerHTML= jokeObj.joke;
}