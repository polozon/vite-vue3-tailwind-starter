<template>
    <div>
        <Menu>
            <MenuButton>
                Options
            </MenuButton>
            <MenuItems>
                <MenuItem>
                    Account Settings
                </MenuItem>
                <MenuItem>
                    Support
                </MenuItem>
                <MenuItem>
                    License
                </MenuItem>
                <MenuItem>
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

