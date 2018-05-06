<template>
	<div id="app">
		
      <down></down>
	</div>
		
</template>

<script>
	
	import Down from './Down.vue'
	export default{
		components:{
			'down':Down
		}
	}
</script>

<style scoped>
	#app{
		background: url(./assets/qwe.png);
		background-attachment: fixed;
	}
</style>