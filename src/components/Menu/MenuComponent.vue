<template>
    <div>
        <Menu class="relative inline-block text-left">
            <MenuButton class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Options
            </MenuButton>
            <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem class="block px-4 py-2 text-sm">
                    Account Settings
                </MenuItem>
                <MenuItem class="block px-4 py-2 text-sm">
                    Support
                </MenuItem>
                <MenuItem class="block px-4 py-2 text-sm">
                    License
                </MenuItem>
                <MenuItem class="block px-4 py-2 text-sm">
                    Sign Out
                </MenuItem>
            </MenuItems>
        </Menu>
    </div>       
</template>

<script>

import Menu from './Menu.vue';
import MenuButton from './MenuButton.vue';
import MenuItems from './MenuItems.vue';
import MenuItem from './MenuItem.vue';

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem
    }
    
}
</script>

