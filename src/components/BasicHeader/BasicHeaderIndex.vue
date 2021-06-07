<template>
    <div class="top-bar">
        <div class="top-bar-logo">
            <img src="../../assets/images/logo.svg" alt="LOGO"/>
        </div>
        <div class="top-bar-main">
            <div class="top-bar-control">
                <!--功能按钮-->
                <ActionButton />
                <!--功能按钮-->
            </div>
            <div class="top-bar-search">
                <!--搜索框-->
                <SearchBox />
                <!--搜索框-->
            </div>
            <div class="top-bar-menu">
                <div class="top-bar-menu-user">
                    <div class="item">
                        <!--  用户信息  -->
                        <UserInfo />
                        <!--  用户信息  -->
                    </div>
                    <div class="item">
                        <!--主题设置-->
                        <ThemeSet />
                        <!--主题设置-->
                    </div>
                    <div
                        class="item"
                        @click="$router.push({ path: '/setting' })"
                    >
                        <SettingOutlined />
                    </div>
                    <div class="item" @click="logout" v-if="userId">退出</div>
                </div>
                <!-- 右上角功能按钮 -->
                <FrameActionButton />
                <!-- 右上角功能按钮 -->
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "@/components/BasicHeader/HistoryActionButton"
import SearchBox from "@/components/BasicHeader/SearchBox"
import UserInfo from "@/components/BasicHeader/UserInfo"
import ThemeSet from "@/components/BasicHeader/ThemeSet"
import FrameActionButton from "@/components/BasicHeader/FrameActionButton"
export default {
    name: "BasicHeaderIndex",
    components: {FrameActionButton, ThemeSet, UserInfo, SearchBox, ActionButton},
    setup(){

        const logout = ()=>{}
        return {
            userId: 1234,
            logout,
        }
    }
}
</script>

<style lang="less" scoped>

.ant-popover-arrow {
    border-top-color: #fafafa !important;
    border-left-color: #fafafa !important;
}

.search-wrapper {
    dl,dd {
        margin-bottom: 0;
    }

    .search-content {
        display: flex;
        margin: -12px -16px;

        dl {
            width: 50%;
            font-size: 13px;

            &:not(:last-child) {
                border-right: 1px solid #eee;
            }
        }

        dt {
            padding: 7px 15px;
            border-bottom: 1px solid #eee;
            color: #999;
        }

        dd {
            padding: 0 15px;
            line-height: 28px;
            color: #111;

            &:hover {
                background: #eee;
            }
        }
    }

    .search-result {
        margin: -12px -16px;

        dt {
            padding: 7px 15px;
            background: #f3f5f9;
        }

        dd {
            padding: 0 5px 0 30px;
            line-height: 28px;
            color: #111;

            &:hover {
                background: #eee;
            }
        }
    }
}

.top-bar {
    display: flex;
    height: 100%;
    //overflow: hidden;

    .top-bar-logo {
        display: flex;
        align-items: center;
        width: 200px;
        flex: 0 0 200px;
        padding-left: 15px;

        img {
            width: 140px;
        }
    }

    .top-bar-main {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .top-bar-search {
            width: 240px;
            flex: 0 0 240px;
            -webkit-app-region: no-drag;
        }

        .top-bar-control {
            margin-right: 5px;
            -webkit-app-region: no-drag;

            /deep/ .ant-btn {
                height: 24px;
                line-height: 22px;
            }
        }
    }
}

.top-bar-menu {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    height: 100%;

    .top-bar-menu-user {
        display: flex;
        -webkit-app-region: no-drag;

        .item {
            display: inline-flex;
            align-items: center;
            padding: 0 10px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                color: rgba(255, 255, 255, 1);
            }

            .ant-badge-count {
                height: 16px;
                line-height: 16px;
                min-width: 16px;
                padding: 0 5px;
                background: #fff;
                color: #c62f2f;
                box-shadow: none;
                border-radius: 8px;
            }

            .avatar {
                margin-right: 8px;
                border-radius: 50%;
            }

            .icon {
                font-size: 16px;
            }
        }
    }
}

.header-user {
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    .header-user-info {
        display: flex;
        align-items: center;
    }

    span {
        font-size: 13px;
        letter-spacing: 2px;
    }
}

.user-info-name {
    display: inline-block;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
}


</style>
