<script>
import DataTable from "../../components/DataTable.vue";
import Modal from "../../components/Modal.vue";
export default {
  components: {
    DataTable,
    Modal,
  },
  name: "others",
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
      publicationActionArray: [
        {
          name: "Edit",
          bg_class: "bg-green-800",
          emitName: "publicEditData",
        },
        {
          name: "Delete",
          bg_class: "bg-red-800",
          emitName: "publicDeleteData",
        },
      ],
      memberActionArray: [
        {
          name: "Edit",
          bg_class: "bg-green-800",
          emitName: "memberEditData",
        },
        {
          name: "Delete",
          bg_class: "bg-red-800",
          emitName: "memberDeleteData",
        },
      ],
      tableHeaders: [
        {
          name: "Name",
          key: "name",
        },

        {
          name: "Designation",
          key: "designation",
        },
        {
          name: "Unit",
          key: "unit",
        },
        {
          name: "Relative type	",
          key: "type",
        },
      ],
      memberTableHeaders: [
        {
          name: "Name",
          key: "name",
        },

        {
          name: "Membership/Role",
          key: "role",
        },
        {
          name: "From",
          key: "from",
        },
        {
          name: "To	",
          key: "to",
        },
        {
          name: "Description	",
          key: "description",
        },
      ],
      publicTableHeaders: [
        {
          name: "Title",
          key: "title",
        },

        {
          name: "Date",
          key: "date",
        },
        {
          name: "Authors",
          key: "authors",
        },
        {
          name: "Description	",
          key: "description",
        },
      ],
      data: [
        {
          name: "Rahajul Amin Shuvo",
          designation: "Senior Software Engineer	",
          unit: "Present supervisor",
          type: "Non Relative",
        },
      ],
      publicData: [
        {
          title: "Github",
          date: "12 May 2023",
          authors: "https://github.com/",
          description: "Non Relative",
        },
      ],
      memberData: [
        {
          name: "Rahajul Amin Shuvo",
          role: "Senior Software Engineer	",
          from: " 22 Aug 2020",
          to: "19 Dem 2022",
          description: "Non Relative",
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
      this.$router.push({ name: "editOthers", params: { id: 1 } });
    },
    publicEditData(data) {
      this.$router.push({ name: "editPublication", params: { id: 1 } });
    },
    publicDeleteData(data) {
      this.isModalOpen = true;
    },
    memberEditData(data) {
      this.$router.push({ name: "editMembers", params: { id: 1 } });
    },
    memberDeleteData(data) {
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
  <div class="mx-2 my-5">
    <div class="border">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Other Information
      </h4>
    </div>
    <div class="my-5 py-5 bg-gray-200 rounded-md">
      <h2 class="px-5 font-bold">Relative(s) currently working with icddr,b</h2>
      <p class="px-5 text-slate-500">
        (parent, spouse, child, sibling, uncle/aunt, nephew/niece, cousin,
        in-laws, etc.)
      </p>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/others/add-others"
        >Add Relative
      </router-link>
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
    <div class="my-5 py-5 bg-gray-200 rounded-md">
      <h2 class="px-5 font-bold">Publication(s)</h2>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/others/add-publication"
        >Add Publication
      </router-link>
    </div>
    <data-table
      :headers="publicTableHeaders"
      :dataList="publicData"
      :actionArray="publicationActionArray"
      isSerialNoShow
      isActionShow
      @publicDeleteData="publicDeleteData"
      @publicEditData="publicEditData"
    />
    <div class="my-5 py-5 bg-gray-200 rounded-md">
      <h2 class="px-5 font-bold">Professional Membership</h2>
    </div>
    <div class="my-5">
      <router-link
        class="px-5 py-3 my-5 bg-cyan-500 rounded-lg text-white duration-500 hover:text-black hover:bg-cyan-100"
        to="/others/add-members"
        >Add Membership
      </router-link>
    </div>
    <data-table
      :headers="memberTableHeaders"
      :dataList="memberData"
      :actionArray="memberActionArray"
      isSerialNoShow
      isActionShow
      @memberDeleteData="memberDeleteData"
      @memberEditData="memberEditData"
    />
  </div>
</template>
