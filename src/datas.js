let xAxisData = [
    {name : 'Jan', sale:112_000},
    {name : 'Feb', sale:100_000},
    {name : 'Mar', sale:10_000},
    {name : 'Apr', sale:12_000},
    {name : 'May', sale:52_000},
    {name : 'Jun', sale:32_000},
    {name : 'July', sale:47_000},
    {name : 'Aug', sale:81_000},
    {name : 'Sep', sale:39_000},
    {name : 'Oct', sale:90_000},
    {name : 'Dec', sale:95_000},
    {name : 'Nov', sale:66_000},
]

const newMembers = [
    {
        id:1,
        username:"Pouria Mobaraki",
        title:"Developer",
        img: "images/pro.jpg"
    },
    {
        id:2,
        username:"Ali Boroumand",
        title:"QA Engineer",
        img: "images/pro.jpg"
    },
    {
        id:3,
        username:"Ali Moqtazi",
        title:"Manager",
        img: "images/pro.jpg"
    },
    {
        id:4,
        username:"Aref",
        title:"Hacker",
        img: "images/pro.jpg"
    }

]

const transactions= [
    {
        id:1,
        customer:'Pouria Mobaraki',
        date:'27 Sep 2024',
        amount:123,
        status:'Declined',
        img:'images/pro.jpg'
    },
    {
        id:2,
        customer:'Siavash  Padidar',
        date:'12 jun 2024',
        amount:243,
        status:'Pending',
        img:'images/pro.jpg'
    },
    {
        id:3,
        customer:'Parsa Payande',
        date:'12 May 2024',
        amount:731,
        status:'Approved',
        img:'images/pro.jpg'
    },
    {
        id:4,
        customer:'Kambiz Esfarayeni',
        date:'19 Aug 2024',
        amount:524,
        status:'Declined',
        img:'images/pro.jpg'
    },
]

let userRows = [
    {
        id:1,
        username:'Pouria Mobaraki',
        avatar: 'images/pro.jpg',
        status: 'active',
        transaction:'$722.34',
        email: 'ss_pooria69@yahoo.com'
    },
    {
        id:2,
        username:'Arian Safari',
        avatar: 'images/pro.jpg',
        status: 'active',
        transaction:'$129.52',
        email: 'ss_pooria69@yahoo.com'
    },
    {
        id:3,
        username:'Reza Minae',
        avatar: 'images/pro.jpg',
        status: 'active',
        transaction:'$72.34',
        email: 'ss_pooria69@yahoo.com'
    },
    {
        id:4,
        username:'Hasan Mahyar',
        avatar: 'images/pro.jpg',
        status: 'active',
        transaction:'$129.52',
        email: 'ss_pooria69@yahoo.com'
    },
    {
        id:5,
        username:'Amir Aghae',
        avatar: 'images/pro.jpg',
        status: 'active',
        transaction:'$155.52',
        email: 'ss_pooria69@yahoo.com'
    },
]

let products = [
   { id:1,
    title:'Asus',
    avatar:'images/Asus.jpg',
    price: 890
   },
   { id:2,
    title:'apple',
    avatar:'images/macBook air.jpg',
    price: 752
   },
   { id:3,
    title:'Apple',
    avatar:'images/macBook pro.jpg',
    price: 1200
   },
   { id:4,
    title:'Lenovo',
    avatar:'images/lenovo.jpg',
    price: 560
   },
   
]

const productsData = [
   { 
    name:'Jan',
    sales:4000
   },
   { 
    name:'Feb',
    sales:3000
   },
   { 
    name:'Mar',
    sales:5000
   },
]

export {xAxisData,newMembers,transactions,userRows,products,productsData}