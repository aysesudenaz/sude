function showResponse(answer) {
    var responseDiv = document.getElementById('response');
    if (answer === 'Evet') {
        responseDiv.innerHTML = 'Adamsın!!!';
    } else {
        responseDiv.innerHTML = 'Buyuk ayip ettin...';
    }
}