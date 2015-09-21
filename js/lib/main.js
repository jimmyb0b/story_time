(function($) {


var tyroneBook = $(
	
	)

var chooseBook	= $('#book-select').val()
console.log(chooseBook)
	if (chooseBook === 'tyrone_the_horrible'){
		$('.book-content').append(tyroneBook)
	}else if (chooseBook === 'clifford_the_big_red_dog'){
		$('.book-content').append()
	}


})(jQuery)