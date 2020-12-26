<template>
    <div class="modal absolute right-4 top-14 bg-grey-900 shadow-3xl rounded-lg px-10 py-2" v-if="modalOpen">
        <ul>
            <li
                class="text-grey-600 text-sm tracking-wide my-3"
                v-for="(link, i) in links"
                :key="`link-${i}`"
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
    name: 'Modal',
    data() {
        return {
            links: [
                { label: 'Private Session', ref: '#' },
                { label: 'Account', ref: '#' },
                { label: 'Settings', ref: '#' },
                { label: 'Log Out', ref: '#' },
            ],
        };
    },
    props: ['modalOpen'],
};
</script>
