import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            selectedOfficeId: 1,
            offices:
                [
                    {
                        city: "Вологда",
                        phone: "8-911-501-18-19",
                        coords:[59.220501, 39.891523],
                        id: 1,
                        address: "Ул. Мира"
                    },
                    {
                        city: "Москва",
                        phone: "8-985-344-76-46",
                        id: 2,
                        coords:[55.755819, 37.617644],
                    }
                ],
        }
    },
    mutations: {
        setCurrentOffice(state, office) {
            state.selectedOfficeId = office
        }

    },
    actions: {
        selectOfficeHandler(context, event) {
            context.commit("setCurrentOffice", parseInt(event.target.value))
        }
    },
    getters: {
        selectedOffice(state) {
            return state.offices.filter((office) => {
                return office.id === state.selectedOfficeId
            })[0]
        },
        offices(state){
            return state.offices
        }
    }
})
export default store
