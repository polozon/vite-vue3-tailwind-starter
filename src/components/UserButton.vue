<template>
  <div class="relative flex text-right items-center">
    <img class="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User" />
    <Menu as="div" class="relative inline-block text-left">
        <MenuButton
        class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
        Hi, User
        </MenuButton>
      <MenuItems
      class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
            My account
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
            Notifications
          </button>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="logout()"
              >
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem
    },
    methods: {
      logout() {
        this.$emit('logout')
      }
    }
}
</script>