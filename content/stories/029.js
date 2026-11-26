import { ay, cut } from '../util.js';

export default {
  id: 29,
  title: { fa: 'سلیمان و مورچه', en: 'Sulayman and the Ant' },
  cover: 'sul3',
  prep: {
    fa: {
      gist: 'لشکر بزرگ سلیمان (ع) به درّهٔ مورچه‌ها می‌رسد. مورچه‌ای کوچک دوستانش را خبر می‌کند. سلیمان حرف او را می‌شنود، لبخند می‌زند و خدا را شکر می‌کند.',
      words: [['لشکر', 'گروه خیلی بزرگی که با هم حرکت می‌کنند'], ['درّه', 'زمینِ پایین، میان دو بلندی'], ['نعمت', 'هر چیز خوبی که خدا به ما داده است']],
      care: 'قرآن نمی‌گوید بعد از دعای سلیمان چه شد. اگر بچه‌ها پرسیدند «مورچه‌ها سالم ماندند؟»، بگویید قرآن نگفته، اما سلیمان پیامبری مهربان و حواس‌جمع بود.',
    },
    en: {
      gist: 'The great army of Sulayman (peace be upon him) reaches the valley of the ants. One small ant warns her friends. Sulayman hears her, smiles, and thanks God.',
      words: [['army', 'a very large group moving together'], ['valley', 'low ground between two heights'], ['blessing', 'every good thing God has given us']],
      care: 'The Qur’an does not say what happened after Sulayman’s prayer. If the children ask whether the ants were safe, say the Qur’an does not tell us, but Sulayman was a kind and careful prophet.',
    },
  },
  roots: {
    strength: { fa: 'همهٔ این قصه در قرآن آمده است (نمل ۱۵–۱۹).', en: 'The whole story is told in the Qur’an (An-Naml 27:15–19).' },
    list: [
      { id: 'r1', ref: { fa: 'نمل ۱۵–۱۶', en: 'An-Naml 27:15–16' }, ar: ay('27:15', '27:16'), gloss: { fa: 'به داوود و سلیمان دانش دادیم… «به ما زبان پرندگان آموخته‌اند و از هر چیزی به ما داده‌اند.»', en: 'We gave knowledge to Dawud and Sulayman… “We have been taught the speech of birds and given of everything.”' } },
      { id: 'r2', ref: { fa: 'نمل ۱۷', en: 'An-Naml 27:17' }, ar: ay('27:17'), gloss: { fa: 'لشکریان سلیمان از جن و انس و پرنده گرد آمدند و منظم حرکت می‌کردند.', en: 'Sulayman’s forces of jinn, people and birds were gathered and kept in ranks.' } },
      { id: 'r3', ref: { fa: 'نمل ۱۸', en: 'An-Naml 27:18' }, ar: ay('27:18'), gloss: { fa: 'مورچه‌ای گفت: «ای مورچه‌ها! به خانه‌هایتان بروید تا سلیمان و لشکرش ندانسته شما را پایمال نکنند.»', en: 'An ant said: “O ants, enter your homes, so that Sulayman and his forces do not crush you without noticing.”' } },
      { id: 'r4', ref: { fa: 'نمل ۱۹', en: 'An-Naml 27:19' }, ar: ay('27:19'), gloss: { fa: 'سلیمان از سخن او لبخند زد و خندید و گفت: «پروردگارا! توفیقم ده که شکر نعمتت را به جا آورم…»', en: 'He smiled, laughing at her words, and said: “My Lord, help me to be thankful for Your blessing…”' } },
    ],
    ours: { fa: 'اینکه مورچه «مهربان» و «منصف» بود برداشت از خودِ آیه است («ندانسته»). صدای پا و «تاپ تاپ» برای قصه‌گویی است.', en: 'That the ant was “kind” and “fair” is drawn from the verse itself (“without noticing”). The footsteps are storytelling.' },
    left: { fa: 'قرآن نمی‌گوید بعدش چه شد یا سلیمان به مورچه چه گفت. گفت‌وگوهای بلندی که در بعضی قصه‌ها میان سلیمان و مورچه هست، در قرآن نیست و نیاورده‌ایم.', en: 'The Qur’an does not say what happened next or what Sulayman said to the ant. The long conversations found in some retellings are not in the Qur’an and are left out.' },
  },
  full: [
    { art: 'sul1', amb: 'morning', refs: ['r1'],
      fa: [
        `خدا به داوود (ع) و پسرش سلیمان (ع) دانش زیادی داده بود. هر دو می‌گفتند: {{سپاس خدایی را که به ما بیشتر از خیلی از بنده‌های باایمانش بخشیده است.}}`,
        `سلیمان جانشین پدرش شد. او به مردم گفت: {{ای مردم! به ما زبان پرنده‌ها را یاد داده‌اند و از هر چیزی به ما داده‌اند.}}`,
        `[[birds]] سلیمان می‌فهمید پرنده‌ها چه می‌گویند! ((بپرسید: اگر زبان پرنده‌ها را می‌فهمیدی، از آن‌ها چه می‌پرسیدی؟))`,
      ],
      en: [
        `God had given great knowledge to Dawud, peace be upon him, and to his son Sulayman, peace be upon him. Both of them said: {{Praise be to God, who has favoured us above many of His believing servants.}}`,
        `Sulayman took his father’s place. He said to the people: {{O people! We have been taught the speech of birds, and we have been given of everything.}}`,
        `[[birds]] Sulayman understood what the birds were saying! ((ask: if you understood birds, what would you ask them?))`,
      ] },
    { art: 'sul2', amb: 'wind', refs: ['r2'],
      fa: [
        `سلیمان لشکر بزرگی داشت: از جن‌ها، از آدم‌ها و از پرنده‌ها.`,
        `همه مرتب و صف به صف حرکت می‌کردند. [[steps]] ((با دست روی پا بزنید: تاپ، تاپ، تاپ))`,
      ],
      en: [
        `Sulayman had a great army: of jinn, of people, and of birds.`,
        `They all moved in order, rank upon rank. [[steps]] ((pat your knees: tramp, tramp, tramp))`,
      ] },
    { art: 'sul3', amb: 'wind', refs: ['r3'],
      fa: [
        `لشکر رفت و رفت تا به درّه‌ای رسید: درّهٔ مورچه‌ها.`,
        `آن پایین، روی زمین، مورچه‌ای کوچک لشکر را دید. ((آهسته بخوانید))`,
        `مورچه صدا زد: {{ای مورچه‌ها! بروید توی خانه‌هایتان، تا سلیمان و لشکرش ندانسته شما را زیر پا له نکنند!}}`,
        `مورچه مهربان بود؛ اول به فکر دوستانش بود. منصف هم بود؛ گفت «ندانسته». می‌دانست سلیمان از قصد به کسی آزار نمی‌رساند.`,
      ],
      en: [
        `The army went on and on until it came to a valley: the valley of the ants.`,
        `Down below, on the ground, one small ant saw the army. ((read softly))`,
        `The ant called out: {{O ants! Go into your homes, so that Sulayman and his army do not crush you without noticing!}}`,
        `The ant was kind: she thought of her friends first. And she was fair: she said “without noticing.” She knew Sulayman would never hurt anyone on purpose.`,
      ] },
    { art: 'sul4', amb: 'wind', refs: ['r4'],
      fa: [
        `سلیمان صدای آن مورچهٔ کوچک را شنید و فهمید. از حرف او لبخند زد و خندید.`,
        `بعد رو به خدا کرد و گفت: {{پروردگارا! کمکم کن شکر نعمت‌هایی را که به من و پدر و مادرم داده‌ای به جا بیاورم، و کار خوبی بکنم که تو بپسندی.}}`,
        `سلیمان با آن همه قدرت، حواسش به یک مورچه بود؛ و یادش بود که همه‌چیز را خدا به او داده است.`,
      ],
      en: [
        `Sulayman heard that small ant and understood her. He smiled, and laughed at her words.`,
        `Then he turned to God and said: {{My Lord! Help me to give thanks for the blessings You have given me and my parents, and to do good that pleases You.}}`,
        `With all his power, Sulayman still noticed one ant; and he remembered that everything he had was given to him by God.`,
      ] },
  ],
  short: [
    { art: 'sul2', amb: 'wind', refs: ['r1', 'r2'],
      fa: [
        `سلیمان (ع) پیامبر خدا بود. خدا به او یاد داده بود حرف پرنده‌ها و حیوان‌ها را بفهمد.`,
        `سلیمان لشکر بزرگی داشت. [[steps]] لشکر می‌رفت: تاپ، تاپ، تاپ! ((با دست روی پا بزنید))`,
      ],
      en: [
        `Sulayman, peace be upon him, was a prophet of God. God had taught him to understand the speech of birds and animals.`,
        `Sulayman had a great army. [[steps]] On it marched: tramp, tramp, tramp! ((pat your knees))`,
      ] },
    { art: 'sul3', amb: 'wind', refs: ['r3'],
      fa: [
        `لشکر به درّهٔ مورچه‌ها رسید. مورچه‌ای کوچک آن‌ها را دید.`,
        `صدا زد: {{ای مورچه‌ها! بروید توی خانه‌هایتان، تا سلیمان و لشکرش ندانسته شما را له نکنند!}}`,
      ],
      en: [
        `The army came to the valley of the ants. One small ant saw them.`,
        `She called out: {{O ants! Go into your homes, so that Sulayman and his army do not crush you without noticing!}}`,
      ] },
    { art: 'sul4', amb: 'wind', refs: ['r4'],
      fa: [
        `سلیمان حرف مورچه را شنید و لبخند زد.`,
        `بعد گفت: {{خدایا! کمکم کن شکر نعمت‌هایت را به جا بیاورم.}}`,
        `سلیمانِ بزرگ، حواسش به مورچهٔ کوچک بود.`,
      ],
      en: [
        `Sulayman heard the ant and smiled.`,
        `Then he said: {{My Lord! Help me to give thanks for Your blessings.}}`,
        `Great Sulayman noticed the little ant.`,
      ] },
  ],
  talk: {
    fa: ['مورچه اول به فکر چه کسانی بود؟', 'سلیمان وقتی حرف مورچه را شنید چه کرد؟', 'تو امروز برای چه چیزی خدا را شکر می‌کنی؟'],
    en: ['Whom did the ant think of first?', 'What did Sulayman do when he heard the ant?', 'What do you thank God for today?'],
  },
  lesson: { fa: 'هر چه بزرگ‌تر و قوی‌تر می‌شویم، باید بیشتر مواظب کوچک‌ترها باشیم و بیشتر شکر کنیم.', en: 'The bigger and stronger we become, the more we should look out for the small, and the more we should give thanks.' },
  keep: { ar: cut('27:19', 6, 10), fa: 'پروردگارا! کمکم کن شکر نعمتت را به جا بیاورم.', en: 'My Lord, help me to be thankful for Your blessing.', ref: { fa: 'نمل ۱۹', en: 'An-Naml 27:19' } },
};
