var addbtn=document.getElementById("addbtn")
var overlay=document.getElementById("overlay")
var popupbox=document.getElementById("popupbox")
//Using event listener to create a Anonyems function to do the function.
addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
   
})



var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var shortdescription=document.getElementById("short-description")
var addbox=document.getElementById("add-box")
var cancelbox=document.getElementById("cancel-box")
var container=document.querySelector(".container")
var containerbox=document.querySelector(".container-box")
//Using prevent default key word to solve the page refersh in form.
addbox.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})
//Using prevent default key word to solve the page refersh in form.
cancelbox.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})


addbox.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","container-box")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${shortdescription.value}</p>
    <button onclick='deletebox(event)' >Delete</button>`
    container.append(div)

})

// Create function for delete container using event.target to parent element remove...
function deletebox(event){
    event.target.parentElement.remove()
}