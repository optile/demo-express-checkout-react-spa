import { fetchData } from "../network";
import { getLongId, getAuthorization } from "../../utils";
import getAttributes from "../../configuration/spa";
import { charge } from "../charge";

const getPresetLink = (longId) => {
    const baseURL = getAttributes()?.configuration?.baseURL;
    return `${baseURL?.replace("pci/v1/express", "api/presets")}/${longId}`;
};

export const getExpressPreset = async (setStatus) => {
    const longId = getLongId();
	const baseURL = getPresetLink(longId);
	const Authorization = getAuthorization();
	const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization,
        },
    };
    const { response, data } = await fetchData(baseURL, options);
	if (response?.ok && data?.links?.charge) {
		const chargeResponse = await charge(data.links.charge);
		if (chargeResponse?.data?.status?.code === "charged") {
            setStatus("CHARGED");
        } else setStatus("ERROR");
    } else setStatus("ERROR");
};
