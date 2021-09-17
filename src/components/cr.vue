<template>
  <div id=nav1>
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
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">GuruMint</v-list-item-title>
            <v-list-item-subtitle>NFT's</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
         
        >
        
        <p>
          <span class="mr-2">
               <router-link :to="{ name: 'Guidance' }" style="text-decoration: none; color: inherit;">Buying Guidance</router-link></span>
               <br>
               <br>
               <span class="mr-2">
               <router-link :to="{ name: 'Features' }" style="text-decoration: none; color: inherit;">Features</router-link></span>
               <br>
               <br>
                <span class="mr-2"><router-link :to="{ name: 'About' }" style="text-decoration: none; color: inherit;">About</router-link></span>
                <br>
                <br>
                <span class="mr-2"><router-link :to="{ name: 'Contact' }" style="text-decoration: none; color: inherit;">Contact</router-link></span>
        </p>
       
        </v-list-item>
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
        <v-img src="@/assets/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#guidance')">
          <span class="mr-2">
               <router-link :to="{ name: 'Guidance' }" style="text-decoration: none; color: inherit;">Buying Guidance</router-link></span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2"> <router-link :to="{ name: 'Features' }" style="text-decoration: none; color: inherit;">Features</router-link></span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">
              <router-link :to="{ name: 'About' }" style="text-decoration: none; color: inherit;">About</router-link>
              </span>
        </v-btn>
        <!-- <v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">OUR MARKETPLACE</span>
        </v-btn> -->
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2"><router-link :to="{ name: 'Contact' }" style="text-decoration: none; color: inherit;">Contact</router-link></span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
    <section>
    
      <div class="big">
        <div class="first-page">
         
          <div class="left-profile">
            <img
              height="100"
              width="100"
              class="creator-image"
              src="https://firebasestorage.googleapis.com/v0/b/chatpoint1-16505.appspot.com/o/me.jpg?alt=media&token=42b91205-d0da-4b2c-bb19-6710bcdc5a1d"
              alt="creator"
            />
            <button class="subscribe">Subscribe</button>
           <br>
          <!-- <input class="share"
        type="button"
        label="Share Your Profile"
        style="height:50px;"
      
        v-on:click=shareViaWebShare()
      /> -->
<br/>




<p>
<Facebook :url=url style="position:relative"></Facebook> <WhatsApp :url=url style="position:relative"></WhatsApp> <Telegram :url=url style="position:relative" ></Telegram> <Linkedin :url=url style="position:relative"></Linkedin></p>
<br/>    
<button id="eth_tip_button"   v-on:click="getAccount()">Connect with Metamask</button>
<br>
  <button class="sendEthButton btn"   id="eth_tip_button"  v-on:click="sendEthButton()" >Pay With Metamask</button>
  <br>
<button   id="eth_tip_button"  v-on:click="opendialog()" >Pay With Cards</button>


 <foo name="example"> 


  <br>
  <h1
   style=" position: fixed;
    left: 45%;">Hey Investor! <br>
  </h1>
  
   <input type="text" 
      v-model="user.Name"
       id="Name" 
       style=" position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);"
       placeholder="Name" />

      <input type="text" 
      v-model="user.walletAddress"
       id="walletAddress" 
       style=" position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);"
       placeholder="Wallet Address" />
<br>
        <input type="text" 
      v-model="user.email"
       id="email" 
       style=" position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);"
       placeholder="Email Address" />
   <br>
     <input type="text" 
      v-model="user.phone"
       id="phone" 
       style=" position: fixed;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);"
       placeholder="Phone Number" />
   <br>
   <button class="sendEthButton btn" 
   id="eth_tip_button" 
   style=" position: fixed;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);"
       placeholder="Type Your Wallet Address"
     v-on:click="makepayment();posts()" >Pay Now</button>
 </foo>

 

        
 
  </div>
         
         
          <div class="right-profile">
            <div class="user-info">
              <h2 class="creator-name" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.name }}
              </h2>
              <p class="creator-history" v-for="ToDo in ToDos" :key="ToDo.id">
                {{ ToDo.bio }}
              </p>
              <p class="location">
                <span class="location-detail"
                  ><img
                    class="loc-image"
                    height="20"
                    width="20"
                    src="../assets/location.png"
                    alt="location"
                /></span>
                <span
                  class="location-detail"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                  >{{ ToDo.location }}</span
                >
              </p>
            </div>
            <div class="info-container">
              <div class="description">
                <p
                  class="creator-description"
                  v-for="ToDo in ToDos"
                  :key="ToDo.id"
                >
                  {{ ToDo.description }}
                </p>
              </div>
              <div class="help">
                <p class="help-line">How can I help?</p>
                <div class="creator-features">
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button1 }}</span
                    >
                  </router-link>
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button2 }}</span
                    >
                  </router-link>
                  <router-link
                    style="text-decoration: none"
                    class="button"
                    :to="{ name: 'Schedule' }"
                  >
                    <span
                      class="service"
                      v-for="ToDo in ToDos"
                      :key="ToDo.id"
                      >{{ ToDo.button3 }}</span
                    >
                  </router-link>
                </div>
              </div>
            </div>
            <div class="coupons">
              <img
                class="donation-image"
                src="../assets/badge.png"
                alt="donation"
              />
              <p class="donate-text">10% goes to Black Girls CODE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="second-container">
        SERIES
      </h2>
      <Series />
    </section>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import { Facebook } from 'vue-socialmedia-share';
