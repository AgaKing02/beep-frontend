<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Stream Page</h5>
        <p>
            
    <ul v-if="dataviewValue && dataviewValue.length">
      <li style="margin:2px;padding:1px;border:1px solid black;" v-for="stream of dataviewValue" :key="stream.id">
        {{stream.stream_id}}
        <ul>
            <li>{{stream.category.slug}}</li>
        </ul>
        <div class="mr-auto">
        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" />
        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-2" />
        </div>
        
      </li>
    </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StreamService from "../service/StreamService";

export default {
  data() {
    return {
      dataviewValue: [],
    };
  },
  streamService: null,
  created() {
    this.streamService = new StreamService();
  },
  mounted() {
    this.streamService
      .getAllStreams()
      .then((data) => (this.dataviewValue = data));
  },
};
</script>