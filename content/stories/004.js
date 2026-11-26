import { ay, cut } from '../util.js';

export default {
  id: 4,
  title: { fa: 'کشتی نوح', en: "Nuh's Ship" },
  cover: 'nuh2',
  prep: {
    fa: {
      gist: 'نوح (ع) به فرمان خدا کشتی می‌سازد. مردم به او می‌خندند، اما او ادامه می‌دهد. باران می‌آید و خدا نوح و همراهانش را نجات می‌دهد.',
      words: [['تنور', 'جایی که در آن نان می‌پزند'], ['جودی', 'نام کوهی که کشتی روی آن نشست'], ['یک جفت', 'دوتا: یکی نر، یکی ماده']],
      care: 'نسخهٔ کامل، خیلی کوتاه می‌گوید که یکی از پسران نوح سوار نشد. اگر بچه‌ها کوچک‌اند، نسخهٔ کوتاه را بخوانید که این بخش را ندارد.',
    },
    en: {
      gist: 'Nuh (peace be upon him) builds a ship at God’s command. People laugh at him, but he keeps going. The rain comes and God saves Nuh and those with him.',
      words: [['tannur', 'an oven for baking bread'], ['Judi', 'the mountain where the ship came to rest'], ['a pair', 'two: one male, one female']],
      care: 'The full version briefly says that one of Nuh’s sons did not come aboard. For very young children, read the short version, which leaves this out.',
    },
  },
  roots: {
    strength: { fa: 'همهٔ این قصه در قرآن آمده است.', en: 'The whole story is told in the Qur’an.' },
    list: [
      { id: 'r1', ref: { fa: 'عنکبوت ۱۴', en: 'Al-ʿAnkabut 29:14' }, ar: ay('29:14'), gloss: { fa: 'نوح نهصد و پنجاه سال میان مردمش ماند.', en: 'Nuh stayed among his people a thousand years less fifty.' } },
      { id: 'r2', ref: { fa: 'هود ۳۷–۳۸', en: 'Hud 11:37–38' }, ar: ay('11:37', '11:38'), gloss: { fa: 'فرمانِ ساختن کشتی؛ هر بار بزرگان قومش می‌گذشتند، مسخره‌اش می‌کردند.', en: 'The command to build the ship; whenever the chiefs of his people passed by, they mocked him.' } },
      { id: 'r3', ref: { fa: 'هود ۴۰–۴۱', en: 'Hud 11:40–41' }, ar: ay('11:40', '11:41'), gloss: { fa: 'تنور جوشید؛ «از هر جانداری یک جفت سوار کن»؛ «به نام خدا حرکت می‌کند و می‌ایستد».', en: 'The oven gushed; “carry a pair of every kind”; “in the name of God it sails and it anchors.”' } },
      { id: 'r4', ref: { fa: 'قمر ۱۱–۱۲', en: 'Al-Qamar 54:11–12' }, ar: ay('54:11', '54:12'), gloss: { fa: 'درهای آسمان با آبی ریزان باز شد و زمین چشمه‌چشمه شد.', en: 'The gates of the sky opened with pouring water, and the earth burst into springs.' } },
      { id: 'r5', ref: { fa: 'هود ۴۲–۴۳', en: 'Hud 11:42–43' }, ar: ay('11:42', '11:43'), gloss: { fa: 'موج‌هایی مثل کوه؛ گفت‌وگوی نوح با پسرش.', en: 'Waves like mountains; Nuh calls to his son.' } },
      { id: 'r6', ref: { fa: 'هود ۴۴ و ۴۸', en: 'Hud 11:44, 48' }, ar: ay('11:44', '11:48'), gloss: { fa: '«ای زمین، آبت را فرو ببر»؛ کشتی بر جودی نشست؛ «با سلامت و برکت پیاده شو».', en: '“O earth, swallow your water”; the ship settled on Judi; “disembark with peace and blessings.”' } },
      { id: 'r7', ref: { fa: 'مؤمنون ۲۸', en: 'Al-Muʾminun 23:28' }, ar: ay('23:28'), gloss: { fa: 'وقتی بر کشتی نشستی بگو: سپاس خدایی را که ما را نجات داد.', en: 'When you are settled on the ship, say: praise be to God who saved us.' } },
    ],
    ours: { fa: 'نام حیوان‌ها (پرنده، شتر) مثال است؛ قرآن فقط می‌فرماید «از هر جانداری یک جفت». صدای چکش و وصف باران برای قصه‌گویی است.', en: 'The animals named (birds, camels) are examples; the Qur’an says only “a pair of every kind.” The hammering and the description of the rain are storytelling.' },
    left: { fa: 'رنگین‌کمان و کبوتر با شاخهٔ زیتون در قرآن نیست و نیاورده‌ایم. قرآن تعداد و نام همراهان نوح را هم نگفته است.', en: 'The rainbow and the dove with an olive branch are not in the Qur’an, so they are not here. The Qur’an does not give the number or names of those with Nuh.' },
  },
  full: [
    { art: 'nuh1', amb: 'wind', refs: ['r1', 'r2'],
      fa: [
        `خیلی خیلی قدیم، پیامبری بود به نام نوح (ع).`,
        `نوح نهصد و پنجاه سال به مردم گفت: «فقط خدا را بپرستید و کار بد نکنید.» اما بیشتر مردم گوش نکردند. فقط چند نفر حرفش را قبول کردند.`,
        `یک روز خدا به نوح فرمود: {{کشتی بساز؛ زیر نگاه ما و با راهنمایی ما.}}`,
        `نوح چوب آورد و شروع کرد. [[hammer]] تق، تق، تق! ((با دست آرام روی زمین بزنید))`,
        `هر وقت بزرگان شهر از کنارش رد می‌شدند، به او می‌خندیدند. نوح دست از کار نکشید. فقط گفت: {{اگر امروز شما به ما می‌خندید، روزی هم ما به شما خواهیم خندید.}}`,
      ],
      en: [
        `Long, long ago there lived a prophet named Nuh, peace be upon him.`,
        `For nine hundred and fifty years Nuh told his people, “Worship God alone, and keep away from wrong.” But most of them would not listen. Only a few believed him.`,
        `One day God said to Nuh: {{Build the ship, under Our eyes and by Our guidance.}}`,
        `Nuh brought wood and set to work. [[hammer]] Tap, tap, tap! ((tap gently on the floor))`,
        `Whenever the chiefs of the town walked past, they laughed at him. Nuh did not stop. He only said: {{If you laugh at us today, a day will come when we laugh at you.}}`,
      ] },
    { art: 'nuh2', amb: 'wind', refs: ['r3', 'r7'],
      fa: [
        `کشتی آماده شد. آن‌وقت نشانه رسید: آب از تنور جوشید!`,
        `خدا فرمود: {{از هر جانداری یک جفت سوار کن؛ و خانواده‌ات را، و کسانی را که ایمان آورده‌اند.}}`,
        `[[birds]] پرنده‌ها آمدند، دوتا دوتا. شترها آمدند، دوتا دوتا. ((بپرسید: دیگر چه حیوانی آمد؟))`,
        `آدم‌های باایمان هم سوار شدند. آن‌ها کم بودند.`,
        `نوح گفت: {{سوار شوید! به نام خدا حرکت می‌کند و به نام خدا می‌ایستد.}}`,
      ],
      en: [
        `The ship was ready. Then the sign came: water gushed up from the oven!`,
        `God said: {{Take on board a pair of every kind, and your family, and those who believe.}}`,
        `[[birds]] The birds came, two by two. The camels came, two by two. ((ask: which animal came next?))`,
        `The people who believed came aboard too. They were only a few.`,
        `Nuh said: {{Come aboard! In the name of God it sails, and in the name of God it comes to rest.}}`,
      ] },
    { art: 'nuh3', amb: 'rain', refs: ['r4'],
      fa: [
        `[[thunder]] آسمان غرّید. باران آمد؛ تند و تند.`,
        `درهای آسمان باز شد و از زمین هم چشمه جوشید. آب بالا آمد… و بالاتر… ((دستتان را آرام بالا ببرید))`,
        `کشتی آرام از زمین بلند شد. نوح و همراهانش گفتند: {{سپاس خدایی را که ما را نجات داد.}}`,
      ],
      en: [
        `[[thunder]] The sky rumbled. Down came the rain, harder and harder.`,
        `The gates of the sky opened, and springs burst out of the ground. The water rose… and rose… ((slowly lift your hand))`,
        `Gently the ship lifted off the ground. Nuh and those with him said: {{Praise be to God, who has saved us.}}`,
      ] },
    { art: 'nuh4', amb: 'storm', refs: ['r5'],
      fa: [
        `[[wave]] موج‌ها مثل کوه بودند. اما کشتی نوح از میان آن‌ها جلو می‌رفت.`,
        `نوح پسرش را دید که کناری ایستاده بود. صدا زد: {{پسرم! با ما سوار شو.}}`,
        `پسر گفت: {{می‌روم بالای کوه؛ کوه مرا از آب نگه می‌دارد.}}`,
        `نوح گفت: {{امروز هیچ‌چیز کسی را نگه نمی‌دارد، مگر مهربانی خدا.}} اما پسر نیامد، و موجی میانشان فاصله انداخت.`,
      ],
      en: [
        `[[wave]] The waves were like mountains. But Nuh’s ship sailed on between them.`,
        `Nuh saw his son standing apart. He called out: {{My son! Come aboard with us.}}`,
        `The son said: {{I will climb a mountain; it will keep me safe from the water.}}`,
        `Nuh said: {{Today nothing keeps anyone safe, except the mercy of God.}} But his son would not come, and a wave came between them.`,
      ] },
    { art: 'nuh5', amb: 'shore', refs: ['r6'],
      fa: [
        `بعد خدا فرمود: {{ای زمین، آبت را فرو ببر! ای آسمان، بس کن!}}`,
        `باران ایستاد. آب کم‌کم پایین رفت. کشتی آرام روی کوهی نشست؛ کوهی به نام جودی.`,
        `به نوح گفته شد: {{ای نوح! با سلامت و برکت پیاده شو.}}`,
        `[[birds]] نوح و همراهانش پیاده شدند. خدا آن‌ها را نجات داده بود. ((بپرسید: نوح وقتی سوار شد چه گفت؟))`,
      ],
      en: [
        `Then God said: {{O earth, swallow your water! O sky, hold back!}}`,
        `The rain stopped. Little by little the water went down. The ship came softly to rest on a mountain called Judi.`,
        `Nuh was told: {{O Nuh, step down in peace, with blessings.}}`,
        `[[birds]] Nuh and those with him stepped out. God had saved them. ((ask: what did Nuh say when they came aboard?))`,
      ] },
  ],
  short: [
    { art: 'nuh1', amb: 'wind', refs: ['r2'],
      fa: [
        `خیلی خیلی قدیم، پیامبری بود به نام نوح (ع). نوح به مردم می‌گفت: «فقط خدا را بپرستید.» اما بیشترشان گوش نمی‌کردند.`,
        `خدا به نوح فرمود: {{کشتی بساز.}}`,
        `نوح چوب آورد. [[hammer]] تق، تق، تق! بعضی‌ها به او می‌خندیدند، اما نوح کارش را ادامه داد.`,
      ],
      en: [
        `Long, long ago there was a prophet named Nuh, peace be upon him. He told people, “Worship God alone.” But most would not listen.`,
        `God said to Nuh: {{Build the ship.}}`,
        `Nuh brought wood. [[hammer]] Tap, tap, tap! Some people laughed at him, but Nuh kept on working.`,
      ] },
    { art: 'nuh2', amb: 'wind', refs: ['r3'],
      fa: [
        `کشتی آماده شد. خدا فرمود: {{از هر جانداری یک جفت سوار کن.}}`,
        `[[birds]] پرنده‌ها آمدند، دوتا دوتا. شترها آمدند، دوتا دوتا. آدم‌های باایمان هم سوار شدند.`,
        `نوح گفت: {{به نام خدا حرکت می‌کند و به نام خدا می‌ایستد.}}`,
      ],
      en: [
        `The ship was ready. God said: {{Take on board a pair of every kind.}}`,
        `[[birds]] The birds came, two by two. The camels came, two by two. The people who believed came aboard too.`,
        `Nuh said: {{In the name of God it sails, and in the name of God it comes to rest.}}`,
      ] },
    { art: 'nuh3', amb: 'rain', refs: ['r4'],
      fa: [
        `[[thunder]] باران آمد. خیلی باران آمد!`,
        `آب بالا آمد… و بالاتر… ((دستتان را بالا ببرید)) و کشتی آرام روی آب رفت.`,
      ],
      en: [
        `[[thunder]] Down came the rain. So much rain!`,
        `The water rose… and rose… ((lift your hand)) and the ship floated gently on the water.`,
      ] },
    { art: 'nuh5', amb: 'shore', refs: ['r6'],
      fa: [
        `بعد خدا فرمود: {{ای زمین، آبت را فرو ببر! ای آسمان، بس کن!}}`,
        `باران ایستاد. کشتی آرام روی کوهی نشست.`,
        `[[birds]] نوح و همراهانش پیاده شدند. خدا آن‌ها را نجات داده بود.`,
      ],
      en: [
        `Then God said: {{O earth, swallow your water! O sky, hold back!}}`,
        `The rain stopped. The ship came softly to rest on a mountain.`,
        `[[birds]] Nuh and those with him stepped out. God had saved them.`,
      ] },
  ],
  talk: {
    fa: ['چرا نوح با اینکه به او می‌خندیدند، دست از کار نکشید؟', 'نوح وقتی سوار کشتی شد چه گفت؟', 'تو وقتی کاری را شروع می‌کنی چه می‌گویی؟'],
    en: ['Why did Nuh keep working even when people laughed at him?', 'What did Nuh say when they boarded the ship?', 'What do you say when you begin something?'],
  },
  lesson: { fa: 'وقتی کار درستی می‌کنیم، اگر دیگران بخندند هم ادامه می‌دهیم و به خدا تکیه می‌کنیم.', en: 'When we are doing what is right, we keep going even if others laugh, and we rely on God.' },
  keep: { ar: cut('11:41', 4, 7), fa: 'به نام خدا حرکت می‌کند و به نام خدا می‌ایستد.', en: 'In the name of God it sails, and in the name of God it comes to rest.', ref: { fa: 'هود ۴۱', en: 'Hud 11:41' } },
};
