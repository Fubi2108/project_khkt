function generate_question(my_file){
    let file = "lessons/"+my_file;
    fetch(file)
    console.log(file);
}

generate_question("lesson1.txt");