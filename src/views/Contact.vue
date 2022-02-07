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
  data() {
    return {
      lastname: "",
      firstname: "",
      email: "",
      message: ""
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
@import "../assets/sass/Contact/contact.scss";
</style>
