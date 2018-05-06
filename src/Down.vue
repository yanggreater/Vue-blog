<template>
	<div id="container">
			
        <Nav></Nav>
        <router-view></router-view>
        <foots></foots>

	</div>
</template>

<style scoped>
	
	#container{
		width: 1100px;
		margin: 0 auto;
		position: relative;
		padding-top: 10px;
	}
	
</style>

<script>
  import nav from './components/nav.vue'
	
	import Foot from './components/foot.vue'
	export default {
      
       components:{
       		
       		'foots':Foot,
          'Nav':nav
       },

       
    }

</script>