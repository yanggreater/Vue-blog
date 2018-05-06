<template>
	<div id="keyword">
		<h2>关键词</h2>
		
		<div class="div1">
			<a id="p1">CSS3样式</a>
		</div>
		<div class="div2">
			<a id="p2">BootStrap库</a>
		</div>
		<div class="div3">
			<a id="p3">Vue.js框架</a>
		</div>
		<div class="div4">
			<a id="p4">Github应用</a>
		</div>
		<div class="div5">
			<a id="p5">源码下载</a>
		</div>
		<div class="div6">
			<a id="p6">视频资料</a>
		</div>
		
	</div>
</template>

<style scoped>
	#keyword{
		color: #b1adaa;
		width: 290px;
		height: 280px;
		margin-left: 30px;
		margin-top: 15px;
		padding: 10px 20px;
	}
	#keyword h2{
		font-size: 20px;
		padding-bottom: 5px;
		border-bottom: 1px solid gray;
		margin-bottom: 10px;
	}
	#keyword div{
		width: 120px;
		height: 70px;
		background-color: red;
		float: left;
		margin-right: 5px;
		margin-top: 5px;
	}
	#keyword  a{
		display: block;
		text-align: center;
		line-height: 70px;
		color: #ffffff;
		font-size: 12px;
		transition: all .7s ease;
	}
	#keyword  a:hover{
		font-size: 17px;
		transform: rotate(360deg);
	}
	#keyword .div1{
		background-color: #ff9900;
		
	}
	#keyword .div2{
		background-color: #2d8cf0;
		
	}
	#keyword .div3{
		background-color: #19be6b;
		
	}
	#keyword .div4{
		background-color: #ed3f14;
		
	}
	#keyword .div5{
		background-color: #a98659;
		
	}
	#keyword .div6{
		background-color: #e7769e;
		
	}

</style>

<script>
	export default{
		
	}
</script>