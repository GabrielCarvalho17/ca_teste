<template>
    <div v-show="mobile">
        <div class="container d-flex flex-column justify-content-between" style="height: auto;">
            <div class="w-100 rounded d-flex flex-column justify-content-center">
                <h5 class="section-title">{{ title }}</h5>
            </div>
            <div v-if="textLeft" class="w-100 rounded bg-empty d-flex align-items-center justify-content-center mb-4"
                style="min-height: 400px;">
                Conteúdo do bloco esquerdo
            </div>
            <div v-if="!textLeft" class="w-100 rounded bg-empty d-flex align-items-center justify-content-center mb-4"
                style="min-height: 400px;">
                Conteúdo do bloco direito
            </div>
            <div class="w-100 rounded d-flex flex-column justify-content-center mb-4">
                <p v-if="showDescription" class="section-description" style="margin: 0px; margin-bottom: 24px;">
                    {{ description }}
                </p>
                <ul class="section-description">
                    <li v-for="(item, index) in items" :key="index" v-html="item"></li>
                </ul>
            </div>
        </div>
    </div>
    <div v-show="!mobile">
        <div class="container d-flex flex-row justify-content-between"
            style="height: 420px; margin-bottom: 60px; gap: 70px;">
            <div v-if="textLeft" class="w-50 rounded d-flex flex-column justify-content-center">
                <h5 class="section-title">{{ title }}</h5>
                <p v-if="showDescription" class="section-description" style="margin: 0px; margin-bottom: 24px;">
                    {{ description }}
                </p>
                <ul class="section-description">
                    <li v-for="(item, index) in items" :key="index" v-html="item"></li>
                </ul>
            </div>
            <div v-if="!textLeft" class="w-50 rounded bg-empty">
                <!-- Conteúdo do bloco direito -->
            </div>
            <div v-if="!textLeft" class="w-50 rounded d-flex flex-column justify-content-center">
                <h5 class="section-title">{{ title }}</h5>
                <p v-if="showDescription" class="section-description" style="margin: 0px; margin-bottom: 24px;">
                    {{ description }}
                </p>
                <ul class="section-description">
                    <li v-for="(item, index) in items" :key="index" v-html="item"></li>
                </ul>
            </div>
            <div v-if="textLeft" class="w-50 rounded bg-empty">
                <!-- Conteúdo do bloco esquerdo -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SplitScreen',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ''
        },
        items: {
            type: Array,
            required: true
        },
        textLeft: {
            type: Boolean,
            required: true,
            default: true
        },
        showDescription: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    data() {
        return {
            mobile: false,
        };
    },
    methods: {
        checkIsMobile() {
            this.mobile = window.innerWidth <= 1180;
        }
    },
    mounted() {
        this.checkIsMobile();
        window.addEventListener('resize', this.checkIsMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkIsMobile);
    },
};
</script>


<style scoped>
.bg-empty {
    background-color: #d9d9d9;
}

.section-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
}

.section-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
}

.section-description .highlight {
    color: #007bff;
    font-weight: bold;
}
</style>
