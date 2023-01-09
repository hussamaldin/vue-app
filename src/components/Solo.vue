<template>
      <div class="w-full h-[350px] ph:h-[500px] mt-[1px] relative border-b-2 border-gray-200">
      <div class=" w-full h-[100%] block bg-blue-600 pt-[50px] z-10 absolute top-0 left-0 overflow-hidden">
<div class="w-full flex justify-center my-4">
    <p class="text-lg ph:text-3xl text-white">TESTIMONIALS</p>
</div>
<div class="w-full flex justify-center">
    <p class="text-xl ph:text-6xl text-white w-[700px] text-center">“I'm a testimonial. Click to edit me and add text”</p>
</div>
<div class=" w-full flex justify-center relative">
    <div class="w-[300px] text-center flex justify-center">
<p id="n2" class="n2 mySlides block absolute top-[50%] left-[30%] ph:left-[45%] z-10 text-white text-lg ph:text-xl">Gabriella Spring</p>
<p id="n3" class="n3 mySlides block absolute top-[50%] hidden left-[30%] ph:left-[45%] z-30 text-white text-lg ph:text-xl">husaam Spring</p>
<p id="n1" class="n1 mySlides block absolute top-[50%] hidden left-[30%] ph:left-[45%] z-20 text-white text-lg ph:text-xl">ekedled Spring</p>
</div>
</div>
<div class="w-full flex justify-center mt-[50px]"><p class="text-white text-xl">Company name</p></div>
   <div class="flex flex-row justify-center h-[100px] my-4">
       <div class="mx-2"><p id="num2" class="w-[15px] h-[15px] bg-gray-500 rounded-full"></p></div>
       <div class="mx-2"><p id="num3" class="w-[15px] h-[15px] bg-gray-500 rounded-full"></p></div>
       <div class="mx-2"><p id="num1" class="w-[15px] h-[15px] bg-gray-500 rounded-full"></p></div>
   </div>
      </div>
    </div>
</template>

<script>
export default {
data(){
    return{
active: 0,
    }
},
mounted(){
        setInterval(()=> {
            var x = document.getElementsByClassName("mySlides");
            var i;

     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
       x[i].classList.remove("animate__animated" ,"animate__fadeIn" ,"animate__slow")  
  }
         if(this.active==1){
         this.$store.state.open=true
       }
       else{
         this.$store.state.open=false
       }

  if(this.active ==3){
    this.active=0;
    
  }
      x[this.active].classList.add("animate__animated" ,"animate__fadeIn" ,"animate__fast") 
     x[this.active].style.display = "block";


         if(x[this.active].classList.contains("n1")){
        var y=document.getElementById("num1");
        y.classList.replace("bg-gray-500","bg-gray-50")
        document.getElementById("num2").classList.replace("bg-gray-50","bg-gray-500")
        document.getElementById("num3").classList.replace("bg-gray-50","bg-gray-500")
    }
        if(x[this.active].classList.contains("n2")){
        var y=document.getElementById("num2");
        y.classList.replace("bg-gray-500","bg-gray-50")
        document.getElementById("num1").classList.replace("bg-gray-50","bg-gray-500")
        document.getElementById("num3").classList.replace("bg-gray-50","bg-gray-500")
    }
        if(x[this.active].classList.contains("n3")){
        var y=document.getElementById("num3");
        y.classList.replace("bg-gray-500","bg-gray-50")
        document.getElementById("num1").classList.replace("bg-gray-50","bg-gray-500")
        document.getElementById("num2").classList.replace("bg-gray-50","bg-gray-500")
    }
    this.active+=1;

    }, 5500);
}
}
</script>

<style>

</style>