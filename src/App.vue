<template>
    <div id="app">
        <div class="flex flex-wrap font-circular">
            <Menu />
            <Listings />
            <Social />
        </div>
        <Controls />
    </div>
</template>

<script>
import Menu from './Components/Menu/Menu.vue';
import Listings from './Components/Listings/Listings.vue';
import Social from './Components/Social/Social.vue';
import Controls from './Components/Controls/Controls.vue';

export default {
    name: 'App',
    components: {
        Menu,
        Listings,
        Social,
        Controls,
    },
    created() {
        document.title = 'Spotify UI Clone';
    },
};
</script>
