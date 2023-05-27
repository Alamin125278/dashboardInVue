<script>
import DataTable from "../../components/DataTable.vue";
import Modal from "../../components/Modal.vue";
export default {
  components: { DataTable, Modal },
  name: "Education",
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
      newActionArray: [
        {
          name: "Edit",
          bg_class: "bg-green-800",
          emitName: "thesisEditData",
        },
        {
          name: "Delete",
          bg_class: "bg-red-800",
          emitName: "thesisDeleteData",
        },
      ],
      tableHeaders: [
        {
          name: "Level of Education",
          key: "level",
        },
        {
          name: "Name of Degree",
          key: "degree",
        },
        {
          name: "Educational Institute",
          key: "institute",
        },
        {
          name: "Passing Year",
          key: "year",
        },
        {
          name: "Class/CGPA/ Grade/ Percentage",
          key: "grade",
        },
        {
          name: "Discipline",
          key: "discipline",
        },
        {
          name: "Specialization",
          key: "specialization",
        },
      ],

      newTableHeaders: [
        {
          name: "Degree level",
          key: "level",
        },
        {
          name: "Type",
          key: "type",
        },
        {
          name: "Title",
          key: "title",
        },
        {
          name: "Institute",
          key: "institute",
        },
        {
          name: "Duration",
          key: "duration",
        },
      ],
      newData: [
        {
          level: "Masters or Equivalent",
          type: "Project",
          title: "Algorithm simulation",
          institute: "Jashore University of Science and Technology	",
          duration: "6 Month",
        },
        {
          level: "Bachelors or Equivalent",
          type: "Project",
          title: "Result Processing (Web Based System)	",
          institute: "Dhaka International University		",
          duration: "4 Month",
        },
      ],
      data: [
        {
          level: "Bachelors or Equivalent",
          degree: "BSC",
          institute: "Dhaka International University (DIU)",
          year: "2016",
          grade: "CGPA: 2.90 out of 4",
          discipline: "Engineering/ Technology/ Applied Science",
          specialization: "Computer Science & Engineering",
        },
        {
          level: "Diploma",
          degree: "Diploma",
          institute: "Sherpur Polytechnic Institute(SPI)",
          year: "2008",
          grade: "CGPA: 3.07 out of 4",
          discipline: "Engineering/ Technology/ Applied Science",
          specialization: "Computer Science & Engineering",
        },
      ],
    };
  },
  methods: {
    deleteData(data) {
      this.isModalOpen = true;
    },
    editData(data) {
      console.log("editing...", data.level);
      this.$router.push({ name: "editEducation", params: { id: 1 } });
    },
    thesisDeleteData(data) {
      console.log(this.data);
    },
    thesisEditData(data) {
      this.isModalOpen = true;
    },
  },
};
</script>

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
  <div class="mx-2">
    <div class="border">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Academic Qualification
      </h4>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/education/add-education"
        >Add Education</router-link
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
    <data-table
      :headers="newTableHeaders"
      :dataList="newData"
      :actionArray="newActionArray"
      isSerialNoShow
      isActionShow
      @deleteData="deleteData"
      @editData="editData"
    />
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/education/add-thesis"
        >Thesis/Project/Internship/Dissertation</router-link
      >
    </div>
    <data-table
      :headers="newTableHeaders"
      :dataList="newData"
      :actionArray="actionArray"
      isSerialNoShow
      isActionShow
      @thesisDeleteData="thesisDeleteData"
      @thesisEditData="thesisEditData"
    />
  </div>
</template>
