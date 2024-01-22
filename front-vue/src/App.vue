<template>
  <div>
    <!--INICIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">CRUD Vue.js + PostgresSQL + Node.js</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create New Employee</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employees">List All Employee</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!--FIM NAVBAR-->
  </div>
  <div class="container mt-5">
    <router-view/>
  </div>
</template>
