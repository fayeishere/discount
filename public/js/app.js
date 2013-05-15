    function validation() {

      console.log( $("#discount_check").val() );
      $.get('/codecheck/'+$("#discount_check").val(), function(data) {
        if (data.valid == true) {
          $('#discount_message').append("<p>Yay! You are discounted! " + data.discount_human + "</p>");
          console.log("bam");
          $('#orig_price').hide();
          var eval_cost = $("#cost").val();
          if (data.discount_amt < 1) {
            var discount_dollars = eval_cost * data.discount_amt;
          }
          else {
            discount_dollars = data.discount_amt;
          }
          $('#discount_price').append("<p>Your discount is $" +discount_dollars + " Your new price is $" + (eval_cost - discount_dollars) + " An even better deal!</p>")
        }


        console.log(data.valid);
      });
    }

      $("#clicker").click(function() {
        console.log("Still here");
        validation();

      });
