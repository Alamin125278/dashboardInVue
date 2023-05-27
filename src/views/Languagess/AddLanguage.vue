<script>
export default {
  name: "AddLanguage",
  data() {
    return {
      language: "",
      speaking: "",
      understanding: "",
      reading: "",
      writing: "",
    };
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        language: this.language,
        speaking: this.speaking,
        understanding: this.understanding,
        reading: this.reading,
        writing: this.writing,
      };
      console.log(saveDataDetails);
    },
    resetData(e) {
      e.preventDefault();
      [
        (this.language = ""),
        (this.speaking = ""),
        (this.understanding = ""),
        (this.reading = ""),
        (this.writing = ""),
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
        Language
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Language:</label>
          <input
            v-model="language"
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Speaking ability :</label
          >
          <select
            v-model="speaking"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="speak">Please Select.</option>
            <option value="Sf">Fluent</option>
            <option value="Sm">Moderate</option>
            <option value="Sn">Non Fluent</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Understanding :</label>
          <select
            v-model="understanding"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="under">Please Select.</option>
            <option value="Uf">Fluent</option>
            <option value="Um">Moderate</option>
            <option value="Un">Non Fluent</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Reading ability :</label
          >
          <select
            v-model="reading"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="read">Please Select.</option>
            <option value="Rf">Fluent</option>
            <option value="Rm">Moderate</option>
            <option value="Rn">Non Fluent</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Writing ability:</label
          >
          <select
            v-model="writing"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="write">Please Select.</option>
            <option value="Wf">Fluent</option>
            <option value="Wm">Moderate</option>
            <option value="Wn">Non Fluent</option>
          </select>
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
