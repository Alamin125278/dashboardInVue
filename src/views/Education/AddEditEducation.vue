<template>
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        {{ edit == true ? "Edit" : "Add" }} Educational Information
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Level [highest degree first] :</label
          >
          <input
            v-model="level"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Name of degree :</label
          >
          <input
            v-model="degree"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Years of schooling :</label
          >
          <input
            v-model="Years"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <div class="w-96 text-right"></div>
          <label class="ml-8 block py-1 mx-4 w-full" for="firstName"
            >Example: S.S.C = 10 years, H.S.C = 2 years, Bachelor(120 credit
            hours) = 3 years, Bachelor(160 credit hours) = 4 years, Masters (60
            credits) = 2 year etc
          </label>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Educational institute:</label
          >
          <input
            v-model="institute"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Passing Year :</label>
          <input
            v-model="Passing"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Result :</label>
          <select
            v-model="resultGradeSelect"
            class="border ml-2 border-gray-400 block py-1 mx-4 w-1/3 rounded-md focus:outline-none"
          >
            <option value="0">Please Select.</option>
            <option value="1">Grade</option>
            <option value="2">CGPA</option>
            <option value="3">Percentage</option>
          </select>
          <input
            v-model="resultGradeSelect"
            class="border ml-2 border-gray-400 block px-2 py-1 mx-4 w-1/3 rounded-md focus:outline-none"
            type="text"
          />
          <input
            v-if="resultGradeSelect == 2"
            class="border ml-2 border-gray-400 block px-2 py-1 mx-4 w-1/3 rounded-md focus:outline-none"
            type="text"
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

<script>
export default {
  name: "AddEducation",
  props: {
    edit: Boolean,
  },
  data() {
    return {
      level: "",
      degree: "",
      Years: "",
      institute: "",
      Passing: "",
      resultGradeSelect: "",
    };
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        level: this.level,
        degree: this.degree,
        Years: this.Years,
        institute: this.institute,
        Passing: this.Passing,
        resultGradeSelect: this.resultGradeSelect,
      };
      console.log(saveDataDetails);
    },
    resetData(e) {
      e.preventDefault();
      [
        (this.level = ""),
        (this.degree = ""),
        (this.Years = ""),
        (this.institute = ""),
        (this.Passing = ""),
        (this.resultGradeSelect = ""),
      ];
    },
  },
};
</script>

<style></style>
