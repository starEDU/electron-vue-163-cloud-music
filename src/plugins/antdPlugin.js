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
    Modal,
    Tabs,
    Tag,
    Card,
    Pagination,
    Table,
    Divider,
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
    QqOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    HeartTwoTone,
    FrownOutlined,
    TeamOutlined,
    VideoCameraAddOutlined,
    RedditOutlined,
    WifiOutlined,
    CloudDownloadOutlined,
    CloudUploadOutlined,
    UserAddOutlined,
    CustomerServiceOutlined,
    HeartOutlined,
    PlayCircleOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    ArrowRightOutlined,
}  from "@ant-design/icons-vue"

import MenuIcon from "../components/MenuIcon/MenuIcon"


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
        App.component('QqOutlined',QqOutlined)
        App.component('MailOutlined',MailOutlined)
        App.component('CalendarOutlined',CalendarOutlined)
        App.component('AppstoreOutlined',AppstoreOutlined)
        App.component('HeartTwoTone',HeartTwoTone)
        App.component('FrownOutlined',FrownOutlined)
        App.component('TeamOutlined',TeamOutlined)
        App.component('VideoCameraAddOutlined',VideoCameraAddOutlined)
        App.component('RedditOutlined',RedditOutlined)
        App.component('WifiOutlined',WifiOutlined)
        App.component('CloudDownloadOutlined',CloudDownloadOutlined)
        App.component('CloudUploadOutlined',CloudUploadOutlined)
        App.component('UserAddOutlined',UserAddOutlined)
        App.component('CustomerServiceOutlined',CustomerServiceOutlined)
        App.component('HeartOutlined',HeartOutlined)
        App.component('PlayCircleOutlined',PlayCircleOutlined)
        App.component('MenuIcon',MenuIcon)
        App.component('LeftCircleOutlined',LeftCircleOutlined)
        App.component('RightCircleOutlined',RightCircleOutlined)
        App.component('ArrowRightOutlined',ArrowRightOutlined)


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
            .use(Tabs)
            .use(Tag)
            .use(Card)
            .use(Pagination)
            .use(Table)
            .use(Divider)

        App.config.globalProperties.$info = Modal.info
        App.config.globalProperties.$success = Modal.success
        App.config.globalProperties.$error = Modal.error
        App.config.globalProperties.$warning = Modal.warning
        App.config.globalProperties.$confirm = Modal.confirm
    }

}
