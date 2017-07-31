var form_1 = document.getElementById('form_1');
form_1.style.display = 'none';
var form_2 = document.getElementById('form_2');
form_2.style.display = 'none';
var form_3 = document.getElementById('form_3');
form_3.style.display = 'none';
var form_4 = document.getElementById('form_4');
form_4.style.display = 'none';

function showForm_1() {
	form_1.style.display = 'block';
	form_2.style.display = 'none';
	form_3.style.display = 'none';
	form_4.style.display = 'none';
}

function showForm_2() {
	form_1.style.display = 'none';
	form_2.style.display = 'block';
	form_3.style.display = 'none';
	form_4.style.display = 'none';
}

function showForm_3() {
	form_1.style.display = 'none';
	form_2.style.display = 'none';
	form_3.style.display = 'block';
	form_4.style.display = 'none';
}

function showForm_4() {
	form_1.style.display = 'none';
	form_2.style.display = 'none';
	form_3.style.display = 'none';
	form_4.style.display = 'block';
}

function closeForm() {
	form_1.style.display = 'none';
	form_2.style.display = 'none';
	form_3.style.display = 'none';
	form_4.style.display = 'none';
}