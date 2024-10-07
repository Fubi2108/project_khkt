const searchin = document.getElementById("searchbar");

searchin.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        console.log(this.value);
    }
})