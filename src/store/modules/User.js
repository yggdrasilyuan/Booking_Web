const state = () => ({
    nickName: 'yggdrasil',
    icon: 'https://sm.ms/delete/7ql2ShkWVDYawMbHXEcu4J3Gzg'
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