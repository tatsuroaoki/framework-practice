Vue.component('headline',{
	props: ['title'],
	template: '<h1 id="headerApp"><img src="alligator-logo.png" alt="Alligator Logo">{{title}}</h1>'
})

document.addEventListener("DOMContentLoaded", function() {
	
	let headerApp = new Vue({
		el: '#headerApp'
	})
	
})