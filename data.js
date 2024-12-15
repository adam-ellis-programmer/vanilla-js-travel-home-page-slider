const mobileLinks = [
  { id: 1, linkText: 'South America' },
  { id: 2, linkText: 'North America' },
  { id: 3, linkText: 'South Asia' },
  { id: 4, linkText: 'North Asia' },
  { id: 5, linkText: 'New Zealand' },
  { id: 6, linkText: 'Europe' },
  { id: 7, linkText: 'East Coast Australia' },
  { id: 8, linkText: 'West Coast Australia' },
]

const mainNavLinks = [
  { id: 1, linkText: 'Trips' },
  { id: 2, linkText: 'Activity' },
  { id: 3, linkText: 'Countries' },
  { id: 4, linkText: 'FAQ' },
  { id: 5, linkText: 'Blocgs' },
  //   { id: 6, linkText: 'Sign In' },
]

const footerLinks = [
  { id: 1, linkText: 'Australia' },
  { id: 2, linkText: 'New Zealand' },
  { id: 4, linkText: 'Finland' },
  { id: 5, linkText: 'Netherlands' },
  { id: 6, linkText: 'Singapore' },
  { id: 7, linkText: 'USA' },
  { id: 8, linkText: 'San Marino' },
  { id: 9, linkText: 'Palau' },
  { id: 10, linkText: 'Panama' },
  { id: 11, linkText: 'New Zealand' },
  { id: 12, linkText: 'Panama' },
  { id: 13, linkText: 'Mongolia' },
  { id: 14, linkText: 'Nicaragua' },
  { id: 15, linkText: 'Peru' },
  { id: 16, linkText: 'Morocco' },
  { id: 17, linkText: 'Malaysia' },
  { id: 18, linkText: 'Papua New Guinea' },
  { id: 19, linkText: 'Qatar' },
]

// prettier-ignore
const blogs = [
    {newBlog: true, author: 'Lacey Jones', country: "Italy",  reads: 14, text: "The Colosseum, a massive amphitheater, stands as a testament to Roman history and gladiatorial combat.", url: 'https://images.unsplash.com/photo-1593166242459-0b589ccca85f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbG9zaXVtfGVufDB8fDB8fHww' },
    {newBlog: true, author: 'Lisa Smith', country: "Japan",  reads: 8, text: "Mount Fuji, an active volcano, is a revered cultural icon and a UNESCO World Heritage Site.", url: 'https://images.unsplash.com/photo-1570462395760-8d708c39e7f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVqaXxlbnwwfHwwfHx8MA%3D%3D' },
    {newBlog: false, author: 'Adam Ellis', country: "Spain",  reads: 24, text: "Sagrada Familia, a Gaudi-designed church, is a Barcelona landmark known for its unique architecture and ongoing construction.", url:'https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D'},
    {newBlog: false, author: 'Adam Ellis', country: "Brazil", reads: 3,  text: "Christ the Redeemer statue, with open arms, overlooks Rio de Janeiro and is a symbol of hope and Christianity.", url: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsfGVufDB8fDB8fHww' },
    {newBlog: false, author: 'Adam Ellis', country: "France", reads: 4,  text: "The Eiffel Tower, a wrought-iron landmark, is a global symbol of romance and engineering marvel." },
  ];

// prettier-ignore
const countries = [
    {index: 17 , fromPrice: 988, offer: false, moneyOff: 50  , id: 18, countryName: 'Australia', url: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVzdHJhbGlhfGVufDB8fDB8fHww' },
    {index: 18 , fromPrice: 877, offer: false, moneyOff: 20  , id: 19, countryName: 'New Zealand', url: 'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHx8MA%3D%3D' },
    {index: 19 , fromPrice: 989, offer: false, moneyOff: 60  , id: 20, countryName: 'Thailand', url: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D' },
    // {index: 20 , offer: true, moneyOff: 50  , id: 21, countryName: 'Elephants & Island Hopping', url: 'https://images.unsplash.com/photo-1578326626553-39f72c545b07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnRzfGVufDB8fDB8fHww' },   
]

const socialLinks = [
  { id: 1, classes: 'fa-brands social-icon fa-facebook' },
  { id: 2, classes: 'fa-brands social-icon fa-twitter' },
  { id: 3, classes: 'fa-brands social-icon fa-instagram' },
]

const travelReviews = [
  {
    id: 1,
    name: 'John Doe',
    reviewText:
      'This travel company made planning my trip to Greece a breeze. Their customer service was excellent, and they helped me find the perfect hotel and activities. I highly recommend them!',
    starRating: 5,
    url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane Smith',
    reviewText:
      'I had a fantastic experience booking my adventure tour through this company. The guides were knowledgeable and friendly, and the itinerary was well-organized. I will definitely use them again!',
    starRating: 5,
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    name: 'Lisa Lee',
    reviewText:
      'This travel company offered great deals on flights and accommodations for my family vacation. The booking process was simple and hassle-free. We had a wonderful time, thanks to their expertise!',
    starRating: 4,
    url: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
]

// prettier-ignore
const products = [
  {
    index: 0,
    text: 'Jumpstart your Aussie journey working amidst stunning landscapes and vibrant city life.',
    offer: true,
    id: 1,
    productName: 'Work Australia',
    url: './temp/img-1.jpg',
  },
  {
    index: 1,
    text: 'Experience Kiwi culture firsthand while building career skills in breathtaking surroundings.',
    offer: false,
    id: 2,
    productName: 'Work New Zealand',
    url: './temp/img-2.jpg',
  },
  {
    index: 2,
    text: 'Combine rewarding work opportunities with captivating adventures across Thailand’s exotic landscapes.',
    offer: true,
    id: 3,
    productName: 'Work and Travel Thailand',
    url: './temp/img-3.jpg',
  },
  {
    index: 3,
    text: 'Support local communities, enjoying wildlife safaris and vibrant South African culture daily.',
    offer: false,
    id: 4,
    productName: 'Volunteer South Africa',
    url: './temp/img-4.jpg',
  },
  {
    index: 4,
    text: 'Help protect majestic lions while expanding your conservation knowledge in incredible surroundings.',
    offer: true,
    id: 5,
    productName: 'South Africa Lion Sanctuary',
    url: './temp/img-5.jpg',
  },
  {
    index: 5,
    text: 'Immerse yourself in Thai culture and experiences, from temples to tropical beaches.',
    offer: false,
    id: 7,
    productName: '12 Day Thailand Intro',
    url: './temp/img-6.jpg',
  },
  {
    index: 6,
    text: 'Explore vibrant cities, historic sites, and scenic wonders on a Vietnam journey.',
    offer: true,
    id: 7,
    productName: '12 Day VIETNAM Intro',
    url: './temp/img-7.jpg',
  },
  {
    index: 7,
    text: 'Dive deeper into Vietnam’s culture, cuisine, and landscapes on this immersive trip.',
    offer: false,
    id: 8,
    productName: '15 Day Vietnam Intro',
    url: './temp/img-8.jpg',
  },
]


export {
  footerLinks,
  socialLinks,
  mainNavLinks,
  mobileLinks,
  travelReviews,
  products,
  countries,
  blogs,
}
