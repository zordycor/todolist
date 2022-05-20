import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView/HomeView.vue'

describe('HomeView.vue', () => {
  it('should render view', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBeTruthy();
  })
})
