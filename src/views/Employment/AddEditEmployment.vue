<script>
export default {
  name: "AddEditEmployment",
  props: {
    edit: Boolean,
  },
  data() {
    return {
      icddr: "",
      name: "",
      type: "",
      address: "",
      designations: "",
      major: "",
      start: "",
      end: "",
      supervisor: "",
      telephone: "",
      BDT: "TK",
      salary: "",
    };
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        icddr: this.icddr,
        name: this.name,
        type: this.type,
        address: this.address,
        designations: this.designations,
        major: this.major,
        start: this.start,
        end: this.end,
        supervisor: this.supervisor,
        telephone: this.telephone,
        salary: this.salary,
        BDT: this.BDT,
      };
      console.log(saveDataDetails);
    },
    resetData(e) {
      e.preventDefault();
      [
        (this.icddr = ""),
        (this.name = ""),
        (this.type = ""),
        (this.address = ""),
        (this.designations = ""),
        (this.major = ""),
        (this.start = ""),
        (this.end = ""),
        (this.supervisor = ""),
        (this.telephone = ""),
        (this.BDT = ""),
        (this.salary = ""),
      ];
    },
  },
};
</script>
<template>
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        {{ edit == true ? "Edit" : "Add" }} Employment Details
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">
            Are you currently working with icddr,b?</label
          >
          <select
            v-model="icddr"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="1">Please Select.</option>
            <option value="2">Yes</option>
            <option value="3">No</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Name of organization</label
          >
          <input
            v-model="name"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Type of organization</label
          >
          <select
            v-model="type"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="1">Please Select.</option>
            <option value="2">Government organization</option>
            <option value="3">International</option>
            <option value="4">Multinational</option>
            <option value="5">Others</option>
            <option value="6">Private company</option>
            <option value="7">Public limited company</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Address of organization</label
          >
          <textarea
            v-model="address"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          ></textarea>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Your designations</label
          >
          <input
            v-model="designations"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Major responsibilities</label
          >
          <textarea
            v-model="major"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          ></textarea>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Start Date</label>
          <input
            v-model="start"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="date"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">End Date</label>
          <input
            v-model="end"
            class="border ml-5 border-gray-400 block px-2 py-1 mx-2 w-7/12 rounded-md focus:outline-none"
            type="date"
          />
          <input class="px-2 py-1 mx-4" type="checkbox" />
          <label class="w-1/3 text-left" for="firstName">Til Date</label>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Name of supervisor</label
          >
          <input
            v-model="supervisor"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Telephone of supervisor</label
          >
          <input
            v-model="telephone"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Your monthly salary</label
          >
          <input
            v-model="BDT"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-1/3 rounded-md focus:outline-none"
            type="text"
          />
          <input
            v-model="salary"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-7/12 rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="px-4 mx-4 flex justify-center">
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-cyan-500 p-2 text-white hover:bg-cyan-100 hover:text-black duration-500"
          >
            Save
          </button>
          <button
            @click="resetData"
            class="mx-5 rounded-md bg-cyan-500 text-white p-2 hover:bg-cyan-100 hover:text-black duration-500"
          >
            Reset
          </button>
          <button
            class="mx-5 rounded-md bg-red-900 p-2 text-white hover:bg-cyan-100 hover:text-black duration-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
