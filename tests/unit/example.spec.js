import { shallowMount } from '@vue/test-utils'
import Login from '@/components/login/Login.vue'

const factory = (values = {}) => {
  return shallowMount(Login, {
    data () {
      return {
        ...values
      }
    }
  })
}


describe('Login', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).toEqual("Welcome to the Vue.js cookbook")
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: ''  })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan'  })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})


