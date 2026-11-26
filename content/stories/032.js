import { ay, cut } from '../util.js';

export default {
  id: 32,
  title: { fa: 'حضرت یونس و ماهی', en: 'Prophet Yunus and the Whale' },
  cover: 'yun3',
  prep: {
    fa: {
      gist: 'حضرت یونس (ع) با دلخوری از پیش مردمش می‌رود، سوار کشتی می‌شود و ماهی بزرگی او را می‌بلعد. در تاریکی خدا را صدا می‌زند و خدا نجاتش می‌دهد.',
      words: [['قرعه', 'راهی برای انتخاب یک نفر، وقتی نمی‌دانیم چه کسی'], ['بلعید', 'یک‌جا قورت داد'], ['بوتهٔ کدو', 'گیاهی با برگ‌های پهن و بزرگ']],
      care: 'حضرت یونس می‌گوید «من به خودم بد کردم». مفسران شیعه کار او را «ترک اولی» (رها کردن کارِ بهتر) می‌دانند، نه گناه. در قصه گفته‌ایم «نباید آن‌طور می‌رفت». تاریکیِ شکم ماهی را آرام و بدون ترس بخوانید.',
    },
    en: {
      gist: 'Prophet Yunus (peace be upon him) leaves his people upset, boards a ship, and is swallowed by a great fish. In the darkness he calls on God, and God saves him.',
      words: [['lots', 'a way of choosing one person when no one knows who'], ['swallowed', 'gulped down whole'], ['gourd plant', 'a plant with big, broad leaves']],
      care: 'Prophet Yunus says “I have wronged myself.” Shia commentators treat what he did as leaving the better course, not a sin; the story says he “should not have left that way.” Read the darkness inside the fish calmly, without fear.',
    },
  },
  roots: {
    strength: { fa: 'همهٔ رویدادها در قرآن آمده است. قرآن فقط نمی‌گوید چرا قرعه انداختند؛ آن را مفسران توضیح داده‌اند.', en: 'All the events are in the Qur’an. The Qur’an does not say why lots were drawn; commentators explain that.' },
    list: [
      { id: 'r1', ref: { fa: 'صافات ۱۳۹–۱۴۲', en: 'As-Saffat 37:139–142' }, ar: ay('37:139', '37:140', '37:141', '37:142'), gloss: { fa: 'حضرت یونس به سوی کشتیِ پُر رفت؛ قرعه انداختند و او بازنده شد؛ ماهی او را بلعید.', en: 'Prophet Yunus fled to the laden ship; lots were drawn and he lost; the fish swallowed him.' } },
      { id: 'r2', ref: { fa: 'انبیاء ۸۷–۸۸', en: 'Al-Anbiyaʾ 21:87–88' }, ar: ay('21:87', '21:88'), gloss: { fa: 'با خشم رفت… در تاریکی‌ها ندا داد: «جز تو خدایی نیست؛ تو پاکی؛ من از ستمکاران بودم.» دعایش را پذیرفتیم و از اندوه نجاتش دادیم؛ و مؤمنان را همین‌گونه نجات می‌دهیم.', en: 'He went off in anger… and called out in the darknesses: “There is no god but You; glory be to You; I was among the wrongdoers.” We answered him and saved him from grief; so do We save the believers.' } },
      { id: 'r3', ref: { fa: 'صافات ۱۴۳–۱۴۶', en: 'As-Saffat 37:143–146' }, ar: ay('37:143', '37:144', '37:145', '37:146'), gloss: { fa: 'اگر از تسبیح‌گویان نبود، در شکم ماهی می‌ماند. او را بیمار به زمینی خشک افکندیم و بوتهٔ کدویی بر او رویاندیم.', en: 'Had he not been one who glorified God, he would have stayed in its belly. We cast him, sick, onto a bare shore and made a gourd plant grow over him.' } },
      { id: 'r4', ref: { fa: 'صافات ۱۴۷–۱۴۸', en: 'As-Saffat 37:147–148' }, ar: ay('37:147', '37:148'), gloss: { fa: 'او را به سوی صد هزار نفر یا بیشتر فرستادیم؛ ایمان آوردند.', en: 'We sent him to a hundred thousand or more, and they believed.' } },
      { id: 'r5', ref: { fa: 'قلم ۴۸–۵۰', en: 'Al-Qalam 68:48–50' }, ar: ay('68:48', '68:49', '68:50'), gloss: { fa: '«مانند همدمِ ماهی مباش»… پروردگارش او را برگزید و از شایستگان قرار داد.', en: '“Do not be like the companion of the fish”… his Lord chose him and made him one of the righteous.' } },
    ],
    ours: { fa: 'اینکه کشتی «به خطر افتاد» و باید سبک می‌شد توضیح مفسران است؛ قرآن فقط می‌گوید کشتی پُر بود و قرعه انداختند. «سه تاریکی» (شب، دریا، شکم ماهی) هم برداشت مفسران از واژهٔ «ظلمات» است.', en: 'That the ship was “in danger” and had to be lightened is the commentators’ explanation; the Qur’an says only that it was laden and lots were drawn. The “three darknesses” (night, sea, the fish) is how commentators read the plural “darknesses.”' },
    left: { fa: 'قرآن نام شهر، نوع ماهی و مدت ماندن در شکم ماهی را نگفته است و ما هم نگفته‌ایم.', en: 'The Qur’an does not name the city, the kind of fish, or how long he was inside it, and neither do we.' },
  },
  full: [
    { art: 'yun1', amb: 'sea', refs: ['r1', 'r2'],
      fa: [
        `حضرت یونس (ع) پیامبر خدا بود. او مردم شهرش را به سوی خدا دعوت می‌کرد، اما آن‌ها گوش نمی‌کردند.`,
        `حضرت یونس خیلی ناراحت شد. بی‌آنکه منتظر فرمان خدا بماند، با دلخوری از شهر بیرون رفت.`,
        `به کنار دریا رسید. یک کشتی آنجا بود، پر از بار و مسافر. [[wave]] حضرت یونس سوار شد.`,
      ],
      en: [
        `Prophet Yunus, peace be upon him, was a prophet of God. He called the people of his city to God, but they would not listen.`,
        `Prophet Yunus was deeply upset. Without waiting for God’s command, he left the city in his sorrow.`,
        `He came to the sea. A ship was there, full of cargo and travellers. [[wave]] Prophet Yunus went aboard.`,
      ] },
    { art: 'yun2', amb: 'storm', refs: ['r1'],
      fa: [
        `وسط دریا، کشتی به خطر افتاد. خیلی سنگین بود.`,
        `مسافرها قرعه انداختند تا ببینند چه کسی باید از کشتی بیرون برود. قرعه به نام حضرت یونس افتاد.`,
        `[[splash]] حضرت یونس در دریا افتاد… و یک ماهی خیلی بزرگ او را بلعید.`,
      ],
      en: [
        `Out at sea, the ship was in danger. It was far too heavy.`,
        `The travellers drew lots to see who must leave the ship. The lot fell to Prophet Yunus.`,
        `[[splash]] Prophet Yunus fell into the sea… and a very great fish swallowed him.`,
      ] },
    { art: 'yun3', amb: 'deep', refs: ['r2'],
      fa: [
        `توی شکم ماهی تاریک بود. شب بود و تاریک؛ زیر آب بود و تاریک‌تر. ((آهسته و آرام بخوانید))`,
        `حضرت یونس فهمید که نباید آن‌طور می‌رفت. در آن تاریکی‌ها خدا را صدا زد:`,
        `{{خدایا! جز تو خدایی نیست. تو پاکی. من به خودم بد کردم.}}`,
        `خدا صدای حضرت یونس را شنید. خدا همیشه می‌شنود؛ حتی از ته دریا، حتی از دل تاریکی.`,
      ],
      en: [
        `Inside the fish it was dark. It was night, and dark; it was under the water, and darker still. ((read slowly and softly))`,
        `Prophet Yunus understood that he should not have left that way. In those darknesses he called out to God:`,
        `{{O God! There is no god but You. Glory be to You. I have wronged myself.}}`,
        `God heard Prophet Yunus. God always hears; even from the bottom of the sea, even from the heart of the dark.`,
      ] },
    { art: 'yun4', amb: 'shore', refs: ['r2', 'r3'],
      fa: [
        `خدا دعای حضرت یونس را قبول کرد و او را از غم نجات داد.`,
        `ماهی حضرت یونس را کنار ساحل، روی خشکی گذاشت. او بی‌حال و بیمار بود. آنجا نه خانه‌ای بود و نه سایه‌ای.`,
        `خدا بالای سرش بوتهٔ کدویی رویاند، با برگ‌های پهن. [[birds]] حضرت یونس آرام‌آرام خوب شد.`,
        `اگر حضرت یونس اهل یاد خدا نبود، همان‌جا در شکم ماهی می‌ماند.`,
      ],
      en: [
        `God answered Prophet Yunus’s prayer and saved him from his grief.`,
        `The fish left Prophet Yunus on the dry shore. He was weak and ill. There was no house there, and no shade.`,
        `God made a gourd plant grow over him, with broad leaves. [[birds]] Little by little, Prophet Yunus grew well.`,
        `Had Prophet Yunus not been one who remembered God, he would have stayed inside the fish.`,
      ] },
    { art: 'yun5', amb: 'morning', refs: ['r4', 'r5'],
      fa: [
        `بعد خدا حضرت یونس را دوباره پیش مردم فرستاد؛ صد هزار نفر بودند، بلکه بیشتر!`,
        `این بار مردم ایمان آوردند، و خدا به آن‌ها زندگی خوبی داد.`,
        `خدا در قرآن می‌فرماید: {{ما مؤمنان را همین‌طور نجات می‌دهیم.}} ((بپرسید: حضرت یونس در تاریکی چه گفت؟))`,
      ],
      en: [
        `Then God sent Prophet Yunus back to the people; a hundred thousand of them, or more!`,
        `This time the people believed, and God gave them a good life.`,
        `God says in the Qur’an: {{This is how We save those who believe.}} ((ask: what did Prophet Yunus say in the dark?))`,
      ] },
  ],
  short: [
    { art: 'yun2', amb: 'storm', refs: ['r1'],
      fa: [
        `حضرت یونس (ع) پیامبر خدا بود. یک روز با دلخوری از شهرش رفت و سوار کشتی شد.`,
        `وسط دریا، کشتی به خطر افتاد. [[splash]] حضرت یونس در آب افتاد… و یک ماهی خیلی بزرگ او را بلعید.`,
      ],
      en: [
        `Prophet Yunus, peace be upon him, was a prophet of God. One day he left his city upset and boarded a ship.`,
        `Out at sea, the ship was in danger. [[splash]] Prophet Yunus fell into the water… and a very great fish swallowed him.`,
      ] },
    { art: 'yun3', amb: 'deep', refs: ['r2'],
      fa: [
        `توی شکم ماهی تاریکِ تاریک بود. ((آهسته بخوانید))`,
        `حضرت یونس خدا را صدا زد: {{خدایا! جز تو خدایی نیست. تو پاکی.}}`,
        `خدا صدای حضرت یونس را شنید. خدا همیشه می‌شنود.`,
      ],
      en: [
        `Inside the fish it was dark, so dark. ((read softly))`,
        `Prophet Yunus called out to God: {{O God! There is no god but You. Glory be to You.}}`,
        `God heard Prophet Yunus. God always hears.`,
      ] },
    { art: 'yun4', amb: 'shore', refs: ['r3'],
      fa: [
        `ماهی حضرت یونس را کنار ساحل گذاشت.`,
        `خدا بالای سرش بوتهٔ کدویی رویاند تا سایه داشته باشد. [[birds]] حضرت یونس خوب شد.`,
        `خدا او را نجات داد.`,
      ],
      en: [
        `The fish left Prophet Yunus on the shore.`,
        `God made a gourd plant grow over him to give him shade. [[birds]] Prophet Yunus grew well.`,
        `God had saved him.`,
      ] },
  ],
  talk: {
    fa: ['حضرت یونس در تاریکی چه کرد؟', 'خدا صدای ما را از کجاها می‌شنود؟', 'وقتی کاری را اشتباه می‌کنیم، بعدش چه کار خوبی می‌توانیم بکنیم؟'],
    en: ['What did Prophet Yunus do in the dark?', 'From where can God hear us?', 'When we get something wrong, what is a good thing to do next?'],
  },
  lesson: { fa: 'هیچ جایی آن‌قدر تاریک و دور نیست که خدا صدای ما را نشنود.', en: 'No place is so dark or so far away that God cannot hear us.' },
  keep: { ar: cut('21:87', 15, 23), fa: 'جز تو خدایی نیست. تو پاکی. من به خودم بد کردم.', en: 'There is no god but You. Glory be to You. I have wronged myself.', ref: { fa: 'انبیاء ۸۷', en: 'Al-Anbiyaʾ 21:87' } },
};
