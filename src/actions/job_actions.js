import axios from "axios";
import FETCH_JOBS from "./types";
import reverseGeocode from "latlng-to-zip";

export const fetchJobs = region => async dispatch => {
  let zipcode = await reverseGeocode(region);
};
