jQuery(function ($) {
  var optPrice = $('.unit-price--value').textContent;
  var popup = $("<span id='moreThen1000' style='font-size: 18px;color: #ff9000;'>The size entered is larger than the online size limit, please <a style='text-decoration: underline' href='https://lushbanners.com/request-a-quote'>Contact us</a> for a custom quote. Thank you. </span>").insertAfter(".qtybox-addcart.qty-cart");
  popup.hide();
  var selectPrice = 0.00;
  

  

  if (
    $('input[type="hidden"][name="category_id"][value="227"]').length > 0 ||
    $('input[type="hidden"][name="category_id"][value="90"]').length > 0 ||
    $('input[type="hidden"][name="category_id"][value="95"]').length > 0 ||
    $('input[type="hidden"][name="category_id"][value="136"]').length > 0
    
    ) {
   
   
    //Initializing Fields and create structure
    $(".product-options-list li:nth-child(1)").addClass("sqft--calc");
    $(".product-options-list li:nth-child(2)").addClass("sqft--calc");
    $(".product-options-list li:nth-child(3)").addClass("sqft--calc sqft--calc-hide").hide();
    $("body")
      .find(".product-options-list li:nth-child(1) .opt-field input")
      .each(function () {
        $("<input type='number' />")
          .attr({ name: this.name, value: 1, id: this.id, size: this.size })
          .insertBefore(this);
        $(".product-options-list li:nth-child(1) .opt-field input").attr(
          "class",
          $(this).attr("class") + " width--sqft"
        );
        $(".product-options-list li:nth-child(1) .opt-field input").attr(
          "maxlength",
          $(this).attr("maxlength")
        );
        $(".product-options-list li:nth-child(1) .opt-field input").attr(
          "min",
          1
        );
        //$('.product-options-list li:nth-child(1) .opt-field input').attr("max",32);
        $(".product-options-list li:nth-child(1) .opt-field input").attr(
          "value",
          36
        );
        $(".product-options-list li:nth-child(1) .opt-field input")
          .parent()
          .addClass("qty-input");
        getSquareftVal();
      })
      .remove();
    $("body")
      .find(".product-options-list li:nth-child(2) .opt-field input")
      .each(function () {
        $("<input type='number' />")
          .attr({ name: this.name, value: 1, id: this.id, size: this.size })
          .insertBefore(this);
        $(".product-options-list li:nth-child(2) .opt-field input").attr(
          "class",
          $(this).attr("class") + " height--sqft"
        );
        $(".product-options-list li:nth-child(2) .opt-field input").attr(
          "maxlength",
          $(this).attr("maxlength")
        );
        $(".product-options-list li:nth-child(2) .opt-field input").attr(
          "min",
          1
        );
        $(".product-options-list li:nth-child(2) .opt-field input").attr(
          "value",
          24
        );
        $(".product-options-list li:nth-child(2) .opt-field input")
          .parent()
          .addClass("qty-input");
        getSquareftVal();
      })
      .remove();

      $(
        '<span class="qty-nav qty-nav-down"><button type="button" class="qty-down" data-target=".width--sqft">-</button></span>'
      ).insertBefore(".width--sqft");
      $(
        '<span class="qty-nav qty-nav-up"><button type="button" class="qty-up" data-target=".width--sqft">+</button></span>'
      ).insertAfter(".width--sqft");
      $(
        '<span class="qty-nav qty-nav-down"><button type="button" class="qty-down" data-target=".height--sqft">-</button></span>'
      ).insertBefore(".height--sqft");
      $(
        '<span class="qty-nav qty-nav-up"><button type="button" class="qty-up" data-target=".height--sqft">+</button></span>'
      ).insertAfter(".height--sqft");
      $(".form-group.qty-input .qty-up").click(function () {
        var qtyInput = $(this).data("target");
        var incrementedVal = parseInt($(qtyInput).val()) + 1;
        $(qtyInput).val(incrementedVal);
        $(".form-group.qty-input " + qtyInput).trigger("change");
      });
      $(".form-group.qty-input .qty-down").click(function () {
        var qtyInput = $(this).data("target");
        var incrementedVal = parseInt($(qtyInput).val()) - 1;
  
        if (incrementedVal <= 1) incrementedVal = 1;
        $(qtyInput).val(incrementedVal);
        $(".form-group.qty-input " + qtyInput).trigger("change");
      });

    $(".product-options-list li:nth-child(1) .opt-field input.form-control").on(
      "change",
      getSquareftVal
    );
    $(".product-options-list li:nth-child(2) .opt-field input.form-control").on(
      "change",
      getSquareftVal
    );

    $(".product-options-list li:nth-child(1) .opt-field input.form-control").on(
      "keyup",
      getSquareftVal
    );
    $(".product-options-list li:nth-child(2) .opt-field input.form-control").on(
      "keyup",
      getSquareftVal
    );
  }

  function getSquareftVal() {
    if (
      $('input[type="hidden"][name="category_id"][value="227"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="90"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="95"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="136"]').length > 0
      
      ) {

      var stf =
        parseInt(
          $(
            ".product-options-list li:nth-child(1) .opt-field input.form-control"
          ).val() 
        ) *
        parseInt(
          $(
            ".product-options-list li:nth-child(2) .opt-field input.form-control"
          ).val()
        );
   
      stf = stf / 144 ;
      //debugger;
      if ($("span.unit-price--value").is("[data-total-option-price]")) {
        

        var a = $('.sqft--calc-hide select');
        var b = [];

        
        var rlist =[]
        var plist = []
        const res = [];
// for (var i=0, n=sel.option.length;i<n;i++) { // looping over the options
//   if (sel.options[i].value) vals.push(sel.options[i].value);
// }
var hstf = $(".sqft--calc-hide select option:last-of-type()").text().split(' ')[1].replace('[$', '').replace("]", "").replace(",", "");
hstf = parseFloat(hstf);
console.log(hstf);
$(".sqft--calc-hide select option").each(function(i)
{
  rlist[i] = $(this).text().split(' ')[0];
  plist[i] = $(this).text().split(' ')[1].replace("[$", "").replace("]", "").replace(",", "");
  
});



const mapArrays = (rlist, plist) => {
  
  for(let i = 0; i < rlist.length; i++){
     res.push({
        range: rlist[i],
        price: plist[i]
     });
  };
  return res;
};

var newArr = mapArrays(rlist, plist);
//newArr = JSON.stringify(newArr);
newArr.map((pricing) => {

  if((stf < hstf) && (stf >= pricing.range)){
    optPrice = parseFloat(pricing.price).toFixed(2);
    $("span.unit-price--value").text("$" + optPrice);
    $("span.unit-price--value").attr("data-unit", optPrice);
    popup.removeClass('reset').hide().fadeOut(300,'swing');
    
  } else if((stf > hstf) && (stf > pricing.range)) {
    optPrice = 'N/A';
    $("span.unit-price--value").text(optPrice);
    $("span.unit-price--value").attr("data-unit", optPrice);
    popup.addClass('reset').show().fadeIn(300,'swing');
   
  } 

  

});




 
    var sqftPrice = optPrice;
    var sqftOptionPrice = parseFloat($("span.unit-price--value").attr("data-total-option-price"));
    
      $("span.yourprice #price").text( "$" + (sqftPrice + sqftOptionPrice));
      quantityMultiplier();
      
    
      

      } else {
        $("span.unit-price--value").text(
          $(".pricingBlock .yourprice span#price").text()
        );
        $("span.unit-price--value").attr(
          "data-unit",
          $("span.unit-price--value").text().split("$")[1]
        );
        $("span.unit-price--value").attr("data-total-option-price");
      }
      
      if (parseInt($('.qty-input input[type="text"]').val()) > 1)
        quantityMultiplier();
    }
  }

  

 

  //Create Discount array and Initialize Unit Price and Subtotal
  $(
    '<label class="unit--price">Unit Price</label><label class="sub--total">Order Sub-Total</label>'
  ).appendTo(".qty-label");
  $('<span class="unit-price--value" data-unit=></span>').insertAfter(
    ".qty-input:not(.form-group)"
  );
  $(".pricingBlock").insertAfter(".unit-price--value");
  $("span.unit-price--value").text(
    $(".pricingBlock .yourprice span#price").text()
  );
  var disc_price = $("span.unit-price--value").text().split("$")[1];
  var coma = ",";
  // if(disc_price.indexOf(coma) == !1){
  //   disc_price = disc_price.replace(",", "");
  // }

  $("span.unit-price--value").attr("data-unit", disc_price);
  //$('.yourprice #price').text('$' + parseInt(disc_price));
  $("span.unit-price--value").attr("data-total-option-price", 0.00);

  var qtyPrice = [];
  var separators = [" ", "\\+", "-"];
  $(".quantity-discounts .qty-bound:not(:last-child)").each(function (i) {
    qtyPrice[i] = [];
    qtyPrice[i][0] = parseInt(
      $(this)
        .find(".qty-text")
        .text()
        .split(new RegExp(separators.join("|"), "g"))[0]
    );
    var disc_price = $(this).find(".qty-price-text").text().split("$")[1];
    if (disc_price) disc_price = disc_price.replace(",", "");
    qtyPrice[i][1] = parseFloat(disc_price);
  });
  $("span.qty-nav-down").on("click", quantityMultiplier);
  $("span.qty-nav-up").on("click", quantityMultiplier);
  $('.qty-input input[type="text"]').on("change", quantityMultiplier);

  var flagQty = true;
  function quantityMultiplier() {
    var qty = parseInt($('.qty-input input[type="text"]').val());
    $.each(qtyPrice, function (i, val) {
      //debugger;
      if (qty >= val[0]) {
        var unitPrice = parseFloat(
          $("span.unit-price--value").attr("data-unit")
        );
          
        if (val[1] <= 0) unitPrice += val[1];
        else if (unitPrice > val[1]) unitPrice = val[1];
        unitPrice += parseFloat(
          $("span.unit-price--value").attr("data-total-option-price")
        );
          $("span.unit-price--value").text("$" + unitPrice.toFixed(2));
      }
    });
    
    var newPrice = parseFloat($("span.unit-price--value").text().split("$")[1]) * qty;
    $(".pricingBlock .yourprice span#price").text("$" + newPrice.toFixed(2));
    if ($("span.unit-price--value").attr("data-unit") != $("span.unit-price--value").text().split("$")[1] && flagQty) {
      $("span.unit-price--value").addClass("show-old-price");
      flagQty = !flagQty;
    }
  }

  $(
    '.product-options-list > li:not(.sqft--calc) input:not([type="hidden"]),.product-options-list > li:not(.sqft--calc) select'
  ).on("change", optionPriceCalculator);
  $(
    ".product-options-list > li:not(.sqft--calc) .radio-format > label.radio-option"
  ).on("click", optionPriceCalculator);

  function optionPriceCalculator() {
    //debugger;
    //Get price from Inputs
    if (
      $('input[type="hidden"][name="category_id"][value="227"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="90"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="95"]').length > 0 ||
      $('input[type="hidden"][name="category_id"][value="136"]').length > 0
    ) {
  
      if ($(this).is("select")){
        selectPrice = $(this).find("option:selected").text();
        
      }
      else if ($(this).is('input[type="checkbox"]'))
        selectPrice = $($(this).parent()).text().trim();
      else if ($(this).is('input[type="radio"]'))
        selectPrice = $(this).next().find("span").text().trim();
      else if ($(this).is("label"))
        selectPrice = $(this).find("span").text();

      var substring = "[$";
      if (selectPrice.indexOf(substring) !== -1) {
        selectPrice = selectPrice.split("$")[1];
        selectPrice = selectPrice.split("]")[0];
        if (selectPrice.indexOf(",") !== -1)
          selectPrice = selectPrice.replace(",", "");
        selectPrice = parseFloat(selectPrice);
        
      } else selectPrice = 0.0;
      //debugger;
      //Assign price to List Items
      if ($(this).is('input[type="checkbox"]')) {
        if ($(this).closest("li").is("[data-option-price]")) {
          var prev_check_price = parseFloat(
            $(this).closest("li").attr("data-option-price")
          );
          if ($(this).is('input[type="checkbox"]:checked'))
            selectPrice += prev_check_price;
          else {
            prev_check_price -= selectPrice;
            selectPrice = prev_check_price;
          }
        }
      }
      $(this).closest("li").attr("data-option-price", selectPrice);
      console.log(selectPrice);
      var optionPrice = 0.0;
      $(".product-options-list > li[data-option-price]").each(function () {
        var itemPrice = parseFloat($(this).attr("data-option-price",  ));
        optionPrice += itemPrice;
      });
      $("span.unit-price--value").attr(
        "data-total-option-price",
        optionPrice.toFixed(2)
      );
      quantityMultiplier();
    } else {
      if ($(this).is("select"))
         selectPrice = $(this).find("option:selected").text();
      else if ($(this).is('input[type="checkbox"]'))
        selectPrice = $($(this).parent()).text().trim();
      else if ($(this).is('input[type="radio"]'))
        selectPrice = $(this).next().find("span").text().trim();
      else if ($(this).is("label"))
        selectPrice = $(this).find("span").text();

      var substring = "[$";
      if (selectPrice.indexOf(substring) !== -1) {
        selectPrice = selectPrice.split("$")[1];
        selectPrice = selectPrice.split("]")[0];
        if (selectPrice.indexOf(",") !== -1)
          selectPrice = selectPrice.replace(",", "");
        selectPrice = parseFloat(selectPrice);
      } else selectPrice = 0.0;
      //debugger;
      //Assign price to List Items
      if ($(this).is('input[type="checkbox"]')) {
        if ($(this).closest("li").is("[data-option-price]")) {
          var prev_check_price = parseFloat(
            $(this).closest("li").attr("data-option-price")
          );
          if ($(this).is('input[type="checkbox"]:checked'))
            selectPrice += prev_check_price;
          else {
            prev_check_price -= selectPrice;
            selectPrice = prev_check_price;
          }
        }
      }
      $(this).closest("li").attr("data-option-price", selectPrice);
      var optionPrice = 0.0;
      $(".product-options-list > li[data-option-price]").each(function () {
        var itemPrice = parseFloat($(this).attr("data-option-price"));
        optionPrice += itemPrice;
      });
      $("span.unit-price--value").attr(
        "data-total-option-price",
        optionPrice.toFixed(2)
      );
      quantityMultiplier();
    }
  }
  // if($('#moreThen1000').css('display') != 'inline'){
  //   $(".pricingBlock .yourprice span#price").text('n/a');
  // }
}); //end jquery
