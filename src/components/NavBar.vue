<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
  src="@/Images/logo.png"
  alt="logo"
  class="logo"
  loading="lazy"
/>
        </router-link>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#photos">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#videos">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#contact">Contact Info</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  