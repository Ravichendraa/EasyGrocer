export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "stationery", label: "Stationery" },
      { id: "dry-fruits", label: "Dry Fruits" },
      { id: "biscuits", label: "Biscuits" },
      { id: "chocolates", label: "Chocolates" },
      { id: "soaps", label: "Soaps" },
      { id: "dals", label: "Dals" },
      { id: "snacks", label: "Snacks" },
      { id: "softdrinks", label: "Soft Drinks" },
      { id: "personal-care", label: "Personal Care" },
      // Add more categories as needed
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      // Stationery Brands
      { id: "classmate", label: "Classmate" },
      { id: "camlin", label: "Camlin" },
      { id: "navneet", label: "Navneet" },
      // Dry Fruits Brands
      { id: "happilo", label: "Happilo" },
      { id: "nutraj", label: "Nutraj" },
      { id: "vedaka", label: "Vedaka" },
      // Biscuits Brands
      { id: "britannia", label: "Britannia" },
      { id: "parle", label: "Parle" },
      { id: "sunfeast", label: "Sunfeast" },
      // Chocolates Brands
      { id: "cadbury", label: "Cadbury" },
      { id: "nestle", label: "Nestle" },
      { id: "amul", label: "Amul" },
      // Soaps Brands
      { id: "santoor", label: "Santoor" },
      { id: "dove", label: "Dove" },
      { id: "dettol", label: "Dettol" },
      // Dals Brands
      { id: "tata-sampann", label: "Tata Sampann" },
      { id: "fortune", label: "Fortune" },
      { id: "organic-tattva", label: "Organic Tattva" },
      // Snacks Brands
      { id: "haldiram", label: "Haldiram's" },
      { id: "kurkure", label: "Kurkure" },
      { id: "lays", label: "Lays" },
      // Soft Drinks Brands
      { id: "coca_cola", label: "Coca-Cola" },
      { id: "pepsi", label: "Pepsi" },
      // Personal Care Brands
      { id: "himalaya", label: "Himalaya" },
      { id: "nivea", label: "Nivea" },
      { id: "garnier", label: "Garnier" },
      // Continue adding brands under each category
    ],
  },
  
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "stationery",
    label: "Stationery",
    path: "/shop/listing",
  },
  {
    id: "dry-fruits",
    label: "Dry Fruits",
    path: "/shop/listing",
  },
  {
    id: "biscuits",
    label: "Biscuits",
    path: "/shop/listing",
  },
  {
    id: "chocolates",
    label: "Chocolates",
    path: "/shop/listing",
  },
  {
    id: "soaps",
    label: "Soaps",
    path: "/shop/listing",
  },
  {
    id: "dals",
    label: "Dals",
    path: "/shop/listing",
  },
  {
    id: "snacks",
    label: "Snacks",
    path: "/shop/listing",
  },
  {
    id: "softdrinks",
    label: "Soft Drinks",
    path: "/shop/listing",
  },
  {
    id: "personal-care",
    label: "Personal Care",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];


// export const categoryOptionsMap = {
//   men: "Men",
//   women: "Women",
//   kids: "Kids",
//   accessories: "Accessories",
//   footwear: "Footwear",
// };

// export const brandOptionsMap = {
//   nike: "Nike",
//   adidas: "Adidas",
//   puma: "Puma",
//   levi: "Levi",
//   zara: "Zara",
//   "h&m": "H&M",
// };

export const categoryOptionsMap = {
  stationery: "Stationery",
  dryFruits: "Dry Fruits",
  biscuits: "Biscuits",
  chocolates: "Chocolates",
  soaps: "Soaps",
  dals: "Dals",
  snacks: "Snacks",
  softdrinks: "Soft Drinks",
  personalCare: "Personal Care",
};

