import { attributes } from "../server/constants";

export const getQueryStringFromObject = (parameters) => {
    const queryString = parameters.reduce(
        (acc, current) => `${acc}${encodeURIComponent(current.name)}=${encodeURIComponent(current.value)}&`,
        ""
    );
    return queryString.slice(0, -1);
};

/**
 * This function returns longId from query params
 * @returns {String} longId
 */
export const getLongId = () => {
    let params = new URLSearchParams(window.location.search);

    return params.get("longId");
};

/**
 * This function returns the object which contain
 * merchant user and token according to whether its
 * localhost or integration
 * @returns {Object} MERCHANT
 */
const getMerchantToken = () => {
    if (window.location.hostname === "localhost") {
        return attributes.local.MERCHANT;
    }
    return attributes.integration.MERCHANT;
};

/**
 * This function returns encrypted authorization token
 * @returns {String} authorization
 */
export const getAuthorization = () => {
    const MERCHANT = getMerchantToken();
    return `Basic ${btoa(`${MERCHANT.USER}:${MERCHANT.TOKEN}`)}`;
};