# 262-a3

## explain

This is about when press the button its shows other page. We focused about varible and DOM slector. Also, we put user name and password in to formset You can try to play with it Tony.

### Challanged:

When I try to understand how to function work how to button to the other pages. Also, I still need to more focused on all code works proply in the JavaScript.

### used the code 
```

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

```
