<script setup>
import useInstronResults from './InstronResults.js';

const {
    resultados,
    carregando,
    erro,
    sincronizarResultados
} = useInstronResults();
</script>

<template>
    <section class="instron-results">

        <div class="instron-results__header">
            <div>
                <h2 class="instron-results__title">
                    Resultados Instron
                </h2>

                <p class="instron-results__subtitle">
                    Tabelas recebidas da InstronBridgeSelfHost
                </p>
            </div>

            <button
                class="instron-results__button"
                @click="sincronizarResultados"
                :disabled="carregando"
            >
                {{ carregando ? 'A sincronizar...' : 'Sincronizar resultados' }}
            </button>
        </div>

        <p
            v-if="erro"
            class="instron-results__error"
        >
            {{ erro }}
        </p>

        <p
            v-if="carregando"
            class="instron-results__loading"
        >
            A carregar resultados...
        </p>

        <div
            v-if="!carregando && resultados.length === 0"
            class="instron-results__empty"
        >
            Nenhum resultado encontrado.
        </div>

        <article
            v-for="resultado in resultados"
            :key="resultado.id"
            class="instron-results__card"
        >
            <div class="instron-results__card-header">
                <h3 class="instron-results__card-title">
                    Tabela {{ resultado.tableNumber }}
                </h3>

                <span class="instron-results__date">
                    {{ resultado.createdAt }}
                </span>
            </div>

            <div class="instron-results__table-wrapper">
                <table class="instron-results__table">
                    <thead>
                        <tr>
                            <th
                                v-for="(header, index) in resultado.data[0]"
                                :key="index"
                            >
                                {{ header || 'Nº' }}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="(linha, linhaIndex) in resultado.data.slice(1)"
                            :key="linhaIndex"
                        >
                            <td
                                v-for="(valor, valorIndex) in linha"
                                :key="valorIndex"
                            >
                                {{ valor }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>

    </section>
</template>

<style src="./InstronResults.css"></style>