import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MainNav from '@/components/Navigation/MainNav.vue'
import { GlobalState } from '@/store/types'

interface MockStore {
  state: Partial<GlobalState>
}

describe('MainNav', () => {
  const createConfig = ($store: MockStore) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  })

  it('displays the company name', () => {
    const $store = { state: { isLoggedIn: false } }
    const wrapper = shallowMount(MainNav, createConfig($store))
    expect(wrapper.text()).toMatch('Careers')
  })

  it('displays menu items for navigation', () => {
    const $store = { state: { isLoggedIn: false } }
    const wrapper = shallowMount(MainNav, createConfig($store))
    const navigationMenuItems = wrapper.findAll(
      '[data-test="main-nav-list-item"]'
    )
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text())
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Careers',
      'How we hire',
      'Students',
      'Jobs',
    ])
  })

  describe('when user is logged out', () => {
    const $store = { state: { isLoggedIn: false } }
    const wrapper = shallowMount(MainNav, createConfig($store))
    it('prompts user to sign in', () => {
      const loginButton = wrapper.find('[data-test="login-button"]')
      expect(loginButton.exists()).toBe(true)
    })

    it('issues call to vuex to login user', async () => {
      const commit = jest.fn()
      const $store = { state: { isLoggedIn: false }, commit }

      const wrapper = shallowMount(MainNav, createConfig($store))
      const loginButton = wrapper.find("[data-test='login-button']")
      await loginButton.trigger('click')

      expect(commit).toHaveBeenCalledWith('LOGIN_USER')
    })
  })

  describe('when user is logged in', () => {
    it('displays user profile picture', () => {
      const $store = { state: { isLoggedIn: true } }
      const wrapper = shallowMount(MainNav, createConfig($store))

      const profileImage = wrapper.find('[data-test="profile-image"]')
      expect(profileImage.exists()).toBe(true)
    })

    it('displays subnavigation menu with additional information', () => {
      const $store = { state: { isLoggedIn: true } }

      const wrapper = shallowMount(MainNav, createConfig($store))

      const subnav = wrapper.find('[data-test="subnav"]')
      expect(subnav.exists()).toBe(true)
    })
  })
})
