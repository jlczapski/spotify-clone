<template>
    <div class="flex mx-2">
        <IconChevronLeft class="fill-current text-grey-800" />
        <IconChevronRight class="stroke-current text-white" />
    </div>
</template>

<script>
import IconChevronLeft from '../../../public/img/icons/chevron-left.svg';
import IconChevronRight from '../../../public/img/icons/chevron-right.svg';

export default {
    name: 'Nav',
    components: {
        IconChevronLeft,
        IconChevronRight,
    },
};
</script>
