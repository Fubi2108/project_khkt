function find_word(word){
    fetch("lessons/testing.json")
    .then(res => res.json())
    .then(res => res.forEach(cword => {
        if(cword.name.includes(word))
            console.log(cword.name);
    }))
}

const searchin = document.getElementById("searchbar");

searchin.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        find_word(this.value);
    }
})