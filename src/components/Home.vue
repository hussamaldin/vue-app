<template>
  <div class="w-full h-full">
  <div class="bg-white fixed p-2 w-screen z-20 top-0 left-0 border-b border-gray-200">
      <div class="flex flex-row items-center justify-between">
          <div class="ph:w-[10%] w-[25%] flex justify-center items-center">
                <a href="#" class="flex items-center">
      <span class="ph:text-xl text-2xl font-semibold whitespace-nowrap">BizBud</span>
                </a>
          </div>
          <div class="ph:w-[50%] ph:block hidden flex justify-center items-center">
                  <ul class="flex items-center p-4 flex-row">
      <li>
        <a href="#" id="Home" @click="onclick($event)" class="nav block p-4 text-gray-700  hover:text-blue-500">Home</a>
      </li>
      <li>
        <a href="#" id="Services" @click="onclick($event)" class="nav block p-4 text-gray-700 hover:text-blue-500">Services</a>
      </li>
      <li>
        <a href="#" id="About" @click="onclick($event)" class="nav block p-4 text-gray-700  hover:text-blue-500">About</a>
      </li>
            <li>
        <a href="#" id="Testimon" @click="onclick($event)" class="nav block p-4 text-gray-700  hover:text-blue-500">Testimonials</a>
      </li>
                  <li>
        <a href="#" id="Clintes" @click="onclick($event)" class="nav block p-4 text-gray-700  hover:text-blue-500">Clintes</a>
      </li>
                  <li>
        <a href="#" id="Contact" @click="onclick($event)" class="nav block p-4 text-gray-700 hover:text-blue-500">Contact</a>
      </li>
    </ul>
          </div>
                    <div :class="[close?'hidden':'w-screen bg-white z-30 absolute top-0 left-0 h-screen ph:hidden block flex justify-center items-center']">
                  <ul class="flex items-center p-4 flex-col">
      <li>
        <a href="#" id="Home" @click="onclick($event)" class="block p-4 text-gray-700  hover:text-blue-500">Home</a>
      </li>
      <li>
        <a href="#" id="Services" @click="onclick($event)" class="block p-4 text-gray-700 hover:text-blue-500">Services</a>
      </li>
      <li>
        <a href="#" id="About" @click="onclick($event)" class="block p-4 text-gray-700  hover:text-blue-500">About</a>
      </li>
            <li>
        <a href="#" id="Testimon" @click="onclick($event)" class="block p-4 text-gray-700  hover:text-blue-500">Testimonials</a>
      </li>
                  <li>
        <a href="#" id="Clintes" @click="onclick($event)" class="block p-4 text-gray-700  hover:text-blue-500">Clintes</a>
      </li>
                  <li>
        <a href="#" id="Contact" @click="onclick($event)" class="block p-4 text-gray-700 hover:text-blue-500">Contact</a>
      </li>
    </ul>
          </div>
          <div class="ph:w-[20%] w-[40%] flex justify-center items-center">
            <a class="bg-purple-600 duration-200 pointer cursor-pointer hover:bg-gray-700 p-2 text-white text-center rounded-full w-[140px]"><span>Call Now</span></a>
          </div>

          <div class="ph:hidden block z-50 w-[10%]" @click="navbar()">
              <div id="left" class="w-[30px] absolute duration-500 rotate-[0deg] h-[3px] bg-gray-700 rounded-full"></div>
              <div id="mid" class="w-[30px] duration-500 my-2 h-[3px] bg-gray-700 block rounded-full"></div>
              <div id="right" class="w-[30px] absolute duration-500 h-[3px] rotate-[0deg] bg-gray-700 rounded-full"></div>
          </div>
      </div>


  </div>

      <div id="Home" class="Home w-full ph:block hidden mt-[80px] h-[700px] overflow-hidden bg-fixed " :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="w-[70%] h-[500px] slidet opacity-0 p-[100px] p-4">
            <div class=" ph:text-8xl text-xl font-bold text-black z-10">The Power of Good Advice</div>
            <div class=" leading-10 ph:text-2xl text-sm tracking-wider text-blue-800 p-4 w-[400px]">I'm a paragraph. Click here to add your own text and edit me.</div>
            <div class=" bg-indigo-700 rounded-full w-[180px] p-3 text-center text-white"><span>Learn more</span></div>
        </div>
      </div>
            <div id="Home" class="Home w-full relative ph:hidden block mt-[10px] h-auto">
        <div class="w-full flex justify-center items-center flex-col h-[500px] ">
            <div class="text-2xl w-full w-[80%] text-center font-bold text-black ">The Power of Good Advice</div>
            <div class="text-center w-[80%] text-sm text-blue-800">I'm a paragraph. Click here to add your own text and edit me.</div>
            <div class="bg-indigo-700 text-center absolute bottom-[50%] left-[34%] rounded-full w-[120px] p-2 text-center text-white"><span>Learn more</span></div>
            <div class="w-full">
                <img :src="imageUrl" class="w-full">
            </div>
        </div>
      </div>

      <div id="Services" class="Services slidet opacity-0 w-full h-auto p-2 my-[40px]">
          <div class="flex justify-center my-4"><p class="text-indigo-500 text-sm ph:text-xl">Services</p></div>
          <div class="flex justify-center my-4"><p class="text-gray-600 text-center w-[70%] ph:w-[500px] font-bold text-xl ph:text-5xl">Taking Your Business to the Next Level</p></div>
      </div>
      <div class="flex flex-row flex-wrap ph:flex-nowrap justify-around items-center">
          <div class="flex flex-col my-[20px] ph:my-[1px] ph:w-[20%] w-full">
              <div class="w-full flex justify-center items-center slidet opacity-0"><img  class="w-[30%] ph:w-[50%]" :src="im3"></div>
              <div class="w-full text-center slidet opacity-0">
                  <p class="font-bold text-sm ph:text-lg pt-4">Business Plans</p>
                  <p class="pt-4 text-xs ph:text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
              </div>
          </div>
          <div class="flex flex-col my-[20px] ph:my-[1px] ph:w-[20%] w-full">
              <div class="w-full flex justify-center items-center slidet opacity-0"><img  class="w-[30%] ph:w-[50%]" :src="im2"></div>
              <div class="w-full text-center py-2 slidet opacity-0">
                  <p class="font-bold text-sm ph:text-lg pt-4">Accounting Services</p>
                  <p class="pt-4 text-xs ph:text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
              </div>
          </div>
          <div class="flex flex-col my-[20px] ph:my-[1px] ph:w-[20%] w-full">
              <div class="w-full flex justify-center items-center slidet opacity-0"><img class="w-[30%] ph:w-[50%]" :src="im1"></div>
              <div class="w-full p-2 text-center slidet opacity-0">
                  <p class="font-bold text-sm ph:text-lg pt-4">Finance Optimization</p>
                  <p class="pt-4 text-xs ph:text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
              </div>
          </div>
      </div>

      <div class="bg-indigo-900 p-[80px] my-[1px]">
          <div class="flex justify-center my-1 ph:my-4 slidet opacity-0"><p class="text-lg ph:text-2xl font-bold text-center ph:text-5xl text-white">We’re Good with Numbers</p></div>
          <div class="flex flex-row ph:flex-nowrap flex-wrap text-white justify-center my-[30px] ph:my-[60px]">
              <div class="flex flex-col w-full justify-center items-center mx-4">
                  <div class="text-4xl ph:text-7xl slidet opacity-0 my-2 font-bold">15</div>
                  <div class="text-lg ph:text-xl slidet opacity-0 text-center my-2">Years of Experience</div>
              </div>
              <div class="flex justify-center w-full mx-3 items-center slidet opacity-0"><span class="rounded-full bg-white w-[5px] ph:w-[10px] h-[5px] ph:h-[10px]"></span></div>
                <div class="flex flex-col justify-center w-full items-center  mx-[30px]">
                  <div class="text-4xl ph:text-7xl my-2 font-bold slidet opacity-0">36</div>
                  <div class="text-lg ph:text-xl text-center my-2 slidet opacity-0">Qualified Experts</div>
              </div>
              <div class="flex justify-center w-full mx-3 items-center slidet opacity-0"><span class="rounded-full bg-white w-[5px] ph:w-[10px] h-[5px] ph:h-[10px]"></span></div>
                <div class="flex flex-col w-full justify-center items-center  mx-[30px]">
                  <div class="text-4xl ph:text-7xl my-2 font-bold slidet opacity-0">120</div>
                  <div class="text-lg ph:text-xl text-center my-2 slidet opacity-0">Clients Every Year</div>
              </div>
              <div class="flex justify-center w-full mx-3 items-center slidet opacity-0"><span class="rounded-full bg-white w-[5px] ph:w-[10px] h-[5px] ph:h-[10px]"></span></div>
                <div class="flex flex-col w-full justify-center items-center mx-[30px]">
                  <div class="text-4xl ph:text-7xl my-2 font-bold slidet opacity-0">9</div>
                  <div class="text-lg ph:text-xl text-center my-2 slidet opacity-0">Intl. Partners</div>
              </div>

          </div>
      </div>

      <div id="About" class="About w-full ph:block hidden ph:flex flex-row">
                    <div class="w-[70%] order-1 bg-no-repeat overflow-hidden bg-fixed" :style="{ backgroundImage: 'url(' + im4 + ')' }"></div>

          <div class="flex flex-col w-[50%] order-2 justify-center items-center">
              <div class="w-[65%]">
              <div class="my-3"><p class="slidet opacity-0 text-xl ph:text-2xl text-indigo-500">About</p></div>
              <div class="my-3"><p class=" slidet opacity-0 text-2xl ph:text-4xl font-bold">Our Experts Are the Finest</p></div>
              <div class="my-[40px]"><p class="slidet opacity-0 text-lg ph:text-xl text-gray-700 leading-8">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
              <div class="my-4"><p class="slidet opacity-0 text-lg ph:text-xl text-gray-700 leading-8">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p></div>
              </div>
          </div>
      </div>

            <div id="About" class="About ph:hidden block flex flex-row flex-wrap">
          <div class="flex flex-col w-full justify-center items-center">
              <div class="w-[75%]">
              <div class="my-3"><p class="text-lg ph:text-xl text-center text-indigo-500">About</p></div>
              <div class="my-3"><p class="text-lg ph:text-xl text-center font-bold">Our Experts Are the Finest</p></div>
              <div class="my-[30px]"><p class="text-center text-sm ph:text-lg text-gray-500 leading-8">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
              <div class="my-4"><p class="text-center text-sm ph:text-lg text-gray-500 leading-8">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p></div>
              </div>
          </div>
          <div class="w-full">
              <img :src="im4">
          </div>
      </div>

