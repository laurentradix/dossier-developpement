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




$('.btn-add').on('click', function(){
	
	var quantity = $("input[name=quantity]").val();
	var productId = $("select").val();

	var url = getRequestUrl()+'/cart';
	

	var params = {};

	params.id = productId;
	params.quantity = quantity;

	console.log(params);


	$.post(url,params,function(html){

		$('.box-cart').html(html);
	});

});

var url = getRequestUrl()+'/cart';

$.get(url, function (html) {
	$('.box-cart').html(html);
});



$(document).on('click',"button-delete",function(){

		var productId =$(this).attr('data-id')
		var url = getRequestUrl()+'/cart';
		

		var params = {};

		params.id = productId;

		params.delete =1;

		$.post(url, function (html) {
		$('.box-cart').html(html);

 	 });
});