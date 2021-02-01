function getpara1() {
    var inputs = [];
    for (var i = 1 ; 1 <= 6 ; i++)
    {
        inputs.push(document.getElementById("display_sentence_with_fullstop" + i).value);
    }
    inputs.join(". ");
}