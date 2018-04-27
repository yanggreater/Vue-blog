<template>
	<div id="nav">
		
		    <ul>
          <router-link tag='li'to='/home'>
              
              <a class='nav active'><Icon type="ios-home"></Icon>首页</a>
          </router-link>

          <router-link tag='li' class="nav" to='/shareIT'>
               
                <a class='nav' ><Icon type="social-buffer"></Icon>技术分享</a>         
          </router-link>

          <router-link tag='li' class="nav" to='/note'>
            
            <a class='nav' ><Icon type="android-create"></Icon>Daily笔记</a>
          </router-link>
          <router-link tag='li'  class="nav" to='/books'>
              
              <a class='nav' ><Icon type="ios-book"></Icon>书库</a>
          </router-link>

          

          <router-link tag='li' class='nav' to='/aboutme'>
              
              <a class='nav' ><Icon type="android-person"></Icon>关于我</a>
          </router-link>
             
            <router-link tag='li' class="nav"  to='/words'>

                
                <a class='nav' ><Icon type="compose"></Icon>给我留言</a>

            </router-link>
            <li class="right">
                <Input v-model="formItem.value" placeholder="站内搜索 " icon='android-search' @keydown.enter.native="search()"></Input>
            </li>
            
      </ul>
	</div>
</template>

<style scoped>
	#nav ul{
    width: 1100px;
    height: 40px;
    margin-bottom: 10px;
  }
	#nav ul li{
		float: left;
    
    line-height: 40px;
    font-size: 14px;
    list-style: none;
    
	}
  #nav ul li .active{
 
    background: #e15782;
    border-top-left-radius: 45px;
    border-bottom-right-radius: 45px;
    
  }
  #nav ul li .nav{
     color: #ffffff;
    display: inline-block;
    height: 40px;
    padding: 0 20px;
      transition: all .3s ease;
  }
  #nav ul li .nav:hover{
    
    background: #e15782;
    border-top-left-radius: 45px;
    border-bottom-right-radius: 45px;
  }
  #nav ul .right{
      float: right;
      padding: 0 10px;
  }
  #nav ul li .ivu-icon{
      margin-right: 5px;
  }
   #nav ul li .ivu-input-wrapper{
      width: 100px;
      transition: width .7s ease;
  }
	#nav ul li .ivu-input-wrapper:hover{
		width: 140px;
	}
</style>

<script>
	export default{
		data(){
			return {
				formItem:{
					value:''
				}
			}
		},
		methods:{
       		search:function(){
       			alert('w我是你爸爸');
       		},
       },
       mounted(){
       		var oDiv = document.getElementById('nav');
       		var aA = oDiv.getElementsByTagName('a');
       		var now=0;
       		for (var i = 0; i < aA.length; i++) {
       			aA[i].index=i;
       			aA[i].onclick=function(){
       				now=this.index;
       				for(var j=0;j<aA.length;j++){
						aA[j].className='nav';
					}
					aA[now].className='nav active';

       			}
       		}
       	}
	}
</script>