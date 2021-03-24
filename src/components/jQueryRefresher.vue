<template>
  <div id="jquery-refresher" class="hello">
    <h2 class="margin-bottom-top-0">&lt;h2&gt;jQuery Refresher.&lt;/h2&gt;</h2>
    <br />
    <br />
    <div id="h3-div">
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the first h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the second h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the third h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the fourth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the fifth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the sixth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the seventh h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the eighth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the ninth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the tenth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the eleventh h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0 font-weight-100">
        &lt;h3&gt;This is the twelfth h3&lt;/h3&gt;
      </h3>
    </div>
    <button id="button_jQueryAppendH3" style="width: 40%">+ &lt;h3&gt;</button>
    <br />
    <br />
    <h2 class="margin-bottom-top-0">
      &lt;h2&gt;Buttons that invoke jQuery to manipulate the DOM:&lt;/h2&gt;
    </h2>
    <!-- VUE JS BUTTONS -->
    <!--
    <button id="btn_jqAppendH3" v-on:click="jQueryAppendH3" style="width: 80%">
      + &lt;h3&gt;
    </button>
    <br />
    <br />
    <button v-on:click="jQuerySetH2Red" style="width: 80%">
      Set every &lt;h2&gt; and &lt;h3&gt; "color" to "red" using jQuery
    </button>
    <br />
    <br />
    <button v-on:click="jQuerySetH3Green" style="width: 80%">
      Set every &lt;h3&gt; "color" to "green" using jQuery
    </button>
    <br />
    <br />
    <button v-on:click="jQuerySetOddH3Blue" style="width: 80%">
      Set every <b>ODD</b> &lt;h3&gt; "color" to "blue" using jQuery
    </button>
    <br />
    <br />
    <button v-on:click="jQuerySetPrimeH3PurpleBold" style="width: 80%">
      Set every <b>PRIME</b> &lt;h3&gt; "color" to "purple" using jQuery
    </button>
    <br />
    <br />
    <button v-on:click="jQueryConvertTextToNumber" style="width: 80%">
      Convert every &lt;h3&gt;'s identity from text ("first") to number ("1").
    </button>
    <br />
    <br />
    <button v-on:click="jQueryListAllH2" style="width: 80%">
      Get every &lt;h2&gt; elements using jQuery and list them using Vue
    </button>
    -->
    <button id="button_jQuerySetH2H3Red" style="width: 80%">
      Set every &lt;h2&gt; and &lt;h3&gt; "color" to "red" using jQuery
    </button>
    <br />
    <br />
    <button id="button_jQuerySetH3Green" style="width: 80%">
      Set every &lt;h3&gt; "color" to "green" using jQuery
    </button>
    <br />
    <br />
    <button id="button_jQuerySetOddH3Blue" style="width: 80%">
      Set every <b>ODD</b> &lt;h3&gt; "color" to "blue" using jQuery
    </button>
    <br />
    <br />
    <button id="button_jQueryConvertTextToNumber" style="width: 80%">
      Convert every &lt;h3&gt;'s identity from text ("first") to number ("1").
    </button>
    <br />
    <br />
    <button id="button_jQuerySetPrimeH3PurpleBold" style="width: 80%">
      Set every <b>PRIME</b> &lt;h3&gt; "color" to "purple" and "font-weight" to
      "bold" using jQuery
    </button>
    <br />
    <br />
    <button id="button_jQueryFadeOutEvenH3" style="width: 80%">
      Fade OUT every <b>EVEN</b> &lt;h3&gt;
    </button>
    <br />
    <br />
    <button id="button_jQueryFadeInEvenH3" style="width: 80%">
      Fade IN every <b>EVEN</b> &lt;h3&gt;
    </button>
    <br />
    <br />
    <button id="button_jQueryListAllH2" style="width: 80%">
      Get every &lt;h2&gt; elements using jQuery and list them using Vue
    </button>
    <br />
    <ul>
      <li v-for="h2 in h2List" :key="h2.text" class="block">
        {{ h2.text }}
      </li>
    </ul>
    <br />
  </div>
</template>

<script>
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

