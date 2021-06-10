<template>

    <Suspense>
        <template #default>
            <Banner
                ref="slider"
                :autoPlay="false"
                :data-w="width"
                :height="width * 0.7 * 0.372"
                :list="banners"
                @sliderClick="onSliderClick"
            />
        </template>

        <template #fallback>
            <Loading />
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <a-card title="推荐MV" >
                <template #extra><a href="#">更多 <ArrowRightOutlined /></a></template>
                <MV/>
            </a-card>
        </template>

        <template #fallback>
            <Loading />
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <a-card title="推荐歌单" >
                <template #extra><a href="#">更多 <ArrowRightOutlined /></a></template>
                <SongSheet />
            </a-card>
        </template>

        <template #fallback>
            <Loading />
        </template>
    </Suspense>

    <Suspense>
        <template #default>
            <a-card title="主播电台" >
                <template #extra><a href="#">更多 <ArrowRightOutlined /></a></template>
                <Dj />
            </a-card>
        </template>

        <template #fallback>
            <Loading />
        </template>
    </Suspense>


</template>

<script>
import {ref,reactive,onMounted,defineAsyncComponent,} from "vue"

import {shell} from "@electron/remote"

const Loading = defineAsyncComponent(()=>import('@/components/Global/Loading'))

const Banner = defineAsyncComponent(()=>import('@/components/Global/Banner'))
const MV = defineAsyncComponent(()=>import('@/components/BasicContent/Personalized/MV'))
const Dj = defineAsyncComponent(()=>import('@/components/BasicContent/Personalized/Dj'))
const SongSheet =defineAsyncComponent(()=>import('@/components/BasicContent/Personalized/SongSheet'))


export default {
    name: "PersonalizedRecommendation",
    components: {Dj, SongSheet, Loading, Banner, MV},
    setup(){
        const slider = ref(null)
        const width = ref(1000)
        const banners = reactive([
            {
                imageUrl: "http://p1.music.126.net/ENzeLg7nSt-tf7QNxmEz_Q==/109951166069402044.jpg",
                targetId: 0,
                adid: null,
                targetType: 3000,
                titleColor: "blue",
                typeTitle: "数字单曲",
                url: "https://music.163.com/store/newalbum/detail?id=128570836",
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "0",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2923993.149929114.null"
            },
            {
                imageUrl: "http://p1.music.126.net/GrOyzwGj5PGswNY1V4bGbQ==/109951166069191319.jpg",
                targetId: 1850504171,
                adid: null,
                targetType: 1,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "1850504171",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2916982.-1380632966.null"
            },
            {
                imageUrl: "http://p1.music.126.net/9ic5uYn7_uQF4OWZ4JFcCQ==/109951166069201254.jpg",
                targetId: 0,
                adid: null,
                targetType: 3000,
                titleColor: "blue",
                typeTitle: "活动",
                url: "https://music.163.com/m/at/60bedbe536fb246813d8d95f",
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "0",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2929984.149958660.null"
            },
            {
                imageUrl: "http://p1.music.126.net/0icY-y6NJkmnTlxVrEYXyg==/109951166069249642.jpg",
                targetId: 0,
                adid: null,
                targetType: 3000,
                titleColor: "blue",
                typeTitle: "数字专辑",
                url: "https://music.163.com/store/newalbum/detail?id=127551538",
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "0",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2924988.150055839.null"
            },
            {
                imageUrl: "http://p1.music.126.net/1E90qbmFf8vAB_1k-EAZ8g==/109951166068876699.jpg",
                targetId: 128566028,
                adid: null,
                targetType: 10,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "128566028",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2940984.-1380633056.null"
            },
            {
                imageUrl: "http://p1.music.126.net/8SynND5CWO2I0t9s41EOiQ==/109951166069261228.jpg",
                targetId: 1841230206,
                adid: null,
                targetType: 1,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "1841230206",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2916983.149871424.null"
            },
            {
                imageUrl: "http://p1.music.126.net/Ymhhhj14FTRPq0b8BZxzgA==/109951166069272882.jpg",
                targetId: 1850795807,
                adid: null,
                targetType: 1,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "1850795807",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2941996.149872197.null"
            },
            {
                imageUrl: "http://p1.music.126.net/PkWxr2Sw2FVDSNRoi2aplQ==/109951166068840109.jpg",
                targetId: 1849980436,
                adid: null,
                targetType: 1,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "1849980436",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2937977.149869468.null"
            },
            {
                imageUrl: "http://p1.music.126.net/hJStIOmsh_O7tRvwdtejSQ==/109951166069202854.jpg",
                targetId: 1850210271,
                adid: null,
                targetType: 1,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "1850210271",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2936971.149843455.null"
            },
            {
                imageUrl: "http://p1.music.126.net/xWPreYBQkALwjIx0q_BqlA==/109951166069264861.jpg",
                targetId: 128371995,
                adid: null,
                targetType: 10,
                titleColor: "red",
                typeTitle: "独家",
                url: null,
                exclusive: false,
                monitorImpress: null,
                monitorClick: null,
                monitorType: null,
                monitorImpressList: null,
                monitorClickList: null,
                monitorBlackList: null,
                extMonitor: null,
                extMonitorInfo: null,
                adSource: null,
                adLocation: null,
                adDispatchJson: null,
                encodeId: "128371995",
                program: null,
                event: null,
                video: null,
                song: null,
                scm: "1.music-homepage.homepage_banner_force.banner.2938989.149846401.null"
            }
        ])

        const onSliderClick = (i, item) => {
            if (item.url) {
                shell.openExternal(item.url)
            }
        }

        onMounted(()=>{

        })

        return {
            slider,
            width,
            banners,
            onSliderClick,
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .ant-card-head{
    min-height: 24px !important;
}
/deep/ .ant-card-body{
    padding: 0 20px !important;
}

/deep/ .ant-card-extra a{
    color: rgba(0, 0, 0, 0.85) !important;

    &:hover{
        color: rgba(0, 0, 0, 0.95) !important;

    }
}
</style>
