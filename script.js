
$('#form').on('submit', function (event) {
    event.preventDefault();
    var number = $('#input')[0].value;
    if (!number) {
        $('#result').html('<div class="alert alert-danger">Please Inter A Value</div>');
        return;
    };
    isPerfectNumber(+number)


})


function isPerfectNumber(num) {
    var perfect = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            perfect += i;
        }
    }
    if (perfect == num) {
        $('#result').html('<div class="alert alert-success">' + num + ' Is A Perfect Number</div>');
    } else {
        $('#result').html('<div class="alert alert-warning">' + num + ' Is NOT A Perfect Number</div>');
    }
}

