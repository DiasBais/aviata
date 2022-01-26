import { createStore } from 'vuex';

const store = createStore({
    state: {
        airlines: {},
        flights: {},
        filter: {
            tariff: [],
            airlines: []
        }
    },
    getters: {
        getAirlines: (state) => state.airlines,
        getFlights: (state) => state.flights,
        getFilterTariff: (state) => state.filter.tariff,
        getFilterAirlines: (state) => state.filter.airlines,
    },
    mutations: {
        SET_AIRLINES: (state, airlines) => state.airlines = airlines,
        SET_FLIGHTS: (state, flights) => state.flights = flights,
        SET_FILTER_TARIFF: (state, tariff) => state.filter.tariff = tariff,
        SET_FILTER_AIRLINES: (state, airlines) => state.filter.airlines = airlines,
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
