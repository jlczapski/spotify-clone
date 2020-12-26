<template>
    <div class="listings-wrapper relative w-4/6 h-screen bg-graydient">
        <div class="flex items-center justify-between">
            <div class="left">
                <div class="flex items-center">
                    <Nav />
                    <Search />
                </div>
            </div>
            <div class="right">
                <Account @onToggleModal="showHide" />
            </div>
        </div>
        <div class="px-8">
            <h1 class="text-5xl text-white font-bold mt-16">
                {{ title }}
            </h1>
        </div>
        <Modal :modalOpen="modalOpen" />
    </div>
</template>

<script>
import Nav from './Nav.vue';
import Search from './Search.vue';
import Account from './Account.vue';
import Modal from './Modal.vue';

export default {
    name: 'Listings',
    components: {
        Nav,
        Search,
        Account,
        Modal,
    },
    data() {
        return {
            modalOpen: false,
            title: 'Home',
        };
    },
    methods: {
        showHide() {
            this.modalOpen = !this.modalOpen;
        },
    },
};
</script>
