import { mount } from '@vue/test-utils'
import SimpleFilter from '../../src/components/core/SimpleFilter.vue'
import { fakeData } from './fakeData.js'

describe('vuex using a mock store', async () => {
    const wrapper = mount(SimpleFilter, {
        propsData: {
            title: 'Авиакомпании',
            options: fakeData.flights[0],//fakeData.airlines[Object.keys(fakeData.airlines)[0]]
            selected: []
        }
    })

    test('check toggleItem', () => {
        console.log(wrapper.vm.toggleItem);
        expect(wrapper.vm.toggleItem).toBe('20 кг');
    });

})
