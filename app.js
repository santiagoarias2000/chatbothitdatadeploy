const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const flowDespedida = addKeyword(
  ["gracias", "hasta luego", "bye", "muchas gracias"],
  { sesitive: true }
).addAnswer(["Muchas gracias por comunicarte con nosotros, recuerda te hablo BotBlue, espero que tengas una grandioso día. \nRecuerda subir al siguente nivel."],{media:"https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg"});

//?Ya esta funcionado...
const flowTEAM = addKeyword(["TEAM", "team", "TEAM"], { sesitive: true })
  .addAnswer("Te hablo BotBlue.", {
    media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
  })
  .addAnswer(
    ["En un momento nos pondremos en contacto con nosotros."],
    null,
    null,
    [flowDespedida]
  );

//!Falta informacion sobre todos los planes o ver que se va a prenguntar
const flowBasico = addKeyword(["1", "plan basico", "plan básico"], {
  sesitive: true,
}).addAnswer(["Plan basico info"]);

const flowHitData = addKeyword(["2", "plan hit data"], {
  sesitive: true,
}).addAnswer(["📄 Plan Hit Data"]);

const flowPersonal = addKeyword(["2", "plan personalizado"], {
  sesitive: true,
}).addAnswer(["📄 Plan Personalizado"]);

//!Falta la imagen de gestion de redes socalies
const flowGestionRedes = addKeyword(["1", "gestion de redes sociales"])
  .addAnswer(
    "Si tu negocio aún no está en el mercado digital y deseas dar el primer paso nosotros te ayudamos, creamos en internet una huella digital que te permitirá ingresar con fuerza a este nuevo mundo de oportunidades, de igual forma, si ya estás en internet y necesitas optimizarlo para obtener resultados, crearemos los contenidos necesarios y te asesaremos para cumplir tus objetivos comerciales.",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(
    ["1) Plan Básico.", "2) Plan Hit Data.", "3) Plan Personalizado."],
    null,
    null,
    [flowBasico, flowHitData, flowPersonal]
  );

//!Falta informacion de los planes para sitos web

const flowInformativo = addKeyword(["1", "sitio informativo"], {
  sesitive: true,
}).addAnswer(["Plan basico info"]);

const flowEcommerce = addKeyword(["2", "sitio con e-commerce"], {
  sesitive: true,
}).addAnswer(["📄 Plan Hit Data"]);

//!Falta la foto de plan de sitios web
const flowSitiosWeb = addKeyword(["2", "desarrollo de sitio"], {
  sesitive: true,
})
  .addAnswer(
    "Creamos sitios web que generan robustez y permiten tener la presencia de una empresa o negocio en internet de forma estructurada.",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(["1) Sitio informativo", "2) Sitio con e-commerce."], null, null, [
    flowEcommerce,
    flowInformativo,
  ]);

//!Falta informacion de los planes para desarrollo de sofware
const flowAgendar = addKeyword(["1", "agendar cita"], {
  sesitive: true,
}).addAnswer([
  "En un momento nos comunicamos contigo para agendar una cita. \nRecuerda que te hablo BotBlue.",
]);

const flowDesarrollos = addKeyword(["2", "desarrollos hechos"], {
  sesitive: true,
}).addAnswer(["Plan basico info"]);

//!Falta la foto de plan de sitios web
const flowSoftware = addKeyword(["3", "desarrollo de software"], {
  sesitive: true,
})
  .addAnswer(
    "Quieres tener un desarrollo de software personalizado, el cual tenga funciones para tu uso diario o para tus necesidades, en Hit Data Devs encontraras lo que buscas.",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(["1) Agendar cita", "2) Desarrollos hechos"], null, null, [
    flowAgendar,
    flowDesarrollos,
  ]);

//!Falta informacion de los planes para diseño grafico
const flowDiseños = addKeyword(["2", "Diseños"], {
  sesitive: true,
}).addAnswer(["Plan basico info"]);

//!Falta la foto de plan de diseño web
const flowDiseño = addKeyword(["4", "diseño grafico"], {
  sesitive: true,
})
  .addAnswer(
    "La mejor forma de potencializar tu imagen o tu marca es con diseños llamativos, que muestren los que eres. Acá en Hit Data contamos con el mejor grupo de diseñadores que vas a encontrar.",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(["1) Agendar cita", "2) Diseños"], null, null, [
    flowAgendar,
    flowDiseños,
  ]);

//!Falta informacion de los planes para produccion audiovisual
const flowProducciones = addKeyword(["2", "producciones", "producciónes"], {
  sesitive: true,
}).addAnswer(["Plan basico info"]);

//!Falta la foto de plan de produccione
const flowProducccion = addKeyword(["5", "Producción audiovisual"], {
  sesitive: true,
})
  .addAnswer(
    "Producción audiovisual con nuestro equipo, mejorara tu imagen gracias a nuestros excelentes profesiones.",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(["1) Agendar cita.", "2) Producciónes."], null, null, [
    flowAgendar,
    flowProducciones,
  ]);

//!Falta la foto de plan de produccione
const flowAsesoria = addKeyword(["6", "Asesoría personalizada"], {
  sesitive: true,
})
  .addAnswer(
    "Accesoria personalizada para mejorar he impulsar tu empresa al éxito. Muy pronto vas a tener tu accesoria con nuestros CEO *Cristian* *Favier* *Delgado* *Ariza*",
    {
      media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
    }
  )
  .addAnswer(
    ["Gracias por comunicarte con nosotros en un momento te atenderemos."],
    null,
    null,
    [flowAgendar]
  );

//?Ya esta funcionando...
const flowNuestroServio = addKeyword(
  ["nuestro", "servicio", "servicios", "nuestros", "1"],
  { sesitive: true }
)
  .addAnswer(
    "Estos son nuestros servicios para potencializar tu empresa. 👌\n\nEscribe un numero para mostrarte más información del servicio"
  )
  .addAnswer(
    [
      "1) Gestión Redes sociales🤳",
      "2) Desarrollo de sitio👨‍💻",
      "3) Desarrollo de software 💻",
      "4) Diseño gráfico 🖌️",
      "5) Producción audiovisual 📷",
      "6) Asesoría personalizada 🫱🏻‍🫲🏼",
    ],
    null,
    null,
    [
      flowGestionRedes,
      flowSitiosWeb,
      flowSoftware,
      flowDiseño,
      flowProducccion,
      flowAsesoria,
    ]
  );
//!Falta imagen de portafolio
const flowPortafolio = addKeyword(["2", "portafolio"], {
  sesitive: true,
})
  .addAnswer("Empresas que trabajan con nosotros.👨‍💻👩‍💻", {
    media: "https://hitwha.s3.amazonaws.com/PERFIL+BOT(3).jpg",
  })
  .addAnswer(
    [
      "Aguardiente Lider.",
      "Ron Boyacá.",
      "Aguadiente Onix.",
      "El gran pollo.",
      "Acres Farm.",
      "Andrea Ramirez.",
      "Kilomentros CEA.",
      "Williams CEA.",
      "Carro Ágil.",
      "Dr William Castañeda.",
      "Dreams Snacks & licores.",
      "EDS SPIMELIS.",
      "Guia Electoral de Colombia.",
      "Heladería super pattos.",
      "Hábitat minería Urbana.",
      "ITER Legis Abogados.",
      "LEFCON.",
      "Profusemillas.",
      "Room inmobiliaria.",
      "solares y suministros.",
      "SOLUGRAL.",
      "Tio Rico.",
    ],
    null,
    null,
    []
  );

const flowPrincipal = addKeyword(
  ["hola", "ole", "alo", "buenos dias", "buen dia"],
  { sesitive: true }
)
  .addAnswer(
    "Hola bienvenido a Hit Data, soy BotBlue tu asistente virtual, te inivito a conocer nuestros servicios, o si te quieres contactar con nuestro equipo puedes escrbir en cualquier momento *TEAM*",
    { media: "https://hitwha.s3.amazonaws.com/ANIMACION+LOGO(1).mp4" }
  )
  .addAnswer(
    [
      "Bienvenido al siguiente nivel🙌",
      "1) Nuestros Servicios🙌",
      "2) Portafolio🙌",
      "3) Agendar Asesoría🙌",
    ],
    null,
    null,
    [flowNuestroServio, flowAgendar, flowPortafolio]
  );

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowTEAM, flowDespedida]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
