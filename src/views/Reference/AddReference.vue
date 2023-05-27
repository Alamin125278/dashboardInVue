<script>
export default {
  name: "AddReference",
};
</script>
<template>
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Professional References
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Referee type:</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Referee relation :</label
          >
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Name :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Designation :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Address:</label>
          <textarea
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text-area"
          ></textarea>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Mobile No :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Years acquainted :</label
          >
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Email :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="email"
          />
        </div>
        <div class="px-4 mx-4 flex justify-center">
          <button
            class="mx-5 rounded-md bg-cyan-500 p-2 text-white hover:bg-cyan-100 hover:text-black duration-500"
          >
            Save
          </button>
          <button
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
