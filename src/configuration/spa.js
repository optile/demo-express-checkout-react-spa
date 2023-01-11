/*
 * Copyright(c) 2020-2021 Payoneer Germany GmbH.
 * https://www.payoneer.com
 *
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more information.
 */

const attributes = {
	local: {
		configuration: {
			baseURL: "https://api.pi-nightly.integration.oscato.com/pci/v1/express",
			clientId: "v1.opt-div-app.ac6b9d09d909429f86f922b778a919f8",
			currency: "GBP",
			country: "GB",
			language: "en_GB",
			translation: [
				{
					language: "en",
					resource: {
						confirm: "Confirm",
					},
				},
				{
					language: "de",
					resource: {
						confirm: "Bestätigen",
					},
				},
			],
			paymentMethodsConfiguration: [
				{
					code: "PAYPAL",
					clientId: "sb",
					style: {
						size: "small",
						color: "gold",
						shape: "rect",
						label: "checkout",
					},
				},
				{
					code: "PAYPAL_PAY_LATER",
					clientId: "sb",
					style: {
						size: "small",
						color: "gold",
						shape: "rect",
						label: "checkout",
					},
				},
			],
		},
		createTransactionDetails: function (requestData) {
			return {
				transactionId: "tr-" + new Date().getTime(),
				country: "GB",
				providerRequest: requestData,
				payment: {
					amount: 47,
					currency: "GBP",
					reference: "Payment #1",
					longReference: {
						essential: "Thank you for your purchase!",
					},
				},
				products: [
					{
						name: "USB C cable",
						amount: 47,
					},
				],
			};
		},
		customFunctions: {},
	},
	"pi-nightly": {
		configuration: {
			baseURL: "https://api.pi-nightly.integration.oscato.com/pci/v1/express",
			clientId: "v1.opt-div-app.e5e9201798fe4e2aac607dc2ac76d84d",
			currency: "GBP",
			country: "GB",
			language: "en_US",
			translation: [
				{
					language: "en",
					resource: {
						confirm: "confirm",
					},
				},
				{
					language: "de",
					resource: {
						confirm: "bestätigen",
					},
				},
			],
			paymentMethodsConfiguration: [
				{
					code: "PAYPAL",
					style: {
						size: "small",
						color: "gold",
						shape: "rect",
						label: "checkout",
					},
				},
				{
					code: "PAYPAL_PAY_LATER",
					clientId: "sb",
					style: {
						size: "small",
						color: "gold",
						shape: "rect",
						label: "checkout",
					},
				},
			],
		},
		createTransactionDetails: function (requestData) {
			return {
				transactionId: "tr-" + new Date().getTime(),
				country: "GB",
				providerRequest: requestData,
				payment: {
					amount: 47,
					currency: "GBP",
					reference: "Payment #1",
					longReference: {
						essential: "Thank you for your purchase!",
					},
				},
				products: [
					{
						name: "USB C cable",
						amount: 47,
					},
				],
			};
		},
		customFunctions: {},
	},
};
function getEnv(queryStringEnv) {
	if (queryStringEnv) {
		return queryStringEnv;
	}
	if (window.location.hostname === "localhost") {
		return "local";
	}
	return "pi-nightly";
}

export default function getAttributes() {
	var urlParams = new URLSearchParams(window.location.search);
	var env = getEnv(urlParams.get("env"));

	return attributes[env] || null;
}