<div id="Testimon" class="Testimon"> 
<Solo/>
</div>

<div id="Clintes" class="Clintes w-full bg-gray-200 flex justify-center items-end p-[40px]">
<div>OUR HAPPY CLIENTS</div>
</div>
<div class="bg-gray-200 my-1 flex flex-row ph:flex-nowrap flex-wrap justify-around items-center p-[40px]">
    <div class="w-full ph:w-[20%] py-[25px] ph:py-[1px] ph:flex-none flex justify-center"><img class="w-[50%] ph:w-[70%]" :src="h2"></div>
    <div class="w-full ph:w-[20%] py-[25px] ph:py-[1px] ph:flex-none flex justify-center"><img class="w-[50%] ph:w-[70%]" :src="h1"></div>
    <div class="w-full ph:w-[20%] py-[25px] ph:py-[1px] ph:flex-none flex justify-center"><img class="w-[50%] ph:w-[70%]" :src="h3"></div>
    <div class="w-full ph:w-[20%] py-[25px] ph:py-[1px] ph:flex-none flex justify-center"><img class="w-[50%] ph:w-[70%]" :src="h4"></div>
    <div class="w-full ph:w-[20%] py-[25px] ph:py-[1px] ph:flex-none flex justify-center"><img class="w-[50%] ph:w-[70%]" :src="h5"></div>
