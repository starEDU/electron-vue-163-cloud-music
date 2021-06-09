export const personalizedRecommendation = [
    {
        path: '/personalized_recommendation',
        name: 'personalized_recommendation',
        component: ()=>import(/* webpackChunkName: "personalizedRecommendation" */ '@/views/LayoutContent/PersonalizedRecommendationPage'),
        meta: {
            title: '个性推荐'
        }
    }
]
