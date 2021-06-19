<template>
    <div class="banner">
        <div class="swiper-container" :class="swiperid">
            <div class="swiper-wrapper">
                <slot name="swiper-con"></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div :class="{'swiper-pagination':paginationshow}" 
            :style="{'text-align':paginationdesition}"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'
export default {
    props:{
        swiperid:{
            type:String,
            default:''
        },
        paginationshow:{
            type:Boolean,
            default:true
        },
        paginationdesition:{
            type:String,
            default:'center'
        },
        paginationType:{
            type:String,
            default:'bullets'
        },
        delay:{
            type:Number,
            default:2500
        },
        loop:{
            type:Boolean,
            default:true
        },
        direction:{
            type:String,
            default:'horizontal'
        },
        effect:{
            type:String,
            default:'slide'
        }
    },
    mounted:function() {
    //    var swiperid = this.swiperid;
    //    var direction = this.direction;
    //    var loop = this.loop;
    //    var delay = this.delay;
    //    var paginationType = this.paginationType;
    //    var effect = this.effect;
    //    console.log(this)
       const that = this;
      // console.log(that)
       setTimeout(() => { // 解决刷新后滚动到最后一个停止的问题
           new Swiper('.'+that.swiperid,{
               direction: that.direction,
               loop: that.loop,
               autoplay:{
                   delay: that.delay,
                   stopOnLastSlide: false,
                   disableOnInteraction: false
               },
               pagination:{
                   el:'.swiper-pagination',
                   type: that.paginationType
               },
               effect: that.effect,
               observer:true, // 解决刷新后分页器消失的问题
               observeParents:true,
           })
       },200);
        
    }
}
</script>
<style>
.banner{
    width:100%;
    height: 260px;
    overflow: hidden;
}
.banner .swiper-container img{
    width:100%;
    height: 260px;
}
.swiper-pagination-bullet-active {
	background: #fff;
}
</style>