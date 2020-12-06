<template>
    <div class="modal bg-black-800 rounded-lg px-10 py-2" v-if="modalOpen">
        <ul>
            <li
                class="text-grey-900 text-sm tracking-wide my-3"
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

<style scoped>
    .modal {
        box-shadow: 1px 3px 12px 4px rgba(0, 0, 0, 0.6);
        position: absolute;
        right: 2%;
        top: 10%;
    }
</style>
