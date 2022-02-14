const userInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const signInBtn = document.querySelector("#signin");
const userName = 'Golden'
const password = 'Harper'
const error = document.querySelector('#error')
    // function

const signIn = () => {
    if (password == passwordInput.value && userName == userInput.value) {
        error.innerText = 'Good job'
        window.location.href = 'main.html'

        return
    }
    error.innerText = 'WRONG PASSWORD!!!'

}
signInBtn.addEventListener("click", () => {
    signIn()
})