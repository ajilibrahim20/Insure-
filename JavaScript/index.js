const toggleBtn = document.querySelector(".toggle-btn");
const navigation = document.querySelector(".navigation-wrapper");
const toggleOpenIcon = document.querySelector(".toggle-icon-bars");
const toggleCloseIcon = document.querySelector(".toggle-icon-close");

toggleBtn.addEventListener("click", function(){
    navigation.classList.toggle("show");
    toggleOpenIcon.classList.toggle("hide");
    toggleCloseIcon.classList.toggle("show");
})
