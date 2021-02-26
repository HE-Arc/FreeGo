<template>
  <div class="hello">
    {% extends 'common/base.html' %}
    {% load static %}
    {% block content %}
    {% load i18n %}

    <section class="section">
    <div class="container center-align">
        <img class="responsive-img" width="192" height="192" src="{% static 'fridge/logos/icon-192x192.png' %}" alt="">
        <p style="font-family: 'Architects Daughter', cursive; font-size:1.5rem;">Sois un Héros, rejoins Free Go !</p>

        <p>
        {% trans 'Our association aims to set up refrigerators and self-service cabinets to reduce food waste while helping the poorest.' %}

        {% trans 'it was created in 2019.' %}
        </p>
    </div>
    </section>

    <section class="section">
    <div class="row center-align">
        <a href="https://www.facebook.com/assocFreeGo/" class="col s2 offset-s1"><i class="fab fa-facebook"
            style="font-size: 2em; color: black;" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/freegoneuch/?hl=fr" class="col s2"><i class="fab fa-instagram"
            style="font-size: 2em; color: black;" aria-hidden="true"></i></a>
        <a href="https://twitter.com/GoAssociation" class="col s2"><i class="fab fa-twitter"
            style="font-size: 2em; color: black;" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/company/association-free-go-ne/" class="col s2"><i class="fab fa-linkedin"
            style="font-size: 2em; color: black;" aria-hidden="true"></i></a>
        <a href="https://www.association-freego.ch/" class="col s2"><i class="material-icons"
            style="font-size: 2em; color: black;" aria-hidden="true">web</i></a>
    </div>
    </section>
    {% endblock %}
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
