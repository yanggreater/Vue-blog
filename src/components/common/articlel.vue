<template>
    <div class="article-item" @mouseover='change()' @mouseout='back()'>

		<div class ="left-image">
			<img src="../../assets/3.jpg" id="img" ref="img">
		</div>

		<div class="right">
			<h1><a href="#">{{value.title}}</a></h1>
			
			<p>文章内容：{{value.content}}</p>
						
		</div>

		<br>

		<div class="right-down">
				<span><Icon type="android-person" size='18'></Icon> {{value.author}}</span>
				<span><Icon type="android-time" size='18'></Icon> {{value.time}}</span>
				<span  @click='add'><Icon type="android-favorite-outline" size='18' color='#f88585' ></Icon> {{value.number}}</span>
			</div>
		
	</div>
</template>

<script>
export default {
    props:{
        value:{
            type:Object
        }
    },
    methods:{
			add:function(){
                this.value.number++;
                this.$emit('input',this.value);
			},
			change:function(){
				var oimg=this.$refs.img;
				oimg.style.transform='scale('+1.3+')';
			},
			back:function(){
				var oimg=this.$refs.img;
				oimg.style.transform='scale('+1+')';
			}
		}
}
</script>

<style scoped>
    .article-item{
		
		height: 230px;
		color: #b1adaa;
		padding: 15px;
		
		transition: box-shadow .5s ease;
		border-bottom: 1px solid #b1adaa;
	}

	.article-item:hover{
		 box-shadow: 2px 2px 30px 5px #888888;
	}
	.article-item a{
		color: #00a67c;
	}
	.article-item .left-image{
		float: left;
		overflow: hidden;
		width: 180px;
		height: 180px;
	}
	.article-item .left-image #img{
		transition: transform 0.6s
	}
	.article-item .right{
		float: right;
		font-size: 14px;
		width: 540px;
		height: 150px;
		overflow: hidden;
	}

	.article-item .right-down{
		float: right;
		margin-top: 20px;
	}
	.article-item .right-down span{
		font-size: 15px;
		margin-right: 15px;
	}
	.article-item .right-down span {
		cursor: pointer;
	}
</style>
