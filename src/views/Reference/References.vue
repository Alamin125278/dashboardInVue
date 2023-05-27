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
        Professional References
      </h4>
    </div>

    <div class="items-center justify-center my-7">
      <p class="text-center text-red-700">
        Please note that, reference will be contacted by icddr,b before an job
        offer can be made.
      </p>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/references/add-reference"
        >Add Referee</router-link
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
  name: "References",
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
          name: "Referee Type",
          key: "type",
        },

        {
          name: "Name",
          key: "nameOf",
        },
        {
          name: "Designation",
          key: "designation",
        },
        {
          name: "Address",
          key: "address",
        },
        {
          name: "Mobile NO.",
          key: "mobile",
        },
        {
          name: "Email.",
          key: "email",
        },
        {
          name: "Referee Relation	.",
          key: "relation",
        },
        {
          name: "Year Acquainted	",
          key: "year",
        },
      ],
      data: [
        {
          type: "Present supervisor	",
          nameOf: "Rahajul Amin Shuvo",
          designation: "Assistant Manager	",
          address:
            "387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh	",
          mobile: +8801718037192,
          email: "shuvo.it@hameemgroup.com	",
          relation: "Non Relative	",
          year: 7,
        },
      ],
    };
  },
  methods: {
    deleteData(data) {
      this.isModalOpen = true;
    },
    editData(data) {
      console.log("editing...", data);
    },
  },
};
</script>
