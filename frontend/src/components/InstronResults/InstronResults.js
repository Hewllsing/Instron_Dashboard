import { ref, onMounted } from 'vue';
import {
    getResultados,
    syncResultados
} from '../../services/instronService';

export default function useInstronResults() {
    const resultados = ref([]);
    const carregando = ref(false);
    const erro = ref(null);

    async function carregarResultados() {
        try {
            carregando.value = true;
            erro.value = null;

            resultados.value = await getResultados();

        } catch (error) {
            erro.value = 'Erro ao carregar resultados.';
            console.error(error);

        } finally {
            carregando.value = false;
        }
    }

    async function sincronizarResultados() {
        try {
            carregando.value = true;
            erro.value = null;

            await syncResultados();
            await carregarResultados();

        } catch (error) {
            erro.value = 'Erro ao sincronizar resultados.';
            console.error(error);

        } finally {
            carregando.value = false;
        }
    }

    onMounted(() => {
        carregarResultados();
    });

    return {
        resultados,
        carregando,
        erro,
        carregarResultados,
        sincronizarResultados
    };
}