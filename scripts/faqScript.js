function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.classList.toggle("max-h-0");
    answer.classList.toggle("max-h-52");
    answer.classList.toggle("overflow-hidden");
}