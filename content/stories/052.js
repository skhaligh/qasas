import { ay, cut } from '../util.js';

export default {
  id: 52,
  title: { fa: 'غار ثور', en: 'The Cave of Thawr' },
  cover: 'thw3',
  prep: {
    fa: {
      gist: 'پیامبر (ص) شبانه از مکه بیرون می‌رود و سه شب در غاری بالای کوه ثور پنهان می‌شود. جست‌وجوگرها تا دهانهٔ غار می‌آیند، اما تار عنکبوتی را می‌بینند و برمی‌گردند.',
      words: [['غار', 'سوراخی بزرگ در دل کوه'], ['هجرت', 'رفتن پیامبر (ص) از مکه به مدینه'], ['امانت', 'چیزی که کسی پیش ما می‌گذارد تا برایش نگه داریم']],
      care: 'قرآن نام همراه پیامبر (ص) را نمی‌برد؛ منابع تاریخی می‌گویند ابوبکر بود و ما یک بار نامش را آورده‌ایم. نقشهٔ دشمنان را فقط «نقشهٔ بد» گفته‌ایم.',
    },
    en: {
      gist: 'The Prophet (peace and blessings be upon him and his family) leaves Makka by night and hides for three nights in a cave on Mount Thawr. The searchers reach the mouth of the cave, see a spider’s web, and turn back.',
      words: [['cave', 'a large hollow in a mountain'], ['Hijra', 'the Prophet’s journey from Makka to Madina'], ['trust', 'something a person leaves with us to keep safe for them']],
      care: 'The Qur’an does not name the Prophet’s companion; the histories say it was Abu Bakr, and we name him once. The enemies’ plan is called only “a wicked plan.”',
    },
  },
  roots: {
    strength: {
      fa: 'اصل ماجرا در قرآن است (توبه ۴۰). سه شب ماندن در غار و جایزهٔ صد شتر در سیرهٔ ابن‌هشام و صحیح بخاری آمده است. تار عنکبوت را هم منابع اهل‌سنت (مسند احمد، طبقات ابن‌سعد) و هم منابع شیعه (تفسیر قمی) آورده‌اند؛ ابن‌کثیر و ابن‌حجر سند آن را «حسن» دانسته‌اند و برخی محدثان آن را ضعیف شمرده‌اند.',
      en: 'The core is in the Qur’an (At-Tawba 9:40). The three nights and the reward of a hundred camels are in Ibn Hisham’s Sira and Sahih al-Bukhari. The spider’s web is reported in both Sunni sources (Musnad Ahmad, Ibn Saʿd) and Shia ones (Tafsir al-Qummi); Ibn Kathir and Ibn Hajar graded its chain “good”, while some hadith scholars consider it weak.',
    },
    list: [
      { id: 'r1', ref: { fa: 'توبه ۴۰', en: 'At-Tawba 9:40' }, ar: ay('9:40'), gloss: { fa: '…آن‌گاه که آن دو در غار بودند و او به همراهش می‌گفت: «غمگین مباش؛ خدا با ماست.» پس خدا آرامش خود را بر او فرو فرستاد و با لشکریانی که نمی‌دیدید یاری‌اش کرد.', en: '…when the two were in the cave and he said to his companion, “Do not grieve; God is with us.” Then God sent down His calm upon him and supported him with forces you did not see.' } },
      { id: 'r2', ref: { fa: 'انفال ۳۰', en: 'Al-Anfal 8:30' }, ar: ay('8:30'), gloss: { fa: 'کافران نقشه می‌کشیدند که تو را زندانی کنند یا بکشند یا بیرون کنند.', en: 'Those who disbelieved plotted to confine you, or kill you, or drive you out.' } },
      { id: 'r3', ref: { fa: 'سیرهٔ ابن‌هشام ۱/۴۸۵–۴۸۶', en: 'Ibn Hisham, Sira 1/485–486' }, ar: 'فَأَقَامَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فِي الْغَارِ ثَلَاثًا وَمَعَهُ أَبُو بَكْرٍ وَجَعَلَتْ قُرَيْشٌ فِيهِ حِين فقدوه مائَة نَاقَةٍ، لِمَنْ يَرُدُّهُ عَلَيْهِمْ', gloss: { fa: 'پیامبر سه شب در غار ماند و ابوبکر با او بود. قریش صد شتر جایزه گذاشت برای کسی که او را برگرداند. (علی (ع) برای برگرداندن امانت‌های مردم در مکه ماند.)', en: 'The Messenger of God stayed in the cave three nights with Abu Bakr. Quraysh offered a hundred camels to whoever brought him back. (Ali stayed in Makka to return people’s deposits.)' } },
      { id: 'r4', ref: { fa: 'مسند احمد، ش ۳۲۵۱ (به نقل ابن‌کثیر، البدایة والنهایة ۳/۱۸۱)', en: 'Musnad Ahmad no. 3251 (as quoted by Ibn Kathir, al-Bidaya 3/181)' }, ar: 'فاقتفوا أثره فلما بلغوا الجبل اختلط عليهم، فصعدوا الجبل فمروا بالغار، فرأوا على بابه نسج العنكبوت، فقالوا لو دخل هاهنا أحد لم يكن نسج العنكبوت على بابه، فمكث فيه ثلاث ليال.', gloss: { fa: 'ردّ پایش را گرفتند… از کوه بالا رفتند و از کنار غار گذشتند. بر درِ آن تار عنکبوت دیدند و گفتند: «اگر کسی اینجا رفته بود، تار عنکبوت بر درش نبود.» او سه شب در آن ماند.', en: 'They followed his tracks… climbed the mountain and passed the cave. They saw a spider’s web over its entrance and said, “Had anyone gone in here, there would be no web over its door.” He stayed in it three nights.' } },
      { id: 'r5', ref: { fa: 'تفسیر قمی ۱/۲۷۶', en: 'Tafsir al-Qummi 1/276' }, ar: 'وَ بَعَثَ اللَّهُ الْعَنْكَبُوتَ فَنَسَجَتْ عَلَى بَابِ الْغَارِ', gloss: { fa: 'و خدا عنکبوت را فرستاد و بر درِ غار تار تنید.', en: 'And God sent the spider, and it wove over the entrance of the cave.' } },
      { id: 'r6', ref: { fa: 'بقره ۲۰۷ · امالی شیخ طوسی ص ۴۶۳–۴۶۸', en: 'Al-Baqara 2:207 · al-Tusi, Amali pp. 463–468' }, ar: ay('2:207'), gloss: { fa: 'خوابیدن علی (ع) در بستر پیامبر (ص) در شب هجرت. مفسران شیعه این آیه را دربارهٔ همان شب می‌دانند.', en: 'Ali sleeping in the Prophet’s bed on the night of the Hijra. Shia commentators read this verse as being about that night.' } },
    ],
    ours: { fa: 'صدای پا، و جملهٔ پایانی دربارهٔ «کوچک‌ترین چیزها» از قصه‌گوست.', en: 'The footsteps, and the closing line about “the smallest things”, are the storyteller’s.' },
    left: { fa: 'دو کبوتر و لانه و تخم را نیاورده‌ایم: حدیث‌شناسان سند آن را بسیار ضعیف («منکَر») دانسته‌اند. نیش زدن مار هم در منابعی که خواندیم نبود. نام ردیاب در منابع یکسان نیست و نگفته‌ایم.', en: 'The two doves, the nest and the eggs are left out: hadith scholars grade that report very weak. The snake bite was not in any source we read. The tracker’s name differs between sources, so we do not give one.' },
  },
  full: [
    { art: 'thw1', amb: 'night', refs: ['r2', 'r6'],
      fa: [
        `مردم مکه به حرف پیامبر (ص) گوش نمی‌کردند و مسلمان‌ها را اذیت می‌کردند. بزرگان مکه نقشهٔ بدی کشیدند تا شبانه سراغ پیامبر بروند.`,
        `خدا پیامبرش را باخبر کرد و به او اجازه داد از مکه به مدینه برود.`,
        `آن شب، علی (ع) جای پیامبر در بسترش خوابید تا دشمنان نفهمند او رفته است. ((بپرسید: این کار شجاعت می‌خواهد؟))`,
        `پیامبر (ص) آرام از شهر بیرون رفت. همراهش ابوبکر هم با او بود.`,
      ],
      en: [
        `The people of Makka would not listen to the Prophet, and they were cruel to the Muslims. The chiefs of Makka made a wicked plan to come for the Prophet by night.`,
        `God told His Prophet of it, and gave him leave to go from Makka to Madina.`,
        `That night, Ali, peace be upon him, lay down in the Prophet’s bed, so that the enemies would not know he had gone. ((ask: does that take courage?))`,
        `Quietly the Prophet left the city. His companion Abu Bakr went with him.`,
      ] },
    { art: 'thw2', amb: 'night', refs: ['r3'],
      fa: [
        `نزدیک مکه کوهی است به نام ثور. بالای آن کوه، غاری بود.`,
        `[[steps]] آن دو از کوه بالا رفتند و در غار پنهان شدند. سه شب در آن غار ماندند.`,
        `مردم مکه همه‌جا را می‌گشتند. گفته بودند: «هر کس محمد را برگرداند، صد شتر جایزه می‌گیرد!»`,
      ],
      en: [
        `Near Makka there is a mountain called Thawr. High on that mountain was a cave.`,
        `[[steps]] The two of them climbed the mountain and hid in the cave. Three nights they stayed there.`,
        `The people of Makka searched everywhere. They had said, “Whoever brings Muhammad back will have a hundred camels!”`,
      ] },
    { art: 'thw3', amb: 'wind', refs: ['r1', 'r4', 'r5'],
      fa: [
        `جست‌وجوگرها ردّ پا را گرفتند و تا کوه آمدند. از کوه بالا آمدند. رسیدند دمِ غار! ((آهسته بخوانید))`,
        `پیامبر (ص) به همراهش گفت: {{غمگین نباش؛ خدا با ماست.}} و خدا آرامشش را فرستاد.`,
        `آن‌ها به دهانهٔ غار نگاه کردند. عنکبوتی روی درِ غار تار تنیده بود.`,
        `گفتند: {{اگر کسی اینجا رفته بود، تار عنکبوت روی درش نبود.}} و برگشتند.`,
        `یک عنکبوت کوچک، با یک تار نازک… خدا با کوچک‌ترین چیزها هم کمک می‌کند.`,
      ],
      en: [
        `The searchers followed the footprints as far as the mountain. They climbed up. They reached the mouth of the cave! ((read softly))`,
        `The Prophet said to his companion: {{Do not grieve; God is with us.}} And God sent down His calm.`,
        `The searchers looked at the mouth of the cave. A spider had spun its web across the entrance.`,
        `They said: {{If anyone had gone in here, there would be no web over its door.}} And they turned back.`,
        `One small spider, with one thin thread… God can help through even the smallest things.`,
      ] },
    { art: 'thw4', amb: 'morning', refs: ['r3'],
      fa: [
        `بعد از سه شب، جست‌وجو کم شد. راهنما با شترها آمد.`,
        `علی (ع) در مکه ماند تا امانت‌هایی را که مردم پیش پیامبر گذاشته بودند، به صاحبانشان برگرداند.`,
        `پیامبر (ص) به راه افتاد؛ به سوی مدینه. [[birds]]`,
      ],
      en: [
        `After three nights the search died down. The guide came with the camels.`,
        `Ali stayed behind in Makka, to give back to their owners the things people had left in the Prophet’s keeping.`,
        `And the Prophet set out, towards Madina. [[birds]]`,
      ] },
  ],
  short: [
    { art: 'thw2', amb: 'night', refs: ['r3'],
      fa: [
        `بعضی از مردم مکه با پیامبر (ص) دشمن بودند. خدا به پیامبر فرمود از مکه برود.`,
        `[[steps]] پیامبر و همراهش از کوهی بالا رفتند و در یک غار پنهان شدند.`,
      ],
      en: [
        `Some of the people of Makka were enemies of the Prophet. God told the Prophet to leave Makka.`,
        `[[steps]] The Prophet and his companion climbed a mountain and hid in a cave.`,
      ] },
    { art: 'thw3', amb: 'wind', refs: ['r1', 'r4'],
      fa: [
        `دشمن‌ها آمدند دمِ غار! ((آهسته بخوانید))`,
        `پیامبر (ص) گفت: {{غمگین نباش؛ خدا با ماست.}}`,
        `عنکبوتی روی درِ غار تار تنیده بود. دشمن‌ها گفتند: «کسی اینجا نیست.» و رفتند.`,
      ],
      en: [
        `The enemies came right to the mouth of the cave! ((read softly))`,
        `The Prophet said: {{Do not grieve; God is with us.}}`,
        `A spider had spun its web across the entrance. The enemies said, “No one is in here,” and went away.`,
      ] },
    { art: 'thw4', amb: 'morning', refs: ['r3'],
      fa: [
        `بعد از سه شب، پیامبر (ص) به سوی مدینه رفت. [[birds]]`,
        `خدا با یک عنکبوت کوچک هم کمک می‌کند.`,
      ],
      en: [
        `After three nights the Prophet set out for Madina. [[birds]]`,
        `God can help through even one small spider.`,
      ] },
  ],
  talk: {
    fa: ['پیامبر (ص) در غار به همراهش چه گفت؟', 'چرا جست‌وجوگرها وارد غار نشدند؟', 'وقتی نگران می‌شوی، چه جمله‌ای آرامت می‌کند؟'],
    en: ['What did the Prophet say to his companion in the cave?', 'Why did the searchers not go into the cave?', 'When you are worried, what words calm you?'],
  },
  lesson: { fa: 'کسی که با خداست، لازم نیست غمگین باشد.', en: 'Whoever is with God has no need to grieve.' },
  keep: { ar: cut('9:40', 19, 23), fa: 'غمگین نباش؛ خدا با ماست.', en: 'Do not grieve; God is with us.', ref: { fa: 'توبه ۴۰', en: 'At-Tawba 9:40' } },
};
