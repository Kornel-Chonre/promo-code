const buttons = document.getElementsByTagName("button");

      function updateTotal() {
        const basePrice = 1299;
        const memoryCost = parseInt(
          document.getElementById("memory-cost").textContent
        );
        const storageCost = parseInt(
          document.getElementById("storage-cost").textContent
        );
        const deliveryCost = parseInt(
          document.getElementById("delivery-cost").textContent
        );
        return basePrice + memoryCost + storageCost + deliveryCost;
      }

      function updateDisplayedTotal(total) {
        const totalPrice = document.getElementById("total-price");
        totalPrice.textContent = total;
        document.getElementById("user-payment").textContent = total;
      }

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          if (buttons[i].id === "8gb-memory") {
            customizationPrice("memory-cost", 0);
          } else if (buttons[i].id === "16gb-memory") {
            customizationPrice("memory-cost", 150);
          } else if (buttons[i].id === "256gb-storage") {
            customizationPrice("storage-cost", 0);
          } else if (buttons[i].id === "512gb-storage") {
            customizationPrice("storage-cost", 100);
          } else if (buttons[i].id === "1tb-storage") {
            customizationPrice("storage-cost", 200);
          } else if (buttons[i].id === "late-delivery") {
            customizationPrice("delivery-cost", 0);
          } else if (buttons[i].id === "early-delivery") {
            customizationPrice("delivery-cost", 20);
          } else if (buttons[i].id === "apply-btn") {
            promocode();
          }
        });
      }

      function customizationPrice(id, cost) {
        const now = document.getElementById(id);
        now.textContent = cost;
        const totalCost = updateTotal();
        updateDisplayedTotal(totalCost);
      }

      function promocode() {
        const promoInput = document.getElementById("input-field").value.trim();
        const promoMessage = document.getElementById("promo-message");
        const totalCost = updateTotal();

        if (promoInput === "ostad10") {
          const discountedPrice = totalCost * 0.9; // 10% discount
          updateDisplayedTotal(discountedPrice.toFixed(2));
          promoMessage.textContent = "Promo code applied! 10% discount applied.";
        }else if (promoInput === "ostad5") {
          const discountedPrice = totalCost * 0.95; // 10% discount
          updateDisplayedTotal(discountedPrice.toFixed(2));
          promoMessage.textContent = "Promo code applied! 5% discount applied.";
        } else{
          promoMessage.textContent = "Invalid promo code.";
        }
      }