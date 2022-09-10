import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 2YTlzEWYFb1EQWuzu0sibQ2Qad6TZJ5jZc8F2mWAZ6HABOFpSX2Cjw_6acbNpruvk8d_l2vTQqsWdOAgWFlqfvf6xmiy5OJVYi8sqCjVeOEWIv4RpR8sukTIGwIcY3Yx"
    },
});

