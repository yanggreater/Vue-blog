<template>
    <div id="content">
        <Row>
            <Col span='17'>
                <Carousel autoplay  loop>
                    
                    <CarouselItem>
                        <div class="demo-carousel" style="background: blue;height: 300px;">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel" style="background: blue;height: 300px;">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel" style="background: blue;height: 300px;">3</div>
                    </CarouselItem>
                </Carousel>
                <h2 style="color: #b1adaa;margin-top: 20px;border-left: 5px solid #b1adaa;padding-left: 5px;">最新文章</h2>
                <Article v-model="article1"></Article>
                <Article v-model="article2"></Article>
                <Article v-model="article3"></Article>
                <Article v-model="article4"></Article>


            </Col>

            <Col span='7'>
                <introduce></introduce>
                <mymessage></mymessage>
                <keyword></keyword>
                <search></search>
                <times></times>
                <friendweb></friendweb>
            </Col>
        </Row>
      </div>
    
</template>

  <script>
    import Introduce from './introduce.vue'
    import Article from './common/articlel.vue'
    import Keyword from './keyword.vue'
    import Time from './times.vue'
    import MyMessage from './myMessage.vue'
    import Search from './search.vue'
    import Friendweb from './friendweb.vue'
    
    export default{
        components:{
            'introduce':Introduce,
            'keyword':Keyword,
            'times':Time,
            Article,
            'mymessage':MyMessage,
            'search':Search,
            'friendweb':Friendweb,
            
        },
        data () {
            return{
                article1:{
                    title:'vue.js的实战应用',
                    content:'Vue (读音 /vjuː/，类似于 view 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动',
                    author:'杨景校',
                    time:'2008',
                    number:'0',
                    img:'../../assets/3.jpg'
                },
                article2:{
                    title:'vue.js的实战应用',
                    content:'Vue (读音 /vjuː/，类似于 view 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动',
                    author:'杨景校',
                    time:'2008',
                    number:'0',
                    img:'../../assets/zbg.jpg'
                },
                article3:{
                    title:'vue.js的实战应用',
                    content:'Vue (读音 /vjuː/，类似于 view 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动',
                    author:'杨景校',
                    time:'2008',
                    number:'0',
                    img:'../../assets/2.jpg'
                },
                article4:{
                    title:'vue.js的实战应用',
                    content:'Vue (读音 /vjuː/，类似于 view 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动',
                    author:'杨景校',
                    time:'2008',
                    number:'0',
                    img:'../../assets/4.jpg'
                },
            }
        }
    }
  </script>
<style scoped>
  
 </style>