const qBank = [
  {
    question:
      "Quel était le métier de Georges Duroy avant sa venue?   ",
    answers: ["Employé de banque", "Agriculteur", "Policier", "Sous-officier"],
    correct: "Sous-officier",
    questionId: "099099"
  },
  {
    question:
      'Bel-Ami est',
    answers: ["Blond avec des favoris", "blond avec une moustache", "Roux avec une moustache", "Brun avec une moustache"],
    correct: "Brun avec une moustache",
    questionId: "183452"
  },
  {
    question:
      "Comment accède t-il au monde du journalisme ?",
    answers: ["Il fait des etudes de journalisme", "Son beau frère est journaliste", "Il revoit un ancien ami devenu journaliste", "Il passe un entretiens d'embauche"],
    correct: "Il revoit un ancien ami devenu journaliste",
    questionId: "267908"
  },
  {
    question: "Comment s'appelle le journal où il travaille ?",
    answers: [
      "Thomas & Martha",
      "Gill Martha",
      "Vie Francaise",
      "Todd & Mira"
    ],
    correct: "Vie Francaise",
    questionId: "333247"
  },
  {
    question: "Dans quelle ville a lieu l'histoire ?",
    answers: ["Paris", "Toulouse", "Bordeaux", "Metz"],
    correct: "Paris",
    questionId: "496293"
  },
  {
    question:
      "Où travaille Georges Duroy au tout début du roman ?",
    answers: [
      "Dans les champs",
      "A la compagnie des chemins de fer",
      "The Bushwhackers",
      "A l'usine"
    ],
    correct: "A la compagnie des chemins de fer",
    questionId: "588909"
  },
  {
    question:
      'Au début du roman, Duroy rencontre une prostituée, comment se nomme-t-elle ?',
    answers: ["Rose", "Rachel", "Mark", "Christine"],
    correct: "Rachel",
    questionId: "648452"
  },
  {
    question: "Dans quelle ville vivent les parents de Duroy ?",
    answers: ["Cantelieu", "Metz", "Dubai", "La ville de Mr Saidani"],
    correct: "Cantelieu",
    questionId: "786649"
  },
  {
    question:
      "Qui va attribué à George le surnom de Bel Ami ?",
    answers: ["Key", "Laurine de Marelle", "Madeleine Forestier", "Rose Walter"],
    correct: "Laurine de Marelle",
    questionId: "839754"
  },
  {
    question:
      "Comment s'appelle la première maitresse de George Duroy ?",
    answers: [
      "Clotilde de Marelle",
      "Laurine de Marelle",
      "Madeleine Forestier",
      "Rose Walter"
    ],
    correct: "Clotilde de Marelle",
    questionId: "98390"
  },
  {
    question: "Quelle Journaliste a provoqué Duroy en Duel ? ",
    answers: ["Vaudrec", "Langremont", "Norbert de Varenne", "Suzanne Walter"],
    correct: "Langremont",
    questionId: "1071006"
  },
  {
    question: "Pourquoi Madeleine Forestier décide-t-elle de nommer Duroy 'Du roy de Cantel' ?",
    answers: ["Elle trouve que cela sonne mieux", "Pour le séduire", "C'est une coutume de l'époque", "Pour anoblir son nom"],
    correct: "Pour anoblir son nom",
    questionId: "1174154"
  },
  {
    question: "Dans quelle ville Charle Forestier Part quand il est malade ?",
    answers: ["Antibes", "Cannes", "Toulouse(Ville mr Saidani)", "Nice"],
    correct: "Cannes",
    questionId: "1226535"
  },
  {
    question: "Qui apres sa mort , George duroy recois de l'heritage ?",
    answers: ["du comte de Vaudrec", "Charles Forestier", "Langremont", "Norbert de Varenne"],
    correct: "du comte de Vaudrec",
    questionId: "1310938"
  },
  {
    question: "Combien Touche George Duroy après la mort du Comte de Vaudrec ?",
    answers: ["1 000 000 francs", "500 000 francs", "500 francs", "250 000 francs"],
    correct: "500 000 francs",
    questionId: "1436873"
  },
  {
    question:
      "Avec qui Madeleine Forestier Va elle tromper Duroy George ?   ",
    answers: ["Jacques Rival", "Saint-Potin", "Laroche Mathieu", "Charles Forestier"],
    correct: "Laroche Mathieu",
    questionId: "1747256"
  },
  {
    question:
      "Dans quelle mouvement est inscrite cette oeuvre ? ",
    answers: ["Du naturalisme", "Du surréalisme", "Du romantisme", "Du réaliste"],
    correct: "Du naturalisme",
    questionId: "1822532"
  },
  {
    question: "Qu est-ce que Mr walter va s'acheter apres son enrichsement du au dettes Marocaines ?",
    answers: [
      "un tableau",
      "un montre Rolex",
      "une voiture",
      "une statue de Benjamin Franklin"
    ],
    correct: "un tableau",
    questionId: "195075"
  },
  {
    question: "Comment s'appel le tableau que Mr Walter s'est acheter apres son enrichissement des dettes marocaine ?",
    answers: ["'Gervex'", "'Une visite d'hôpital'", "La Joconde", "'Jésus marchant sur les flots'"],
    correct: "'Jésus marchant sur les flots'",
    questionId: "2019778"
  },
  {
    question: "Dans quelle rue, Clotilde a-t-elle loué un appartement pour Duroy ?",
    answers: [
      "Constantinople",
      "Fontaine",
      "Vaugirard",
      "Revolution"
    ],
    correct: "Constantinople",
    questionId: "2210799"
  },
  {
    question:
      "Un personnage travaillant à 'La vie Française' a la hantise de la mort, qui est-ce ?",
    answers: ["Saint-Potin", "Mr Walter", "Jacques Rival", "Norbert de Varenne"],
    correct: "Norbert de Varenne",
    questionId: "2379831"
  },
  {
    question: "Rival organise un 'grand assaut' au profit de qui ? ?",
    answers: ["Des pauvres", "Des enfants hospitalisés", "Des orphelins", "Des sans abrits"],
    correct: "Des orphelins",
    questionId: "2426418"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
