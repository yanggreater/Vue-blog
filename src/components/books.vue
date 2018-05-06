<template>
	<div>
		<Row>
			<Col span='17'>
				<book1></book1>
			</Col>
		</Row>
		<Row>
			<Col span='7'>
				
			</Col>
		</Row>
	</div>
</template>

<script>
	import book1 from './Mybooks/book1.vue'
	export default{

		components:{
			'book1':book1,
		}
	}
</script>