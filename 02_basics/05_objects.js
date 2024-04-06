const course = {
  coursename: "js in hindi",
  price: "999",
  courseinstructor: "gaurav",
};
//without destructuring
//course.courseinstructor

// Syntax for destructure
// const {} =bojectName

const { courseinstructor: instructor } = course;

// console.log(courseinstructor)  //gaurav
console.log(instructor); //gaurav

// Json example
// {
//     name:"gaurav",
//     coursename: "js in hindi",
//     price:'free'
// }

// Json example 2

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Lyubim",
//           "last": "Apostol"
//         },
//         "location": {
//           "street": {
//             "number": 1499,
//             "name": "Volodimirska ploshcha"
//           },
//           "city": "Lozova",
//           "state": "Luganska",
//           "country": "Ukraine",
//           "postcode": 97380,
//           "coordinates": {
//             "latitude": "74.5441",
//             "longitude": "-97.5458"
//           },
//           "timezone": {
//             "offset": "+9:00",
//             "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
//           }
//         },
//         "email": "lyubim.apostol@example.com",
//         "login": {
//           "uuid": "70d2287f-fc68-4602-8503-bec3949f020b",
//           "username": "beautifulelephant746",
//           "password": "enrique",
//           "salt": "8VAHAckH",
//           "md5": "4375dc9f95af526795ccde9516110b46",
//           "sha1": "95470e628719db53b015a63701858805ce35944f",
//           "sha256": "4d62925fcedea05a507b9d35f2375329dd8e97a3e025c15b2b373b9cd44f5eb9"
//         },
//         "dob": {
//           "date": "1994-09-20T11:12:34.187Z",
//           "age": 29
//         },
//         "registered": {
//           "date": "2018-08-05T10:09:51.134Z",
//           "age": 5
//         },
//         "phone": "(097) H59-0107",
//         "cell": "(097) U00-2844",
//         "id": {
//           "name": "",
//           "value": null
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/19.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
//         },
//         "nat": "UA"
//       }
//     ],
//     "info": {
//       "seed": "6a2f1969722915e6",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
