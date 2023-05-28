<script>
import countryList from "../../util/countries";
import districts from "../../util/district";
import thanas from "../../util/thana";
export default {
  name: "Personal",
  data() {
    return {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      email: "",
      altEmail: "",
      district: "",
      thana: "",
      postCode: "",
      mailAddressLine: "",
      perCountry: "",
      perDistrict: "",
      perThana: "",
      perPostCode: "",
      permanentAddressLine: "",
      telephoneWrk: "",
      telephoneRes: "",
      mobileNo: "",
      altMob: "",
      nationality: "",
      nationalId: "",
      passportNo: "",
      birth: "",
      countryOfOrigin: "",
      birthReg: "",
      eTin: "",
      candidate: "",
      sex: "",
      blood: "",
      join: "",
      icddr: "",
      country: "",
      countries: countryList,
      districts: districts,
      thanas: thanas,
    };
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      let saveDataDetails = {
        title: this.title,
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        fatherName: this.fatherName,
        motherName: this.motherName,
        email: this.email,
        altEmail: this.altEmail,
        perCountry: this.perCountry,
        perDistrict: this.perDistrict,
        perThana: this.perThana,
        perPostCode: this.postCode,
        permanentAddressLine: this.permanentAddressLine,
        telephoneWrk: this.telephoneWrk,
        telephoneRes: this.telephoneRes,
        mobileNo: this.mobileNo,
        altMob: this.altMob,
        nationality: this.nationality,
        nationalId: this.nationalId,
        passportNo: this.passportNo,
        birth: this.birth,
        countryOfOrigin: this.countryOfOrigin,
        birthReg: this.birthReg,
        eTin: this.eTin,
        candidate: this.candidate,
        sex: this.sex,
        blood: this.blood,
        join: this.join,
        icddr: this.icddr,
        country: this.country,
        district: this.district,
        thana: this.thana,
        postCode: this.postCode,
        mailAddressLine: this.mailAddressLine,
      };
      console.log(saveDataDetails);
    },
    resetData() {
      [
        (this.title = ""),
        (this.firstName = ""),
        (this.middleName = ""),
        (this.lastName = ""),
        (this.fatherName = ""),
        (this.motherName = ""),
        (this.email = ""),
        (this.altEmail = ""),
        (this.district = ""),
        (this.thana = ""),
        (this.postCode = ""),
        (this.mailAddressLine = ""),
        (this.perCountry = ""),
        (this.perDistrict = ""),
        (this.perThana = ""),
        (this.perPostCode = ""),
        (this.permanentAddressLine = ""),
        (this.telephoneWrk = ""),
        (this.telephoneRes = ""),
        (this.mobileNo = ""),
        (this.altMob = ""),
        (this.nationality = ""),
        (this.nationalId = ""),
        (this.passportNo = ""),
        (this.birth = ""),
        (this.countryOfOrigin = ""),
        (this.birthReg = ""),
        (this.eTin = ""),
        (this.candidate = ""),
        (this.sex = ""),
        (this.blood = ""),
        (this.join = ""),
        (this.icddr = ""),
        (this.country = ""),
      ];
    },
  },
};
</script>

