const state = () => ({
    nickName: 'yggdrasil',
    icon: 'https://sm.ms/image/w4Z2pPg6FBLKR8m',
    token:null
})

const mutations = {
    setNickName(state, payload) {
        state.nickName = payload
    },
    setIcon(state, payload) {
        state.icon = payload
    },
    setToken(state, payload) {
        state.token = payload
    }
}

export default {
    namespaced: true,
    state,
    mutations
}