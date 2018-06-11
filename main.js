$(document).ready(function() {

	jQuery(".nmbr").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
		return false;
		}
	});

	var $field1 = $('.number1');
	var	$field2 = $('.number2');
	var	result = $('.result');
	
	$('.btn').click(function() {
		

		   
	});

	function computation() {
		var value1 = +$field1.val();
		var value2 = +$field2.val();
		var action = self = $(this).val();
		var sign = $('.btn:checked').val();

		if(value1 == 0) {result.val("Неверное значение в поле 1го операнда"); return;}
		if(value2 == 0) {result.val("Неверное значение в поле 2го операнда"); return;}

		switch(sign) {
			case "+":
				result.val(value1 + value2);
				break;
			case "-":
				result.val(value1 - value2);
				break;
			case "*":
				result.val(value1 * value2);
				break;
			case "/":
				if(value2 == 0) return result.val("Деление на 0 невозможно");
				result.val(value1 / value2);                    
				break;
			default:
				result.val('Выберите нужную операцию');
			}

	}

	$('.nmbr').on('keyup', computation);
	$('.btn').on('click', computation);




});
