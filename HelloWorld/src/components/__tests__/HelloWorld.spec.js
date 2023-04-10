import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import RandomNumber from "@/components/RandomNumber.vue";

// By Default

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'test' } 
    })
    expect(wrapper.text()).toContain('test')
  })
})

// Activity 2

describe("RandomNumber.vue", () => {
  it("By default the random number should be 0", () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('0')
  }),

// Activity 3

  it("if button clicked, the random number should be  from 1-10", async() => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(0)
    expect(random_number).toBeLessThanOrEqual(10)
  }),

  // Optional Activity

  it("the number follows the props min max", async() => {
    const wrapper = mount(RandomNumber,{
      props:{
        min:40,max:100
      }
    })
    await wrapper.find('button').trigger('click')
    const random_number = parseInt(wrapper.find('h2').text())
    expect(random_number).toBeGreaterThanOrEqual(40)
    expect(random_number).toBeLessThanOrEqual(100)
  }),

  // Extra

  it("generates random numbers within the expected range", () => {
    const wrapper = mount(RandomNumber);
    
    for (let i = 0; i < 1; i++) {
      wrapper.find('button').trigger('click');
      const random_number = parseInt(wrapper.find('h2').text());
      expect(random_number).toBeGreaterThanOrEqual(0);
      expect(random_number).toBeLessThanOrEqual(10);
    }
  })  
})