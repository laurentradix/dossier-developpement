"use strict";
console.log("chargé");

//afficher la formulaire
var clic = $(".clickOn");
console.log(clic);

$(clic).click(function() {
	console.log("click");
	$("div").show();
});




$(".save").click(save);

function save(){
	// console.log("click");

	var contact = {};

	contact.civilite = $('#civilite').val();
	contact.firstname = $('#firstname').val();
	contact.lastname = $('#lastname').val();
	contact.phone = $('#phone').val();
	
	// console.log(contact);
	
	saveContact(contact);
	
	displayContacts();
};
	


// //ajouter au carnet le contact//

function getContactList() {
	var contactListJSON = localStorage.getItem('contactList');

	var contactList;

	if (contactListJSON == null ){
		contactList = [];
	} else {
		contactList = JSON.parse(contactListJSON);	
	}

	return contactList;
};

// ajouter le contact au localstorage



function saveContact(contact) {

	var contactList = getContactList();

	contactList.push(contact);

	var contactListJSON = JSON.stringify(contactList);

	localStorage.setItem('contactList', contactListJSON);
};

	

function displayContacts() {
	

	var contactList = getContactList();

	
	var html = '';

	for (var i = 0; i < contactList.length; i++) {
		var contact = contactList[i];
		html += "<li>"+ contact.civilite + " " + contact.firstname + " " + contact.lastname + " " +  contact.phone + "</li>";
	};


	 $('.contact-list').html(html);	

	

};
var remove = $(".remove");

remove.on( "click",removeContact);










function removeContact(contact) {

	var contactListJSON = localStorage.removeItem('contactList');

	displayContacts();
};
function displayContacts() {
	
	var contactList = getContactList();

	var html = '';

	for (var i = 0; i < contactList.length; i++) {
		var contact = contactList[i];
		html += '<li data-id="' + i + '">' + contact.firstname + " " + contact.lastname + "<li>";
	}


	$('.contact-list').html(html);

	$('.contact-list li').on('click' , function () {
		var contactId = $(this).attr('data-id');	
		displayContact(contactId);
	});
}

function displayContact(contactId) {
	var contactList = getContactList();

	var contact = contactList[contactId];
	console.log(contact);

	$('.contact-details h2').html(contact.firstname + "" + contact.lastname);
	$('.contact-details .phone').html(contact.phone);
}


	






