const flowId = "en-ca-qbo-buy-intuit-brand-leader";

const easyStartBuyDataWa = "qbo-en-ca-pricing-easystart-buy-now";
const essentialsBuyDataWa = "qbo-en-ca-pricing-essentials-buy-now";
const plusBuyDataWa = "qbo-en-ca-pricing-plus-buy-now";
const modalBuyDatawa = "qbo-en-ca-pricing-modal-buy-now";
const trialBuyDatawa = "qbo-en-ca-pricing-continue-free-trial";

const easyStartCard = document.getElementById(
  "easy-start-small-business-accounting"
);
const essentialsCard = document.getElementById(
  "essentials-small-business-accounting"
);
const plusCard = document.getElementById("plus-small-business-accounting");

const pricingCardChangeUrl = (pricingCard, btnDatawa, varFlowId) => {
  const buyBtnWithDataWa = document.querySelector(
    `[data-wa-link='${btnDatawa}']`
  );
  buyBtnWithDataWa.href = `${buyBtnWithDataWa.href}&flowId=${varFlowId}`;

  //Via PricingCard

  // const cardBtn =
  //   pricingCard.children[0].innerText.toLowerCase() ===
  //   "Most popular".toLowerCase()
  //     ? pricingCard.children[1]
  //     : pricingCard.children[0];
  // const buyBtn = cardBtn
  // .querySelector("[class*='PricingCardItem_module_pricingCtas']")
  // .querySelector(".pricing-button")
  // .querySelector(`[data-wa-link='${btnDatawa}']`);
  // buyBtn.href = `${buyBtn.href}&flowId=${varFlowId}`;
};

const modalButtonChangeUrl = (modalBuyDatawa, trialBuyDatawa, varFlowId) => {
  const buyBtn = document.querySelector(`[data-wa-link='${modalBuyDatawa}']`);
  const trialBtn = document.querySelector(
    `"[data-wa-link='${trialBuyDatawa}']`
  );
  console.log("here");
  // buyBtn.href = `${buyBtn.href}&flowId=${varFlowId}`;
  // trialBtn.href = `${trialBtn.href}&flowId=${varFlowId}`;
};
document.addEventListener("DOMContentLoaded", () => {
  pricingCardChangeUrl(easyStartCard, easyStartBuyDataWa, flowId);
  pricingCardChangeUrl(essentialsCard, essentialsBuyDataWa, flowId);
  pricingCardChangeUrl(plusCard, plusBuyDataWa, flowId);
  modalButtonChangeUrl(modalBuyDatawa, trialBuyDatawa, flowId);
});

const suiMutationObserver = new MutationObserver((mutationRecords) => {
  if (!document.querySelector("[class*='Modal_module_modal']")) {
    pricingCardChangeUrl(easyStartCard, easyStartBuyDataWa, flowId);
    pricingCardChangeUrl(essentialsCard, essentialsBuyDataWa, flowId);
    pricingCardChangeUrl(plusCard, plusBuyDataWa, flowId);
  } else {
    modalButtonChangeUrl(modalBuyDatawa, trialBuyDatawa, flowId);
  }
});
suiMutationObserver.observe(easyStartCard, {
  childList: true
});
