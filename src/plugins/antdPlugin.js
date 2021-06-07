import {
    Button,
    Layout,
    // ConfigProvider,
    // LocaleProvider,
    Input,
    Popover,
    Menu,
    Avatar,
    Spin,
    Row,
    Col,
} from "ant-design-vue"

import {
    LeftOutlined,
    RightOutlined,
    ReloadOutlined,
    SettingOutlined,
    SearchOutlined,
    CloseOutlined,
    CloseCircleOutlined,
    UserOutlined,
    SmileOutlined,
    CheckCircleOutlined,
    SkinOutlined,
    ShrinkOutlined,
    MinusOutlined,
    SwitcherOutlined,
    BorderOutlined,
}  from "@ant-design/icons-vue"


export default {
    install(App){
        App.component('LeftOutlined',LeftOutlined)
        App.component('RightOutlined',RightOutlined)
        App.component('ReloadOutlined',ReloadOutlined)
        App.component('SettingOutlined',SettingOutlined)
        App.component('SearchOutlined',SearchOutlined)
        App.component('CloseOutlined',CloseOutlined)
        App.component('CloseCircleOutlined',CloseCircleOutlined)
        App.component('UserOutlined',UserOutlined)
        App.component('SmileOutlined',SmileOutlined)
        App.component('CheckCircleOutlined',CheckCircleOutlined)
        App.component('SkinOutlined',SkinOutlined)
        App.component('ShrinkOutlined',ShrinkOutlined)
        App.component('MinusOutlined',MinusOutlined)
        App.component('SwitcherOutlined',SwitcherOutlined)
        App.component('BorderOutlined',BorderOutlined)
        App
            .use(Button)
            .use(Layout)
            .use(Input)
            .use(Popover)
            .use(Menu)
            .use(Avatar)
            .use(Spin)
            .use(Row)
            .use(Col)

    }

}
