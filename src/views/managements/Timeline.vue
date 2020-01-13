<template>
  <a-timeline>
    <a-timeline-item
      v-for="item in timelines"
      :value="item.value"
      :key="item.value"
      :color="item.color"
    >{{item.title}}</a-timeline-item>
    <a-timeline-item color="red">
      <p v-for="item in subtimelines" :title="item" :key="item.title">{{item.title}}</p>
    </a-timeline-item>
    <a-timeline-item>
      <p v-for="item in sontimelines" :title="item" :key="item.title">{{item.title}}</p>
    </a-timeline-item>
  </a-timeline>
</template>
<script>
export default {
  data() {
    return {
      timelines: [
        {
          value: "Create a services site 2015-09-01",
          title: "Create a services site 2015-09-01",
          color: "green"
        },
        {
          value: "Create a services site 2015-09-01",
          title: "Create a services site 2015-09-01",
          color: "green"
        }
      ],
      subtimelines: [
        { title: "Solve initial network problems 1" },
        { title: "Solve initial network problems 2" },
        { title: "Solve initial network problems 3 2015-09-01" }
      ],
      sontimelines:[
          {title:"Technical testing 1"},
          {title:"Technical testing 2"},
          {title:"Technical testing 3 2015-09-01"},
      ]
    };
  }
};
</script>