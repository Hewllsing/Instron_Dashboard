<script setup>
import useInstronHealth from './InstronHealth.js';

const {
    health
} = useInstronHealth();
</script>

<template>

<section class="instron-health">

    <!-- ===================================================== -->
    <!-- HEADER -->
    <!-- ===================================================== -->

    <div class="instron-health__header">

        <div>

            <h2 class="instron-health__title">
                Estado da API
            </h2>

            <p class="instron-health__subtitle">
                Monitoramento da InstronBridgeSelfHost
            </p>

        </div>

    </div>


    <!-- ===================================================== -->
    <!-- GRID -->
    <!-- ===================================================== -->

    <div class="instron-health__grid">

        <!-- STATUS -->

        <div class="instron-health__card">

            <span class="instron-health__label">
                Status API
            </span>

            <strong
                class="instron-health__value"
                :class="
                    health?.status === 'online'
                        ? 'instron-health__value--online'
                        : 'instron-health__value--offline'
                "
            >
                {{ health?.status || 'offline' }}
            </strong>

        </div>


        <!-- CONNECTED -->

        <div class="instron-health__card">

            <span class="instron-health__label">
                Bluehill conectado
            </span>

            <strong
                class="instron-health__value"
                :class="
                    health?.connected
                        ? 'instron-health__value--connected'
                        : 'instron-health__value--offline'
                "
            >
                {{ health?.connected ? 'Sim' : 'Não' }}
            </strong>

        </div>


        <!-- LAST STATE -->

        <div class="instron-health__card">

            <span class="instron-health__label">
                Último estado
            </span>

            <strong class="instron-health__value">

                {{ health?.lastState || 'Sem estado' }}

            </strong>

        </div>


        <!-- LAST STATUS CODE -->

        <div class="instron-health__card">

            <span class="instron-health__label">
                Último código
            </span>

            <strong class="instron-health__value">

                {{ health?.lastStatusCode || 'N/A' }}

            </strong>

        </div>


        <!-- LAST STATUS MESSAGE -->

        <div class="instron-health__card">

            <span class="instron-health__label">
                Última mensagem
            </span>

            <strong class="instron-health__value">

                {{ health?.lastStatusMessage || 'Sem mensagem' }}

            </strong>

        </div>

    </div>

</section>

</template>

<style src="./InstronHealth.css"></style>