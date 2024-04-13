const quizQuestion = [
  {
    question: "What is the capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
    answer: "Kathmandu",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the national animal of Nepal?",
    options: ["Bengal Tiger", "Cow", "Rhino", "Snow Leopard"],
    answer: "Cow",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which mountain in Nepal is the highest in the world?",
    options: ["K2", "Lhotse", "Makalu", "Mount Everest"],
    answer: "Mount Everest",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the popular trekking trail in Nepal known for viewing Mount Everest?",
    options: [
      "Annapurna Circuit",
      "Everest Base Camp",
      "Langtang Trek",
      "Manaslu Circuit",
    ],
    answer: "Everest Base Camp",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which festival is known as the festival of lights in Nepal?",
    options: ["Holi", "Dashain", "Tihar", "Maghe Sankranti"],
    answer: "Tihar",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the currency of Nepal?",
    options: ["Rupee", "Taka", "Dollar", "Euro"],
    answer: "Rupee",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which lake in Nepal is situated at the highest altitude?",
    options: ["Phewa Lake", "Rara Lake", "Tilicho Lake", "Begnas Lake"],
    answer: "Tilicho Lake",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the main language spoken in Nepal?",
    options: ["Hindi", "Bhojpuri", "Nepali", "Maithili"],
    answer: "Nepali",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which river is known as the holy river in Nepal?",
    options: ["Karnali River", "Gandaki River", "Koshi River", "Bagmati River"],
    answer: "Bagmati River",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is a traditional Nepali dish?",
    options: ["Sushi", "Pizza", "Dal Bhat", "Burger"],
    answer: "Dal Bhat",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Who is the current Prime Minister of Nepal?",
    options: [
      "KP Sharma Oli",
      "Sher Bahadur Deuba",
      "Baburam Bhattarai",
      "Prachanda",
    ],
    answer: "Prachanda",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What traditional garment is worn by Nepali women?",
    options: ["Sari", "Kurta Suruwal", "Kimono", "Chuba"],
    answer: "Kurta Suruwal",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the popular traditional musical instrument in Nepal?",
    options: ["Tabla", "Sarangi", "Sitara", "Madal"],
    answer: "Madal",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is Nepal's official calendar called?",
    options: [
      "Gregorian Calendar",
      "Lunar Calendar",
      "Bikram Sambat",
      "Solar Calendar",
    ],
    answer: "Bikram Sambat",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the largest city in Nepal?",
    options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
    answer: "Kathmandu",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which sacred temple in Kathmandu is also known as the Monkey Temple?",
    options: [
      "Pashupatinath Temple",
      "Swayambhunath Stupa",
      "Boudhanath Stupa",
      "Kirateshwar Mahadev Temple",
    ],
    answer: "Swayambhunath Stupa",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What major river in Nepal is famous for white water rafting?",
    options: [
      "Trishuli River",
      "Karnali River",
      "Bhote Koshi River",
      "Gandaki River",
    ],
    answer: "Trishuli River",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the popular bread served with meals in Nepal?",
    options: ["Naan", "Roti", "Pita", "Baguette"],
    answer: "Roti",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which mountain in Nepal is famous for its trekking routes and views of the Annapurnas?",
    options: ["Poon Hill", "Mount Everest", "Macchapuchhre", "Langtang Lirung"],
    answer: "Poon Hill",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which festival is celebrated as the Nepali New Year?",
    options: ["Dashain", "Tihar", "Holi", "Nepali New Year"],
    answer: "Nepali New Year",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which animal is considered sacred by Hindus in Nepal?",
    options: ["Elephant", "Cow", "Tiger", "Monkey"],
    answer: "Cow",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the popular Nepali dish made of steamed dumplings called?",
    options: ["Samosa", "Momos", "Naan", "Roti"],
    answer: "Momos",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the main religion practiced in Nepal?",
    options: ["Islam", "Christianity", "Buddhism", "Hinduism"],
    answer: "Hinduism",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which city in Nepal is known as the 'City of Temples'?",
    options: ["Bhaktapur", "Pokhara", "Kathmandu", "Lalitpur"],
    answer: "Kathmandu",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What sport is considered the most popular in Nepal?",
    options: ["Football", "Cricket", "Basketball", "Volleyball"],
    answer: "Cricket",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which river in Nepal is considered one of the holiest?",
    options: ["Bagmati River", "Koshi River", "Gandaki River", "Karnali River"],
    answer: "Bagmati River",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the name of the international airport in Kathmandu?",
    options: [
      "Kathmandu Airport",
      "Tribhuvan International Airport",
      "Pokhara International Airport",
      "Gautam Buddha Airport",
    ],
    answer: "Tribhuvan International Airport",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What major event in 2015 significantly impacted Nepal?",
    options: [
      "Economic Boom",
      "Royal Wedding",
      "Constitution Formation",
      "Earthquake",
    ],
    answer: "Earthquake",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the traditional Nepali alcoholic beverage made from millet or rice?",
    options: ["Whisky", "Beer", "Raksi", "Chhaang"],
    answer: "Raksi",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which mountain is known as the 'Fishtail' in Nepal?",
    options: ["Mount Everest", "Annapurna", "Manaslu", "Machhapuchhre"],
    answer: "Machhapuchhre",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which conservation area in Nepal is famous for its biodiversity and trekking routes?",
    options: [
      "Annapurna Conservation Area",
      "Langtang National Park",
      "Sagarmatha National Park",
      "Manaslu Conservation Area",
    ],
    answer: "Annapurna Conservation Area",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What unique type of coffee is cultivated in Nepal?",
    options: ["Arabica", "Robusta", "Liberica", "Himalayan"],
    answer: "Himalayan",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is a traditional Newari dish that includes marinated raw meat?",
    options: ["Sekuwa", "Sukuti", "Choila", "Momo"],
    answer: "Choila",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Who was the first Prime Minister of Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Bhimsen Thapa",
      "Girija Prasad Koirala",
      "Man Mohan Adhikari",
    ],
    answer: "Bhimsen Thapa",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What type of climate can be found at the highest altitudes in Nepal?",
    options: ["Tropical", "Temperate", "Arctic", "Alpine"],
    answer: "Alpine",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the name of the traditional Nepali cap?",
    options: ["Baseball Cap", "Topi", "Dhaka Topi", "Beret"],
    answer: "Dhaka Topi",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What festival involves flying kites as a symbol to remind the gods to send no more rain?",
    options: ["Dashain", "Tihar", "Holi", "Kite Festival"],
    answer: "Dashain",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which language is predominantly spoken in the Terai region of Nepal?",
    options: ["Nepali", "Maithili", "Bhojpuri", "English"],
    answer: "Maithili",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the traditional wooden mask dance performed in Nepal called?",
    options: ["Lakhey Dance", "Kumari Dance", "Maruni Dance", "Pulu Kishi"],
    answer: "Lakhey Dance",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the color of the national flag of Nepal?",
    options: [
      "Red and Blue",
      "Green and White",
      "Orange and Purple",
      "Black and Yellow",
    ],
    answer: "Red and Blue",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which Nepali word is used to greet people?",
    options: ["Shukriya", "Namaste", "Salaam", "Bonjour"],
    answer: "Namaste",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the sacred scripture of Hinduism, a copy of which is often found in Nepali homes?",
    options: ["Quran", "Bible", "Tripitaka", "Bhagavad Gita"],
    answer: "Bhagavad Gita",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the staple food crop grown in the hills of Nepal?",
    options: ["Wheat", "Maize", "Rice", "Barley"],
    answer: "Maize",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which lake is known for being a sacred Hindu pilgrimage site in Nepal?",
    options: ["Phewa Lake", "Rara Lake", "Gosainkunda Lake", "Tilicho Lake"],
    answer: "Gosainkunda Lake",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "In which region of Nepal is the Kali Gandaki Gorge, one of the deepest gorges in the world, located?",
    options: ["Mustang", "Manang", "Dolpa", "Solukhumbu"],
    answer: "Mustang",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What traditional Nepali festival involves brothers and sisters honoring each other?",
    options: ["Tihar", "Janai Purnima", "Bhai Tika", "Gai Jatra"],
    answer: "Bhai Tika",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which historical figure is considered the founder of the modern Nepali state?",
    options: [
      "Prithvi Narayan Shah",
      "King Tribhuvan",
      "Gyanendra Shah",
      "King Mahendra",
    ],
    answer: "Prithvi Narayan Shah",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the popular Nepali game similar to the sack race?",
    options: ["Kabaddi", "Langdi", "Dandi Biyo", "Bagh Chal"],
    answer: "Langdi",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which city is known as the tourism capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Biratnagar", "Dharan"],
    answer: "Pokhara",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which endangered species is protected in the Chitwan National Park?",
    options: [
      "Bengal Tiger",
      "Red Panda",
      "One-horned Rhinoceros",
      "Snow Leopard",
    ],
    answer: "One-horned Rhinoceros",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the name of the famous Nepali folk song that is a call-and-response type of singing?",
    options: ["Adhunik Geet", "Dohori", "Bhajan", "Lok Geet"],
    answer: "Dohori",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which mountain in Nepal is known as 'Killer Mountain' due to its dangerous climbing conditions?",
    options: ["Annapurna", "Kanchenjunga", "Manaslu", "Dhaulagiri"],
    answer: "Annapurna",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the name of the traditional Newari festival that celebrates the end of the rice harvest?",
    options: ["Indra Jatra", "Yomari Punhi", "Sithi Nakha", "Mha Puja"],
    answer: "Yomari Punhi",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the name of the dish made from beaten rice served with yogurt and curry during festivals?",
    options: ["Chiura", "Sel Roti", "Pustakari", "Juju Dhau"],
    answer: "Chiura",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which temple in Kathmandu is known as the center of annual Indra Jatra festival?",
    options: [
      "Pashupatinath Temple",
      "Nyatapola Temple",
      "Kumari Ghar",
      "Swayambhunath Stupa",
    ],
    answer: "Kumari Ghar",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the highest altitude airport in Nepal?",
    options: [
      "Lukla Airport",
      "Jomsom Airport",
      "Pokhara Airport",
      "Kathmandu Airport",
    ],
    answer: "Lukla Airport",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which district in Nepal is known as the district without night?",
    options: ["Mustang", "Manang", "Myagdi", "Dolpa"],
    answer: "Manang",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the national bird of Nepal?",
    options: ["Spiny Babbler", "Danphe", "Munal", "Cuckoo"],
    answer: "Danphe",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which ethnic group in Nepal is known for their bravery and is often associated with the Gurkha soldiers?",
    options: ["Sherpa", "Tharu", "Newar", "Gurung"],
    answer: "Gurung",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What traditional instrument is most associated with the Gurung people of Nepal?",
    options: ["Madal", "Sarangi", "Dhol", "Tungna"],
    answer: "Tungna",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the main festival of the Sherpa community?",
    options: ["Lhosar", "Dashain", "Tihar", "Holi"],
    answer: "Lhosar",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What unique feature does the Nepali flag have compared to other national flags?",
    options: [
      "It is triangular",
      "It has three colors",
      "It has a sun and moon",
      "All of the above",
    ],
    answer: "All of the above",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which river in Nepal is famous for its sacredness and its gold?",
    options: ["Sun Koshi", "Karnali", "Gandaki", "Bagmati"],
    answer: "Gandaki",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What is the main ingredient in the Nepali dish 'Gundruk'?",
    options: [
      "Fermented spinach",
      "Fermented radish leaves",
      "Fermented bamboo shoots",
      "Fermented mustard greens",
    ],
    answer: "Fermented mustard greens",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which festival in Nepal involves smearing colors on each other?",
    options: ["Dashain", "Tihar", "Holi", "Maghe Sankranti"],
    answer: "Holi",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What traditional Nepali attire is worn by men on formal occasions?",
    options: ["Daura-Suruwal", "Kurta", "Pajama", "Gho"],
    answer: "Daura-Suruwal",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the sacred flower of Nepal, often seen in Hindu temples?",
    options: ["Marigold", "Lotus", "Rhododendron", "Jasmine"],
    answer: "Lotus",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which temple in Nepal is dedicated to the Hindu god of destruction?",
    options: [
      "Pashupatinath Temple",
      "Muktinath Temple",
      "Budhanilkantha Temple",
      "Dakshinkali Temple",
    ],
    answer: "Pashupatinath Temple",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is the main agricultural product of the Terai region in Nepal?",
    options: ["Rice", "Barley", "Apples", "Corn"],
    answer: "Rice",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which famous Nepali personality is known for his philanthropic efforts and work in education?",
    options: [
      "Mahabir Pun",
      "Pushpa Basnet",
      "Anuradha Koirala",
      "Bhagwan Koirala",
    ],
    answer: "Mahabir Pun",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What event marks the official start of the Nepali festival 'Dashain'?",
    options: [
      "Flying kites",
      "Card games",
      "Ghatasthapana",
      "Animal sacrifice",
    ],
    answer: "Ghatasthapana",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which Nepali word is used to refer to a younger brother?",
    options: ["Dai", "Bhai", "Didi", "Baini"],
    answer: "Bhai",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What historical event in 2006 significantly changed Nepal's political landscape?",
    options: [
      "Royal Massacre",
      "Signing of the Peace Treaty",
      "End of the Monarchy",
      "Earthquake",
    ],
    answer: "End of the Monarchy",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Which empire was Nepal part of before gaining its independence?",
    options: ["British Empire", "Mughal Empire", "Maurya Empire", "None"],
    answer: "None",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What was the original name of Kathmandu Valley as per ancient texts?",
    options: ["Kantipur", "Nepal Mandala", "Yambu", "Shangri-La"],
    answer: "Nepal Mandala",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Who was the leader that unified the Kingdom of Nepal in the 18th century?",
    options: [
      "Prithvi Narayan Shah",
      "Bhimsen Thapa",
      "Mahendra Bir Bikram Shah",
      "Gyanendra Shah",
    ],
    answer: "Prithvi Narayan Shah",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which dynasty ruled over Nepal before the Shah dynasty took over?",
    options: ["Licchavi", "Malla", "Gurkha", "Rana"],
    answer: "Malla",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What was the major political change in Nepal in 1951?",
    options: [
      "Democracy was introduced",
      "Monarchy was abolished",
      "Constitution was written",
      "Federal system was established",
    ],
    answer: "Democracy was introduced",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "In which battle did the Gurkhas earn their reputation for bravery with the British East India Company?",
    options: [
      "Battle of Nalapani",
      "Battle of Plassey",
      "Battle of Kalapani",
      "Battle of Sindhuli",
    ],
    answer: "Battle of Nalapani",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What treaty formalized relations between Nepal and Britain in 1923?",
    options: [
      "Treaty of Sugauli",
      "Treaty of Kathmandu",
      "Treaty of Nepal-Britain",
      "Treaty of Versailles",
    ],
    answer: "Treaty of Nepal-Britain",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What ancient trade route passed through Nepal, connecting Tibet with India?",
    options: ["Silk Road", "Salt Route", "Spice Route", "Tea Horse Road"],
    answer: "Salt Route",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "Who was the first king of unified Nepal?",
    options: [
      "Prithvi Narayan Shah",
      "Ram Shah",
      "Birendra Bir Bikram Shah",
      "Mahendra Shah",
    ],
    answer: "Prithvi Narayan Shah",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What significant archaeological discovery was made in Lumbini, Nepal?",
    options: [
      "Ashoka's Pillar",
      "Remains of Buddha's birthplace",
      "Ancient scripts of Rigveda",
      "Statues of Shiva",
    ],
    answer: "Ashoka's Pillar",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "During which century did the Malla dynasty flourish in Nepal?",
    options: [
      "12th to 15th century",
      "13th to 17th century",
      "14th to 18th century",
      "15th to 19th century",
    ],
    answer: "13th to 17th century",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What was the significant effect of the 1990 People's Movement in Nepal?",
    options: [
      "Establishment of democracy",
      "Restoration of the monarchy",
      "Introduction of federalism",
      "Abolition of the caste system",
    ],
    answer: "Establishment of democracy",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What role did Nepal play in the two World Wars?",
    options: [
      "Fought against the Axis Powers",
      "Remained neutral",
      "Supported the Allies by sending Gurkha troops",
      "Supported the Axis Powers",
    ],
    answer: "Supported the Allies by sending Gurkha troops",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "What is considered the golden age of architecture and culture in Nepal under which dynasty?",
    options: [
      "Licchavi Dynasty",
      "Shah Dynasty",
      "Rana Dynasty",
      "Malla Dynasty",
    ],
    answer: "Malla Dynasty",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question:
      "Which Nepali monarch led the country into joining the United Nations in 1955?",
    options: [
      "King Tribhuvan",
      "King Mahendra",
      "King Birendra",
      "King Gyanendra",
    ],
    answer: "King Mahendra",
    hasAppeared: false,
    isAnimating: false,
  },
  {
    question: "What was the result of the Sugauli Treaty?",
    options: [
      "Nepal lost significant territories to the British",
      "Nepal gained independence from Britain",
      "Established trade relations with Tibet",
      "None of the above",
    ],
    answer: "Nepal lost significant territories to the British",
    hasAppeared: false,
    isAnimating: false,
  },
];