import { WhatsApp } from 'vue-socialmedia-share';
import { Telegram } from 'vue-socialmedia-share';
import { Linkedin } from 'vue-socialmedia-share';
import { db } from "../firebase/db";
import Series from "./Series.vue";
import axios from "axios";
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/ssr.nocss'
import Navigation from "./Navigation.vue"
import guidance from "../pages/Guidance.vue"

import 'vue-js-modal/dist/styles.css'

Vue.use(VModal, { componentName: 'Foo' })
var currentRoute = window.location;
let accounts = [];

export default {

  data() {
    
    return {
       drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Guidance",""],
      ["mdi-information-outline", "Features", "#features"],
      ["mdi-download-box-outline", "About", "#download"],
      // ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contact us", "#contact"],
    ],
     web3: "",
      modal:false,
      account: "",
      contractInstance: "",
  
      isLoading: false,
    url: String(currentRoute),
      ToDos: [],
      newItem: "",
    
user:{
  walletAddress:"",
  Name:"",
  email:"",
  phone:""
},
submitted: false,
    };
  },
    props: {
    color: String,
    flat: Boolean,
  },
  
   
  methods: {
    async addItem() {
      if (this.newItem) {
        await db.collection("ToDos").add({ name: this.newItem });
        await db.collection("ToDos").add({ bio: this.newItem });
        await db.collection("ToDos").add({ location: this.newItem });
        await db.collection("ToDos").add({ description: this.newItem });
        await db.collection("ToDos").add({ button1: this.newItem });
        await db.collection("ToDos").add({ button2: this.newItem });
        await db.collection("ToDos").add({ button3: this.newItem });
        
        this.newItem = "";
      }
    },
     opendialog () {
        this.$modal.show('example')
    },
      onResize() {
      this.isXs = window.innerWidth < 850;
    },
    sendEthButton ()  {
      
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from:  accounts[0],
          to: '0x0f6b0e3d75175bb97de6dc5339447182be1f8730',
          value: '0x00',
         //gasPrice: '0x09184e72a000',
        gas: '3000000',
           data:
      '0xd3fc9864000000000000000000000000136adcc423732bbda6406f2ddcb5bae123a4cbc300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000006368747470733a2f2f697066732e696f2f697066732f516d58436d726e546962686861396d314e436836394e3451424d534a6b6257547a6764645a50656f4731614a4a743f66696c656e616d653d53637265656e73686f7425323028323533292e706e670000000000000000000000000000000000000000000000000000000000'
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
},
async  getAccount() {
   
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
},
beforeOpen (event) {
      console.log('Opening...')
    },
    beforeClose (event) {
      console.log('Closing...')
      // What a gamble... 50% chance to cancel closing
      if (Math.random() < 0.5) {
        event.cancel()
      }
    },

makepayment: function() {
  
      var options = {
        key: "rzp_test_astk95KRrqNO0x",
        // key_secret : "mVybwVFhZAqr6Eg1OPGP3Rcs",
        amount: 500 * 100,
        name: "GuruMint",
        description: "Pay Your Educator",
        image: "/your_logo.png",
        handler: function(response) {
          alert(
            "Your Transaction is Successful"+" "+
           
            "Save This Payment ID For Future Referce  " +
              " " +
              response.razorpay_payment_id
          );
        },
        prefill: {
        
          name: this.user.Name,
          email: this.user.email,
          contact: this.user.phone,
        },
        // notes: {
        //   WalletAddress: "",
        // },
        theme: {
          color: "#0EB9F2",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.open();
      // event.preventDefault();
    },
     posts() {
      axios
        .post(
          "https://chatpoint1-16505-default-rtdb.firebaseio.com/posts.json",
          this.user,
          { emulateJSON: true }
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },

   
  
// shareViaWebShare() {
//   navigator.share({
//     title: 'Title to be shared',
//     text: 'Text to be shared',
//     url: ""
//   })
// }

  },

  firestore: {
    ToDos: db.collection("ToDos"),
  },
   
  components: { Series,Facebook,WhatsApp,Telegram,Linkedin,Navigation,guidance },
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
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}
//
h2.creator-name {
  padding: 0;
}
h2.second-container {
  margin-top: 2%;
  margin-left: 20%;
  text-align: start;
  padding: 0;
}
//
.big {
  display: flex;
  flex-direction: column;
  margin-top: 0%;
  @media (max-width: 468px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-width: 460px;
  }
  .first-page {
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
    @media (max-width: 468px) {
      display: flex;
      flex-direction: column;
    }
    .left-profile {
      flex: 1;
      // border: solid black 1px;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 150px;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        margin: auto;
        align-items: center;
      }
      .creator-image {
        border-radius: 100%;
        height: 350px;
        width: 350px;
        padding: 8px;
        border: 6px solid #ffdf70;
        object-fit: contain;
      }
      .subscribe {
        width: 148px;
        margin-top: 1.5rem;
        height: 35px;
        width: 150px;
        padding: 0.5rem 1.5rem;
        line-height: 1rem;
        font-weight: 500;
        border-radius: 8px;
        border: 1px solid #0967d2 !important;
        color: #0967d2;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        transition: 0.5s ease-in-out;
        &:hover {
          color: white;
          background-color: #0967d2;
        }
        @media (max-width: 468px) {
          width: 70%;
          margin-left: auto;
          font-size: 120%;
          font-weight: bolder;
          border-radius: 10px;
        }
      }
    }
    .right-profile {
      display: flex;
      flex-direction: column;
      flex: 2;
      padding-top: 1.5rem;
      margin-left: 0%;
      padding-left: 1.75rem;
      @media (max-width: 468px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 0%;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        min-width: 440px;
        align-items: flex-start;
        margin-bottom: 5%;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
        }
        .creator-name {
          font-size: 2rem;
          color: #222;
          margin-bottom: 7px;
          margin-top: 0px;
          font-weight: 600;
          @media (max-width: 468px) {
            font-size: 1.8rem;
            margin-top: 2%;
          }
        }
        .creator-history {
          color: #515151;
          margin-bottom: 8px;
          margin-top: 1px;
          font-size: 120%;
          text-align: justify;
          @media (max-width: 468px) {
            font-size: 120%;
            margin-top: 0px;
            text-align: center;
          }
        }
        .location {
          display: flex;
          font-size: 120%;
          color: #9e9e9e;
          margin-top: 0px;
          @media (max-width: 468px) {
            justify-content: center;
          }
        }
      }
      .description {
        margin-top: 0px;
        display: flex;
        width: 80%;
        margin-bottom: 3%;
        flex-wrap: wrap;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 5%;
          width: 100%;
        }
        .creator-description {
          align-items: flex-start;
          line-height: 1.5em;
          text-align: justify;
          font-size: 120%;
          @media (max-width: 468px) {
            font: size 10%;
            margin-top: auto;
          }
        }
      }
      .help {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0px;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: column;
          margin-top: 5%;
          align-items: center;
        }
        .help-line {
          text-align: start;
          margin-top: 0%;
          font-size: 120%;
          font-weight: bolder;
          margin-bottom: 0%;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: bolder;
          }
        }
        .creator-features {
          margin-top: 0px;
          display: flex;
          flex-wrap: wrap;
          @media (max-width: 468px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 1.5rem;
            height: 40px;
            width: 270px;
            padding: 0.6rem 1.5rem;
            line-height: 1rem;
            font-weight: 500;
            border-radius: 8px;
            border: 1px solid #0967d2 !important;
            background-color: #0967d2;
            color: blanchedalmond;
            font-size: 120%;
            outline: none;
            cursor: pointer;
            margin-right: 29px;
            transition: 0.5s ease-in-out;
            &:hover {
              color: white;
              background-color: #064288;
            }
            @media (max-width: 468px) {
              //   display: flex;
              //   flex-direction: column;
              //   align-items: center;
              margin-left: auto;
              margin-right: auto;
              line-height: 130%;
              height: 50px;
              width: 290px;
              font-size: 120%;
            }
          }
        }
      }
      .coupons {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-radius: 8px;
        max-width: 180px;
        padding: 0.5rem;
        border: 1px solid #e1e1e1;
        @media (max-width: 468px) {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
        }
        .donation-image {
          height: 28px;
          width: 28px;
        }
        .donate-text {
          color: #626262;
          font-size: 0.75rem;
          margin-left: 5px;
          margin-top: 0px;
        }
      }
    }
  }
}
.second-container {
  font-size: 130%;
  color: #7e7e7e;
}
 .share{
                background: url('../assets/share.png') no-repeat;
                cursor:pointer;
                border: none;
                display:block;
                width: 80px;
            }
            #eth_tip_button {
	position: relative;

	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-weight: 500;
	text-decoration: none;
	color: #ffffff;
	background: #2629ec;

}
#nav1{
   padding:10px;
   margin-top:50px;
  
}






</style>