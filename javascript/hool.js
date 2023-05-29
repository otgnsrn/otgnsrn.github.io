//fetch get
const get = async (url) => {
    const response = await fetch("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6");
    return await response.json();
};
const post = async (url, data) => {
    const response = await fetch("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};
const put = async (url, data) => {
    const response = await fetch("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};
const del = async (url) => {
    const response = await fetch("https://api.jsonbin.io/v3/b/646f0e7c8e4aa6225ea3c6a6", {
        method: "DELETE",
    });
    return await response.json();
};

const Data = [
    {
        "name": "Homemade steak pizza",
        "description": "Home made prime ribs pizza",
        "category": "#Dinner",
        "image": "./img1/img9.webp",
        "views": "12485",
        "review": "10/10"
    },
    {
        "name": "Bruschettea",
        "description": "Өглөөний хоолонд хийж идэхэд тохиромжтой",
        "category": "#Breakfast",
        "image": "./img1/img6.webp",
        "views": "2583",
        "review": "8.9/10"
    },
    {
        "name": "Malatang",
        "description": "Хүйтэнд идэхэд тохиромжтой",
        "category": "#Олон орны хоол",
        "image": "./img1/img3.webp",
        "views": "2047",
        "review": "9.1/10"
    },
    {
        "name": "Salmon bowl",
        "description": "Салмон засастай, будаатай хоол, Salmon sashimi & avocado rice bowl",
        "category": "#Олон орны хоол",
        "image": "./img1/img1.webp",
        "views": "1945",
        "review": "9.2/10"
    }
];
// export
export { get, post, put, del, Data };
