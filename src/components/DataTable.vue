<script>
export default {
  name: "DataTable",
  props: {
    headers: Array,
    dataList: Array,
    isActionShow: Boolean,
    isSerialNoShow: Boolean,
    actionArray: Array,
  },
};
</script>

<template>
  <div class="datatable">
    <table class="w-full text-center">
      <tr class="text-left bg-gray-200">
        <th v-if="isSerialNoShow">SL No</th>
        <th :key="i" v-for="(header, i) of headers">{{ header.name }}</th>
        <th v-if="isActionShow">Action</th>
      </tr>

      <tr
        :key="i"
        v-for="(data, i) of dataList"
        :class="i % 2 == 0 || i == 0 ? 'bg-cyan-800 text-white' : 'bg-cyan-100'"
        class="border"
      >
        <td v-if="isSerialNoShow">{{ i + 1 }}</td>
        <!-- rendering the data here  -->
        <td :key="i" v-for="(header, i) of headers">{{ data[header.key] }}</td>

        <td v-if="isActionShow">
          <button
            :key="i"
            v-for="(action, i) of actionArray"
            :class="action.bg_class"
            class="px-3 py-1.5 text-white rounded-md mx-2 my-2"
            @click="$emit(action.emitName, data)"
          >
            {{ action.name }}
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.datatable {
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  overflow-x: scroll;
}
table {
  min-width: 100px;
}
tr td:nth-child(1) {
  padding-left: 4px;
}

table tr:nth-child(1) {
  text-align: center;
}

table tr:nth-child(1) th {
  padding: 14px 4px;
}
</style>