export const brandOptionsMap = {
  // Stationery Brands
  classmate: "Classmate",
  camlin: "Camlin",
  navneet: "Navneet",

  // Dry Fruits Brands
  happilo: "Happilo",
  nutraj: "Nutraj",
  solimo: "Vedaka",

  // Biscuits Brands
  britannia: "Britannia",
  parle: "Parle",
  sunfeast: "Sunfeast",

  // Chocolates Brands
  cadbury: "Cadbury",
  nestle: "Nestle",
  amul: "Amul",

  // Soaps Brands
  santoor: "Santoor",
  dove: "Dove",
  dettol: "Dettol",

  // Dals Brands
  tataSampann: "Tata Sampann",
  fortune: "Fortune",
  organicTattva: "Organic Tattva",

  // Snacks Brands
  haldiram: "Haldiram's",
  kurkure: "Kurkure",
  lays: "Lays",

  // Soft Drinks Brands
  coco_cola: "Coca-Cola" ,
   pepsi: "Pepsi" ,
  // Personal Care Brands
  himalaya: "Himalaya",
  nivea: "Nivea",
  garnier: "Garnier",

  // Cooking Oils Brands
  saffola: "Saffola",
  dhara: "Dhara",
  fortuneOil: "Fortune Oil",


};


// export const filterOptions = {
//   category: [
//     { id: "men", label: "Men" },
//     { id: "women", label: "Women" },
//     { id: "kids", label: "Kids" },
//     { id: "accessories", label: "Accessories" },
//     { id: "footwear", label: "Footwear" },
//   ],
//   brand: [
//     { id: "nike", label: "Nike" },
//     { id: "adidas", label: "Adidas" },
//     { id: "puma", label: "Puma" },
//     { id: "levi", label: "Levi's" },
//     { id: "zara", label: "Zara" },
//     { id: "h&m", label: "H&M" },
//   ],
// };
export const filterOptions = {
  category: [
    { id: "stationery", label: "Stationery" },
    { id: "dry-fruits", label: "Dry Fruits" },
    { id: "biscuits", label: "Biscuits" },
    { id: "chocolates", label: "Chocolates" },
    { id: "soaps", label: "Soaps" },
    { id: "dals", label: "Dals" },
    { id: "snacks", label: "Snacks" },
    { id: "softdrinks", label: "Soft Drinks" },
    { id: "personal-care", label: "Personal Care" },
  ],
  brand: [
    // Stationery Brands
    { id: "classmate", label: "Classmate" },
    { id: "camlin", label: "Camlin" },
    { id: "navneet", label: "Navneet" },

    // Dry Fruits Brands
    { id: "happilo", label: "Happilo" },
    { id: "nutraj", label: "Nutraj" },
    { id: "vedaka", label: "Vedaka" },

    // Biscuits Brands
    { id: "britannia", label: "Britannia" },
    { id: "parle", label: "Parle" },
    { id: "sunfeast", label: "Sunfeast" },

    // Chocolates Brands
    { id: "cadbury", label: "Cadbury" },
    { id: "nestle", label: "Nestle" },
    { id: "amul", label: "Amul" },

    // Soaps Brands
    { id: "santoor", label: "Santoor" },
    { id: "dove", label: "Dove" },
    { id: "dettol", label: "Dettol" },

    // Dals Brands
    { id: "tata-sampann", label: "Tata Sampann" },
    { id: "fortune", label: "Fortune" },
    { id: "organic-tattva", label: "Organic Tattva" },

    // Snacks Brands
    { id: "haldirams", label: "Haldiram's" },
    { id: "kurkure", label: "Kurkure" },
    { id: "lays", label: "Lays" },

    // Soft Drinks Brands
    { id: "coca_cola", label: "Coca-Cola" },
    { id: "pepsi", label: "Pepsi" },


    // Personal Care Brands
    { id: "himalaya", label: "Himalaya" },
    { id: "nivea", label: "Nivea" },
    { id: "garnier", label: "Garnier" },

    // Continue adding brands under each category as needed
  ],
};


export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
