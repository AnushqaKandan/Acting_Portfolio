<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="bottom text-white">Anushqa's portfolio &copy; <span class="shadow">{{ currentYear }}</span></p>
        </div>
    </footer>
</template>

<script>
export default {
     name: "FooterComp",
     data(){
        return {
            currentYear: new Date().getUTCFullYear()
         }
       },
}
</script>

<style>

footer{
    margin-top: 1rem ;
}
</style>