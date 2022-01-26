import { createStore } from 'vuex';

const store = createStore({
    state: {
        airlines: {},
        flights: {},
    },
    getters: {
        getAirlines: (state) => state.airlines,
        getFlights: (state) => state.flights,
    },
    mutations: {
        SET_AIRLINES: (state, airlines) => state.airlines = airlines,
        SET_FLIGHTS: (state, flights) => state.flights = flights,
    },
    actions: {
        loadFlights: ({commit}) => {
            fetch('/results.json')
                .then(res => res.json())
                .then(res => {
                    commit('SET_AIRLINES', res.airlines);
                    commit('SET_FLIGHTS', res.flights);
                    console.log(res.flights);
                });
        }
    },
})

export default store
