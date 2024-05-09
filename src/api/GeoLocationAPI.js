import axios from "axios";

// const ipGeo = process.env.REACT_APP_GEO_API;
const baseURL = "https://api.ipbase.com/v2/info?apikey=ipb_live_srbveQqL2eU2u7iaYL63yHaps9VPfGchrDs6F5yq";

export const geoLocationData = async () => {
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    return error;
  }
};
