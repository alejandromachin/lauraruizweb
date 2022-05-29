const projects = [
  {
    name: "12 de Octubre",
    data: "Commercial 2021",
    category: "Commercial",
    client: "Correos",
    director: "Santos Bacana",
    producer: "Little Spain",
    image: "12_octubre.webp",
    imageSize: "small",
    backgroundColor: "D35677",
    videoUrl:
      "https://player.vimeo.com/video/639984746?h=ef91039ffa&color=17b9f6&title=0&byline=0&portrait=0",
  },
  {
    name: "Uterqüe SS21",
    data: "Commercial 2021",
    client: "Uterqüe",
    director: "Pedro Artola",
    producer: "Santa Rentería",
    image: "uterque.webp",
    imageSize: "medium",
    backgroundColor: "9970B2",
    videoUrl: "https://vimeo.com/527733970",
  },
  {
    name: "Soy Rebelde",
    data: "Commercial 2021",
    client: "La Prohibida",
    director: "Bàrbara Farré",
    agency: "&ROSÁS",
    producer: "CANADA",
    image: "soy_rebelde.webp",
    imageSize: "large",
    backgroundColor: "2F4BF5",
    videoUrl: "https://vimeo.com/676785157",
  },
  {
    name: "She Knows",
    data: "Commercial 2021",
    client: "Vasquiat",
    director: "ROGELIO",
    agency: "FLIRT x CANADA",
    producer: "CANADA",
    image: "she_knows.webp",
    imageSize: "medium",
    backgroundColor: "982E3F",
    videoUrl: "",
  },
  {
    name: "Injubilables",
    data: "Commercial 2021",
    client: "PIKOLINI",
    director: "Oriol Villar",
    agency: "Oriol Villar",
    producer: "BAMBINA",
    image: "injubilables.webp",
    imageSize: "small",
    backgroundColor: "A2A1A1",
    videoUrl: "",
  },
  {
    name: "Live More Know",
    data: "Commercial 2021",
    client: "BUFF",
    director: "Miquel Díaz Pont",
    agency: null,
    producer: null,
    image: "live_more_now.webp",
    imageSize: "small",
    backgroundColor: "53849C",
    videoUrl: "",
  },
  {
    name: "Volkswagen Caddy",
    data: "Commercial 2021",
    client: "Volkswagen",
    director: "Laura Garcia",
    agency: null,
    producer: "AGOSTO",
    image: "volkswagen_cady.webp",
    imageSize: "medium",
    backgroundColor: "B6AD93",
    videoUrl: "",
  },
  {
    name: "Digues el que penses",
    data: "Commercial 2019",
    client: "Ajuntament de BCN",
    director: "Bàrbara Farré",
    agency: null,
    producer: "GOROK",
    image: "digues_el_que_penses.webp",
    imageSize: "large",
    backgroundColor: "AC5871",
    videoUrl: "",
  },
  {
    name: "MÓ - Aitana",
    data: "Commercial 2021",
    client: "Multiópticas",
    director: "RÉALITÉ",
    agency: null,
    producer: "CANADA",
    image: "mo_aitana.webp",
    imageSize: "medium",
    backgroundColor: "83BE90",
    videoUrl: "",
  },
  {
    name: "Fotocasa",
    data: "Commercial 2019",
    client: "FOTOCASA",
    director: "Pedro B.Abreu",
    agency: "Chârles Barcelona",
    producer: "I AM LIMÓN",
    image: "fotocasa.webp",
    imageSize: "medium",
    backgroundColor: "F0CCBD",
    videoUrl: "",
  },
  {
    name: "Future Manifesto",
    data: "Commercial 2020",
    client: "PUMA",
    director: "Leo Adef",
    agency: "Helsinki",
    producer: "Story We Produce",
    image: "future_manifesto.webp",
    imageSize: "medium",
    backgroundColor: "BCEE93",
    videoUrl: "",
  },
  {
    name: "ColaCao ¿Estás Ready?",
    data: "Commercial 2020",
    client: "ColaCao",
    director: "Pedro Abreu",
    agency: "Tiempo BBDO",
    producer: "Glassy Films",
    image: "colacao.webp",
    imageSize: "small",
    backgroundColor: "C1602F",
    videoUrl: "",
  },
  {
    name: "Light & Free",
    data: "Commercial 2020",
    client: "DANONE",
    director: "Bàrbara Farré",
    agency: "Wundermanthompson",
    producer: "Story We Produce",
    image: "light_free.webp",
    imageSize: "large",
    backgroundColor: "D84782",
    videoUrl: "",
  },
  {
    name: "El verano que merecemos",
    data: "Commercial 2021",
    client: "Decathlon",
    director: "Bàrbara Farré",
    agency: "&Rosàs",
    producer: "CANADA",
    image: "el_verano_que_merecemos.webp",
    imageSize: "large",
    backgroundColor: "fcf6e2",
    videoUrl: "",
  },
  {
    name: "Mil y Una Noches",
    artist: "GUITARRICA DE LA FUENTE",
    data: "Music Video 2021",
    client: null,
    director: "Pedro Artola",
    agency: null,
    producer: "Sara Rentería",
    image: "mil_y_una_noches.webp",
    imageSize: "small",
    backgroundColor: "53849C",
    videoUrl: "",
  },
  {
    name: "Ya No Vales",
    artist: "ALIZZ FT. C. TANGANA",
    data: "Music Video 2021",
    client: null,
    director: "Félix Bollain",
    agency: null,
    producer: "CANADA",
    image: "ya_no_vales.webp",
    imageSize: "medium",
    backgroundColor: "e8f7f2",
    videoUrl: "",
  },
  {
    name: "F*cking Money Man",
    artist: "ROSALÍA",
    data: "Music Video 2019",
    client: null,
    director: "Bàrbara Ferré",
    agency: null,
    producer: "Story",
    image: "fucking_money_man.webp",
    imageSize: "medium",
    backgroundColor: "FD6A4E",
    videoUrl: "",
  },
  {
    name: "Sublime",
    artist: "SEN SENRA",
    data: "Music Video 2021",
    client: null,
    director: "Pedro Artola",
    agency: null,
    producer: "Sara Rentería",
    image: "sen_senra.webp",
    imageSize: "medium",
    backgroundColor: "AF701B",
    videoUrl: "",
  },
  {
    name: "Desde Las Alturas",
    artist: "GUITARRICA DE LA FUENTE",
    data: "Music Video 2020",
    client: null,
    director: "Pedro Artola",
    agency: null,
    producer: "Sara Rentería",
    image: "desde_las_alturas.webp",
    imageSize: "medium",
    backgroundColor: "C0D692",
    videoUrl: "",
  },
  {
    name: "GALOPE",
    data: "Music Video 2021",
    client: "Films.Dance",
    director: "Nur Casadevall",
    agency: null,
    producer: "CANADA",
    image: "galope.webp",
    imageSize: "medium",
    backgroundColor: "E6B5A4",
    videoUrl: "",
  },
  {
    name: "Pronto Llegará",
    artist: "C. TANGANA",
    data: "Music Video 2019",
    client: null,
    director: "Santos Bacana",
    agency: null,
    producer: "Little Spain",
    image: "pronto_llegara.webp",
    imageSize: "small",
    backgroundColor: "F9A628",
    videoUrl: "",
  },
];

export default projects;
