<script>
export default {
  name: "AddEditReference",
  props: {
    edit: Boolean,
  },
  data() {
    return {
      type: "",
      relation: "",
      Name: "",
      Designation: "",
      Address: "",
      Mobile: "",
      acquainted: "",
      Email: "",
    };
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        type: this.type,
        relation: this.relation,
        Name: this.Name,
        Designation: this.Designation,
        Address: this.Address,
        Mobile: this.Mobile,
        acquainted: this.acquainted,
        Email: this.Email,
      };
      console.log(saveDataDetails);
    },
    resetData(e) {
      e.preventDefault();
      [
        (this.type = ""),
        (this.relation = ""),
        (this.Name = ""),
        (this.Designation = ""),
        (this.Address = ""),
        (this.Mobile = ""),
        (this.acquainted = ""),
        (this.Email = ""),
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
        {{ edit == true ? "Edit" : "Add" }} Professional References
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Referee type:</label>
          <input
            v-model="type"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />relation
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Referee relation :</label
          >
          <input
            v-model="relation"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Name :</label>
          <input
            v-model="Name"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Designation :</label>
          <input
            v-model="Designation"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Address:</label>
          <textarea
            v-model="Address"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text-area"
          ></textarea>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Mobile No :</label>
          <input
            v-model="Mobile"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Years acquainted :</label
          >
          <input
            v-model="acquainted"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Email :</label>
          <input
            v-model="Email"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="email"
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