</div>


<div id="Contact" class="Contact w-full overflow-hidden bg-fixed " :style="{ backgroundImage: 'url(' + bag + ')' }">
<div class="flex w-full flex-row ph:flex-nowrap flex-wrap">
    <div class="p-[50px] ph:p-[100px] w-full ph:w-[50%]">
        <div class="my-2 text-center ph:text-left"><p class="text-indigo-500 font-normal ph:font-bold text-lg ph:text-2xl">CONTACT</p></div>
        <div class="my-[35px] text-center ph:text-left"><p class="text-xl ph:text-4xl font-semibold ph:font-bold">Let’s Work Together</p></div>
        <div class="my-3 text-center ph:text-left"><p class="text-sm ph:text-xl text-gray-500">500 Terry Francois St. San Francisco, CA 94158</p></div>
        <div class="my-2 text-center ph:text-left"><p class="text-sm ph:text-xl text-gray-500">info@mysite.com</p></div>
        <div class="my-2 text-center ph:text-left"><p class="text-sm ph:text-xl text-gray-500">Tel: 123-456-7890</p></div>
        <div class="my-[50px] text-center ph:text-left">
            <span class="mx-1"><i class="fa fa-linkedin text-lg ph:text-2xl text-black"></i></span>
            <span class="mx-4"><i class="fa fa-facebook-f text-lg ph:text-2xl text-black"></i></span>
            <span class="mx-3"><i class="fa fa-twitter text-lg ph:text-2xl text-black"></i></span>
            </div>
    </div>

    <div class="flex justify-center w-full ph:w-[50%] pt-[70px] items-center">
        <form class="flex flex-col w-full ph:w-[80%] p-[10px] ph:p-[60px] flex justify-center">
            <div class="flex flex-row flex-wrap ph:flex-nowrap">
                <div class="flex flex-col ph:my-[1px] my-[15px] w-full ph:w-[50%] mx-3">
                    <label class="text-gray-500 text-sm ph:text-xl">First Name</label>
                    <input type="text" class="border-b-2 p-2 outline-none border-gray-600 w-full">
                </div>
                <div class="flex flex-col w-full ph:my-[1px] my-[15px] ph:w-[50%] mx-3">
                    <label class="text-gray-500 text-sm ph:text-xl">Last Name</label>
                    <input type="text" class="outline-none p-2 border-b-2 border-gray-600 w-full">
                </div>
            </div>
                <div class="my-[30px] ph:my-[40px]">
                <div class="flex flex-col mx-3">
                    <label class="text-gray-500 text-sm ph:text-xl">Email*</label>
                    <input type="text" class="outline-none p-2 border-b-2 border-gray-600 w-full">
                </div>
            </div>
            <div class="my-2 ph:my-3">
                <div class="flex flex-col  mx-3">
                    <label class="text-gray-500 text-sm ph:text-xl">Leave Us message...</label>
                    <textarea class="outline-none resize-none p-2 border-b-2 border-gray-600 w-full"></textarea>
                </div>
            </div>
            <div>
          <div class="flex my-[40px]">
            <a class="bg-purple-600 duration-200 cursor-pointer hover:bg-gray-700 p-3 text-white text-center rounded-full w-[130px] ph:w-[150px]">Submit</a>
          </div>
            </div>

        </form>
    </div>
