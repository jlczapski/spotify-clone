<template>
    <div class="py-4">
        <p class="title text-grey-600 text-tiny uppercase font-thin tracking-widest py-1 px-6">
            {{ title }}
        </p>
        <ul>
            <li
                class="text-smaller text-grey-600 hover:text-white tracking-wider px-6"
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
            title: 'Playlists',
            links: [
                { label: 'Playlist 1', ref: '#' },
                { label: 'Playlist 2', ref: '#' },
                { label: 'Playlist 3', ref: '#' },
                { label: 'Playlist 4', ref: '#' },
                { label: 'Playlist 5', ref: '#' },
                { label: 'Playlist 6', ref: '#' },
            ],
        };
    },
};
</script>
