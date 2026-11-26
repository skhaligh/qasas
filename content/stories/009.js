import { ay } from '../util.js';
import { A } from '../ayat.js';

export default {
  id: 9,
  title: { fa: 'آتشی که سرد شد', en: 'The Fire That Turned Cool' },
  cover: 'ibr3',
  prep: {
    fa: {
      gist: 'ابراهیم (ع) به مردم می‌گوید بت‌ها را نپرستند. بزرگان شهر او را در آتش می‌اندازند، اما خدا به آتش فرمان می‌دهد سرد و بی‌آزار شود.',
      words: [['بت', 'مجسمه‌ای که بعضی مردم به‌جای خدا می‌پرستیدند'], ['پربرکت', 'پر از خوبی و نعمت']],
      care: 'قصه دربارهٔ انداختن در آتش است، اما پایانش آرام و خوش است. صدای آتش را برای بچه‌های کوچک کم کنید.',
    },
    en: {
      gist: 'Ibrahim (peace be upon him) tells his people not to worship idols. The chiefs throw him into a fire, but God commands the fire to be cool and harmless.',
      words: [['idol', 'a statue some people worshipped instead of God'], ['blessed', 'full of goodness']],
      care: 'The story involves being thrown into a fire, but it ends calmly and happily. Turn the fire sound down for very young children.',
    },
  },
  roots: {
    strength: { fa: 'همهٔ این قصه در قرآن آمده است.', en: 'The whole story is told in the Qur’an.' },
    list: [
      { id: 'r1', ref: { fa: 'انبیاء ۵۸ و ۶۲–۶۳', en: 'Al-Anbiyaʾ 21:58, 62–63' }, ar: ay('21:58', '21:62', '21:63'), gloss: { fa: 'بت‌ها را خرد کرد، جز بت بزرگشان. پرسیدند: «تو این کار را کردی؟» گفت: «…از خودشان بپرسید، اگر حرف می‌زنند.»', en: 'He broke them to pieces, except the biggest. They asked, “Did you do this?” He said, “…ask them, if they can speak.”' } },
      { id: 'r2', ref: { fa: 'انبیاء ۶۶–۶۷', en: 'Al-Anbiyaʾ 21:66–67' }, ar: ay('21:66', '21:67'), gloss: { fa: '«آیا به‌جای خدا چیزی را می‌پرستید که نه سودی به شما می‌رساند و نه زیانی؟»', en: '“Do you worship, instead of God, what can neither help you nor harm you?”' } },
      { id: 'r3', ref: { fa: 'انبیاء ۶۸ · صافات ۹۷', en: 'Al-Anbiyaʾ 21:68 · As-Saffat 37:97' }, ar: ay('21:68') + ' · ' + ay('37:97'), gloss: { fa: '«او را بسوزانید و خدایانتان را یاری کنید.» «برایش بنایی بسازید و او را در آتش بیندازید.»', en: '“Burn him and support your gods.” “Build a structure for him and throw him into the blaze.”' } },
      { id: 'r4', ref: { fa: 'انبیاء ۶۹', en: 'Al-Anbiyaʾ 21:69' }, ar: ay('21:69'), gloss: { fa: '«گفتیم: ای آتش! بر ابراهیم سرد و سلامت باش.»', en: '“We said: O fire, be coolness and safety for Ibrahim.”' } },
      { id: 'r5', ref: { fa: 'انبیاء ۷۰–۷۱ · عنکبوت ۲۴', en: 'Al-Anbiyaʾ 21:70–71 · Al-ʿAnkabut 29:24' }, ar: ay('21:70', '21:71') + ' · ' + ay('29:24'), gloss: { fa: 'خواستند به او نیرنگ بزنند، ولی زیان‌کارترین شدند. خدا او و لوط را به سرزمینی که برای جهانیان پربرکت کرده بود نجات داد.', en: 'They plotted against him, but We made them the greatest losers. We saved him and Lut to the land We had blessed for all people.' } },
    ],
    ours: { fa: 'قرآن از «بنا» و «آتش» می‌گوید؛ «هیزم روی هیزم» و بالا رفتن شعله‌ها وصفِ قصه‌گوست.', en: 'The Qur’an mentions a “structure” and the “blaze”; the piling of wood and the rising flames are the storyteller’s description.' },
    left: { fa: 'منجنیق، گفت‌وگو با جبرئیل و «گلستان شدن» آتش در قرآن نیست؛ در روایت‌ها و شعرها آمده و ما نیاورده‌ایم. قرآن فقط می‌فرماید آتش «سرد و سلامت» شد.', en: 'The catapult, the exchange with Jibraʾil and the fire “turning into a garden” are not in the Qur’an; they come from narrations and poetry and are left out. The Qur’an says only that the fire became “cool and safe.”' },
  },
  full: [
    { art: 'ibr1', amb: 'wind', refs: ['r1', 'r2'],
      fa: [
        `در شهری قدیمی، مردم بت می‌پرستیدند. بت یعنی مجسمه‌ای از سنگ یا چوب که خودشان ساخته بودند.`,
        `جوانی به نام ابراهیم (ع) در آن شهر بود. او می‌دانست بت‌ها نه می‌بینند، نه می‌شنوند و نه کاری از دستشان برمی‌آید.`,
        `یک روز که مردم نبودند، ابراهیم بت‌ها را شکست؛ فقط بت بزرگ را گذاشت.`,
        `مردم برگشتند و پرسیدند: «تو این کار را کردی، ابراهیم؟» ابراهیم گفت: {{از خودشان بپرسید، اگر حرف می‌زنند!}}`,
        `همه ساکت شدند. خوب می‌دانستند که بت‌ها حرف نمی‌زنند. ابراهیم گفت: {{پس چرا چیزی را می‌پرستید که نه سودی به شما می‌رساند و نه زیانی؟}}`,
      ],
      en: [
        `In an old city, the people worshipped idols. An idol is a statue of stone or wood that they had made themselves.`,
        `A young man named Ibrahim, peace be upon him, lived in that city. He knew the idols could not see, could not hear, and could not do anything at all.`,
        `One day, when the people were away, Ibrahim broke the idols. He left only the biggest one.`,
        `The people came back and asked, “Did you do this, Ibrahim?” He said: {{Ask them, if they can speak!}}`,
        `Everyone fell silent. They knew very well that idols cannot speak. Ibrahim said: {{Then why do you worship what can neither help you nor harm you?}}`,
      ] },
    { art: 'ibr2', amb: 'wind', refs: ['r3'],
      fa: [
        `اما بزرگان شهر به‌جای فکر کردن، عصبانی شدند.`,
        `گفتند: {{او را بسوزانید و به خدایانتان کمک کنید!}} و گفتند: {{برایش بنایی بسازید و او را در آتش بیندازید.}}`,
        `دیواری ساختند و هیزم آوردند. [[twigs]] هیزم روی هیزم… ((با دست نشان بدهید چقدر بالا رفت))`,
      ],
      en: [
        `But instead of thinking, the chiefs of the city grew angry.`,
        `They said: {{Burn him, and stand up for your gods!}} And they said: {{Build a structure for him and throw him into the blaze.}}`,
        `They built a wall and brought firewood. [[twigs]] Wood upon wood… ((show with your hands how high it grew))`,
      ] },
    { art: 'ibr3', amb: 'fire', refs: ['r4'],
      fa: [
        `[[flare]] آتش را روشن کردند. شعله‌ها بالا رفت؛ بالا و بالاتر.`,
        `ابراهیم را در آتش انداختند. ((مکث))`,
        `اما آتش هم مثل همه‌چیز، به فرمان خداست. خدا به آتش فرمود: {{ای آتش! برای ابراهیم سرد و سلامت باش.}}`,
        `و آتش… سرد شد! ابراهیم را نسوزاند.`,
      ],
      en: [
        `[[flare]] They lit the fire. The flames rose, higher and higher.`,
        `They threw Ibrahim into the fire. ((pause))`,
        `But fire, like everything else, obeys God. God said to the fire: {{O fire! Be coolness and safety for Ibrahim.}}`,
        `And the fire… turned cool! It did not burn Ibrahim.`,
      ] },
    { art: 'ibr4', amb: 'morning', refs: ['r5'],
      fa: [
        `آن‌ها می‌خواستند به ابراهیم آسیب بزنند، اما خودشان بازنده شدند. خدا ابراهیم را از آتش نجات داد.`,
        `بعد ابراهیم با لوط (ع) از آن شهر رفت؛ به سرزمینی که خدا برای همهٔ مردم دنیا پربرکتش کرده بود. [[birds]]`,
        `((بپرسید: آتش به حرف چه کسی گوش کرد؟))`,
      ],
      en: [
        `They wanted to harm Ibrahim, but they were the ones who lost. God saved Ibrahim from the fire.`,
        `Then Ibrahim left that city with Lut, peace be upon him, for a land that God had blessed for all the people of the world. [[birds]]`,
        `((ask: whose command did the fire obey?))`,
      ] },
  ],
  short: [
    { art: 'ibr2', amb: 'wind', refs: ['r3'],
      fa: [
        `ابراهیم (ع) به مردم شهرش می‌گفت: «بت‌ها را نپرستید. فقط خدا را بپرستید.»`,
        `بزرگان شهر عصبانی شدند. گفتند: {{او را بسوزانید!}}`,
        `[[twigs]] هیزم آوردند. هیزم روی هیزم…`,
      ],
      en: [
        `Ibrahim, peace be upon him, told the people of his city, “Do not worship idols. Worship God alone.”`,
        `The chiefs grew angry. They said: {{Burn him!}}`,
        `[[twigs]] They brought firewood. Wood upon wood…`,
      ] },
    { art: 'ibr3', amb: 'fire', refs: ['r4'],
      fa: [
        `[[flare]] آتش بزرگی روشن کردند و ابراهیم را در آن انداختند.`,
        `اما خدا به آتش فرمود: {{ای آتش! برای ابراهیم سرد و سلامت باش.}}`,
        `و آتش سرد شد! ابراهیم نسوخت.`,
      ],
      en: [
        `[[flare]] They lit a great fire and threw Ibrahim into it.`,
        `But God said to the fire: {{O fire! Be coolness and safety for Ibrahim.}}`,
        `And the fire turned cool! Ibrahim was not burned.`,
      ] },
    { art: 'ibr4', amb: 'morning', refs: ['r5'],
      fa: [
        `خدا ابراهیم را نجات داد. [[birds]]`,
        `بعد ابراهیم به سرزمینی پربرکت رفت. آتش هم به حرف خدا گوش می‌کند.`,
      ],
      en: [
        `God saved Ibrahim. [[birds]]`,
        `Then Ibrahim went to a blessed land. Even fire listens to God.`,
      ] },
  ],
  talk: {
    fa: ['چرا بت‌ها نمی‌توانستند جواب بدهند؟', 'آتش به حرف چه کسی گوش کرد؟', 'وقتی می‌ترسی، از چه کسی کمک می‌خواهی؟'],
    en: ['Why could the idols not answer?', 'Whose command did the fire obey?', 'When you are afraid, whom do you ask for help?'],
  },
  lesson: { fa: 'همه‌چیز به فرمان خداست. کسی که با خداست، تنها نیست.', en: 'Everything obeys God. Whoever is with God is never alone.' },
  keep: { ar: A['21:69'], fa: 'ای آتش! برای ابراهیم سرد و سلامت باش.', en: 'O fire! Be coolness and safety for Ibrahim.', ref: { fa: 'انبیاء ۶۹', en: 'Al-Anbiyaʾ 21:69' } },
};
