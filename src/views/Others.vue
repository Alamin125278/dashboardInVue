<template>
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Relative Information
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Name:</label>
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
          <label class="w-96 text-right" for="firstName">Unit :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Relative type :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
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
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Publication(s)
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Title:</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Designation :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="date"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">URL :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Authors :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Description :</label>
          <textarea
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          ></textarea>
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
  <div class="bg-gray-50">
    <div class="border ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Professional Membership(s)
      </h4>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"> Organization:</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName"
            >Membership/Role :</label
          >
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">From :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="date"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">To :</label>
          <input
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="date"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">Description :</label>
          <textarea
            class="border ml-8 border-gray-400 block px-2 py-1 mx-4 w-full rounded-md focus:outline-none"
            type="date"
          ></textarea>
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

<script>
export default {
  name: "Others",
};
</script>
