<script>
export default {
data() {
        return {
            houseColor: '#90302c'
        }
        
    }
}
</script>

<template>
    <div class="contentContainer">
        <div class="contentItem item1"><a href="https://www.instagram.com/she.just.she/" target="_blank"><img src="../assets/images/instagram.png" alt="instagram logo"></a></div>
        <div class="contentItem item2"><a href="https://github.com/Algoprazolam/" target="_blank"><img src="../assets/images/github.svg" alt="github logo"></a></div>
        <div class="contentItem item3"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius? </p></div>
        <div class="contentItem item4"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius? </p></div>
        <div class="contentItem item5"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius? </p></div>
        <div class="contentItem item6"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius? </p></div>
        <div class="contentItem item7"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius? </p></div>
    </div>
</template>

<style>
/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties */
    .contentContainer {
        display: flex;
        position: relative;
        top: 40px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        /* this only works when i change flex-wrap to a wrap */
        align-content: center; 
    }
    .contentItem {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background-color: white;
        color: black;
        height: 300px;
        width: 300px;
        border: solid #FFDDDDDD 20px;
        flex-grow: 0;
        text-align: center;
    }
    .contentItem img {
        width: 80%;
        height: auto;
    }

    @media screen and (max-width: 992px){
        .contentItem {
            width: 240px;
            height: 240px;
        }
    }
    @media screen and (max-width: 600px){
        .contentItem {
            width: 160px;
            height: 160px;
        }
    }
</style>