<template>
  <div id="app">
    <div id="main">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/account/1832">1832 Account</router-link>
      <router-link to="/account/1835">1835 Account</router-link>
      <router-link to="/account/1838">1838 Account</router-link>
      <router-link to="/account/1842">1842 Account</router-link>
      <router-link to="/other">Other Accounts</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    </div>
    <div class=footer>
      <a href="https://github.com/rwheagle/first-vision">GitHub Link</a>
    </div>
  </div>
  </template>

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  
  }

  #nav {
    padding: 30px;
    text-align:center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    margin: 2%;
  }

  #nav a.router-link-exact-active {
    color: #3792cb;
  }
#main{
  margin-bottom: 5%;
}
  .footer {
    background-color: #FFF;
    position: fixed;
    height: 5%;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    align-content: center;
  }

  .footer a {
    text-decoration: none;
    font-size: 1.5em;
    align-content: center;
    margin: 10px;
  }
  </style>
