import assets from "./assets";

const ProductData = [
  {
    id: "NFT-01",
    productName: "Abstracto #312",
    productInfo: "Putri Intan",
    productPrice: 425,
    productCategory: 'prosthodontics',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft01,
    featured: false
  },
  {
    id: "NFT-02",
    productName: "Green Coins",
    productInfo: "Siti Nurhaliza",
    productPrice: 725,
    productCategory: 'prosthodontics',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft02,
    featured: true
  },
  {
    id: "NFT-03",
    productName: "NFT coins race",
    productInfo: "Elisabeth aho",
    productPrice: 9525,
    productCategory: 'conservative',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft03,
    featured: true
  },
  {
    id: "NFT-04",
    productName: "Nifty NFT",
    productInfo: "Putri Intan",
    productPrice: 5425,
    productCategory: 'conservative',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.nft04,
    featured: true
  },
  {
    id: "NFT-05",
    productName: "Colorful circles",
    productInfo: "David doe",
    productPrice: 1025,
    productCategory: 'apron scrub',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft05,
    featured: false
  },
  {
    id: "NFT-06",
    productName: "Black box model",
    productInfo: "Leo Messi",
    productPrice: 2025,
    productCategory: 'orthodontics',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.nft06,
    featured: false
  },
  {
    id: "NFT-07",
    productName: "Abstracto soulful art",
    productInfo: "Victor de la Cruz",
    productPrice: 1825,
    productCategory: 'periodontics',
    productDescription:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    image: assets.nft07,
    featured: true
  },
];

const questionPaper = [
  {
    id: 1,
    programYear: 1,
    questionPaper:[
      {
         year: 2091,
         questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
      },
      {
        year: 2021,
        questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
     },
     {
      year: 2001,
      questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
   },
  ]
  },

  {
    id: 2,
    programYear: 2,
    questionPaper:[
      {
         year: 2091,
         questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
      },
      {
        year: 2021,
        questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
     },
     {
      year: 2001,
      questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
   },
  ]
  },

  {
    id: 3,
    programYear: 3,
    questionPaper:[
      {
         year: 2091,
         questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
      },
      {
        year: 2021,
        questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
     },
     {
      year: 2001,
      questionPaper:[assets.nft07,assets.nft04,assets.nft03,assets.nft02]
   },
  ]
  },
]

const categories = [
  {
    id: 1,
    name:'Prosthodontics', 
    image: assets.nft01,
  },
  {
    id: 3,
    name:'Conservative', 
    image: assets.nft03,
  },
  {
    id: 4,
    name:'Orthodontics', 
    image: assets.nft04,
  },
  {
    id: 5,
    name:'Periodontics', 
    image: assets.nft05,
  },
  {
    id: 6,
    name:'Pedodontics', 
    image: assets.nft06,
  },
  {
    id: 7,
    name:'Apron Scrub',
    image: assets.nft07,
  }
]

export { ProductData,categories,questionPaper };
