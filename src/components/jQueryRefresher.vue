<template>
  <div class="hello">
    <h2 class="margin-bottom-top-0">&lt;h2&gt;jQuery Refresher.&lt;/h2&gt;</h2>
    <div id="h3-div">
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the first h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the second h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the third h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the fourth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the fifth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the sixth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the seventh h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the eighth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the ninth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the tenth h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the eleventh h3&lt;/h3&gt;
      </h3>
      <h3 class="margin-bottom-top-0">
        &lt;h3&gt;This is the twelfth h3&lt;/h3&gt;
      </h3>
    </div>
    <h2 class="margin-bottom-top-0">
      &lt;h2&gt;Buttons that invoke jQuery to manipulate the DOM:&lt;/h2&gt;
    </h2>
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
    <button v-on:click="jQueryAppendH3" style="width: 80%">
      Append an &lt;h3&gt;
    </button>
    <br />
    <br />
    <button v-on:click="jQuerySetPrimeH3Purple" style="width: 80%">
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
    <br />
    <ul>
      <li v-for="h2 in divList" :key="h2.text" class="block">
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
  name: "HelloWorld",
  data: function () {
    return {
      divList: [],
    };
  },
  methods: {
    jQuerySetH2Red: function (event) {
      // Selects all h2 and sets them red
      $("h2,h3").css("color", "red");
    },
    jQuerySetH3Green: function (event) {
      // Selects all divs and turns them green
      $("h3").css("color", "green");
    },
    jQuerySetOddH3Blue: function (event) {
      // Selects all divs and turns them green
      $("h3").each(function (index) {
        if ((index + 1) % 2 === 1) {
          $(this).css("color", "blue");
        }
      });
    },
    jQueryAppendH3: function (event) {
      $("#h3-div").append(
        '<h3 class="margin-bottom-top-0">&lt;h3&gt;This is an appended h3&lt;/h3&gt;</h3>'
      );
    },
    jQuerySetPrimeH3Purple: function (event) {
      // Selects all prime H3 and turns them green
      // $("h3").each(function (index) {
      //   if (index + 1 === 2) {
      //     $(this).css("color", "purple");
      //   } else if (index + 1 === 3) {
      //     $(this).css("color", "purple");
      //   } else if (index + 1 === 5) {
      //     $(this).css("color", "purple");
      //   } else if (index + 1 === 7) {
      //     $(this).css("color", "purple");
      //   } else if (index + 1 === 11) {
      //     $(this).css("color", "purple");
      //   }
      // });

      $("h3").each(function (index) {
        if (isPrime(index + 1)) {
          $(this).css("color", "purple");
        }
      });
    },
    jQueryConvertTextToNumber: function (event) {
      $("h3").each(function (index) {
        $(this).text("<h3>This is h3 " + (index + 1) + "</h3>");
      });
    },
    jQueryListAllH2: function (event) {
      // Selects all divs and turns them red
      let newArray = [];
      $("h2").each(function (index) {
        newArray.push({ text: $(this).text() });
      });
      this.divList = newArray;
    },
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
</style>
