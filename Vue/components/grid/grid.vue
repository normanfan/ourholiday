<style lang="sass">



</style>

<template lang="html">

<div class="vue-data-grid">
    <!-- grid-head -->
    <table>
        <thead>
            <th v-for="column in columns">
                {{column.displayName}}
            </th>
        </thead>
        <tbody>
            <tr v-for="data in columnDatas" column-data={{data|json}}>
                <td v-for="column in columns">
                  {{data|handleColumn column}}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>

export default {
    data() {
            return {};
        },
        props: ['childrenData'],
        computed: {
            columns: function() {
                return this.childrenData.columns;
            },
            columnDatas: function() {
                return this.childrenData.columnDatas
            },
            rowNumber:function(){
              if(this.childrenData.options.rowNumber){
                return this.childrenData.options.rowNumber;
              }else{
                return 1;
              }
            },

        },
        ready() {},
        attached() {},
        methods: {},
        filters:{
          getValue:function(key,value,index){
            return index
          },
          handleColumn:function(rowData,column){
            var result = rowData[column.columnName];
            if(column.filter!=undefined&&typeof column.filter =='function'){
              result = column.filter(result);
            }
            return result;
          }
        },
        components: {}
};

</script>
