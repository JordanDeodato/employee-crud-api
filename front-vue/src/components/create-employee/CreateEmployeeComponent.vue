<template>
    <div class="container">      
      <div class="card">
        <div class="card-header">
          <h3>Add Employee</h3>
        </div>
        <div class="card-body">
          <!--O v-on pode ser substituido pelo @-->
          <form v-on:submit.prevent="handleSubmitForm()">

            <!--INICIO BLOCO - Employee Name-->
            <div class="form-group mt-3">
              <label class="font-weight-bold">Employee Name</label>
              <input type="text"
              class="form-control"
              placeholder="Type Your Name"
              v-model="employee.name"
              required
              >
            </div>
            <!--FIM BLOCO - Employee Name-->

            <!--INICIO BLOCO - Employee Role-->
            <div class="form-group mt-3">
              <label class="font-weight-bold">Job Role</label>
              <input type="text"
              class="form-control"
              placeholder="Type Your Role"
              v-model="employee.job_role"
              required>
            </div>
            <!--INICIO BLOCO - Employee Role-->

            <!--INICIO BLOCO - Employee Salary-->
            <div class="form-group mt-3">
              <label class="font-weight-bold">Salary</label>
              <input type="number"
              class="form-control"
              placeholder="Type Your Salary"
              v-model="employee.salary"
              required
              >
            </div>
            <!--INICIO BLOCO - Employee Salary-->

            <!--INICIO BLOCO - Employee Birth-->
            <div class="form-group mt-3">
              <label class="font-weight-bold">Birth</label>
              <input type="date"
              class="form-control"
              placeholder="YYYY/MM/DD"
              v-model="employee.birth"
              required
              >
            </div>
            <!--INICIO BLOCO - Employee Birth-->

            <!--INICIO BLOCO - Employee Registration-->
            <div class="form-group mt-3">
              <label class="font-weight-bold">Employee Registration</label>
              <input type="text"
              class="form-control"
              placeholder="Employee Registration"
              v-model="employee.employee_registration"
              required>
            </div>
            <!--INICIO BLOCO - Employee Registration-->
            <div class="form-group mt-3">
              <button class="btn btn-primary" type="submit">+ Employee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreateEmployeeComponent',
    data() {
      return {
        employee: {
          name: '',
          job_role: '',
          salary: '',
          birth: '',
          employee_registration: '',
        },
      };
    },
    methods: {
      handleSubmitForm() {},
    },
  };
  </script>
  