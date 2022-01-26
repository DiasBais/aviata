import { mount } from '@vue/test-utils'
import Price from '../../src/components/Flight/Price.vue'
import { fakeData } from './fakeData.js'

describe('vuex using a mock store', async () => {
    const wrapper = mount(Price, {
        propsData: {
            flight: fakeData.flights[0]
        }
    })

    test('check luggage', () => {
        expect(wrapper.vm.luggage).toBe('20 кг');
    });

})
