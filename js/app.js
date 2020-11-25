const imgElement = document.querySelector("#customer-img")
const CustomerName = document.querySelector("#customer-name")
const CustomerQuote = document.querySelector("#customer-text")
const buttons = document.querySelectorAll(".btn")
let i = 0;
console.log(buttons   )
let images = [
    "customer-0",
    "customer-1",
    "customer-2",
    "customer-3",
    "customer-4"
]
let quotes = [
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
     'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
     'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
     'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
]
let names = [
    'John',
    'Sandy',
    'Amy',
    'Tyrell',
    'Wanda',
]

    buttons.forEach((btn)=>{
    btn.addEventListener('click', function(){
        if(btn.classList.contains("nextBtn")){
            i++
            if(i > images.length - 1){
                i = 0
            }
            imgElement.src = `./img/customer-${[i]}.jpg`
            CustomerName.innerHTML = names[i]
            CustomerQuote.innerHTML = quotes[i]
            console.log(images[i])
        }

        if(btn.classList.contains("prevBtn")){
            i--
            if(i < 0){
                i = images.length - 1
            }
            imgElement.src = `./img/customer-${[i]}.jpg`
            CustomerName.innerHTML = names[i]
            CustomerQuote.innerHTML = quotes[i]
        }
        console.log(i)
    })
})