</div>
</div>


  <div classs="w-full">
      <div class="w-full my-[25px] flex justify-center"><p class="slidet ph:text-lg text-sm">© 2035 by BizBud. Powered and secured by Wix</p></div>
  </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Solo from "../components/Solo.vue"
export default {
    components:{
        Header,Solo
    },
data(){
    return{
 imageUrl:require('../assets/solo.webp'),
 img:require('../assets/solo1.png'),
  im1:require('../assets/image.svg'),
    im2:require('../assets/image1.svg'),
      im3:require('../assets/image2.svg'),
      im4:require('../assets/solo1.png'),
 h1:require('../assets/h1.svg'),
 h2:require('../assets/h2.svg'),
 h3:require('../assets/h3.svg'),
 h4:require('../assets/h4.svg'),
 h5:require('../assets/h5.svg'),
 bag:require('../assets/bag.png'),
 close:true
 
      
    }
},
mounted() {
    window.addEventListener('scroll', this.onLoaded);
var xl=window.innerWidth;
if(xl <= 360){
    this.$store.commit('change')
}
    //navbar on click
document.getElementById('Home').classList.replace('text-gray-700','text-indigo-500')
},

computed:{
},
methods:{
       onLoaded(){
     var page=window.pageYOffset
     var x = document.getElementsByClassName("slidet");
     var i;
     console.log(page)
       console.log(x[0].getBoundingClientRect().top)
          for (i = 0; i < x.length; i++) {

              var c=x[i].getBoundingClientRect().top
            if(c <= 600){
       x[i].classList.replace("opacity-0","opacity-100");  
       x[i].classList.add("animate__animated" ,"animate__fadeInUp" ,"animate__slow") 
            } 
       
  }
   },
    navbar(){
        var left=document.getElementById('left');
var mid=document.getElementById('mid');
var right=document.getElementById('right');
        if(this.close != true){
            left.classList.replace('rotate-[-50deg]','rotate-[0deg]');

right.classList.replace('rotate-[50deg]','rotate-[0deg]');
setTimeout(()=>{
mid.classList.replace('hidden','block');
},400)

        }
        else{

left.classList.replace('rotate-[0deg]','rotate-[-50deg]');
mid.classList.replace('block','hidden');
right.classList.replace('rotate-[0deg]','rotate-[50deg]');
        }
        this.close= !this.close
    },
    onclick(event){
                var targetId = event.currentTarget.id;
        
        var list=document.getElementsByClassName('nav');
        for(var i=0;i < list.length;i++){
           if(list[i].classList.contains('text-indigo-500')){
               list[i].classList.replace('text-indigo-500','text-gray-700')
           }
        
           document.getElementById(targetId).classList.replace('text-gray-700','text-indigo-500')
        }

        this.close= !this.close
left.classList.replace('rotate-[-50deg]','rotate-[0deg]');
right.classList.replace('rotate-[50deg]','rotate-[0deg]');

setTimeout(()=>{
mid.classList.replace('hidden','block');
},400)

        var el=document.getElementsByClassName(targetId);
        var res=el[0].offsetTop-89;

                setTimeout(function () {
            window.scrollTo(0, res);
        },0);
    }
}
}
</script>

<style>
html{
    scroll-behavior: smooth;
}
</style>