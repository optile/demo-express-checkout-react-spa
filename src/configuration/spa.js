import customFunctions from "./customFunctions";
export const getRedirectUrl = (url, parameters) => {
  const queryString = parameters.reduce(
    (acc, current) =>
      `${acc}${encodeURIComponent(current.name)}=${encodeURIComponent(
        current.value
      )}&`,
    ""
  );
  return `${url}${url.includes("?") ? "&" : "?"}${queryString.slice(0, -1)}`;
};
const attributes = {
  local: {
    configuration: {
      baseURL: "https://api.integration.oscato.com/pci/v1/express",
      clientId: "v1.opt-div-app.639897dd9e374405846e4e6d93280c90",
      country: "DE",

      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          },
          locale: "en_US"
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "DE",
        providerRequest: requestData,
        payment: {
          amount: 2,
          currency: "EUR",
          reference: "Payment #1",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "USB C cable",
            amount: 2
          }
        ]
      };
    },
    customFunctions: customFunctions
  },
  integration: {
    configuration: {
      baseURL: "https://api.integration.oscato.com/pci/v1/express",
      clientId: "v1.opt-div-app.d1f6628b66064154b5bde44cf095ad61",
      country: "DE",

      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          },
          locale: "en_US"
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "DE",
        providerRequest: requestData,
        payment: {
          amount: 2,
          currency: "EUR",
          reference: "Payment #1",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "USB C cable",
            amount: 2
          }
        ]
      };
    },
    customFunctions: customFunctions
  }
};

export default function getAttributes() {
  var urlParams = new URLSearchParams(window.location.search);
  var env = urlParams.get("env") || "local";

  return attributes[env] || null;
}
