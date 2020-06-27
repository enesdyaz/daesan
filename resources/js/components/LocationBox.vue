<template>
    <v-app>
        <div class="selectbox">
            <div class='wrap'>
                <div class='square'>Domestic</div>
                <div class='square'>International</div>
            </div>
        </div>
    </v-app>
</template>

<style lang="scss">
.selectbox{
    border-radius: 30px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
 
}
.square{
    border: 1px solid whitesmoke;
    border-radius: 5px;
}
.wrap{
    overflow: hidden;
    div{
        float: left;
        width: 49%;
        height: 4vh;
        line-height: 4vh;
        color: rgb(80, 78, 78);
        &:hover{
            background: #009688;
        }
    }
}
</style>