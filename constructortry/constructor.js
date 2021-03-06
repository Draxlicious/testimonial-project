let imageElement = document.querySelector("#customer-img")
let customerName = document.querySelector("#customer-name")
let customerQuote = document.querySelector("#customer-text")
let buttons = document.querySelectorAll(".btn")
let customers = []
let i = 0;

function Customer(image, name, quote){
    this.image = image;
    this.name = name,
    this.quote = quote
}

function createCustomer(image, name, quote){
    let fullImg = `../img/customer-${image}.jpg`

    let customer = new Customer(fullImg, name, quote)
    customers.push(customer)
    console.log(customers)
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

buttons.forEach((btn) =>{
    btn.addEventListener("click", function(){
        if(btn.classList.contains("nextBtn")){
            i++
            if(i === customers.length){
                i = 0
            }
            imageElement.src = customers[i].image
            customerName.textContent = customers[i].name
            customerQuote.textContent = customers[i].quote
        }


        if(btn.classList.contains("prevBtn")){
            if(i === 0){
                i = customers.length
            }
            i--
            imageElement.src = customers[i].image
            customerName.textContent = customers[i].name
            customerQuote.textContent = customers[i].quote
        }
        console.log(i)
    })
})