$(document).ready(function() {
    let mainText = document.querySelector('#textHtml')
    let button = document.querySelector('#text1')
    $('#but').click(function(){
        inputValue1 = $('#Inp1').val();
        inputValue2 = $('#Inp2').val();
        inputValue3 = $('#Inp3').val();
        inputValue4 = $('#Inp4').val();
        inputValue5 = $('#Inp5').val();
        inputValue6 = $('#Inp6').val();
        inputValueSpeach = $('#InpSpeach').val();
        button.innerHTML = "заменить переменные";
        mainText.innerHTML = 'Жили-были ' + inputValue1 + ' да ' + inputValue2 + ', была у них ' + inputValue3 + ' снесла ' + inputValue3 + ' ' + inputValue4 + ', не простое - золотое, - ' + inputValue1 + ' бил, бил - не разбил, - ' + inputValue2 + ' била, била - не разбила, ' + inputValue5 + ' бежала, ' + inputValue6 + ' задела, ' + inputValue4 + ' упала и разбилось, ' + inputValue1 + ' плачет, ' + inputValue2 + ' плачет, а ' + inputValue3 + ' кудахчет: ' + inputValueSpeach;
    });
});
