<template>
        <div class="header">
                <v-app-bar>
                        <v-toolbar-title class="app-name">WhoAmI.com</v-toolbar-title>
                        <v-spacer />
                        <v-btn>Who are we?</v-btn>
                </v-app-bar>
                
        </div>
</template>

<script>
export default {
    
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fugaz+One&display=swap');


.app-name {
    font-family: 'Fugaz One', cursive;
    font-size: 3em;
    color: black;
}
.header {
        border-bottom-style: solid;
        border-bottom-width: 2px;
        padding-left: 5em;
        padding-right: 5em;
}
</style>