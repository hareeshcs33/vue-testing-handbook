import {mount} from '@vue/test-utils'
import greeting from '../../src/components/greeting.vue'

describe('greeting.vue', () => {
    it('render a greeting', () => {

    })
})

const wrapper = mount(greeting);
console.log(wrapper.html());