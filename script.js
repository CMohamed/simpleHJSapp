
let listUsers = [{
	id: 'ID',
	nom: 'Nom',
	prenom: 'Prenom',
	actions: 'Actions'
}];

let userId = '';
let userNom = '';
let userPrenom = '';

let mode = 'ADD';
let selectedIndex = 0;
let data;

let head;

setTimeout(
	function() {
		userId = document.getElementById('id');
		userNom = document.getElementById('nom');
		userPrenom = document.getElementById('prenom');
		data = document.getElementById('data');
		head = document.getElementById('head');
	},
	3000);

function addUser() {
	let user = {
		id : userId.value,
		nom : userNom.value,
		prenom : userPrenom.value,
	};
	console.log(userId);
	if (mode === 'ADD') {
		listUsers.push(user);
	}
	else {
		listUsers[selectedIndex] = user;
	}
	console.log(listUsers);
	updateData();
	mode = 'ADD';
}

function update(i) {
	mode = 'UPDATE';
	selectedIndex = i;
	userId.value = listUsers[i].id;
	userNom.value = listUsers[i].nom;
	userPrenom.value = listUsers[i].prenom;
}
function remove(i) {
	listUsers.splice(i, 1);
	updateData();
}

function initUser() {
	userId.value = '';
	userNom.value = '';
	userPrenom.value = '';
	mode = 'ADD'
}

function create(user, index) {
	const {id, nom, prenom} = user;
	let tr = document.createElement('tr');
	tr.innerHTML = `<td>${id}</td><td>${nom}</td><td>${prenom}</td><td> <button onclick="update(${index})">modifier</button> <button onclick="remove(${index})">supprimer</button> </td>`
	return tr;
}

function updateData() {
	data.innerHTML = '';
	data.append(head);
	for(let i=1; i < listUsers.length; i++) {
		let line = create(listUsers[i], i);
		data.append(line);
	}
}

