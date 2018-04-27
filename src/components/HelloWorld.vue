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
                <article1></article1>
                <article2></article2>

                <article3></article3>
                <article4></article4>
                <article5></article5>


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
    import Article1 from './article1.vue'
    import Article2 from './article2.vue'
    import Article3 from './article3.vue'
    import Article4 from './article4.vue'
    import Article5 from './article5.vue'
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
            'article1':Article1,
            'article2':Article2,
            'article3':Article3,
            'article4':Article4,
            'article5':Article5,
            'mymessage':MyMessage,
            'search':Search,
            'friendweb':Friendweb,
            
        }
    }
  </script>
<style scoped>
  
 </style>