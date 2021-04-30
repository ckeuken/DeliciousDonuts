const firstname = document.getElementById('firstn')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form_group')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
	let messages = []

	if(firstname.value === '' || firstname.value == null){
		messages.push('Name is required\r\n')
	}

	if(email.value === '' || email.value == null){
		messages.push('Email is required\r\n')
	}

  if(email.value.length <= 10){
    messages.push('Invalid Email Address\r\n')
  }

	if(password.value === 'password'){
		messages.push('Password cannot be password')
	}

	if(password.value.length <= 6){
		messages.push('Password must be longer than 6 characters')
	}


	if(messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join('')
		errorElement.style.color = 'rgb(240,0,75)'
	}
})