export default {
  name: "jquery-refresher",
  data: function () {
    return {
      h2List: [],
    };
  },
  methods: {
    jQuerySetH2H3Red: function (event) {
      // Selects all h2 and sets them red
      $("h2,h3").css("color", "red");
    },
    jQuerySetH3Green: function (event) {
      // Selects all h3 and turns them green
      $("h3").css("color", "green");
    },
    jQuerySetOddH3Blue: function (event) {
      // Selects all h3 and turns odd ones blue
      $("h3").each(function (index) {
        if ((index + 1) % 2 === 1) {
          $(this).css("color", "blue");
        }
      });
    },
    jQueryAppendH3: function (event) {
      // Appends an <h3> to the end of the <h3> list
      let count = $("h3").length;
      console.log("count of h3s is ");
      console.log(count);
      $("#h3-div").append(
        "<h3 class='margin-bottom-top-0'>&lt;h3&gt;This is h3 " +
          (count + 1) +
          "&lt;/h3&gt;</h3>"
      );
    },
    jQuerySetPrimeH3PurpleBold: function (event) {
      // Selects all prime H3 and turns them purple and bold
      $("h3").each(function (index) {
        if (isPrime(index + 1)) {
          $(this).css("color", "purple");
        }
      });
    },
    jQueryConvertTextToNumber: function (event) {
      // converts the description of the h3 from textually numeric to purely numeric, ie: "first" to "1"
      $("h3").each(function (index) {
        $(this).text("<h3>This is h3 " + (index + 1) + "</h3>");
      });
    },
    jQueryListAllH2: function (event) {
      // Selects all h2 and pushes them into a list displayed by Vue
      let newArray = [];
      $("h2").each(function (index) {
        newArray.push({ text: $(this).text() });
      });
      this.h2List = newArray;
    },
    jQueryFadeOutEvenH3: function (event) {
      $("h3").each(function (index) {
        if ((index + 1) % 2 === 0) {
          $(this).fadeOut();
        }
      });
    },
    jQueryFadeInEvenH3: function (event) {
      $("h3").each(function (index) {
        if ((index + 1) % 2 === 0) {
          $(this).fadeIn();
        }
      });
    },
  },
  mounted() {
    console.log("jQueryRefresher.vue mounted.");
    console.log(
      "jQueryRefresher.vue -> Added onClick handler to buttons using jQuery."
    );

    $("#button_jQueryAppendH3").click(function () {
      let count = $("h3").length;
      console.log("count of h3s is ");
      console.log(count);
      $("#h3-div").append(
        "<h3 class='margin-bottom-top-0 font-weight-100'>&lt;h3&gt;This is h3 " +
          (count + 1) +
          "&lt;/h3&gt;</h3>"
      );
    });

    $("#button_jQuerySetH2H3Red").click(function () {
      // Selects all h2 and h3 and sets them red
      $("h2,h3").css("color", "red");
    });

    $("#button_jQuerySetH3Green").click(function () {
      // Selects all h3 and turns them green
      $("h3").css("color", "green");
    });

    $("#button_jQuerySetOddH3Blue").click(function () {
      // Selects all h3 and turns odd ones blue
      $("h3").each(function (index) {
        if ((index + 1) % 2 === 1) {
          $(this).css("color", "blue");
        }
      });
    });

    $("#button_jQuerySetPrimeH3PurpleBold").click(function () {
      // Selects all prime H3 and turns them purple and bold
      $("h3").each(function (index) {
        if (isPrime(index + 1)) {
          $(this).css("color", "purple");
          $(this).css("font-weight", 900);
        }
      });
    });

    $("#button_jQueryConvertTextToNumber").click(function () {
      // converts the description of the h3 from textually numeric to purely numeric, ie: "first" to "1"
      $("h3").each(function (index) {
        $(this).text("<h3>This is h3 " + (index + 1) + "</h3>");
      });
    });

    $("#button_jQueryListAllH2").click(this.jQueryListAllH2);

    $("#button_jQueryFadeOutEvenH3").click(this.jQueryFadeOutEvenH3);

    $("#button_jQueryFadeInEvenH3").click(this.jQueryFadeInEvenH3);
  },
};
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
.block {
  display: block;
}
.margin-bottom-top-0 {
  margin-bottom: 0px;
  margin-top: 0px;
}
.font-weight-100 {
  font-weight: 100;
}
</style>
