<template>
	<div id="right">
		<img src="../assets/bg.jpg">
		<p id="frist">
			<Icon type="location" size='15'></Icon>  <span style="margin-right: 10px;font-size: 13px;">武汉</span>
			<Icon type="social-github" size='15'></Icon>  <a style="font-size: 15px;">yanggreater</a>
			<a>QQ</a>
		</p>
		<p>
			<span>此博客是博主通过使用vue.js框架，结合iview强大的组件库和JavaScript实现的一个简单的个人博客。旨在巩固所学习基础知识。望在Web道路走的更加长远，广大网友若发现网站有问题，望及时提出，不胜感激</span>
		</p>
		<p>
			<Button type='primary' long>有事QQ联系</Button>
		</p>
	</div>
</template>

<style scoped>
	#right{
		color: #b1adaa;
		width: 290px;
		height: 330px;
		margin-left: 30px;
		padding: 20px;
		box-shadow: 3px 3px 3px #888888;
	}
	#right img {
		width: 80px;
		height: 80px;
		border-radius: 100%;
		margin: 0px auto;
		display: block;
		transition: all .7s;
	}
	#right img:hover{
		transform: rotate(360deg);
	}
	#right p{
		margin-top: 15px;

	}
	#right #frist{
		text-align: center;
	}
	
	#right #frist a{
		font-size: 15px;
		margin-right: 10px;
	}
</style>