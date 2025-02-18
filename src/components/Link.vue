<template>
    <a :class="['link',className,{'link--black':isBlack}]" :href="path" >
        <slot/>
    </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LinkType } from '../types/types';


export interface LinkProps {
    path?: string;
    className?: string;
    type?:LinkType
}

const props = withDefaults(defineProps<LinkProps>(),{
    type:LinkType.DEFAULT,
    className:'',
    path:'#'
})

const isBlack = computed(()=>{
    return props.type===LinkType.BLACK
})
</script>