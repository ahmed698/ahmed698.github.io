function sendMail() {
	$('#emailRequest').html('<img width="50px" src="https://ahmed-rachid.fr/base/img/loading.gif" />');
	jQuery.ajax({
		url: "https://ahmed-rachid.fr/?send=mail",
		data:'email='+document.getElementById("email").value+'&name='+document.getElementById("name").value+'&message='+document.getElementById("message").value,
		type: "POST",
		success:function(data){$('#emailRequest').html(data);}
	});
}