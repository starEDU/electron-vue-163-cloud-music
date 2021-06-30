<template>
    <!-- 未登录-->
    <div v-if="!isLogin" @click="showLoginWindow">
        <a-avatar :size="30">
            <template #icon><UserOutlined /></template>
        </a-avatar>
        未登录
    </div>
    <!-- 未登录-->

    <div v-else>
        <a-popover trigger="click" placement="bottom" arrow-point-at-center>
            <template #content>
                <a-spin :spinning="loading">
                    <div class="user-box">
                        <a-row
                            type="flex"
                            justify="space-between"
                            align="middle"
                        >
                            <a-col>
                                <a class="username">
                                    <img
                                        src="../../assets/images/coverall.png"
                                        v-lazy="`${userInfo.avatarUrl}?param=30y30?param=50y50`"
                                        class="user-avatar"
                                        alt=""
                                     />
                                    <span class="user-info-name">
                                        <!--userInfo.profile.nickname-->
                                        {{ userInfo.nickname }}
                                    </span>
                                    <img
                                        src="./../../assets/images/vip.jpg"
                                        v-if="false"
                                        class="img-vip"
                                        alt=""
                                    />
                                    <!--userInfo.profile.vipType-->
                                </a>
                            </a-col>
                            <a-col style="position: relative">
                                <a-button
                                    :disabled="true"
                                    class="sign-btn"
                                    @click="pcSign"
                                >
                                    <template #icon v-if="true">
                                        <SmileOutlined />
                                    </template>
                                    <template #icon>
                                        <CheckCircleOutlined />
                                    </template>
                                    "签到"
                                    <!-- userInfo.pcSign ? 'check' : 'meh'-->
                                </a-button>
                                <transition name="sign">
                                    <div class="sign-point" v-if="showPoint">signPoint</div>
                                </transition>
                            </a-col>
                        </a-row>

                        <a-row
                            class="list2"
                            type="flex"
                            justify="space-between"
                            align="middle"
                        >
                            <a-col :span="6">
                                <strong>
                                    {{userMsg.eventCount}}
                                </strong>
                                <div>动态</div>
                            </a-col>
                            <a-col :span="12">
                                <strong>
                                    {{userMsg.newFollows}}
                                </strong>
                                <div>关注</div>
                            </a-col>
                            <a-col :span="6">
                                <strong>
                                    {{userMsg.followeds}}
                                </strong>
                                <div>粉丝</div>
                            </a-col>
                        </a-row>
                    </div>
                </a-spin>
            </template>


            <div  @click="showUserInfo">
                <a-avatar
                    :size="30"
                    shape="circle"
                    :src="`${userInfo.avatarUrl}?param=30y30`"
                />
                {{ userInfo.nickname }}
            </div>
        </a-popover>
    </div>



</template>

<script>
import {
    ref,
    reactive,
    toRefs,
    watchEffect,
} from "vue"

import {useStore,} from "vuex"

import webCookie from "js-cookie"


export default {
    name: "UserInfo",
    setup(){
        const {commit,state} = useStore()


        const userInfo = reactive({
            userInfo: {},
            userMsg: {}
        })


        const loading = ref(false)
        const showPoint = ref(false)

        const showUserInfo = ()=>{}
        const pcSign = ()=>{}

        const showLoginWindow = ()=>{
            commit('setIsShowLoginWindow',true)
        }

        watchEffect(()=>{
            if ( state.isLogin ){
                const userInfoRes = webCookie.getJSON('userInfo')
                userInfo.userInfo = userInfoRes
                const getUserDetail = async ()=>{
                    const res = await $axios.get(`/api/user/detail?uid=${userInfoRes.userId}`)
                    // console.log(res)
                    if (res.status === 200 && res.data.code === 200){
                        const {level,profile:{eventCount,newFollows, followeds,privateCount}} = res.data
                        userInfo.userMsg = {level,eventCount,newFollows, followeds,privateCount}
                    }
                }
                getUserDetail()
            }
        })


        return {
            ...toRefs(state),
            showUserInfo,
            loading,
            pcSign,
            showPoint,

            showLoginWindow,
            ...toRefs(userInfo)
        }
    }
}
</script>

<style lang="less" >

.ant-popover{
    width: 240px !important;
}

.user-box {
    margin: -12px -16px;
    padding: 12px 16px;
    background: #fafafa;
    .user-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }
    .username {
        color: #333;
    }
    .list2 {
        margin: 10px 0;
        .list2-item {
            text-align: center;
            display: block;
            color: #333;
            &:not(:last-child) {
                border-right: 1px solid #ddd;
            }
        }
    }
    .sign-point {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        line-height: 27px;
        text-align: center;
        color: #c62f2f;
        opacity: 0;
    }
    .sign-btn {
        height: 27px;
        padding: 0 8px;
    }
}

</style>
