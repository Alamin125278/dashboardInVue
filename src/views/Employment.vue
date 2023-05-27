<template>
  <!-- <div class="employment-table">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="">
            <table class="">
              <tbody>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Total year of experience:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap"
                  >
                    9.89 Years
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Current Employment:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  ></td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button
                      @click="saveData"
                      class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
                    >
                      Edit
                    </button>
                    <button
                      @click="saveData"
                      class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Name of organization:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Ha-Meem Group
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Type of organization:
                  </td>
                  <td
                    colspan="2"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Private company
                  </td>
                </tr>

                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Address of organization:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
                  </td>
                </tr>

                <tr class="bg-white border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Designation:
                  </td>
                  <td
                    colspan="2"
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Senior Software Engineer
                  </td>
                </tr>

                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Major responsibilities:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Ha-Meem Group is being developing Enterprise resource
                    planning (ERP) system for manage their all information
                    digitally. As a senior software engineer, I am responsible
                    for requirement collection, design, analysis and collect
                    functional requirements. In here I am to ready software
                    requirement specification (SRS) document, data flaw diagram
                    (DFD), Entity relationship (E-R) diagram also porotype
                    design. Developing and maintaining applications: I am
                    proficient in developing applications including web
                    applications, desktop applications, and mobile applications.
                    Troubleshooting and debugging: As a senior .software
                    engineer, I am to troubleshoot and debug complex problems in
                    applications and provide solutions to fix them. Code review
                    and testing: I am able to review and test the code developed
                    by other programmers in my team to ensure that it meets the
                    company's quality standards. Collaborating with other teams:
                    I am to work with other teams such as designers, quality
                    assurance engineers, and project managers to ensure that the
                    project is completed on time and within budget. Keeping
                    up-to-date with new technologies and tools: I always aware
                    of the latest technologies and tools and keep my skills
                    up-to-date by attending conferences, workshops, and training
                    programs. Leading and mentoring junior programmers: I am
                    responsible for mentoring junior programmers and guiding
                    them in their professional growth. Communicating with
                    stakeholders: I need to communicate with stakeholders such
                    as clients, project managers, and business analysts to
                    understand their requirements and provide updates on the
                    progress of the project. After developing, I have to ready
                    production server for implementation. I am familiar with
                    windows, Linux both for deployment. I have been working
                    since 2014 with Relational Database management system
                    (RDBMS) like MS SQL Server version 2008 to current 2019 also
                    experience MySQL, SQLite, and Oracle.
                  </td>
                </tr>

                <tr class="bg-white border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Designation:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Senior Software Engineer
                  </td>
                </tr>

                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Address of organization:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
                  </td>
                </tr>

                <tr class="bg-white border-b">
                  <td
                    class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Designation:
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    Senior Software Engineer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div>
    <table>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          9.89 Years
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Current Employment:
          </div>
        </td>
        <td width="20%"></td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
          >
            Edit
          </button>
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
          >
            Delete
          </button>
        </td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Ha-Meem Group
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Type of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Private company
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Address of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Designation:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Senior Software Engineer
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td width="20%" class="font-light text-md text-gray-800 px-6 py-4">
          Ha-Meem Group is being developing Enterprise resource planning (ERP)
          system for manage their all information digitally. As a senior
          software engineer, I am responsible for requirement collection,
          design, analysis and collect functional requirements. In here I am to
          ready software requirement specification (SRS) document, data flaw
          diagram (DFD), Entity relationship (E-R) diagram also porotype design.
          Developing and maintaining applications: I am proficient in developing
          applications including web applications, desktop applications, and
          mobile applications. Troubleshooting and debugging: As a senior
          .software engineer, I am to troubleshoot and debug complex problems in
          applications and provide solutions to fix them. Code review and
          testing: I am able to review and test the code developed by other
          programmers in my team to ensure that it meets the company's quality
          standards. Collaborating with other teams: I am to work with other
          teams such as designers, quality assurance engineers, and project
          managers to ensure that the project is completed on time and within
          budget. Keeping up-to-date with new technologies and tools: I always
          aware of the latest technologies and tools and keep my skills
          up-to-date by attending conferences, workshops, and training programs.
          Leading and mentoring junior programmers: I am responsible for
          mentoring junior programmers and guiding them in their professional
          growth. Communicating with stakeholders: I need to communicate with
          stakeholders such as clients, project managers, and business analysts
          to understand their requirements and provide updates on the progress
          of the project. After developing, I have to ready production server
          for implementation. I am familiar with windows, Linux both for
          deployment. I have been working since 2014 with Relational Database
          management system (RDBMS) like MS SQL Server version 2008 to current
          2019 also experience MySQL, SQLite, and Oracle.
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of supervisor:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Rahajul Amin Shuvo
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Salary:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          TK 72585.0
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Date of joining:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
    </table>
    <table>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Previous Employment #1:
          </div>
        </td>
        <td width="20%"></td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
          >
            Edit
          </button>
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
          >
            Delete
          </button>
        </td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Ha-Meem Group
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Type of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Private company
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Address of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Designation:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Senior Software Engineer
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td width="20%" class="font-light text-md text-gray-800 px-6 py-4">
          Ha-Meem Group is being developing Enterprise resource planning (ERP)
          system for manage their all information digitally. As a senior
          software engineer, I am responsible for requirement collection,
          design, analysis and collect functional requirements. In here I am to
          ready software requirement specification (SRS) document, data flaw
          diagram (DFD), Entity relationship (E-R) diagram also porotype design.
          Developing and maintaining applications: I am proficient in developing
          applications including web applications, desktop applications, and
          mobile applications. Troubleshooting and debugging: As a senior
          .software engineer, I am to troubleshoot and debug complex problems in
          applications and provide solutions to fix them. Code review and
          testing: I am able to review and test the code developed by other
          programmers in my team to ensure that it meets the company's quality
          standards. Collaborating with other teams: I am to work with other
          teams such as designers, quality assurance engineers, and project
          managers to ensure that the project is completed on time and within
          budget. Keeping up-to-date with new technologies and tools: I always
          aware of the latest technologies and tools and keep my skills
          up-to-date by attending conferences, workshops, and training programs.
          Leading and mentoring junior programmers: I am responsible for
          mentoring junior programmers and guiding them in their professional
          growth. Communicating with stakeholders: I need to communicate with
          stakeholders such as clients, project managers, and business analysts
          to understand their requirements and provide updates on the progress
          of the project. After developing, I have to ready production server
          for implementation. I am familiar with windows, Linux both for
          deployment. I have been working since 2014 with Relational Database
          management system (RDBMS) like MS SQL Server version 2008 to current
          2019 also experience MySQL, SQLite, and Oracle.
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of supervisor:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Rahajul Amin Shuvo
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Salary:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          TK 72585.0
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Date of joining:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            End Date:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
    </table>
    <table>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Previous Employment #2:
          </div>
        </td>
        <td width="20%"></td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
          >
            Edit
          </button>
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
          >
            Delete
          </button>
        </td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Ha-Meem Group
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Type of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Private company
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Address of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Designation:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Senior Software Engineer
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td width="20%" class="font-light text-md text-gray-800 px-6 py-4">
          Ha-Meem Group is being developing Enterprise resource planning (ERP)
          system for manage their all information digitally. As a senior
          software engineer, I am responsible for requirement collection,
          design, analysis and collect functional requirements. In here I am to
          ready software requirement specification (SRS) document, data flaw
          diagram (DFD), Entity relationship (E-R) diagram also porotype design.
          Developing and maintaining applications: I am proficient in developing
          applications including web applications, desktop applications, and
          mobile applications. Troubleshooting and debugging: As a senior
          .software engineer, I am to troubleshoot and debug complex problems in
          applications and provide solutions to fix them. Code review and
          testing: I am able to review and test the code developed by other
          programmers in my team to ensure that it meets the company's quality
          standards. Collaborating with other teams: I am to work with other
          teams such as designers, quality assurance engineers, and project
          managers to ensure that the project is completed on time and within
          budget. Keeping up-to-date with new technologies and tools: I always
          aware of the latest technologies and tools and keep my skills
          up-to-date by attending conferences, workshops, and training programs.
          Leading and mentoring junior programmers: I am responsible for
          mentoring junior programmers and guiding them in their professional
          growth. Communicating with stakeholders: I need to communicate with
          stakeholders such as clients, project managers, and business analysts
          to understand their requirements and provide updates on the progress
          of the project. After developing, I have to ready production server
          for implementation. I am familiar with windows, Linux both for
          deployment. I have been working since 2014 with Relational Database
          management system (RDBMS) like MS SQL Server version 2008 to current
          2019 also experience MySQL, SQLite, and Oracle.
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of supervisor:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Rahajul Amin Shuvo
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Salary:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          TK 72585.0
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Date of joining:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            End Date:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
    </table>
    <table>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Previous Employment #3:
          </div>
        </td>
        <td width="20%"></td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
          >
            Edit
          </button>
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
          >
            Delete
          </button>
        </td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Ha-Meem Group
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Type of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Private company
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Address of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Designation:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Senior Software Engineer
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td width="20%" class="font-light text-md text-gray-800 px-6 py-4">
          Ha-Meem Group is being developing Enterprise resource planning (ERP)
          system for manage their all information digitally. As a senior
          software engineer, I am responsible for requirement collection,
          design, analysis and collect functional requirements. In here I am to
          ready software requirement specification (SRS) document, data flaw
          diagram (DFD), Entity relationship (E-R) diagram also porotype design.
          Developing and maintaining applications: I am proficient in developing
          applications including web applications, desktop applications, and
          mobile applications. Troubleshooting and debugging: As a senior
          .software engineer, I am to troubleshoot and debug complex problems in
          applications and provide solutions to fix them. Code review and
          testing: I am able to review and test the code developed by other
          programmers in my team to ensure that it meets the company's quality
          standards. Collaborating with other teams: I am to work with other
          teams such as designers, quality assurance engineers, and project
          managers to ensure that the project is completed on time and within
          budget. Keeping up-to-date with new technologies and tools: I always
          aware of the latest technologies and tools and keep my skills
          up-to-date by attending conferences, workshops, and training programs.
          Leading and mentoring junior programmers: I am responsible for
          mentoring junior programmers and guiding them in their professional
          growth. Communicating with stakeholders: I need to communicate with
          stakeholders such as clients, project managers, and business analysts
          to understand their requirements and provide updates on the progress
          of the project. After developing, I have to ready production server
          for implementation. I am familiar with windows, Linux both for
          deployment. I have been working since 2014 with Relational Database
          management system (RDBMS) like MS SQL Server version 2008 to current
          2019 also experience MySQL, SQLite, and Oracle.
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of supervisor:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Rahajul Amin Shuvo
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Salary:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          TK 72585.0
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Date of joining:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            End Date:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
    </table>
    <table>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Previous Employment #4:
          </div>
        </td>
        <td width="20%"></td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-green-500 p-2 text-white hover:bg-green-100 hover:text-black duration-500"
          >
            Edit
          </button>
          <button
            @click="saveData"
            class="mx-5 rounded-md bg-red-500 p-2 text-white hover:bg-red-100 hover:text-black duration-500"
          >
            Delete
          </button>
        </td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Ha-Meem Group
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Type of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Private company
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Address of organization:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          387 (South), Tejgaon Industrial Area Dhaka-1208, Bangladesh
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Designation:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Senior Software Engineer
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Total year of experience:
          </div>
        </td>
        <td width="20%" class="font-light text-md text-gray-800 px-6 py-4">
          Ha-Meem Group is being developing Enterprise resource planning (ERP)
          system for manage their all information digitally. As a senior
          software engineer, I am responsible for requirement collection,
          design, analysis and collect functional requirements. In here I am to
          ready software requirement specification (SRS) document, data flaw
          diagram (DFD), Entity relationship (E-R) diagram also porotype design.
          Developing and maintaining applications: I am proficient in developing
          applications including web applications, desktop applications, and
          mobile applications. Troubleshooting and debugging: As a senior
          .software engineer, I am to troubleshoot and debug complex problems in
          applications and provide solutions to fix them. Code review and
          testing: I am able to review and test the code developed by other
          programmers in my team to ensure that it meets the company's quality
          standards. Collaborating with other teams: I am to work with other
          teams such as designers, quality assurance engineers, and project
          managers to ensure that the project is completed on time and within
          budget. Keeping up-to-date with new technologies and tools: I always
          aware of the latest technologies and tools and keep my skills
          up-to-date by attending conferences, workshops, and training programs.
          Leading and mentoring junior programmers: I am responsible for
          mentoring junior programmers and guiding them in their professional
          growth. Communicating with stakeholders: I need to communicate with
          stakeholders such as clients, project managers, and business analysts
          to understand their requirements and provide updates on the progress
          of the project. After developing, I have to ready production server
          for implementation. I am familiar with windows, Linux both for
          deployment. I have been working since 2014 with Relational Database
          management system (RDBMS) like MS SQL Server version 2008 to current
          2019 also experience MySQL, SQLite, and Oracle.
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Name of supervisor:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          Rahajul Amin Shuvo
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Salary:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          TK 72585.0
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-white border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Date of joining:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
      <tr class="bg-gray-200 border-b">
        <td width="20%">
          <div
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            End Date:
          </div>
        </td>
        <td
          width="20%"
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          20 Feb 2019
        </td>
        <td width="20%"></td>
        <td width="20%"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Employment",
};
</script>

<style>
table {
  width: 100%;
}

tr td:nth-child(1) {
  height: 100%;
  position: relative;
}

tr td:nth-child(1) div {
  position: absolute;
  top: 0;
}

td div {
  width: 100%;
}
</style>
