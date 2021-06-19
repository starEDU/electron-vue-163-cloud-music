<template>
    <div class="player">

        <div class="bar1" :class="disableCls()">
            <StepBackwardOutlined />

            <CaretRightOutlined />
            <!--<PauseOutlined />-->

            <StepForwardOutlined />
        </div>

        <div class="bar2">
            <time class="time">{{secondFormat(currentTime)}}</time>

            <a-slider
                v-model:value="audioSlider"
                class="audioSlider"
            />

            <time class="time">{{secondFormat(duration)}}</time>
        </div>

        <div class="bar3">
            <AudioMutedOutlined />
            <AudioOutlined />

            <a-slider
                v-model:value="volumeSlider"
                class="audioSlider"
            />
        </div>

        <div class="bar4">
            <a-tooltip title="动感光波">
                <RedditOutlined />

            </a-tooltip>

            <a-tooltip title="随机播放">
                <span class="modeIcon" @click="changeMode">
                    <i class="iconfont icon-suijibofang"></i>
                </span>
            </a-tooltip>

            <a-tooltip title="显示歌词">
                <span>词</span>
            </a-tooltip>

            <a-tooltip title="播放列表">
                <OrderedListOutlined />
            </a-tooltip>

        </div>

    </div>
</template>

<script>
import {ref,reactive,toRefs,} from "vue"

import formatMixin from "@/mixins/formatMixin"

export default {
    name: "BottomPlayBar",
    mixins: [formatMixin],
    setup(){
        const isSongReady = ref(false)
        const songInfo = reactive({
            currentTime: 0,
            duration: 125,
            audioSlider: 0,
            volumeSlider: 50,
        })

        const disableCls = () => {
            return isSongReady.value ? "" : "disable";
        }

        const changeMode = ()=>{

        }

        return {
            disableCls,
            ...toRefs(songInfo),
            changeMode,
        }
    }
}
</script>


<style lang="less">
.play-history {
    /deep/ .ant-drawer-header {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        background: #f3f5f7;
        z-index: 10;
    }
    .play-history-title {
        display: flex;
        justify-content: center;
        /deep/ .ant-radio-button-wrapper {
            height: 28px;
            line-height: 26px;
        }
    }
    .ant-drawer-body {
        padding: 0;
    }
}
</style>


<style lang="less" scoped>
@primary-color: #c62f2f;

.audioSlider{
    flex: 1;
    margin-left: 20px;

    /deep/ .ant-slider-track{
        background-color: @primary-color;
    }
    /deep/ .ant-slider-step{
        background-color: rgba(123, 123, 123, 0.5);
    }
    /deep/ .ant-slider:hover .ant-slider-track{
        background-color: #c62f2f;
    }
}

.modeIcon{
    cursor: pointer;
    i {
        font-size: 20px;
    }
}

.player {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    .resize {
        position: absolute;
        right: 2px;
        bottom: 2px;
        display: inline-block;
        width: 12px;
        height: 12px;
        opacity: 0.75;
        background: linear-gradient(
            to left top,
            #333,
            #333 1px,
            transparent 1px,
            transparent 3px,
            #333 3px,
            #333 4px,
            transparent 4px,
            transparent 6px,
            #333 6px,
            #333 7px,
            transparent 7px
        );
    }
    .bar1 {
        flex: 0 0 200px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        font-size: 26px;
        color: @primary-color;

        &.disable {
            .play-icon,
            .step-icon {
                opacity: 0.5;
            }
        }
        .play-icon {
            color: @primary-color;
            cursor: pointer;
        }
        .anticon {
            padding: 7px;
            border-radius: 50%;
            background: @primary-color;
            color: #fff;
            font-size: 17px;
            cursor: pointer;

            &:nth-child(even){
                font-size: 24px;
            }
        }
    }
    .bar2 {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
            width: 80px;
            flex: 0 0 80px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: center;
        }
    }
    .bar3,
    .bar4 {
        padding: 0 10px;
        .anticon {
            font-size: 18px;
            cursor: pointer;
            &.lrc {
                &.active {
                    color: @primary-color;
                }
            }
        }
    }
    .bar3 {
        display: flex;
        align-items: center;
        flex: 0 0 150px;
    }
    .bar4 {
        flex: 0 0 180px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .count-wrapper {
            line-height: 1;
            cursor: pointer;
            .count {
                font-size: 11px;
            }
        }
    }
}

.bar-volume {
    margin-left: 4px;
    /deep/ .progress {
        background: @primary-color;
    }
    /deep/ .progress-btn-wrapper {
        display: none;
    }
    &:hover {
        /deep/ .progress-btn-wrapper {
            display: block;
        }
    }
}
</style>
