import Loading from "@/components/Global/Loading"
import Banner from "@/components/Global/Banner"
import BannerThree from "@/components/Global/BannerThree"

export default {
    install(App){
        App.component('Loading',Loading)
        App.component('BannerThree',BannerThree)
        App.component('Banner',Banner)

        // App.config.globalProperties.$filters = {
        //     toWan (num) {
        //         return num >= 10000 ? (num / 10000).toFixed(1) + "万" : num
        //     }
        // }
    }
}