<template>
  <div class="bg-gray-50">
    <div class="border sm:ml-8 mx-2">
      <h4
        class="w-full h-10 bg-cyan-500 flex items-center text-white p-4 rounded-md"
      >
        Personal Information
      </h4>
      <p class="p-4">
        Your name is an important information. Please make sure this is written
        correctly as written on your
        <span class="text-red-800">NID/Passport/Birth Certificate</span>. This
        will be <br />
        printed in all the future documents and communications. Also, please
        ensure appropriate forms of upper case/lower case. <br />
        Example of
        <span class="text-lime-600">correct format: Md. Sohel Rana</span> <br />
        Examples of
        <span class="text-rose-600"
          >incorrect format: MD. SOHEL RANA, md. sohel rana, MD. SOHEL Rana, MD.
          Sohel Rana</span
        >
      </p>
    </div>
    <div class="w-full">
      <form class="my-5 max-w-screen-2xl mx-auto space-y-6 px-10">
        <div class="flex items-center">
          <label class="w-96 text-right">Title :</label>

          <select
            v-model="title"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
            <option value="dr">Dr.</option>
            <option value="prof">Prof.</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="firstName">First name :</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="firstName"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="middlename">Middle Name</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="middleName"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="lastname">Last Name</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="lastName"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="father'sName"
            >Father's Name</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="fatherName"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="Mother'sName"
            >Mother's Name</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="motherName"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="email">Email address</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="email"
            v-model="email"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="altEmail"
            >Alternate e-mail address</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="altEmail"
          />
        </div>
        <div>
          <span class="my-5 text-right">Present/Mailing address</span>
        </div>

        <div class="flex items-center">
          <label class="w-96 text-right" for="country">Country</label>
          <select
            v-model="country"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="c" v-for="(c, index) of countries" :key="index">
              {{ c }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="district">District</label>
          <select
            v-model="district"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="d" v-for="(d, index) of districts" :key="index">
              {{ d }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="thana">Thana</label>
          <select
            v-model="thana"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="t.id" v-for="(t, index) of thanas" :key="index">
              {{ t.name }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="PostCode">Post code</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="postCode"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="mailAddressLine"
            >Mailing address line 1</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="mailAddressLine"
          />
        </div>
        <div class="flex">
          <label class="w-96 text-right block"
            >Check if permanent address is same as mailing address</label
          >
          <div class="w-full">
            <input class="ml-8 py-1 mx-4" type="checkbox" />
          </div>
        </div>
        <span>Permanent address</span>
        <div class="flex items-center">
          <label class="w-96 text-right" for="perCountry">Country</label>
          <select
            v-model="perCountry"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="pc" v-for="(pc, index) of countries" :key="index">
              {{ pc }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="perDistrict">District</label>
          <select
            v-model="perDistrict"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="di" v-for="(di, index) of districts" :key="index">
              {{ di }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="perTHana">Thana</label>
          <select
            v-model="perThana"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="th.id" v-for="(th, index) of thanas" :key="index">
              {{ th.name }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="perPost">Post code</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="perPostCode"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="permanentAdd"
            >Permanent address line 1</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="permanentAddressLine"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="telephoneWrk"
            >Telephone(work)</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="telephoneWrk"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="telephoneRes"
            >Telephone(residence)</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="telephoneRes"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="mobileNo">Mobile no.</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            v-model.number="mobileNo"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="altMbl"
            >Alternate mobile no.</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="altMob"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="nationality">Nationality</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="nationality"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="nationalId">National id</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="nationalId"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="passportNo">Passport no</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="passportNo"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="birth">Date of birth</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="birth"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="countryOrigin"
            >Country of origin</label
          >
          <select
            v-model="countryOfOrigin"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option :value="co" v-for="(co, index) of countries" :key="index">
              {{ co }}
            </option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="birthReg"
            >Birth registration no</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="birthReg"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="eTin">E-TIN</label>
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="text"
            v-model="eTin"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="candidate">Candidate type</label>
          <select
            v-model="candidate"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="physician">Physician</option>
            <option value="nurse">Nurse.</option>
            <option value="assistant">Medical Assistant.</option>
            <option value="others">Others.</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="sex">Sex</label>
          <select
            v-model="sex"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female.</option>
            <option value="others">Others.</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="blood">Blood group</label>
          <select
            v-model="blood"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
            <option value="ab+">AB-</option>
            <option value="ab-">AB-</option>
          </select>
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="join"
            >Notice require for joining [In days]</label
          >
          <input
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
            type="number"
            v-model="join"
          />
        </div>
        <div class="flex items-center">
          <label class="w-96 text-right" for="icddr"
            >Have you ever worked or currently working with icddr,b?</label
          >
          <select
            v-model="icddr"
            class="border ml-8 border-gray-400 block py-1 mx-4 w-full rounded-md focus:outline-none"
          >
            <option value="yes">Yes</option>
            <option value="no">No.</option>
          </select>
        </div>
        <div class="flex">
          <div class="w-96"></div>
          <img
            class="h-16 w-16 object-cover rounded-full"
            src=""
            alt="Current profile photo"
          />
        </div>
        <div class="flex">
          <div class="w-96"></div>
          <div>
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </div>
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
