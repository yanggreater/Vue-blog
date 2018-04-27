//路由配置
import Hello from './components/HelloWorld.vue'
import aboutMe from './components/aboutMe.vue'
import words from './components/words.vue'
import shareIT from './components/shareIT.vue'
import note from './components/note.vue'
import books from './components/books.vue'

export default{
	routes:[
		{path:'/home',component:Hello},
		{path:'/aboutme',component:aboutMe},
		{path:'/words',component:words},
		{path:'/shareIT',component:shareIT},
		{path:'/note',component:note},
		{path:'/books',component:books},
		{path:'/',redirect:'/home'}

	]
}