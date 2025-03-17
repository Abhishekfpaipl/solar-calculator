<template>
    <div class="position-fixed w-100 d-flex justify-content-between  align-items-center p-2 top-0 bg-white border-bottom"
        style="z-index: 10; height: 60px;">
        <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
            <img src="/img/logo.png" alt="Rooftop solar panel installation in Delhi by Exolar Energy" height="40px"
                width="auto">
        </router-link>
        <div class="d-flex align-items-center gap-3">
            <a href="https://www.exolarenergy.com/" class="btn text-white" style="background-color: var(--bg-third)">
                <i class="bi bi-house"></i> <i class="visit bi bi-arrow-right"></i>
            </a> 
        </div>
    </div>
    
</template>
<script>

export default {
    name: "TopNav",
    data() {
        return {
            links: [
                { name: 'Home', route: '/' },
            ],
            follows: [
                { name: "Twitter", icon: "bi bi-twitter", url: "https://x.com/exolar_energy" },
                { name: "Instagram", icon: "bi bi-instagram", url: "https://www.instagram.com/exolarenergy/" },
                { name: "Youtube", icon: "bi bi-youtube", url: "https://www.youtube.com/@ExolarEnergyPvtLtd" },
                { name: "LinedIn", icon: "bi bi-linkedin", url: "https://www.linkedin.com/company/exolar-energy-private-limited/?originalSubdomain=in" },
                { name: "Facebook", icon: "bi bi-facebook", url: "https://www.facebook.com/Exolarenergy/" },
                { name: "Google", icon: "bi bi-google", url: "https://www.google.com/maps/place/Exolar+Energy+Private+Limited/@28.6927558,77.1516954,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0187cc8cabcd:0x894510dda97c6adc!8m2!3d28.6927558!4d77.1516954!16s%2Fg%2F11pkfdys1v?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D" },
            ],
            selectedMenu: null,
        }
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index;
        },
    },
}
</script>
<style scoped>
.border-class {
    border-bottom: 2px solid var(--bg-third) !important;
    color: var(--bg-primary) !important;
    font-weight: 600;
}

.hover-text:hover {
    border-bottom: 2px solid var(--bg-third)
}
</style>