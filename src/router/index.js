import { createRouter, createWebHistory } from "vue-router";
import PersonalModule from "../views/Personal/PersonalModule.vue";
import Personal from "../views/Personal/Personal.vue";
import EducationModule from "../views/Education/EducationModule.vue";
import AddEditEducation from "../views/Education/AddEditEducation.vue";
import AddThesis from "../views/Education/AddThesis.vue";
import Education from "../views/Education/Education.vue";
import Employment from "../views/Employment.vue";
import ProfessionalModule from "../views/Professional/ProfessionalModule.vue";
import AddProfessionalDegree from "../views/Professional/AddProfessionalDegree.vue";
import ProfessionalDegree from "../views/Professional/ProfessionalDegree.vue";
import TrainingModule from "../views/Training/TrainingModule.vue";
import Training from "../views/Training/Training.vue";
import AddTraining from "../views/Training/AddTraining.vue";
import LanguageModule from "../views/Languagess/LanguageModule.vue";
import AddLanguage from "../views/Languagess/AddLanguage.vue";
import Language from "../views/Languagess/Language.vue";
import ReferencesModule from "../views/Reference/ReferencesModule.vue";
import AddReference from "../views/Reference/AddReference.vue";
import References from "../views/Reference/References.vue";
import Others from "../views/Others.vue";
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
        component: AddThesis,
      },
    ],
  },
  {
    path: "/employment",
    component: Employment,
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
        component: AddProfessionalDegree,
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
        component: AddTraining,
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
        component: AddLanguage,
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
        component: AddReference,
      },
    ],
  },
  {
    path: "/others",
    component: Others,
  },
];
export default createRouter({
  history: createWebHistory("/"),
  routes,
});
