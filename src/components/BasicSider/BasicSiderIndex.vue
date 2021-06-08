<template>
    <div
        class="basic-sider"
        :class="{ borderB: true }"
    >
        <a-menu
            style="width: 200px"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :theme="theme"
            :inlineCollapsed="collapsed"
            :selectable="true"
            @openChange="onOpenChange"
        >
            <a-menu-item-group key="sub1" >
                <template #title>
                  <span>
                    <SmileOutlined spin style="font-size: 16px"/>
                    <span style="margin-left: 5px">推荐</span>
                  </span>
                </template>

                <a-menu-item
                    v-for="(item,index) in recommendMap"
                    :key="item.name"
                >
                    <router-link :to="item.path" class="link" >
                        <MenuIcon :icon="item.meta.icon"/>
                        {{ item.meta.title }}
                    </router-link>
                </a-menu-item>
            </a-menu-item-group>

            <a-menu-item-group key="sub2" >
                <template #title>
                  <span>
                    <SmileOutlined :rotate="180" style="font-size: 16px"/>
                    <span style="margin-left: 5px">我的音乐</span>
                  </span>
                </template>

                <a-menu-item
                    v-for="item in myMusicMap"
                    :key="item.name"
                >
                    <router-link :to="item.path" class="link" >
                        <MenuIcon :icon="item.meta.icon"/>
                        {{ item.meta.title }}
                    </router-link>
                </a-menu-item>
            </a-menu-item-group>

            <a-sub-menu key="sub3" >
                <template #title>
                  <span>
                    <FrownOutlined style="font-size: 16px"/>
                    <span>创建的歌单</span>
                  </span>
                </template>
                <a-menu-item key="8">本地音乐</a-menu-item>
                <a-menu-item key="9">下载管理</a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="sub4" >
                <template #title>
                  <span>
                    <FrownOutlined style="font-size: 16px"/>
                    <span>收藏的歌单</span>
                  </span>
                </template>
                <a-menu-item key="10"><HeartOutlined />私人雷达</a-menu-item>
                <a-menu-item key="11"><CustomerServiceOutlined />怀旧 | 闲暇细数90后的回忆杀</a-menu-item>
                <a-menu-item key="12"><CustomerServiceOutlined />100首经典英文老歌</a-menu-item>
                <a-menu-item key="13"><CustomerServiceOutlined />经典老歌 久听不厌</a-menu-item>
            </a-sub-menu>


        </a-menu>


    </div>
</template>

<script>
import {reactive, ref,toRefs,} from "vue"
// 我的音乐
import {myMusicMap} from "@/router/modules/myMusic"
// 推荐
import {recommendMap} from "@/router/modules/recommend"
import MenuIcon from "@/components/MenuIcon/MenuIcon"

export default {
    name: "BasicSiderIndex",
    components: {MenuIcon},
    setup() {
        // 主题
        const theme = ref('light')

        const state = reactive({
            // 当前展开的 SubMenu 菜单项 key 数组
            openKeys: ['sub1','sub2',],
            // 当前选中的菜单项 key 数组
            selectedKeys: ['discover_music'],
            rootSubMenuKeys: ['sub1','sub2','sub3','sub4' ]
        })

        const collapsed = ref(true)

        const onOpenChange = openKeys => {
            const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1)

            if (state.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
                state.openKeys = openKeys
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        }

        return {
            myMusicMap,
            recommendMap,
            theme,
            ...toRefs(state),
            collapsed,
            onOpenChange,
        }
    }
}
</script>

<style lang="less" scoped>
.basic-sider{
    background: #fff;

    /deep/ .ant-menu-item-selected {color:rgba(0, 0, 0, 0.95)}
    /deep/ .ant-menu-vertical .ant-menu-item::after,
    /deep/ .ant-menu-vertical-left .ant-menu-item::after,
    /deep/ .ant-menu-vertical-right .ant-menu-item::after,
    /deep/ .ant-menu-inline .ant-menu-item::after{
        left: 0;
        border-left: 3px solid #c62f2f !important;
        border-right: none;
    }
}



</style>
