import { createRouter, createWebHistory } from "vue-router";
import PersonalModule from "../views/Personal/PersonalModule.vue";
import Personal from "../views/Personal/Personal.vue";
import EducationModule from "../views/Education/EducationModule.vue";
import AddEditEducation from "../views/Education/AddEditEducation.vue";
import AddEditThesis from "../views/Education/AddEditThesis.vue";
import Education from "../views/Education/Education.vue";
import EmploymentModule from "../views/Employment/EmploymentModule.vue";
import AddEditEmployment from "../views/Employment/AddEditEmployment.vue";
import Employment from "../views/Employment/Employment.vue";
import ProfessionalModule from "../views/Professional/ProfessionalModule.vue";
import AddEditProfessionalDegree from "../views/Professional/AddEditProfessionalDegree.vue";
import ProfessionalDegree from "../views/Professional/ProfessionalDegree.vue";
import TrainingModule from "../views/Training/TrainingModule.vue";
import Training from "../views/Training/Training.vue";
import AddEditTraining from "../views/Training/AddEditTraining.vue";
import LanguageModule from "../views/Languagess/LanguageModule.vue";
import AddEditLanguage from "../views/Languagess/AddEditLanguage.vue";
import Language from "../views/Languagess/Language.vue";
import ReferencesModule from "../views/Reference/ReferencesModule.vue";
import AddEditReference from "../views/Reference/AddEditReference.vue";
import References from "../views/Reference/References.vue";
import OthersModule from "../views/Others/othersModule.vue";
import AddEditOthers from "../views/Others/AddEditOthers.vue";
import AddEditPublication from "../views/Others/AddEditPublication.vue";
import AddEditMembers from "../views/Others/AddEditMembers.vue";
import Others from "../views/Others/others.vue";
const routes = [
  {
    path: "/",
    redirect: "/personal",
  },
  {
    path: "/personal",
    component: PersonalModule,
    children: [
      {
        path: "/personal/",
        component: Personal,
      },
    ],
  },
  {
    path: "/education",
    component: EducationModule,
    children: [
      {
        path: "/education",
        component: Education,
      },
      {
        path: "/education/add-education",
        component: AddEditEducation,
        name: "addEducation",
        props: {
          edit: false,
        },
      },
      {
        path: "/education/edit/:id",
        component: AddEditEducation,
        name: "editEducation",
        props: {
          edit: true,
        },
      },
      {
        path: "/education/add-thesis",
        component: AddEditThesis,
        name: "addThesis",
        props: {
          edit: false,
        },
      },
      {
        path: "/education/edit-thesis/:id",
        component: AddEditThesis,
        name: "editThesis",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/employment",
    component: EmploymentModule,
    children: [
      {
        path: "/employment",
        component: Employment,
      },
      {
        path: "/employment/add-employment",
        component: AddEditEmployment,
        name: "addEmployment",
        props: {
          edit: false,
        },
      },
      {
        path: "/employment/edit-employment/:id",
        component: AddEditEmployment,
        name: "editEmployment",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/professional",
    component: ProfessionalModule,
    children: [
      {
        path: "/professional",
        component: ProfessionalDegree,
      },
      {
        path: "/professional/add-professional-degree",
        component: AddEditProfessionalDegree,
        name: "addProfessionalDegree",
        props: {
          edit: false,
        },
      },
      {
        path: "/professional/edit-professional-degree/:id",
        component: AddEditProfessionalDegree,
        name: "editProfessionalDegree",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/training",
    component: TrainingModule,
    children: [
      {
        path: "/training",
        component: Training,
      },
      {
        path: "/training/add-training",
        component: AddEditTraining,
        name: "addTraining",
        props: {
          edit: false,
        },
      },
      {
        path: "/training/edit-training/:id",
        component: AddEditTraining,
        name: "editTraining",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/language",
    component: LanguageModule,
    children: [
      {
        path: "/language",
        component: Language,
      },
      {
        path: "/language/add-language",
        component: AddEditLanguage,
        name: "addLanguage",
        props: {
          edit: false,
        },
      },
      {
        path: "/language/edit-language/:id",
        component: AddEditLanguage,
        name: "editLanguage",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/references",
    component: ReferencesModule,
    children: [
      {
        path: "/references",
        component: References,
      },
      {
        path: "/references",
        component: References,
      },
      {
        path: "/references/add-reference",
        component: AddEditReference,
        name: "addReference",
        props: {
          edit: false,
        },
      },
      {
        path: "/references/edit-reference/:id",
        component: AddEditReference,
        name: "editReference",
        props: {
          edit: true,
        },
      },
    ],
  },
  {
    path: "/others",
    component: OthersModule,
    children: [
      {
        path: "/others",
        component: Others,
      },
      {
        path: "/others/add-others",
        component: AddEditOthers,
        name: "addOthers",
        props: {
          edit: false,
        },
      },
      {
        path: "/others/edit-others/:id",
        component: AddEditOthers,
        name: "editOthers",
        props: {
          edit: true,
        },
      },
      {
        path: "/others/add-publication",
        component: AddEditPublication,
        name: "addPublication",
        props: {
          edit: false,
        },
      },
      {
        path: "/others/add-members/:id",
        component: AddEditPublication,
        name: "editPublication",
        props: {
          edit: true,
        },
      },
      {
        path: "/others/add-members",
        component: AddEditMembers,
        name: "addMembers",
        props: {
          edit: false,
        },
      },
      {
        path: "/others/edit-members/:id",
        component: AddEditMembers,
        name: "editMembers",
        props: {
          edit: true,
        },
      },
    ],
  },
];
export default createRouter({
  history: createWebHistory("/"),
  routes,
});
