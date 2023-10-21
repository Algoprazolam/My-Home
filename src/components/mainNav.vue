<script>

export default {
data() {
        return {
            mainNavItems: [
                {text: 'Vue item 1'},
                {text: 'Vue item 2'},
                {text: 'Vue item 3'},
                {text: 'Vue item 4'},
                {text: 'Vue item 5'}
            ],
            houseColor: '#90302c',
            hamburgerState: false
        }
        
    },
    methods: {
      showNavToggle() {
        this.hamburgerState = true
      }
    }
}
</script>

<template>
   
   <header class="header">
        <div class="logoContainer">
            <a href="#">
                <img src="../assets/images/logo.jpg" alt="image of a girl walking her dog">
            </a>
        </div>
        <div class="navFlex">
        <div class="navInfo" v-if="!hamburgerState">Open Navigation ></div>
        
        <nav class="mainNav">      
            <input type="checkbox" class="toggleMenu" @click="showNavToggle">
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

<style> 
.header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: v-bind(houseColor);
    padding: 0px 25px 0px 0px;
    transition: 0.3s;
    box-shadow: 0px 10px 15px 10px v-bind(houseColor);
    z-index: 1;
}
.navInfo {
  display: none;
  
}

.logoContainer a {
    display: block;
  
}
  
  .logoContainer a img{
    display: block;
    height: 100px;
    width: 100%;

  }
  
  .mainNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
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
    color: #Fdd;
    text-decoration: underline solid 2px;
    display: block;
    padding: 40px 25px;
    font-size: 18px;
    line-height: 1;
    text-underline-offset: 5px;
    transition: 0.3s;
  }

  .menu li a:hover {
    box-shadow: 500px 0 0 rgba(0, 0, 0, 0.2) inset;
    text-underline-offset: 40px;
    font-size: 20px;
    transition: 0.3s;
  }


  .hamburger {
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
    width: 20px;
    transition: 0.3s;
  }

  .hamburger:after {
    top: 10px ;
    width: 25px;
    transition: 0.3s;
  }

  .toggleMenu {
    position: absolute;
    width: 30px;
    height: 100%;
    z-index: 4;
    cursor: pointer;
    opacity: 0;
  }
  .hamburger, 
  .toggleMenu {
    display: none;
  }
  
  .mainNav input:checked ~ .hamburger {
    background-color: transparent;
    

  }

  .mainNav input:checked ~ .hamburger:before {
    top: 0;
    transform:  rotate(-45deg);
    width: 30px;
    transition: 0.35s;

  }

  .mainNav input:checked ~ .hamburger:after {
    top: 0;
    transform:  rotate(45deg);
    width: 30px;
    transition: 0.35s;
  }

  .mainNav input:checked ~ .menu {
    right: 0;
    box-shadow: -20px 0 40px rgba(0, 0, 0, 0.2);
  
  }

  @media screen and (max-width: 992px){
    .navInfo {
  display: block;
  color: white; 
  padding-right: 20px;
  
}
.navFlex {
  display: flex;
  justify-content: space-between;
}

    .hamburger, 
    .toggleMenu {
      display: block;
    }
    
    .menu {
      justify-content: left;
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 0;
      right: -300px;
      background-color: v-bind(houseColor);
      width: 200px;
      margin-top: 100px;
    }
    .mainNav input:checked ~ .menu li {
      box-shadow: -15px 5px 10px 20px v-bind(houseColor);
      transition: 0.35s;
      
      
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

  @media screen and (max-width: 600px){
.navInfo {
  font-size: 14px;
}
  }
</style>

