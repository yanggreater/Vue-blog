<template>
	<div id="book">
		<p class="top">
			<span>您现在的位置 :</span>
			<span><a href="">首页</a> /</span>
			<span>书籍</span>
		</p>
		<div class="book1">
			<div class="one"></div>
			<div class="two">
				<p>JS高程设计</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
	}
</script>

<style scoped>
	#book .top{
		border-bottom: 3px solid gray;
		padding-bottom: 10px;
		font-size: 15px;
		color: #b1adaa;
	}
	#book .book1{
		width: 260px;
		height: 300px;
		transform-style: preserve-3d;
		position: relative;
	}
	#book .book1 .one{
		width: 100%;
		height: 100%;
		background:blue;
		overflow: hidden;
		transform: rotateY(0deg);
		transition: all 1s linear;
		transform-style: preserve-3d;
		position: absolute;
		left: 0;
		top: 0;
	}
	#book .book1 .two{
		width: 100%;
		height: 100%;
		background: ;
		transform: rotateY(90deg);
		transition: all 1s linear;
		transform-style: preserve-3d;
		position: absolute;
		left: 0;
		top: 0;
	}
	#book:hover .book1 .one{
		transform: rotateY(90deg);
	}
	#book:hover .book1 .two{
		transform: rotateY(0deg);
	}
</style>