<template>
	<div id="aboutMe">
		<Row>
			<Col span='17'>
				<div>

					<Breadcrumb>
						<BreadcrumbItem>您现在的位置:</BreadcrumbItem>
				        <BreadcrumbItem to="/">Home</BreadcrumbItem>
				        
				        <BreadcrumbItem>关于我</BreadcrumbItem>
				    </Breadcrumb>
				    <p >人一生的三分之一都活在了学习当中，但是我们要做的是，我们要找到我们的学习乐趣所在，兴趣是最好的老师，这样你才会在见到问题，迎难而上，不屈不挠，虽然在有时会感到无助，但是却从没放弃过</p><br>
				    <p>此博客是博主通过使用vue.js框架，结合iview强大的组件库和JavaScript实现的一个简单的个人博客。旨在巩固所学习基础知识。望在Web道路走的更加长远，广大网友若发现网站有问题，望及时提出，不胜感激</p><br>
				    <p>人生就是一个得与失的过程，而我却是一个幸运者，得到的永远比失去的多。生活的压力迫使我放弃了轻松的前台接待，放弃了体面的编辑，换来虽有些蓬头垢面的工作，但是我仍然很享受那些熬得只剩下黑眼圈的日子，因为我在学习使用Photoshop、Flash、Dreamweaver、ASP、PHP、JSP...中激发了兴趣，然后越走越远....喜欢一句话“冥冥中该来则来，无处可逃”。当您驻足停留过，我们已是朋友，前端的路上我再也不用一个人独自行走。</p>


				</div>
				<div id="progress">
					<p style="text-align: center;font-size: 30px;color: orange;">我的技术树</p>
					<span style="font-size: 16px;color:#b1adaa; ">JS/CSS3/HTML5</span>
					<Progress :percent="25" stroke-width='20' hide-info></Progress>
				    <Progress :percent="45" status="active" stroke-width='20' hide-info></Progress>
				    <Progress :percent="65" status="wrong" stroke-width='20' hide-info></Progress>
				    <Progress :percent="100" stroke-width='20' hide-info></Progress>
				</div>


			</Col>
			<Col span='7'>
				<introduce></introduce>
				<myMessage></myMessage>
			</Col>
		</Row>
	</div>
</template>

<script>
	import introduce from './introduce.vue'
	import myMessage from './myMessage.vue'
	export default{
		data(){
			return{
				percent:''
			}
		},
		components:{
			'introduce':introduce,
			'myMessage':myMessage
		}
	}
</script>

<style scoped>
	#aboutMe .ivu-row .ivu-col-span-17 .ivu-breadcrumb{
		margin: 10px 0;
		padding-bottom: 5px;
		border-bottom: 3px solid gray;
	}
	#aboutMe .ivu-row .ivu-col-span-17 .ivu-breadcrumb span{
		color: #b1adaa;
		font-size: 15px;
	}
	#aboutMe .ivu-row .ivu-col-span-17 .ivu-breadcrumb span .ivu-breadcrumb-item-link{
		color: #b1adaa;
		font-size: 15px;
	}
	#aboutMe .ivu-row .ivu-col-span-17 div p{
		font-size: 16px;
		 color: #b1adaa;
		 line-height: 30px;
	}
	#aboutMe .ivu-row .ivu-col-span-17 #progress{
		width: 600px;
		height: 300px;
		margin: 0 auto;
	}
	#aboutMe .ivu-row .ivu-col-span-17 #progress .ivu-progress{
		margin-top: 20px;
	}
</style>