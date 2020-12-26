<template>
    <div class="py-4">
        <p class="title text-grey-600 text-tiny uppercase font-thin tracking-widest py-1 px-6">
            {{ title }}
        </p>
        <ul>
            <li
                class="text-smaller text-grey-600 hover:text-white font-semibold tracking-wide px-6"
                v-for="(link, i) in links"
                :key="`link-${i}`"
                :class="[i === 0 ? 'pt-0' : 'pt-3']"
            >
                <a :href="link.ref">
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Library',
    data() {
        return {
            title: 'Your Library',
            links: [
                { label: 'Made For You', ref: '#' },
                { label: 'Recently Played', ref: '#' },
                { label: 'Liked Songs', ref: '#' },
                { label: 'Albums', ref: '#' },
                { label: 'Artists', ref: '#' },
                { label: 'Podcasts', ref: '#' },
            ],
        };
    },
};
</script>
