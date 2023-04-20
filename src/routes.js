import MemesContainerComponent from "./components/memes-container-component.vue";
import Err404Page from "./components/err-404-page.vue";

const routes = [
  { path: "/:cat?", components: {container: MemesContainerComponent}, name:'cat'},
  { path: "/:cat?/p/:id", components: {container: MemesContainerComponent}, name:'pId'},
  { path: "/*", components: {container: Err404Page}},
  { path: "*", component: {container: Err404Page} }
];

export default routes;
