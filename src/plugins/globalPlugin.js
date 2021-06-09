import Loading from "@/components/Global/Loading"
import Banner from "@/components/Global/Banner"
import BannerThree from "@/components/Global/BannerThree"

export default {
    install(App){
        App.component('Loading',Loading)
        App.component('Banner',Banner)
        App.component('BannerThree',BannerThree)
    }
}
