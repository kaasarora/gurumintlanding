<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <!-- v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar -->
          <v-list-item-content>
            <v-list-item-title class="title">GuruMint</v-list-item-title>
            <v-list-item-subtitle>NFT's</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
            
          </v-list-item-content>
          
        </v-list-item>
        <br>
     <dropdown-menu style="padding-left:30px;" >
           <button slot="trigger">EN</button>
     
       <ul slot="body" style="height:50px;width:20px">
  <v-btn v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </v-btn>
              </ul>
               </dropdown-menu>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        GuruMint <!-- v-img src="@/assets/img/logo.png" max-width="50px" / -->
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      
      <div v-else>
         <dropdown-menu >
           <button slot="trigger">EN</button>
     
       <ul slot="body" style="height:50px;width:20px">
  <v-btn v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </v-btn>
              </ul>
               </dropdown-menu>
        <v-btn  text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">
             {{$t('HOME')}}</span>
        </v-btn>
        
         
          
      
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">{{$t('FEATURES')}}</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">
              {{$t('ABOUT')}}
              </span>
        </v-btn>
        <!-- v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">{{$t('MARKETPLACE')}}</span>
        </v-btn -->
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">{{$t('CONTACT')}}</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
 import i18n from '@/plugins/i18n';
  import Vue from 'vue'
    import DropdownMenu from 'v-dropdown-menu'
    import 'v-dropdown-menu/dist/v-dropdown-menu.css'
  Vue.use(DropdownMenu);
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", " Features", "#features"],
      ["mdi-download-box-outline", "About", "#download"],
      ["mdi-currency-usd", "Market Place", "#pricing"],
      ["mdi-email-outline", "Contact Us", "#contact"],

    ],
     languages: [
                    { flag: 'Us', language: 'en', title: 'English' },
                    { flag: 'Id', language: 'es', title: 'Indonesian' }
                ]
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
      changeLocale(locale) {
                i18n.locale = locale;
            }
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

