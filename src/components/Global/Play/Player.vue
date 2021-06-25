<template>
    <div class="Player" :style="{width,height}">
        <FullscreenExitOutlined
            style="color: #000;cursor: pointer;"
            spin
            title="退出全屏"
            @click="handleFullscreenExit"
        />
        <h3>布局自行构建吧</h3>
    </div>
</template>

<script>
import {ref,reactive,toRefs,onMounted,} from "vue"

import {getCurrentWindow,} from "@electron/remote"


export default {
    name: "Player",
    props: {
        width: {
            type: String,
            default: '0px',
        },
        height: {
            type: String,
            default: '0px',
        }
    },
    setup(props,context){
        const {emit} = context

        // const size = reactive({
        //     width: 0,
        //     height: 0,
        // })

        onMounted(()=>{
            /*
            setTimeout(()=>{
                size.width = '100vw'
                size.height = '100vh'
            },3000)

            setTimeout(()=>{
                size.width = 0
                size.height = 0
            },6000)
            */
        })

        const handleFullscreenExit = ()=>{
            emit('isFullScreen',{width:'0px',height:'0px'})
        }

        function makeDraggableFallback(el) {
            // 方案一
            // el.style['-webkit-app-region'] = 'drag';

            // 方案二
            let dragging = false;
            let mouseX = 0;
            let mouseY = 0;
            el.addEventListener('mousedown', (e) => {
                dragging = true;
                const { pageX, pageY } = e;
                mouseX = pageX;
                mouseY = pageY;
            });
            window.addEventListener('mouseup', () => {
                dragging = false;
            });
            window.addEventListener('mousemove', (e) => {
                if (dragging) {
                    const { pageX, pageY } = e;
                    const win = getCurrentWindow();
                    const pos = win.getPosition();
                    pos[0] = pos[0] + pageX - mouseX;
                    pos[1] = pos[1] + pageY - mouseY;
                    win.setPosition(pos[0], pos[1], true);
                }
            });
        }

        return {
            handleFullscreenExit,
            makeDraggableFallback,
        }
    }
}
</script>

<style lang="less" scoped>
.Player{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    -webkit-app-region: no-drag;


    width: 0;
    height: 0;
    overflow: hidden;

    background-color: hotpink;
    transition: all 0.2s ease-out;

    font-size: 30px;


    //-webkit-filter: blur(50px);
    //background-color: hotpink;
    background-image: -webkit-linear-gradient(
        135deg,
        rgb(142, 132, 133) 0%,
        rgb(230, 132, 110) 100%
    );
    //background-image: linear-gradient(to top, #000, #ddd);
    //-webkit-mask-image: linear-gradient(to bottom, #fff 0, #fff 15%, #fff 25%, rgba(255, 255, 255, 0.25) 75%, rgba(255, 255, 255, 0.1) 90%, rgba(255, 255, 255, 0) 100%);


    //background-image: url("/images/404.gif"); // public目录图片
    //background-image: url("~@/assets/images/loginBg.jpg");  // src/assets目录下的图片
    //background-repeat: no-repeat;
    //background-position: center;

}
</style>
