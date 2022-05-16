<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <BodyComponent></BodyComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import BodyComponent from '@/components/Body';
import FooterComponent from '@/components/Footer';
export default {
    components: {
        HeaderComponent,
        BodyComponent,
        FooterComponent,
    },
};
</script>
<style></style>
