let x = "";
const myObj = {
    business_id: "tnhfDv5Il8EaGSXZGiuQGg",
    name: "Garaje",
    address: "475 3rd St",
    city: "San Francisco",
    state: "CA",
    latitude: "37.7817529521",
    longitude: "-122.39612197",
    star: "4.5",
    review_count: "1198",
}
x += "The rating of the business named " + myObj.name + " is " + myObj.star + " and has " + myObj.review_count + " reviews.<br>";
x += "The gps location of business is " + myObj.longitude + " , " + myObj.latitude + "."
document.getElementById("enter").innerHTML = x; 