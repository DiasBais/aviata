import { mount } from '@vue/test-utils'
import SimpleFilter from '../../src/components/core/SimpleFilter.vue'
import { fakeData } from './fakeData.js'

function setFilters(airlines) {
    let filters = [];
    for (const [key, item] of airlines) {
        filters.push({key: key, title: item })
    }
    return filters;
}

describe('SimpleFilter.vue', async () => {
    const filters = setFilters(Object.entries({...fakeData.airlines}));
    const wrapper = mount(SimpleFilter, {
        propsData: {
            title: 'Авиакомпании',
            options: filters,
            selected: []
        }
    })

    test('select item', () => {
        wrapper.vm.toggleItem(filters[0]);
        expect(wrapper.vm.selectedItems[0].key).toBe('TF');
    });

    test('remove selectedItem', () => {
        wrapper.vm.toggleItem(filters[0]);
        expect(wrapper.vm.selectedItems).toEqual([]);
    });

})
