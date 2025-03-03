const { ipcRenderer } = require('electron')



document.addEventListener('DOMContentLoaded', function () {
	const list = document.querySelector('.users-list')
	async () => {
		const data = await ipcRenderer.invoke('main', data)
		console.log(data)
	}
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
