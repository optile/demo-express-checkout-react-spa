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
      clientId: "v1.opt-div-app.5a3eb96a10b94efb9d19f2ff7137e7e5",
      country: "DE",
      language: "de_DE",
      translation: [
        {
          language: "en",
          resource: {
            confirm: "confirm"
          }
        },
        {
          language: "de",
          resource: {
            confirm: "bestätigen"
          }
        }
      ],
      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          }
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "DE",
        providerRequest: requestData,
        payment: {
          amount: 20,
          currency: "EUR",
          reference: "Payment #1",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "Ledger Nano S",
            amount: 20
          }
        ]
      };
    },
    customFunctions: {}
  },
  integration: {
    configuration: {
      baseURL: "https://api.integration.oscato.com/pci/v1/express",
      clientId: "v1.opt-div-app.51d30325cb0d4b5bb9cce2e7e6b15b1f",
      country: "DE",
      language: "de_DE",
      translation: [
        {
          language: "en",
          resource: {
            confirm: "confirm"
          }
        },
        {
          language: "de",
          resource: {
            confirm: "bestätigen"
          }
        }
      ],
      paymentMethodsConfiguration: [
        {
          code: "PAYPAL",
          style: {
            size: "small",
            color: "gold",
            shape: "rect",
            label: "checkout"
          }
        }
      ]
    },
    createTransactionDetails: function(requestData) {
      return {
        transactionId: "tr-" + new Date().getTime(),
        country: "DE",
        providerRequest: requestData,
        payment: {
          amount: 20,
          currency: "EUR",
          reference: "Payment #1",
          longReference: {
            essential: "Thank you for your purchase!"
          }
        },
        products: [
          {
            name: "Ledger Nano S",
            amount: 20
          }
        ]
      };
    },
    customFunctions: {}
  }
};
function getEnv(queryStringEnv) {
  if (queryStringEnv) {
    return queryStringEnv;
  }
  if (window.location.hostname === "localhost") {
    return "local";
  }
  return "integration";
}

export default function getAttributes() {
  var urlParams = new URLSearchParams(window.location.search);
  var env = getEnv(urlParams.get("env"));

  return attributes[env] || null;
}
