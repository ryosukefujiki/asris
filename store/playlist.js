export const state = () => ({
  clicked: false,
})

export const getters = {
  clicked: state => state.clicked,
}

export const mutations = {
  click (state) {
    state.clicked = true
    console.log('click')
  },
  close (state) {
    state.clicked = false
    console.log('close')
    // console.log('kill')
  },
}
