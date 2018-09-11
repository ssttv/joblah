import axios from "axios";
import FETCH_JOBS from "./types";
import reverseGeocode from "latlng-to-zip";

export const fetchJobs = region => async dispatch => {
  try {
    let zipcode = await reverseGeocode(region);
  } catch (e) {
    console.error(e);
  }
};
