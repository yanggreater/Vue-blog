<template>
	<div id="article3" @mouseover='change()' @mouseout='back()'>

		<div class ="left-image">
			<img src="../assets/2.jpg" id="img3">
		</div>

		<div class="right">
			<h1><a href="#">{{title}}</a></h1>
			
			<p>文章内容：{{content}}</p>
						
		</div>

		<br>

		<div class="right-down">
				<span><Icon type="android-person" size='18'></Icon> {{author}}</span>
				<span><Icon type="android-time" size='18'></Icon> {{time}}</span>
				<span><Icon type="android-favorite-outline" size='18' color='#f88585' @click.native='add'></Icon> {{number}}</span>
			</div>
		
	</div>

</template>

<style scoped>
	#article3{
		color: #b1adaa;
		height: 230px;
		padding: 15px;
		margin-top: 15px;
		transition: box-shadow .5s ease;
		border-bottom: 1px solid #b1adaa;

	}

	#article3:hover{
		 box-shadow: 2px 2px 30px 5px #888888;
	}
	#article3 a{
		color: #f66e00;
	}
	#article3 .left-image{
		float: left;
		overflow: hidden;
		width: 180px;
		height: 180px;
	}
	#article3 .left-image #img3{
		transition: transform 0.6s
	}
	#article3 .right{
		float: right;
		font-size: 14px;
		width: 540px;
		height: 150px;
		overflow: hidden;
	}

	#article3 .right-down{
		float: right;
		margin-top: 20px;
	}
	#article3 .right-down span{
		font-size: 15px;
		margin-right: 15px;
	}
	#article3 .right-down span {
		cursor: pointer;
	}
</style>

<script>
	export default{
		data(){
			return{
				title:'vue.js的实战应用',
				content:'Vue (读音 /vjuː/，类似于 view 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动',
				author:'杨景校',
				time:'2008',
				number:'0'
			}
		},
		methods:{
			add:function(){
				this.number++;
			},
			change:function(){
				var oimg=document.getElementById('img3');
				oimg.style.transform='scale('+1.3+')';
			},
			back:function(){
				var oimg=document.getElementById('img3');
				oimg.style.transform='scale('+1+')';
			}
		}
	}

</script>