import { MERCHANT } from "../server/constants";

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
 * This function returns encrypted authorization token
 * @returns {String} authorization
 */
export const getAuthorization = () => `Basic ${btoa(`${MERCHANT.USER}:${MERCHANT.TOKEN}`)}`;
