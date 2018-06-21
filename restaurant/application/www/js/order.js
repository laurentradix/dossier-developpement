$('select').on('change',function(){

	var productId = $(this).val();

	var url = getRequestUrl()+'/product';

	var params = {

		id:productId,
	};

	$.get(url,params,function(html){
		
		$('.product-info').html(html);
	
	});

});

$('select').trigger('change');




$('.add').on('click', function(){
	
	

	var quantity = $(".quantity").val();
	var productId = $("select").val();

	var url = getRequestUrl()+'/cart';
	

	var params = {

	 	id:productId,
	 	"quantity":quantity,

	 };

	 console.log('click');


});