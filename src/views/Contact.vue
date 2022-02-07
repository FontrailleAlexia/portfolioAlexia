<template>
  <div class="contact" id="contact">

    <p class="contact_text">
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark" />
      Contact
      <font-awesome-icon icon="fa-solid fa-bookmark" class="fabookmark" />
    </p>

    <div class="container">
      <form @submit.prevent="sendEmail">
        <input
          type="text"
          v-model="lastname"
          name="lastname"
          placeholder="Nom"
        />
        <input
          type="text"
          v-model="firstname"
          name="firstname"
          placeholder="Prénom"
        />
        <input type="email" v-model="email" name="email" placeholder="Email" />
        <textarea
          name="message"
          v-model="message"
          placeholder="Message"
          class="box_textarea"
        >
        </textarea>

        <input type="submit" value="Envoyer" /><br />
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";


export default {
  name: "Contact",
  components: {
    
  },
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      message: "",
      currentPage: 0,
      pageCount: 0,
      url: './CVAlexia.pdf',
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_s7t77hu",
          "template_z6hrqxd",
          e.target,
          "user_9QL1W10ELTyaYVu1ICRjE",
          {
            lastname: this.lastname,
            firstname: this.firstname,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.lastname = "";
      this.firstname = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped lang="scss">
.contact_text {
  padding-bottom: 1rem;
}

.contact {
  background-color: #eed7c5;
  font-size: 50px;
  padding: 30px;

  p {
    text-align: center;
    text-transform: uppercase;
    font-family: "Dosis", sans-serif;
    .fabookmark {
      color: #b36a5e;
    }
  }
}

/***********************************
**            FORM                **
************************************/
$white: rgba(255, 255, 255, 0.3);

.box_textarea {
  height: 6rem;
}

.container {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  height: 360px;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 300px;
  background: linear-gradient(45deg, #ca7c5c, #c89f9c);

  p {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  input[type="submit"] {
    cursor: pointer;
  }

  input {
    border-radius: 5000px;
  }

  textarea {
    border-radius: 25px;
  }

  input,
  textarea {
    background: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: black;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    }

    &[type="email"],
    &[type="text"],
    &[type="textarea"] {
      &:focus {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &[type="button"] {
      margin-top: 10px;
      width: 150px;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }

  &:hover {
    margin: 4px;
  }
}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.box_container {
  width: 500px;
}

input:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
