
<template>
    <div class="carousel" ref="carousel">
        <div class="whole">
            <div class="roll-img">
                <span class="last" @click="after" v-show="showIndex">&lt;</span>
                <!-- 图片容器 -->
                <ul id="ul">
                    <li v-on:click="change($event)" v-for="(item, index) in imgs" :class="classes[index]"><img src="http://p1.music.126.net/PkWxr2Sw2FVDSNRoi2aplQ==/109951166068840109.jpg" alt=""><div></div></li>
                </ul>
                <span class="next" @click="before" v-show="showIndex">&gt;</span>
            </div>
        </div>
        <div class="list">
            <!-- 指示灯 -->
            <span class="btn" v-for="(item, index) in classes" :key="index" :class="[item === 'center' ? 'active' : '']"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerThree',
    data: function() {
        return {
            showIndex : false, // 是否显示左右按钮
            imgs: ['1', '2', '3', '4', '5', '6'], // 图片库
            classes: ['left', 'center', 'right', 'after1', 'after2', 'after3']			,
            timer : null
        }
    },
    methods:{
        before() {
            let last = this.classes.pop();
            this.classes.unshift(last);
        },
        after() {
            let first = this.classes.shift();
            this.classes.push(first);
        },
        change(e) {
            if(e.target.parentNode.classList.contains('left')) {
                this.after();
            } else if (e.target.parentNode.classList.contains('right')) {
                this.before()
            } else {
                return false;
            }
        }
    },
    mounted() {
        var that = this;
        this.$refs.carousel.addEventListener('mouseover', function() {
            that.showIndex = true;
            clearInterval(that.timer)
        })
        this.$refs.carousel.addEventListener('mouseout', function() {
            that.showIndex = false;
            that.timer = setInterval(() => {
                that.before();
            }, 2000)
        })
        this.timer = setInterval(() => {
            this.before();
        }, 2000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style lang="less" scoped>
.carousel {
    width: 100%;
    height: 300px;
    .whole{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        .roll-img{
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            ul li{
                position: absolute;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
    }

}
img{
    width: 100%;
    height: 100%;
}

.left{
    left:-400px;
    transform: scale(0.8);
    z-index: 4;
    background: rgb(0,0,0);
    transition: all 0.5s ease;
}
.center{
    z-index: 6;
    left: 0;
    top: 0;
    bottom: 10%;
    transition: all 0.5s ease;
}
.right{
    left:400px;
    transform: scale(0.8);
    z-index: 4;
    background: rgb(0,0,0);
    transition: all 0.5s ease;
}
.left div,.right div{
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
}
.after1,.after2,.after3{
    z-index: 3;
    left: 0;
    top: 0;
    visibility: hidden;
    transform: scale(0);
}
.last,.next{
    position: absolute;
    z-index: 10;
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255,255,255,0.7);
    border-radius: 50px;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    top:45%;
    color: rgba(255,255,255,0.6);
}
.list{
    width: 30%;
    height: 5px;
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
}
.btn{
    transition: all 0.3s ease;
    flex: 1;
    background: rgba(0,0,0,0.2);
}
.btn:not(:first-child){
    margin-left: 20px;
}
.last{
    left:-200px;
}
.next{
    right: -200px;
}
// 指示灯
.btn.active {
    background: #f00;
}
</style>
