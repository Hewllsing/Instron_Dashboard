
import { ref, onMounted } from 'vue';
import { getHealth } from '../../services/instronService';

export default function useInstronHealth() {

    const health = ref(null);


    // ======================================================
    // CARREGAR HEALTH
    // ======================================================

    async function carregarHealth() {

        try {

            health.value = await getHealth();

        } catch (error) {

            console.error(error);
        }
    }


    // ======================================================
    // INIT
    // ======================================================

    onMounted(() => {

        carregarHealth();

    });

    return {
        health,
        carregarHealth
    };
}