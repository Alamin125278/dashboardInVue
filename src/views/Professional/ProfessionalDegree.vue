<template>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="isModalOpen">
      <template #header>
        <h3 class="text-red-700">Really you want to delete this document?</h3>
      </template>
      <template #body>
        <div>
          <button
            class="px-3 py-2 rounded-md bg-red-800 text-white hover:bg-red-400 duration-300 hover:text-black"
          >
            Yes</button
          ><button
            @click="isModalOpen = false"
            class="px-3 py-2 rounded-md bg-green-800 text-white hover:bg-green-400 duration-300 hover:text-black ml-3"
          >
            No
          </button>
        </div>
      </template>
    </modal>
  </Teleport>
  <div class="mx-2 my-5">
    <div class="border">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Professional Degree
      </h4>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/professional/add-professional-degree"
        >Add Professional Degree</router-link
      >
    </div>

    <data-table
      :headers="tableHeaders"
      :dataList="data"
      :actionArray="actionArray"
      isSerialNoShow
      isActionShow
      @deleteData="deleteData"
      @editData="editData"
    />
  </div>
</template>
<script>
import DataTable from "../../components/DataTable.vue";
import Modal from "../../components/Modal.vue";
export default {
  components: {
    DataTable,
    Modal,
  },
  name: "ProfessionalDegree",
  data() {
    return {
      isModalOpen: false,
      actionArray: [
        {
          name: "Edit",
          bg_class: "bg-green-800",
          emitName: "editData",
        },
        {
          name: "Delete",
          bg_class: "bg-red-800",
          emitName: "deleteData",
        },
      ],
      tableHeaders: [
        {
          name: "Name of Professional Degree",
          key: "degree",
        },

        {
          name: "Educational Institute",
          key: "institute",
        },
        {
          name: "Duration",
          key: "duration",
        },
        {
          name: "Class/CGPA/ Grade/ Percentage",
          key: "grade",
        },
        {
          name: "Major/Area",
          key: "area",
        },
      ],
      data: [
        {
          degree: "LICT Certification Course",
          institute: "onAir International Ltd.",
          duration: "6 Month",
          grade: "A+",
          area: "iOS Application Development",
        },
        {
          degree: "SEIP Certification Course",
          institute: "PONDIT",
          duration: "2 Month",
          grade: "A+",
          area: "Big Data, Data Analysis and Data Science",
        },
      ],
    };
  },
  methods: {
    deleteData(data) {
      this.isModalOpen = true;
      console.log(data);
    },
    editData(data) {
      console.log("editing...", data);
    },
  },
};
</script>
