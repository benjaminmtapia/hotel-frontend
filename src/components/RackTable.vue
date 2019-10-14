<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule id='Schedule' 
                ref='ScheduleObj'
                     width='100%' 
                     height='550px' 
                     :selectedDate='selectedDate' 
                     :eventSettings='eventSettings'
                      :group='group'>
                <e-views>
                    <e-view option='TimelineMonth'
                     :eventTemplate='timelineEventTemplate'
                      :allowVirtualScrolling='virtualScroll'></e-view>
                </e-views>
                <e-resources>
                    <e-resource field='OwnerId' 
                    title='Owner' 
                    name='Owners' 
                    :allowMultiple='allowMultiple' 
                    :dataSource='roomsData' 
                    textField='Text' 
                    idField='Id' 
                    colorField='Color'>
                    </e-resource>
                </e-resources>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { SchedulePlugin, TimelineViews, TimelineMonth, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    import {mapState,mapMutations} from 'vuex'
    var timelineEventTemplateVue = Vue.component('timelineTemplate', {
        template: `<div class='template-wrap' style='{background: data.PrimaryColor}'>
            <div class="subject" style='{background: data.SecondaryColor};'>{{data.Subject}}</div></div>`,
        data() {
            return {
                data: {}
            };
        }
    });

    export default {
        data: function () {
            return {
                actualRooms:0,
                neededRooms:1,
                actualReservations:0,
                neededReservations:1,
                selectedDate: new Date(2019, 9, 1),
                timelineEventTemplate: function (e) {
                    return {
                        template: timelineEventTemplateVue
                    };
                },
                allowMultiple: true,
                virtualScroll: true,
                group: {
                    byGroupID: false,
                    resources: ['Owners']
                },
                ownerData: [], //aqui van las filas y el color
                eventSettings: { 
                    dataSource: [],
                    enableTooltip:true} //aca van los eventos
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth, Resize, DragAndDrop]
        },
        computed: {
            ...mapState(['roomsData','reservationData'])
        },
        methods: {
            datasource(){
                var reservations = this.reservationData;
                console.log(reservations)
                this.eventSettings.dataSource = reservations
            },
            
            ...mapMutations(['getReservations','getRooms']),

           
        },
        beforeMount() {
            this.getReservations();
            this.datasource();
           this.getRooms();
        },
    }
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";

  .e-schedule .template-wrap .subject {
        padding: 10px 25px;
    }

    .e-schedule .template-wrap {
        width: 100%;
    }

    .e-schedule .e-timeline-month-view .e-resource-left-td {
        width: 150px;
    }
</style>