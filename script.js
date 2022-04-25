const choices = document.getElementById("tag");
const choiceInput = document.getElementById("textarea");

choiceInput.addEventListener("keyup", (e) => {
    const input = e.target.value;
    console.log(input);
    createChoices(input);
    if (e.key  === 'Enter'){
        pickRandomChoice();
    }

});

function createChoices(choice){
    choices.innerHTML = "";
    const tagEl = choice.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    tagEl.forEach(tag => {
        choiceTag = document.createElement("span");
        choiceTag.classList.add("tag");
        choiceTag.innerText = ""+ tag +"";
        choices.appendChild(choiceTag);
    })


}

function pickRandomChoice(){
    const time = 30;
    const interv = setInterval(() => {

        const randomTag = tagSelector();
        highlight(randomTag);
        setTimeout(() => {
        unHighlight(randomTag);
        }, 100)
    }

    ,100)

    setTimeout(() => {
        clearInterval(interv);
        const randomTag = tagSelector();
        setTimeout(() => {
            highlight(randomTag);
        }, 100)

    }, time * 100)
}
function tagSelector(){
    const tagSelected = document.querySelectorAll(".tag");
    return tagSelected[Math.floor(Math.random() * tagSelected.length)]
}

function highlight(block){
    block.classList.add("highLight");
}

function unHighlight(block){
    block.classList.remove("highLight");
}