<script>
import {ref, watch} from '@vue/composition-api';
import eventApi from '../api/event.js'
export default {
    setup() {
        const searchInput = ref('');
        const results = ref(0);
        watch(searchInput, () => {
            results.value = eventApi.getEventCount(searchInput.value);
        });
        return { searchInput, results};
    }
};
</script>

<template>
    <div>
       Search for <input v-model="searchInput" />
        <div>
            Number of events: {{ results }}
        </div>

    </div>
</template>
