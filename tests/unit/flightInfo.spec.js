import { mount } from '@vue/test-utils'
import FlightInfo from '../../src/components/Flight/FlightInfo.vue'
import { fakeData } from './fakeData.js'
import moment from "moment"

describe('vuex using a mock store', async () => {
  const wrapper = mount(FlightInfo, {
    propsData: {
      flight: fakeData.flights[0]
    }
  })

  moment.locale('ru');

  test('check takeoffDate', () => {
    expect(wrapper.vm.takeoffDate).toBe('30 авг. пт');
  });

  test('check landingDate', () => {
    expect(wrapper.vm.landingDate).toBe('30 авг. пт');
  });

  test('check takeoffTime', () => {
    expect(wrapper.vm.takeoffTime).toBe('19:00');
  });

  test('check landingTime', () => {
    expect(wrapper.vm.landingTime).toBe('23:10');
  });

  test('check distanceDiff', () => {
    expect(wrapper.vm.distanceDiff(wrapper.vm.flight.itineraries[0][0].traveltime)).toBe('7 ч 10 м');
  });

  test('check layoverDistanceDiff', () => {
    expect(wrapper.vm.layoverDistanceDiff).toBe('3 ч 10 м');
  });

  test('check layoverDistanceDayDiff', () => {
    expect(wrapper.vm.layoverDistanceDayDiff).toBe(0);
  });

  test('check startPoint', () => {
    expect(wrapper.vm.startPoint).toBe('ALA');
  });

  test('check endPoint', () => {
    expect(wrapper.vm.endPoint).toBe('VKO');
  });

})
