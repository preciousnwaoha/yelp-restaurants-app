import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer xv8vO8_B7yTc3keD-DDTvoXNlNHLraqvq61zbeFzVqu57mky8csrMejgm2xbW0_jppq0PRTD6OpVChhbql4Xg2EgE3CkJah7TuZl26N9GiyZthMxhY_kFiqexZSnZXYx`
    }
});

