import {computed, ref} from "@vue/composition-api";

export default function useEventSpace() {
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
