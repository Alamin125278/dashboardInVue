<script>
export default {
  name: "AddEditThesis",
  props: {
    edit: Boolean,
  },
  data() {
    return {
      level: "",
      Type: "",
      Title: "",
      Institute: "",
      duration: "",
    };
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        level: this.level,
        Type: this.Type,
        Title: this.Title,
        institute: this.institute,
        duration: this.duration,
      };
      console.log(saveDataDetails);
    },
    resetData(e) {
      e.preventDefault();
      [
        (this.level = ""),
        (this.Type = ""),
        (this.Title = ""),
        (this.institute = ""),
        (this.duration = ""),
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
        {{ edit == true ? "Edit" : "Add" }}
        Thesis/Project/Internship/Dissertation
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Degree level </label>
          <select
            v-model="level"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="select">Please Select</option>
            <option value="doctor">Doctorate</option>
            <option value="master">Masters or Equivalent</option>
            <option value="bachelor">Bachelors or Equivalent</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Type</label>
          <select
            v-model="Type"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="select">Please Select</option>
            <option value="thesis">Thesis</option>
            <option value="project">Project</option>
            <option value="Internship">Internship</option>
            <option value="dissertation">Dissertation</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Title</label>
          <input
            v-model="Title"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Institute</label>
          <input
            v-model="Institute"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Duration</label>
          <input
            v-model="duration"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
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
