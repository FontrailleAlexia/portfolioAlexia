<template>
  <div class="contact" id="contact">
    <p class="contact_text">
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/> 
        Contact 
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark"/>
    </p>

    <div class="login-box">
      <form action="" class="form">
        <div class="lastname_firstname">
          <div class="user-box">
            <input type="text" name="lastname" required="">
            <label>Nom</label>
          </div>
          <div class="user-box">
            <input type="text" name="firstname" required="">
            <label>Prénom</label>
          </div>
        </div>
        <div class="user-box user-box-mail">
          <input type="text" name="mail" required="">
          <label>Email</label>
        </div>
        <div class="user-box user-box-message">
          <input type="textarea" name="message" required="">
          <label>Message</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
}
</script>

<style scoped lang="scss">
.contact_text {
  padding-bottom: 1rem;
}

.contact {
  background-color: #FFEAF1;
  font-size: 50px;
  padding: 30px; 

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis', sans-serif;
    .fabookmark {
      color: rgb(252, 55, 170);
    }
  }
}

/***********************************
**            FORM                **
************************************/
.login-box {
  display: flex;
 justify-content: center;
}

.form  {
 background-color: lightblue;
}

.form .user-box-mail, .form .user-box-message {
  background-color: red;
}

.lastname_firstname .user-box input {
  width: 20px;
}

.lastname_firstname {
  display: flex;
}

.login-box .user-box {
  position: relative;
  width: 300px;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(0, 0, 0);
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ff38de;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff38de;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #ff38de;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  box-shadow: 0 0 5px #ff38de,
              0 0 25px #ff38de,
              0 0 50px #ff38de,
              0 0 100px #ff38de;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff38de);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ff38de);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #ff38de);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #ff38de);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>
