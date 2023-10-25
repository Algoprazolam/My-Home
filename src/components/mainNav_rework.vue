<script>

export default {
data() {
        return {
            mainNavItems: [
                {text: 'Vue item longer 1'},
                {text: 'Vue 2'},
                {text: 'Vue item 3'},
                {text: ' 4'},
                {text: 'diff lengths 5'}
            ],
            houseColor: '#90302c'
        }
        
    }
}
</script>

<template>
    <header class="header">
        <div class="headerContent">
            <div class="logoContainer">
                <a href="#">
                    <img src="../assets/images/algo.svg" alt="algoprazolam logo">
                </a>
            </div>

            <nav class="mainNav">
                <div class="hamburger"></div>
                <ul class="menu">
                    <li v-for="mainNavItem in mainNavItems">
                        <a href='#'>{{ mainNavItem.text }}</a>
                    </li>
                </ul>
            </nav>
    </div>
    </header>
</template>


<style scoped>
header {
    position: fixed;
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 20;
}
.headerContent {
    margin: auto;
    display: flex;    
    max-width: 1600px;
    background-color: v-bind(houseColor);
    height: 5rem;
    justify-content: space-between;
}
.logoContainer {
    display: block;
}
.logoContainer img {
    padding-top: 0.1rem;
    width: auto;
    height: 5rem;
    
}

.mainNav {
    display: flex;
    align-items: center;
  }

  .menu {
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    z-index: 2;
    transition: 0.5s;
  }
  
  .menu li {
    list-style-type: none;
  }

  .menu li a {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;
    color: #Fdd;
    text-decoration: underline solid 2px;
    display: block;
    font-size: 1.1rem;
    text-underline-offset: 0.3rem;
    transition: 0.2s;
   
  }
  .menu li a:hover {
    box-shadow:  500px 0 rgba(0, 0, 0, 0.2) inset;
    transition: 0.2s;
  }
  .hamburger {
    display: none;
    position: relative;
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    z-index: 3;
    transition: 0.3s;
  }

  .hamburger:before,
  .hamburger:after {
    content: '';
    position: absolute;
    height: 4px;
    right: 0;
    background-color: white;
    border-radius: 10px;
    transition: 0.3s;
  }

  .hamburger:before {
    top: -10px ;
    width: 1.5rem;
    transition: 0.3s;
  }

  .hamburger:after {
    top: 10px ;
    width: 25px;
    transition: 0.3s;
  }
  @media screen and (max-width: 1600px){
    .headerContent {
        width: 1024px;
    }
    .logoContainer img {
        width: 80%;
        min-width: 86px;
    }
  }
  @media screen and (max-width: 992px){
    .hamburger {
        display: block;
        margin-right: 20px;
    }
    .headerContent {
        width: 100%;
    }
    .menu {
      justify-content: left;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0px;
      background-color: v-bind(houseColor);
      width: 200px;
      margin-top: 5rem;
    }

    .menu li {
      width: 100%;
      transition: 1s;
      box-shadow: 0px 5px 0px 0px v-bind(houseColor);
      
    }

    .menu li a,
    .menu li a:hover {
      padding: 28px;
      font-size: 20px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
      text-underline-offset: 5px;
    }
  }
</style>