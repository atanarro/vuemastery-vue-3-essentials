<script>
// import {onBeforeMount, onMounted} from 'vue'; This will work on vue3
import useEventSpace from "../use/event-space";
import useMapping from "../use/mapping";

export default {
    beforeMount() {
        console.log('onBeforeMount');
    },
    mounted() {
        console.log('onMounted');
    },
    setup(props, context) {
        // This will work on vue3
        // onBeforeMount(() => { ... })
        // onMounted(() => { ... })
        console.log(props, context);
        return { ...useEventSpace(), ...useMapping };
    }
};
</script>

<template>
    <div>
        <h1>My Event</h1>
        <p>Spaces left: {{ spacesLeft }}</p>
        <p>Capacity: {{ capacity }}</p>
        <button @click="increaseCapacity()">Increase Capacity</button>
        <h2>Attending</h2>
        <ul>
            <ol
                :key="attendee"
                v-for="attendee in attending"
            >{{ attendee }}</ol>
        </ul>

    </div>
</template>
