<template>
  <router-view />
</template>

<style>
/* Estilos globales */
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --accent: #e74c3c;
  --dark: #2c3e50;
  --light: #ecf0f1;
  --gray: #7f8c8d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: #f9f9f9;
}
</style>
