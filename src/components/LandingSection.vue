<template>
    <div class="container" id="home">
      <div class="row">
          <h2 class="display-2 home-1">Home</h2>
      </div>
      <div class="row flex-column flex-md-row">
       <div class="col image-1">
          <img src="https://anushqakandan.github.io/All-images/Images/intro-bg.jpg " alt="profile" class="img-thumbnail border-5" loading="lazy">
       </div>
  
       <div class="col"> 
          <div id="details">
             <h1 class="lead">Anushqa Kandan</h1>
              <p class="slogan">
                 I am Anushie 
              </p>
          </div> 
       </div>
       <div>
        <h3>Certificates</h3>
       </div>
      </div>
    </div>

 <div class="container" id="about">
      <div class="row">
          <h2 class="display-2">About</h2>
      </div>
</div>

 <div class="container" id="photos">
      <div class="row">
          <h2 class="display-2">Photos</h2>
      </div>
       <div class="certi">
              
    <div class="img">
        <div class="card cardAbout head">
            <p class="text1">Casual</p>
           <router-link to="/casual">
             <button class="btn btn--primary">View</button> 
           </router-link>

        <p class="text2">
           Casual attire photoshoot.
        </p>
    </div>
            
    <div class="card cardAbout saiia">
        <p class="text1">Traditional</p>
           <router-link to="/traditional">
             <button class="btn btn--primary">View</button> 
           </router-link>
        <p class="text2">
              Traditional attire photoshoot
        </p>
   </div>

    <div class="card cardAbout inter">
        <p class="text1">Formal</p>
          <router-link to="/formal">
             <button class="btn btn--primary">View</button> 
           </router-link>
            <p class="text2">
                Formal attire photoshoot
            </p>                       
     </div>
      </div>
     </div>
 </div>

 <div class="container" id="videos">
      <div class="row">
          <h2 class="display-2">Videos</h2>
      </div>
</div>

 <div class="container" id="contact">
      <div class="row">
          <h2 class="display-2">Contact Info</h2>
      </div>
</div>

  </template>
  <script setup>
 
    </script>