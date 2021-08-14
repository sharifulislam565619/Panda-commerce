// change the text color of h2 tags
const h2Tags = document.getElementsByTagName("h2");
for (const h2 of h2Tags) {
    h2.style.color = "blue "
}

// set border radius on cards
const cards = document.getElementsByClassName("card");
for (const card of cards) {
    card.style.borderRadius = "20px"
    card.style.boxShadow = "15px 15px 40px gray"

}


// remove it when you clicked buy now button 
const buttons = document.getElementsByClassName("btn-warning");
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}

const submitButton = document.getElementById("submit-button")
const inputForm = document.getElementById("exampleFormControlInput1")
inputForm.addEventListener("keyup", function () {
    if (inputForm.value == "email") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
})


// change image by mouseover
const bag = document.getElementById("bag1")
const bag2 = document.getElementById("bag2")
const bag3 = document.getElementById("bag3")


bag.addEventListener("mouseover", function () {
    bag.src = "images/bags/bag-3.png"
})
bag.addEventListener("mouseout", function () {
    bag.src = "images/bags/bag-1.png"

})
bag2.addEventListener("mouseover", function () {
    bag2.src = "images/bags/bag-1.png"
})
bag2.addEventListener("mouseout", function () {
    bag2.src = "images/bags/bag-2.png"

})
bag3.addEventListener("mouseover", function () {
    bag3.src = "images/bags/bag-1.png"
})
bag3.addEventListener("mouseout", function () {
    bag3.src = "images/bags/bag-3.png"

})




// Change the section background color by double clicking
document.getElementById("subscribe").addEventListener("dblclick", function () {
    document.getElementById("subscribe").style.backgroundColor = "#fa6666 "
})
document.getElementById("subscribe").addEventListener("click", function () {
    document.getElementById("subscribe").style.backgroundColor = "#f8d7d3 "
})