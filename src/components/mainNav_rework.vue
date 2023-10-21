<script>

export default {
data() {
        return {
            mainNavItems: [
                {text: 'Vue item 1'},
                {text: 'Vue item 2'},
                {text: 'Vue item 3'},
                {text: 'Vue item 4'},
                {text: 'Vue item 5'}
            ],
            houseColor: '#90302c'
        }
        
    }
}
</script>

<template>
    <header class="header">
        <nav class="mainNav">
        </nav>
    </header>
</template>


<style>
header {
    position: fixed;
    width: 100%;
    height: auto;
    background-color: red;
    z-index: 20;
}
.mainNav {
    margin: auto;
    display: flex;    
    max-width: 1600px;
    background-color: v-bind(houseColor);
    height: 80px;
}

</style>