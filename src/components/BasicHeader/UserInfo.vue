<template>
    <!-- 未登录-->
    <div v-if="isLogin" @click="showLoginWindow">
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
                                        v-lazy="`http://p1.music.126.net/T_0GRXDRqVIQlEnHi2ivew==/109951165695160138.jpg?param=30y30?param=50y50`"
                                        class="user-avatar"
                                        alt=""
                                     />
                                    <span class="user-info-name">
                                        <!--userInfo.profile.nickname-->
                                        追梦
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
                                    520
                                    <!--userInfo.profile.eventCount-->
                                </strong>
                                <div>动态</div>
                            </a-col>
                            <a-col :span="12">
                                <strong>
                                    <!-- userInfo.profile.follows-->
                                    99
                                </strong>
                                <div>关注</div>
                            </a-col>
                            <a-col :span="6">
                                <strong>
                                    <!-- userInfo.profile.followeds-->
                                    1314
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
                    src="http://p1.music.126.net/T_0GRXDRqVIQlEnHi2ivew==/109951165695160138.jpg?param=30y30"
                />
                宁静视听
            </div>
        </a-popover>
    </div>



</template>

<script>
import {
    ref,
} from "vue"

import {useStore,} from "vuex"


export default {
    name: "UserInfo",
    setup(){
        const {commit} = useStore()

        const isLogin = ref(true)
        const loading = ref(false)
        const showPoint = ref(false)

        const showUserInfo = ()=>{}
        const pcSign = ()=>{}

        const showLoginWindow = ()=>{
            commit('setIsShowLoginWindow',true)
        }

        return {
            isLogin,
            showUserInfo,
            loading,
            pcSign,
            showPoint,

            showLoginWindow,
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
