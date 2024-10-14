function find_word(word){
    fetch("lessons/testing.json")
    .then(res => res.json())
    .then(res => res.forEach(cword => {
        if(cword.name.includes(word)){
            const rt = document.getElementById("res_list");
            const ref = rt.createElement("li");
            ref.innerText = word; 
            rt.appendChild(ref);
        }
    }))
}

const searchin = document.getElementById("searchbar");

searchin.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        find_word(this.value);
    }
})