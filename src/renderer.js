document.addEventListener('DOMContentLoaded', function () {
	const list = document.querySelector('.users-list')
	window.electron.fetchData('https://reqres.in/api/users')
	.then(data => {
		parsingData(data.data)
	})
	.catch(error => {
		console.error("Error fetching data", error)
	})
	function createElement(
		firstname = 'Not a find',
		lastname = 'Not a find',
		link = ''
	) {
		const spanName = document.createElement('span')
		const spanLastname = document.createElement('span')
		const newItem = document.createElement('li')
		const img = document.createElement('img')
		img.src = link

		list.appendChild(newItem)
		newItem.appendChild(img)
		newItem.appendChild(spanName)
		newItem.appendChild(spanLastname)

		newItem.classList.add('user-item')
		spanName.classList.add('span-name')
		spanLastname.classList.add('span-surname')

		spanName.textContent = firstname
		spanLastname.textContent = lastname
	}
	function parsingData(data) {
		data.forEach(item => {
			createElement(item.first_name, item.last_name, item.avatar)
		})
	}
})
