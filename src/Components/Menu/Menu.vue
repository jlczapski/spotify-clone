<template>
    <div class="menu-wrapper w-1/6 h-screen bg-black-900">
        <Links />
        <Library />
        <Playlists />
        <div class="spacer w-full bg-white mt-2"></div>
    </div>
</template>

<script>
import Links from './Links.vue';
import Library from './Library.vue';
import Playlists from './Playlists.vue';

export default {
    name: 'Menu',
    components: {
        Links,
        Library,
        Playlists,
    },
};
</script>

<style scoped>
    .spacer {
        height: 0.5px;
        opacity: 0.15;
    }
</style>
