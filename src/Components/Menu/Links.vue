<template>
    <div class="py-4">
        <ul>
            <li
                class="menu-item text-sm text-grey-600 hover:text-white font-semibold tracking-wide py-2 px-6"
                v-for="(link, i) in links"
                :key="`link-${i}`"
                :class="{ 'relative text-white': i === 0 }"
            >
                <div class="flex items-center">
                    <component :is="link.icon" />
                    <a :href="link.ref" class="ml-3 mt-1">
                        {{ link.label }}
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import IconHome from '../../../public/img/icons/home.svg';
import IconRecords from '../../../public/img/icons/records.svg';
import IconSignal from '../../../public/img/icons/signal.svg';

export default {
    name: 'Links',
    components: {
        IconHome,
        IconRecords,
        IconSignal,
    },
    data() {
        return {
            links: [
                { ref: '#', label: 'Home', icon: 'IconHome' },
                { ref: '#', label: 'Browse', icon: 'IconRecords' },
                { ref: '#', label: 'Radio', icon: 'IconSignal' },
            ],
        };
    },
};
</script>

<style scoped>
    .menu-item.active::before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 4px;
        height: 25px;
        background: #1DB954;
        content: '';
    }

    div >>> svg {
        width: 1.4rem;
        height: 1.4rem;
    }
</style>
