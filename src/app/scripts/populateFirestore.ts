import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const personalData = [
  {
    name: "Augusto Boecke",
    age: 30,
    description: "Personal Trainer com mais de 10 anos de experiência",
    hobbie: "Musculação",
    contactNumber: "+123456789",
    photoUrl: "../../photos/personal/augusto.jpg",
  },
  {
    name: "Léo Arruda",
    age: 28,
    description: "Amante da Musculação competitiva",
    hobbie: "Futebol com os amigos",
    contactNumber: "+987654321",
    photoUrl: "../../photos/personal/leoArruda.jpg",
  },
  {
    name: "Matheus Rosa",
    age: 28,
    description: "Amante da Musculação e Nutricionista",
    hobbie: "Pagode nos finais de semana",
    contactNumber: "+987654321",
    photoUrl: "../../photos/personal/mateus.jpg",
  },
  {
    name: "Luana",
    age: 28,
    description: "Amante da Musculação especialista em mulheres",
    hobbie: "Pagode nos finais de semana",
    contactNumber: "+987654321",
    photoUrl: "../../photos/personal/luana.jpg",
  },
];

const modalidadeData = [
  {
    name: "Luta",
    description:
      "Oferecemos a modalidade de Luta com duas opções Muay Thay e Jiu Jitsu.",
    photoUrl: "url_to_photo",
  },
  {
    name: "Musculação",
    description: "Oferecemos monitoramente completo para treinos de musculação",
    photoUrl: "url_to_photo",
  },
  {
    name: "Dança",
    description: "Oferecemos aulas de dança pelo o menos duas vezes por semana",
    photoUrl: "url_to_photo",
  },
  {
    name: "Funcional",
    description:
      "Oferecemos treino funcional pelo o menos duas vezes por semana",
    photoUrl: "url_to_photo",
  },
  {
    name: "Treino Avulso",
    description:
      "Esta de vaigem e precisa continuar os treinos, temos a opção de treino avulso para te atender",
    photoUrl: "url_to_photo",
  },
  {
    name: "Aeróbico",
    description:
      "Treino de alta intensidade para condicionamento e perda calórica",
    photoUrl: "url_to_photo",
  },
];

const espacoData = [
  {
    name: "Musculação",
    description: "Nosso espaço para a prática de musculação",
    photoUrl: "../../photos/space/muscle.jpg",
  },
  {
    name: "Salão",
    description: "Espaço para prática de Funcional, Luta.",
    photoUrl: "../../photos/space/salao.jpg",
  },
  {
    name: "Cárdio",
    description: "Espaço para prática de cárdio",
    photoUrl: "../../photos/space/cardio.jpg",
  },
  {
    name: "Banheiros",
    description: "Banheiros limpos, higienizados",
    photoUrl: "../../photos/space/banheiro.jpeg",
  },
];

const planoData = [
  {
    name: "Plano Básico",
    description: ["Acesso à academia", "1 aula de yoga por semana"],
    price: 100,
    discount: 10,
  },
  {
    name: "Plano Premium",
    description: [
      "Acesso total à academia",
      "Aulas ilimitadas de yoga",
      "Personal Trainer",
    ],
    price: 250,
    discount: 15,
  },
];

const paginaTextosData = [
  {
    title: "Bem-vindo à nossa academia",
    subtitle: "Transforme seu corpo e mente",
    text: "Na nossa academia, você encontra o ambiente ideal para alcançar seus objetivos de saúde e bem-estar.",
  },
  {
    title: "Nossas Modalidades",
    subtitle: "Encontre a prática perfeita para você",
    text: "Oferecemos uma variedade de modalidades que se adaptam às suas necessidades e preferências.",
  },
  {
    title: "Nossa Equipe",
    subtitle: "O melhores profissionais",
    text: "Oferecemos uma variedade de modalidades que se adaptam às suas necessidades e preferências.",
  },
  {
    title: "Quem Somos",
    subtitle: "Descubra quem somos e escolha o melhor para sua saúde",
    text:
      "Fundada há cinco anos em Mar de Espanha, a Academia Alpha é um verdadeiro ícone de dedicação ao bem-estar e saúde na região. Sob a liderança incansável de Amanda Gribel, CEO e Personal Trainer credenciada, a Alpha se destaca não apenas pelo seu ambiente acolhedor, mas também pela qualidade excepcional de seus serviços" +
      "Amanda, CREF 016945-G, não é apenas uma treinadora, mas uma mentora comprometida com os objetivos de seus alunos. Especializada em Hipertrofia e Emagrecimento, e atualmente se aprimorando na Pós-graduação em Saúde da Mulher, Amanda traz um conhecimento profundo e atualizado para cada sessão na Alpha." +
      "Na Academia Alpha, o foco vai além do físico: é um espaço onde cada indivíduo é encorajado a superar limites pessoais, alcançar novos patamares de saúde e bem-estar, e sentir-se verdadeiramente realizado. A atmosfera vibrante e motivadora da academia inspira todos os seus frequentadores a se comprometerem com um estilo de vida ativo e saudável." +
      "Além disso, a Alpha não se contenta em ser apenas um centro de exercícios. É uma comunidade onde amizades são formadas, metas são alcançadas e conquistas são celebradas. Amanda Gribel, à frente deste empreendimento exemplar, continua a inspirar não só com sua expertise técnica, mas com sua paixão pela saúde e pelo cuidado com seus alunos." +
      "Se você está em busca de um ambiente onde seu desenvolvimento pessoal é prioridade e onde o profissionalismo se une ao calor humano, a Academia Alpha é o seu lugar. Venha fazer parte desta jornada rumo ao seu melhor eu - com Amanda Gribel e toda a equipe Alpha ao seu lado, cada passo é um passo na direção certa.",
  },
];
const parceirosData = [
  {
    name: "Loback",
    photo: "../../photos/contributor/loback.png",
  },
  {
    name: "Loback",
    photo: "../../photos/contributor/loback.png",
  },
  {
    name: "Loback",
    photo: "../../photos/contributor/loback.png",
  },
];

const populateCollection = async (collectionName: string, data: any[]) => {
  const colRef = collection(db, collectionName);
  for (const item of data) {
    const uuid = uuidv4();
    const newItem = {
      ...item,
      id: uuid,
      photoUrl: `gs://alpha-academia-firebase.appspot.com/${collectionName}/${uuid}.jpg`,
    };
    await addDoc(colRef, newItem);
  }
};

const populateFirestore = async () => {
  await populateCollection("personal", personalData);
  await populateCollection("modalities", modalidadeData);
  await populateCollection("space", espacoData);
  await populateCollection("plans", planoData);
  await populateCollection("pageText", paginaTextosData);
  await populateCollection("partners", parceirosData);
  console.log("Running all populates doc");
};

populateFirestore()
  .then(() => console.log("Populate complete"))
  .catch((e) => console.error("Error on populate database firebase: ", e));
