<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav bg-primary mx-auto">
        <router-link to="/courses" class="nav-link ">Courses</router-link>
        <router-link to="/students" class="nav-link">Students</router-link>
        <router-link to="/registered" class="nav-link">Registration</router-link>
      </div>
    </div>
</nav>
</header>
  </template>
  
  <style scoped>
  header {
    width: 100%;
    height: 5rem;
  }
  
  nav {
    padding-left: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 1.2rem;;
    border: 1px solid transparent;
    cursor: pointer;
    color: white;
    margin-right: 2rem;
    /* padding: 0.5rem 1.5rem; */
    display: inline-block;
  }
  
  a:hover,
  a:active,
  a.active {
  background-color: #2c8ef0;
  color: white;
  border-radius: 0.5rem;
  
}
  </style>