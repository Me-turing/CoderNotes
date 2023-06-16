import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "E:/AllPerject/NodeProject/CoderNotes/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.225_vuepress@2.0.0-beta.63/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "E:/AllPerject/NodeProject/CoderNotes/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.225_vuepress@2.0.0-beta.63/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
