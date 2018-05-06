<template>
	<div id="search">
		<h2>搜索热点</h2>
		<ul>
			<li><span class="one">1</span><a>有关bootstrap轮播问题</a></li>
			<li><span class="two">2</span><a>webpack的配置问题</a></li>
			<li><span class="three">3</span><a>css3的动画总结</a></li>
			<li><span>4</span><a>武汉对大学生的优惠政策</a></li>
			<li><span>5</span><a>选好封面图，让你的文章脱颖而出</a></li>
			<li><span>6</span><a>选好封面图，让你的文章脱颖而出</a></li>
			<li><span>7</span><a>选好封面图，让你的文章脱颖而出</a></li>
		</ul>
	</div>
</template>

<style scoped>
	#search{
		width: 290px;
		height: 250px;
		margin-left: 30px;
		margin-top: 15px;
		padding: 10px 20px;
		color: #b1adaa;
	}
	#search h2{
		font-size: 20px;
		padding-bottom: 5px;
		border-bottom: 1px solid gray;
		margin-bottom: 15px;
	}
	#search ul li{
		
		margin-top: 10px;
		font-size: 13px;
		overflow: hidden;
	}
	#search ul li a{
		color: #b1adaa;
		transition: all .7s ease;
	}
	#search ul li a:hover{
		color: #ff9900;
		margin-left: 15px;
	}
	#search ul li span{
		padding:6px;
		background: #6fabb7;
		color: #ffffff;
		margin-right: 5px;
	}
	#search ul li .one{
		background: red;
	}
	#search ul li .two{
		background: orange;
	}
	#search ul li .three{
		background: #ada30a;
	}
</style>