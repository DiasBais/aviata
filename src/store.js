import { createStore } from 'vuex';
const axios = require('axios');

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
            axios.get('/results.json')
                .then(res => {
                    commit('SET_AIRLINES', res.data.airlines);
                    commit('SET_FLIGHTS', res.data.flights);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
})

export default store
