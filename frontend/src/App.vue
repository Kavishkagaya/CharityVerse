<template>
  <router-view />
</template>

<style>
.btn-primary {
  padding: 0.5rem 1.5rem;
  background: linear-gradient(to right top, #AC1515 5.16%, #F47731 94.76%);
  color: white;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  cursor: pointer;
}

.container {
  width: clamp(280px, 90%, 1280px);
  margin: auto;
}

.form-radlist p {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
}

.form-radlist .radlist {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
}

.form-radlist .radlist input {
  display: none;
}

.form-radlist .radlist label {
  font-size: 1.1rem;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.form-radlist .radlist label span {
  border: 2px solid #000;
  display: block;
  height: 18px;
  width: 18px;
  margin-right: 0.25rem;
  border-radius: 50%;
  opacity: 0.8;
}

.form-radlist .radlist input:checked+label span {
  background: url(@/assets/radio-back.png);
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-input label {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
}

.form-input input,
.form-input textarea {
  font-size: 1.1rem;
  padding: 0.75rem 8px 0.25rem;
  border: none;
  background: none;
  border-bottom: 2px solid #ddd;
  transition: 0.5s all;
}

.form-input input:focus,
.form-input textarea:focus {
  outline: none;
  border-color: #333;
}
</style>
