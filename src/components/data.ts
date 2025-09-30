export const OptionsSOR = [
  {
    symbol: "WP",
    name: "proszek do sporządzania zawiesiny",
  },
  {
    symbol: "WG",
    name: "granulat do sporządzania zawiesiny",
  },
  {
    symbol: "SC",
    name: "koncentrat do sporządzania zawiesiny",
  },
  {
    symbol: "CS",
    name: "zawiesina kapsuł",
    alert1: "skonsultuj z doradcą producenta środka",
  },
  {
    symbol: "ZC",
    name: "mieszanina CS i SC",
    alert1: "skonsultuj z doradcą producenta środka",
  },
  {
    symbol: "EC",
    name: "koncentrat do sporządzania emulsji",
  },
  {
    symbol: "EW",
    name: "emulsja olej w wodzie",
  },
  {
    symbol: "EO",
    name: "emulsja woda w oleju",
  },
  {
    symbol: "EG",
    name: "granulat do sporządzania emulsji",
  },
  {
    symbol: "SE",
    name: "zawiesionoemulsja",
  },
  {
    symbol: "GW",
    name: "żel do sporządzania emulsji",
  },
  {
    symbol: "GL",
    name: "żel do sporządzania emulsji",
  },
  {
    symbol: "ME",
    name: "mikroemulsja",
  },
  {
    symbol: "ZE",
    name: "mieszanina CS i SE",
    alert1: "skonsultuj z doradcą producenta środka",
  },
  {
    symbol: "ZW",
    name: "mieszanina CS i EW",
    alert1: "skonsultuj z doradcą producenta środka",
  },
  {
    symbol: "OF",
    name: "koncentrat zawiesinowy olejowy",
  },
  {
    symbol: "OD",
    name: "zawiesina olejowa",
  },
  {
    symbol: "SL",
    name: "koncentrat rozpuszczalny",
  },
  {
    symbol: "SP",
    name: "proszek rozpuszczalny",
  },
  {
    symbol: "SG",
    name: "granulat rozpuszczalny",
  },
];

export const OptionsNawoz = [
  {
    symbol: "G",
    name: "mocznik",
  },
  {
    symbol: "-",
    name: "proszek/granulat",
    alert1: "nie łącz nawozów Ca i Mg",
    alert2: "nie łącz siarczanów z fosforem",
  },
  {
    symbol: "-",
    name: "r.s.m.",
  },
  {
    symbol: "-",
    name: "płyn",
    alert1: "nie łącz siarczanu miedzi z herbicydami",
    alert2: "nie łącz siarczanów z fosforem",
    alert3: "ostrożnie łącz żelazo z herbicydami",
  },
];

export const OptionsAdiuwant = [
  {
    symbol: "-",
    name: "kondycjoner wody",
  },
  {
    symbol: "-",
    name: "olejowy",
  },
  {
    symbol: "-",
    name: "surfaktant",
  },
  {
    symbol: "-",
    name: "inny poprawiające przyczepność",
  },
  {
    symbol: "-",
    name: "zmniejszający pianę",
  },
];

export const OptionsBiopreparat = [
  {
    symbol: "-",
    name: "płyn",
    alert1: "skonsultuj z doradcą producenta środka",
  },
  {
    symbol: "-",
    name: "proszek",
    alert1: "skonsultuj z doradcą producenta środka",
  },
];

export const OptionsStymulator = [
  {
    symbol: "-",
    name: "płyn/proszek",
  },
];

export const order = [
  { symbol: "-", type: "adiuwant", subType: "kondycjoner wody" },
  { symbol: "G", type: "nawóz", name: "mocznik" },
  { symbol: "-", type: "nawóz", name: "proszek/granulat" },
  { symbol: "WP", type: "ś.o.r.", name: "proszek do sporządzania zawiesiny" },
  { symbol: "WG", type: "ś.o.r.", name: "granulat do sporządzania zawiesiny" },
  {
    symbol: "SC",
    type: "ś.o.r.",
    name: "koncentrat do sporządzania zawiesiny",
  },
  { symbol: "CS", type: "ś.o.r.", name: "zawiesina kapsuł" },
  { symbol: "ZC", type: "ś.o.r.", name: "mieszanina CS i SC" },
  { symbol: "EC", type: "ś.o.r.", name: "koncentrat do sporządzania emulsji" },
  { symbol: "EW", type: "ś.o.r.", name: "emulsja olej w wodzie" },
  { symbol: "EO", type: "ś.o.r.", name: "emulsja woda w oleju" },
  { symbol: "EG", type: "ś.o.r.", name: "granulat do sporządzania emulsji" },
  { symbol: "SE", type: "ś.o.r.", name: "zawiesionoemulsja" },
  { symbol: "GW", type: "ś.o.r.", name: "żel do sporządzania emulsji" },
  { symbol: "GL", type: "ś.o.r.", name: "żel do sporządzania emulsji" },
  { symbol: "ME", type: "ś.o.r.", name: "mikroemulsja" },
  { symbol: "ZE", type: "ś.o.r.", name: "mieszanina CS i SE" },
  { symbol: "ZW", type: "ś.o.r.", name: "mieszanina CS i EW" },
  { symbol: "OF", type: "ś.o.r.", name: "koncentrat zawiesinowy olejowy" },
  { symbol: "OD", type: "ś.o.r.", name: "zawiesina olejowa" },
  { symbol: "SL", type: "ś.o.r.", name: "koncentrat rozpuszczalny" },
  { symbol: "SP", type: "ś.o.r.", name: "proszek rozpuszczalny" },
  { symbol: "SG", type: "ś.o.r.", name: "granulat rozpuszczalny" },
  { symbol: "-", type: "nawóz", name: "r.s.m." },
  { symbol: "-", type: "nawóz", name: "płyn" },
  { symbol: "-", type: "stymulator mineralny", name: "płyn/proszek" },
  { symbol: "-", type: "adiuwant", name: "olejowy" },
  { symbol: "-", type: "adiuwant", name: "surfaktant" },
  { symbol: "-", type: "adiuwant", name: "inny poprawiające przyczepność" },
  { symbol: "-", type: "adiuwant", name: "zmniejszający pianę" },
  { symbol: "-", type: "biopreparat", name: "płyn" },
  { symbol: "-", type: "biopreparat", name: "proszek" },
];
