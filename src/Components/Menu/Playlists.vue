<template>
    <div class="py-4">
        <p class="title text-grey-900 text-tiny uppercase font-thin tracking-widest py-1 px-6">
            Playlists
        </p>
        <ul>
            <li
                class="text-smaller text-grey-900 hover:text-white tracking-wider px-6"
                v-for="(link, i) in links"
                :key="`link-${i}`"
                :class="[i === 0 ? 'pt-0' : 'pt-3']"
            >
                {{ link.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Playlists',
    data() {
        return {
            links: [
                { label: 'Playlist 1', ref: '#' },
                { label: 'Playlist 2', ref: '#' },
                { label: 'Playlist 3', ref: '#' },
            ],
        };
    },
};
</script>
