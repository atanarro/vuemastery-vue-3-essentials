<script>
    import { ref, computed } from "@vue/composition-api";
    export default {
        setup(props, context) {
            console.log(props, context);
            const capacity = ref(3);
            const attending = ref(['a person', 'another person', 'a third one']);
            function increaseCapacity() {
                capacity.value++;
            }
            const spacesLeft = computed(() => {
                return capacity.value - attending.value.length;
            });
            return { capacity, increaseCapacity, attending, spacesLeft };
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
