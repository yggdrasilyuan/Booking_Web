const state = () => ({
    nickName: 'yggdrasil',
    icon: 'https://sm.ms/image/w4Z2pPg6FBLKR8m'
})

const mutations = {
    setNickName(state, payload) {
        state.nickName = payload
    },
    setIcon(state, payload) {
        state.icon = payload
    }
}

export default {
    namespaced: true,
    state,
    mutations
}