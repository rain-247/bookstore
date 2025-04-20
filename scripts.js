const books = [
    { id: 1, title: "《櫻花飄落時》", author: "櫻井光", image: "./img/1.png", price: 20.00, description: "在繁華都市中的櫻花高等學園，17歲的內向少年藤原翔太遇見了轉學生夏目凛，一位熱愛攝影的開朗少女。兩人在校園活動中逐漸熟識並建立起深厚友誼。隨著時間推移，翔太對凛的感情超越了朋友，但他不知道如何表達。在校慶晚會上 翔太鼓起勇氣向凛告白 而凛也坦白了自己的感受 兩人在煙火下牽手 迎接未來的挑戰 這段青春歲月 充滿波折與考驗 但也讓他們找到了成長的力量和愛的真諦 " },
    { id: 2, title: "《幽林驚魂》", author: "森村黑", image: "./img/2.png", price: 25.00, description: "在遼闊而神秘的黑木森林中，流傳著許多關於失蹤與靈異的傳聞。18歲的高中生高橋翔和他的幾位朋友決定在暑假期間進行一次野營探險，希望揭開這片森林的秘密。當他們深入森林後，奇怪的事情接連發生：夜晚的低語、突然消失的同伴、詭異的足跡。翔和他的朋友們發現了一座廢棄的小屋，裡面堆滿了記錄著過去神秘事件的古老手稿。隨著探索的深入，他們逐漸揭示了這片森林背後的恐怖真相——多年前，這裡曾經發生過一系列離奇的失蹤事件，並且與一個神秘的儀式有關。面對未知的恐懼和無處不在的危險，翔和他的朋友們必須找到生還的途徑。他們試圖解開這片森林的詛咒，發現逃脫的方法。但隨著時間的推移，恐怖的力量越來越強大，生命危在旦夕。最終，翔和他的朋友們能否成功逃離這片詭異的森林，還是會成為它的下一個受害者？" },
    { id: 3, title: "《銀河戰紀》", author: "星河明", image: "./img/3.png", price: 18.00, description: "在遙遠的未來，人類已經征服了銀河系的諸多星球，建立了繁榮的銀河聯邦。然而，和平的背後暗藏著危機。位於銀河系邊緣的神秘種族“薩爾卡斯人”突然發動了大規模的侵略戰爭，企圖征服整個銀河。銀河聯邦的旗艦“無畏號”被派往前線，率領聯邦艦隊迎戰薩爾卡斯人的強大攻勢。艦長雷克斯·卡爾森是一位經驗豐富的戰略家，但面對前所未有的敵人，他和他的船員們必須共同努力，克服重重困難。在激烈的戰鬥中，雷克斯與副艦長艾莉亞·史密斯、戰術專家湯姆·漢密爾頓以及機師蕾娜·張建立了深厚的友誼。他們發現薩爾卡斯人的入侵背後隱藏著一個更大的陰謀：一個被稱為“虛無之眼”的古老武器，能夠毀滅整個銀河系。為了拯救銀河，雷克斯和他的團隊必須深入敵後，找到並摧毀“虛無之眼”。在一場場生死攸關的戰役中，他們不僅要對抗薩爾卡斯人的強大戰力，還要面對內部的背叛和陰謀。最終，雷克斯帶領著他的隊伍，在銀河聯邦的支持下，展開了決戰，保衛了銀河的未來。" },
    { id: 4, title: "《Happy Family Days》", author: "山田晴子", image: "./img/4.png", price: 30.00, description: "在東京市郊，有一個幸福而有些混亂的家庭——田中家。這個家庭由三位成員組成：總是忙碌的公司職員爸爸田中隆一，充滿創意且熱愛園藝的媽媽田中美香，調皮捣蛋的小學三年級生兒子田中翔太。每一天，田中家都充滿了笑聲和意外事件。從爸爸的廚房災難，到媽媽的園藝實驗，再到翔太的惡作劇和凜的青春煩惱，家庭成員們總是在最意想不到的時刻互相支持，共同面對生活中的挑戰。故事中，翔太總是策劃各種搞笑的惡作劇，讓全家哭笑不得；凜則在學校和家庭之間平衡著自己的青春期煩惱；田中夫婦則試圖在忙碌的工作和家庭生活中找到平衡。即使面對困難和誤會，田中家總能通過幽默和愛化解一切。" },
    { id: 5, title: "《風華女俠》", author: "王劍秋", image: "./img/5.png", price: 22.00, description: "白雲裳，天山派掌門的獨生女，自幼聰明絕美且武功高強。她在外遊歷歸來時，發現師門遭到黑風幫滅門。悲憤的她發誓復仇，並揭開幕後黑手的真面目。在追尋真相的旅途中，白雲裳結識了冷酷刺客葉冰心、俏皮女俠楚雲霜和忠誠鐵匠之子張大山。他們與白雲裳並肩作戰，共同對抗江湖中的重重危機。白雲裳發現黑風幫幫主蕭無敵在尋找傳說中的寶劍“龍吟劍”，企圖統治江湖。白雲裳決心阻止蕭無敵，保護龍吟劍，避免江湖陷入更大的混亂。在最終的決戰中，白雲裳和她的夥伴們成功擊敗蕭無敵，奪回龍吟劍，並將其重新隱藏。白雲裳決定繼續行走江湖，守護和平，成為真正的“風華女俠”。" },
    { id: 6, title: "《星光使者》", author: "鈴木葵", image: "./img/6.png", price: 28.00, description: "在未來的日式科技世界中，人們生活在科技與傳統文化交融的都市中。在這個世界裡，存在著一個神秘的組織，他們尋找擁有特殊能力的人，企圖掌控世界的命運。故事的主角是一位名叫美琴的年輕女子。在一次科技實驗事故中，美琴獲得了意想不到的超能力：她可以通過意念控制和操縱能源。然而，這些能力引起了神秘組織的注意，他們意圖利用美琴的能力來達成自己的陰謀。為了保護自己和家人，美琴踏上了一段驚險的冒險之旅。她結識了一群志同道合的夥伴，包括技術天才榮一、神祕的戰士優和機智的黑客薰。他們一起對抗著那些企圖利用超能力破壞世界平衡的敵人，並且揭示了背後的陰謀和秘密。在追查的過程中，美琴逐漸發現了自己超能力的來源，以及這些能力對世界的重要性。她必須面對自己內心的恐懼和挑戰，並且學會控制和運用自己的能力，成為真正的星光使者，守護世界的和平與安全。" },
    { id: 7, title: "《影中之狼》", author: "岡田悠悠", image: "./img/7.png", price: 35.00, description: "在這個世界上，存在著一個神秘組織——影中之狼，他們是世界上最強大的諜報組織之一。他們的任務是保護世界和平，打擊各種威脅和敵人。故事的主角是一位代號為「影」的傳說級間諜。他的真實身份是個謎，沒有人知道他的過去和身世，只知道他是一個出色的間諜，擁有無比強大的技能和智慧。在一次次危機中，「影」展現了驚人的諜報技巧和戰鬥能力。他穿梭於世界各地，完成各種看似不可能完成的任務，為了守護世界和平，無所畏懼地面對敵人的挑戰。然而，世界上的黑暗勢力也在不斷滲透，「影」必須時刻保持警惕，防止各種陰謀和危險的發生。他的敵人包括各種國家的間諜組織、恐怖分子和犯罪集團，每一次任務都是一場生死較量。在追查真相的過程中，「影」也逐漸發現了更大的陰謀和秘密，他必須面對自己的過去，以及背後隱藏的真相。最終，他將和他的夥伴們一起，捍衛世界的和平，並揭示背後黑手的真面目。" },
    { id: 8, title: "《末日烈焰：惡魔之戰》", author: "櫻木麗子", image: "./img/8.png", price: 24.00, description: "在一個被毀滅性災難所摧毀的世界中，人類社會已經崩潰，大地變成了一片焦土，充斥著死亡和絕望。這一切都是因為一群惡魔的出現，他們帶來了無盡的毀滅和混亂，將世界推向了末日的邊緣。在這場生死存亡的危機中，一支勇敢的人類軍團崛起了。他們來自各個角落，有著不同的背景和技能，但他們有著共同的信念：保護人類的生存，打敗惡魔的侵略。故事的主人公是一位年輕而勇敢的戰士，他的名字叫做艾倫。在他的領導下，人類軍團不斷與惡魔軍團展開激烈的戰鬥。他們穿梭於廢墟之間，拼盡全力，不惜犧牲，為了守護那一絲絲的希望和生存。在這場生死抉擇中，艾倫和他的夥伴們將面臨各種考驗和挑戰。他們必須克服內心的恐懼和絕望，團結一致，與惡魔展開最後的決戰，為了人類的未來，為了世界的和平。" },
    { id: 9, title: "《星空探險：銀河之旅》", author: "李妍熙", image: "./img/9.png", price: 26.00, description: "在不久的未來，科技突飛猛進，人類已經能夠探索銀河系。主角林恩是一位天才航天工程師，她設計了一艘先進的星際飛船“銀河之光”。當人類首次發現可能存在外星生命的星系時，林恩受命帶領一支探險隊前往。在探索過程中，他們遭遇了各種未知的危險和神秘現象，並發現了外星文明的驚天秘密。最終，林恩和她的團隊不僅揭開了宇宙的真相，也在冒險中找到了一種全新的能源，拯救了地球。" },
    { id: 10, title: "《霧之村的秘密》", author: "宮本花子", image: "./img/10.png", price: 32.00, description: "在日本一個被大霧籠罩的小村莊裡，年輕的記者澤成來到這裡調查一系列神秘失踪事件。隨著調查的深入他發現村莊裡隱藏著一個古老的秘密：每當大霧籠罩，村民們就會失踪。澤成結識了村中唯一的幸存者——一位年輕的神秘男子，他聲稱這一切都與一個被封印的邪靈有關。" },
    { id: 11, title: "《王子的魔法書》", author: "金俊秀", image: "./img/11.png", price: 29.00, description: "在一個魔法與科技共存的奇幻世界裡，年輕的王子金賢從宮廷的古老圖書館中發現了一本擁有無限力量的魔法書。當黑暗勢力威脅王國時，金賢必須學會掌握這本魔法書的力量。他在魔法學者的幫助下，經歷了無數次的訓練和戰鬥，最終成為一名強大的魔法師。" },
    { id: 12, title: "《時間穿越者》", author: "渡邊太郎", image: "./img/12.png", price: 27.00, description: "科學家高橋圭介無意中發現了一個能夠穿越時間的裝置。他決定利用這個裝置回到過去，改變一些關鍵事件，挽救自己心愛的妻子。然而，每次改變過去都會引發新的問題和危機。高橋逐漸明白，改變歷史並不是那麼簡單。最終，在一場時空錯亂的危機中，他必須做出艱難的選擇：是讓自己回到原來的生活，還是拯救整個世界的未來。 " },
    { id: 13, title: "《末日求生記》", author: "楊志遠", image: "./img/13.png", price: 23.00, description: "一場突如其來的全球性病毒爆發，使得大部分人類變成了喪屍。幸存者陳浩然是一名前特種兵，他帶領一群幸存者在末日中求生。面對食物短缺、喪屍威脅和人性考驗，陳浩然必須利用自己的技能和智慧，帶領大家建立一個新的安全區。在這個過程中，他們發現了病毒的真相以及可能的解藥。" },
    { id: 14, title: "《神之試煉》", author: "石田美智子", image: "./img/14.png", price: 31.00, description: "在一個古老的神話世界中，四位選中的勇士被神祇召喚，參加一場攸關世界命運的試煉。主角是年輕的女戰士玲子，她擁有非凡的劍術和智慧。與其他勇士一同，他們必須通過五重試煉，對抗來自黑暗勢力的挑戰，解開神祇遺留下來的謎題，並最終拯救他們的世界免於毀滅。." },
    { id: 15, title: "《回憶中的明信片》", author: "金秀英", image: "./img/15.png", price: 34.00, description: "韓國少女恩智在一次整理家中舊物時，發現了一疊來自不同國家的明信片。這些明信片來自於她已故的祖父，記載了他在世界各地的旅行經歷。恩智決定追隨祖父的足跡，展開一段環遊世界的旅程。在這趟旅程中，她不僅了解了祖父的過去，也發現了自己內心深處的渴望與夢想。" },
    { id: 16, title: "《鬼域探險隊》", author: "村上健二", image: "./img/16.png", price: 21.00, description: "一群年輕的都市探險者組成了“鬼域探險隊”，專門探訪和調查各種鬧鬼傳聞和靈異現象。隊長浩介是一位擁有強大靈力的驅魔師，他帶領著隊員們挑戰各種恐怖的鬼域，揭開背後的真相，並解救被困的靈魂。隨著他們的探險，浩介發現了一個更大的陰謀，這將改變他們所有人的命運。" },
    { id: 17, title: "《星際走私者》", author: "張雪霜", image: "./img/17.png", price: 33.00, description: "在未來的宇宙中，走私成為了一項高風險高回報的職業。主角張翊是一位經驗豐富的星際走私者，她駕駛著她的飛船“夜影號”在星際間穿梭，進行各種非法交易。當她接到一個神秘的高額任務時，卻發現自己捲入了一場巨大的陰謀中，不僅要對抗強大的敵人，還要揭開一個涉及整個銀河系的秘密。" },
    { id: 18, title: "《花火與謀殺案》", author: "高田隆一", image: "./img/18.png", price: 19.00, description: "在日本的夏日祭典期間，一起驚悚的謀殺案打破了小鎮的平靜。主角是年輕的女警探加藤美月，她接手了這起案件的調查。在調查過程中，美月逐漸發現這起案件背後牽涉到多年前的一段隱秘往事。她必須在煙火大會結束之前，揭開真相，將兇手繩之以法，並解開多年前的謎團。" },
    { id: 19, title: "《存在與虛無》", author: "愛麗絲·卡特", image: "./img/19.png", price: 36.00, description: "《存在與虛無》是一部哲學小說，探討生命的本質和人類的存在意義。故事設定在現代倫敦，主角是年輕的哲學教授伊莎貝拉·斯諾。伊莎貝拉在一次意外中邂逅了神秘的流浪藝術家奧斯卡，他的獨特視角和深刻見解深深吸引了她。兩人開始了一場跨越時間和空間的對話，討論存在、自由、愛與死亡等哲學命題。隨著故事的進展，伊莎貝拉逐漸發現奧斯卡隱藏的過去和他背後的秘密，並開始重新審視自己的生活和信仰。" },
    { id: 20, title: "《倫敦情書》", author: "伊麗莎白·沃森", image: "./img/20.png", price: 38.00, description: "《倫敦情書》是一部浪漫愛情小說，講述了兩位來自不同背景的年輕人之間的動人愛情故事。故事的背景設定在現代倫敦，主角艾米莉·威廉姆斯是一位夢想成為作家的年輕女子，她剛剛從大學畢業，正在一家書店工作。某天，她在整理書籍時，無意中發現了一封藏在舊書中的情書。這封情書充滿了深情和詩意，吸引了艾米莉的注意。艾米莉決定尋找這封情書的作者，於是展開了一段充滿浪漫和奇遇的旅程。在尋找的過程中，她遇見了英俊的音樂家約翰·斯特林。兩人一起追尋情書的故事，逐漸發現彼此的吸引和共鳴。" },
    { id: 21, title: "《櫻花下的兩顆心》", author: "李美玲", image: "./img/21.png", price: 35.00, description: "在櫻花盛開的季節，兩位性格截然不同的少女在校園中相遇。一位是活潑開朗的學校偶像，另一位是內向害羞的文藝少女。她們在公園的長椅上度過了無數美好時光，分享著生活中的點滴，逐漸打開了彼此的心扉，譜寫出一段感人至深的友情故事。" },
    { id: 22, title: "《黑街之戰》", author: "張威龍", image: "./img/22.png", price: 38.00, description: "在黑暗的都市角落，兩個宿敵幫派成員為了勢力範圍展開了激烈的戰鬥。一邊是擁有強壯體魄和刺青的猛男，另一邊是靈活敏捷的尖髮青年。他們在塗鴉滿布的小巷中激烈對峙，刀光劍影，火花四濺。這是一場關乎榮譽與生死的決鬥，無法退讓，只有一方能夠存活。" },
    { id: 23, title: "《魔法森林的召喚》", author: "林欣怡", image: "./img/23.png", price: 34.00, description: "在神秘的魔法森林中，年輕的女巫索菲亞發現自己擁有無比強大的魔法力量。她穿著滿佈魔法符文的長袍，與一隻閃閃發光的小龍共同探索這片古老而神奇的森林。索菲亞必須學習掌控自己的魔法，面對森林中的各種挑戰，並解開隱藏的秘密，以拯救她的世界免於毀滅。" },
    { id: 24, title: "《魔劍傳說》", author: "陳雨薇", image: "./img/24.png", price: 25.00, description: "年輕勇敢的騎士亞芬與優雅的精靈法師莉亞攜手在魔法世界中展開了一場奇幻冒險。他們在古老的城堡庭院中發現了一個神秘的傳送門，通往未知的領域。亞瑟揮舞著魔法之劍，莉亞手持發光的法杖，他們與仙女和獨角獸等魔法生物共同戰鬥，揭開隱藏在傳送門背後的古老秘密。" },
    { id: 25, title: "《黑道魔法師》", author: "王志強", image: "./img/25.png", price: 27.00, description: "在一個黑暗的都市中，權力和魔法交織著。一位強大的黑道魔法師穿著黑袍，雙眼閃爍著紅光，手握著散發黑暗能量的魔杖，支配著黑暗的街頭。與他對峙的是一位年輕叛逆的魔法師，披著皮夾克，雙手施展出耀眼的魔法光芒。他們在這條魔法符號閃爍的小巷中展開一場生死決鬥，命運的齒輪悄然轉動。" },
    { id: 26, title: "《魔科交鋒》", author: "楊思敏", image: "./img/26.png", price: 38.00, description: "在未來的世界，魔法與科技的力量激烈碰撞。一位身穿高科技裝甲的人造人揮舞著發光的能量劍，與一位手持傳說法杖的強大女巫展開了生死對決。天際中飛行的未來載具和閃爍的魔法符號交織成一幅壯麗的戰鬥畫面，這是一場關乎未來命運的終極之戰。" },
    { id: 27, title: "《廢鐵尋探》", author: "高橋美佳", image: "./img/27.png", price: 30.00, description: "在一個充滿廢墟和科技殘骸的反烏托邦城市中，年輕的拾荒者麗娜以她的智慧和勇氣生存著。她戴著護目鏡，身穿粗獷的裝備，使用自製的高科技裝置探險。在她身邊，是用各種廢品組裝而成的小型機器人夥伴。麗娜在這個污染的城市中尋找寶藏和秘密，對抗危險，探索未知的冒險。" },
    { id: 28, title: "《廢土公路》", author: "田中一郎", image: "./img/28.png", price: 32.00, description: "在末日後的世界中，年輕的冒險家凱爾駕駛著由廢料改裝而成的摩托車，踏上了探索未知的旅途。橙紫相間的天空下，廢墟和金屬殘骸遍布的道路無盡延伸。凱爾滿頭亂髮，身穿粗獷的衣物，背著小背包，手握地圖，目光堅定。他將面對重重挑戰，尋找在這片荒蕪之地中的希望與答案。" },
    { id: 29, title: "《魔都之旅》", author: "松本遙", image: "./img/29.png", price: 26.00, description: "年輕的英雄艾倫披著斗篷，手持魔法法杖，站在神秘森林的邊緣，準備展開他的奇幻旅程。他身邊是一隻小巧的有翼生物，忠實地陪伴著他。前方的道路蜿蜒穿過魔法樹林，通向遠處的山脈，空中飄浮著神秘的島嶼。柔和的光芒籠罩著整個場景，彷彿訴說著無盡的冒險和奇蹟。" },
    { id: 30, title: "《魔怪廚房》", author: "佐藤惠子", image: "./img/30.png", price: 31.00, description: "在一個充滿魔法和奇蹟的廚房裡，年輕的廚師亞當正與各種友善的魔怪一起烹飪美食。亞當穿著圍裙，手持魔法廚具，開心地創造著各種美味佳餚。周圍的魔怪們手捧不同的食材，熱情地幫助他。這間廚房裡充滿了神奇的烹飪工具和奇幻的食物，洋溢著歡樂和冒險的氛圍。" },
    { id: 31, title: "《時空偵探團》", author: "中村靜", image: "./img/31.png", price: 21.00, description: "年輕的偵探悠仁身穿風衣，手握懷錶，站在一個巨大的古老時鐘前。周圍旋轉著各種時間傳送門，展示著不同歷史時代的景象。背景是一個昏暗神秘的場景，充滿了古書、文物，洋溢著神秘和冒險的氣息。悠仁必須穿越時空，解開隱藏在歷史中的謎團，展開一場充滿謎題和驚奇的探險之旅。" },
    { id: 32, title: "《械黑》", author: "木村隆", image: "./img/32.png", price: 28.00, description: "在未來的都市中，機械化的黑道勢力掌控著街頭。一名強悍的機械黑道份子，擁有機械手臂和發光的紅眼，站在昏暗的霓虹燈小巷中，手握著未來武器，準備迎接一場決鬥。背景是充滿塗鴉的牆壁和霓虹燈光，營造出緊張且充滿危險的氛圍。在這個高科技與黑道混亂交織的世界中，生存與榮譽之間的抉擇變得更加複雜。" },
    { id: 33, title: "《天空之旅》", author: "山田宗一郎", image: "./img/33.png", price: 26.00, description: "年輕的飛行員艾倫，戴著飛行護目鏡和皮夾克，駕駛著老式的螺旋槳飛機，翱翔在壯麗的景色之上。下方是綠意盎然的田野、蜿蜒的河流和小村莊。天空清澈，飄著幾朵白雲，夕陽的餘暉灑下金色的光芒。這是一場充滿冒險和興奮的旅行，捕捉了探索和發現的無限可能。" },
    { id: 34, title: "《成為偶像的妖精站上夢寐以求的魔幻舞台》", author: "小川真理", image: "./img/34.png", price: 37.00, description: "在一個奇幻的世界裡，美麗的精靈偶像艾莉絲展開了她的夢幻表演。她身著迷人的舞台裝，揮舞著細緻的翅膀，在魔法舞台上唱歌跳舞。周圍的各種奇幻怪物被她的表演深深吸引，背景中閃爍著光芒和魔法效果，營造出迷人的異世界氛圍。艾莉絲的歌聲中充滿了喜悅和熱情，帶給觀眾無限的感動和驚喜。" },
    { id: 35, title: "《故輪飛簷》", author: "伊藤健太", image: "./img/35.png", price: 29.00, description: "在一個融合了江戶時代和蒸汽朋克元素的世界裡，年輕的跑酷藝術家凌介以其驚人的技巧和勇氣，成為了城市中的傳奇。他穿梭於繁忙的街道和屋頂之間，利用傳統和現代科技相結合的裝備，挑戰自我，追求自由。在這個充滿危險和機遇的城市中，凌介不僅要面對來自各方的敵人，還要揭開隱藏在蒸汽機械背後的巨大陰謀。" },
    { id: 36, title: "《機伴》", author: "佐藤光", image: "./img/36.png", price: 38.00, description: "在一個被科技與廢墟所支配的世界，年輕的冒險家凱文和他的機械夥伴艾瑞克踏上了尋找失落城市的旅程。這是一段充滿危險與機遇的探索之路，他們必須穿越廢墟中的敵對幫派和神秘機關，解開隱藏在遺跡中的古老謎團。每一段旅程不僅考驗著他們的勇氣與智慧，更考驗著他們之間的友誼和信任。在這個充滿挑戰的世界中，他們能否找到失落的文明，揭示真相，並改變世界的命運？" },
    { id: 37, title: "《急速滑板》", author: "高橋勇", image: "./img/37.png", price: 25.00, description: "在繁忙的城市街道上，少年健太和他的朋友翔一展開了一場激烈的滑板追逐戰。健太身穿連帽衫，翔一戴著帽子，他們在擁擠的人群和街道障礙中穿梭，展示驚人的滑板技巧。他們必須避開敵對幫派的追捕，完成一系列驚險的挑戰，並在這場速度與勇氣的比賽中脫穎而出。這是一段充滿激情與冒險的故事，展現了年輕人的無畏和友誼。" },
    { id: 38, title: "《revolver》", author: "田中正義", image: "./img/38.png", price:25.00, description: "在荒涼的西部小鎮，兩位宿敵牛仔面對面，準備展開一場生死決鬥。傑克身穿長風衣，戴著寬邊帽，而他的對手萊恩則圍著頭巾，穿著背心。他們雙手懸在槍套上，緊張地等待著對方的動作。背景是充滿沙塵的老舊木屋、酒吧和仙人掌，營造出緊張和期待的氣氛。這場經典的對決，不僅是力量與技巧的比拼，更是尊嚴與命運的較量。" },
    { id: 39, title: "《月夜幽靈的告別》", author: "村上由美", image: "./img/39.png", price: 34.00, description: "在一片神秘的月光森林中，少女玲奈手持發光的燈籠，與一個逐漸消逝的幽靈男孩對視。男孩是她失散多年的朋友，現在化為幽靈出現在她面前，帶著未解的謎團和深情的告別。隨著男孩的身影漸漸消失，玲奈感受到一股莫名的感動和悲傷。這是一個關於友情、離別和超自然力量的動人故事，揭示了生與死之間的深刻聯繫。" },
    { id: 40, title: "《少年駭客》", author: "高橋真司", image: "./img/40.png", price: 31.00, description: "年輕的天才駭客悠一在數位世界中展開了一場生死攸關的戰鬥。身穿未來科技風格的護目鏡，短髮豎立的他在一排排電腦螢幕前快速敲擊鍵盤，螢幕上閃爍著複雜的代碼和數據流。數位全息圖像顯示出激烈的戰鬥場景，周圍充滿高科技設備和纜線。悠一必須利用他的智慧和技術，在這個高風險的駭客世界中保護自己和他所珍視的人。" },
    { id: 41, title: "《極速狂飆》", author: "藤原達也", image: "./img/41.png", price: 33.00, description: "在一條蜿蜒的賽道上，兩輛高速賽車正在展開一場激烈的比賽。一輛紅色賽車搭配黑色條紋，另一輛藍色賽車配有白色條紋。觀眾席上人聲鼎沸，彩旗飄揚，藍天白雲映襯著賽道的熱烈氣氛。這場比賽不僅考驗了車手的技術和勇氣，還展現了速度與激情的極限挑戰。" },
    { id: 42, title: "《英雄與魔物的饗宴》", author: "森山遙", image: "./img/42.png", price: 33.00, description: "在一個英雄與魔物共存的奇幻世界中，歷經無數戰鬥的英雄們終於發現了和平共處的秘訣。在每個月圓之夜，英雄與魔物們聚集在一個隱秘的餐廳，共享美食與歡笑。這裡，騎士與龍暢談往事，法師與巨魔交換魔法秘技，弓箭手與哥布林分享狩獵心得。這是他們暫時放下仇恨，共同慶祝和平的時刻。然而，隱藏在暗處的危機逐漸逼近，考驗著這段來之不易的和平。" },
    { id: 43, title: "《食靈高校》", author: "川崎一郎", image: "./img/43.png", price: 27.00, description: "在美食之都，兩名年輕且才華橫溢的廚師——青木和村田，展開了一場驚心動魄的廚藝對決。青木以其精細的刀工和對食材的深刻理解著稱，而村田則擅長創意料理和大膽的味覺組合。每一場比賽，他們都在炙熱的廚房中揮灑汗水，互相挑戰，力求在美味和藝術的融合中取得勝利。然而，隨著比賽的推進，他們發現這不僅僅是一場廚藝的較量，更是對自己信念和夢想的終極考驗。" },
    { id: 44, title: "《末路旅人》", author: "石田隆二", image: "./img/44.png", price: 22.00, description: "在末日後的世界中，孤獨的機器人「探險者9號」踏上了一段孤獨且危險的旅程。這個世界早已被戰火和災難摧毀，僅存的廢墟和殘骸見證了昔日文明的輝煌。探險者9號背著裝滿各種工具和補給的背包，在荒涼的荒地中行進，尋找著關於過去的答案和重建未來的希望。在這個充滿困難和挑戰的旅途中，它遇見了各種殘存的危機和奇異的景象，也逐漸理解了人類曾經的夢想與痛苦。" },
    { id: 45, title: "《星穹探索》", author: "青木直人", image: "./img/45.png", price: 29.00, description: "在未來的星際時代，宇航員晴空駕駛著他的宇宙飛船「探索者號」，踏上了尋找新行星的使命。在無垠的宇宙中，他來到了充滿神秘與奇觀的異星球，這裡有著奇異的岩石構造、發光的植物和未知的生命體。晴空穿著先進的宇航服，手持掃描儀，探索這片未知的領域，記錄著每一個發現。他的任務不僅僅是尋找適宜人類居住的新家園，更是在廣袤的宇宙中追尋人類文明的未來。" },
    { id: 46, title: "《西部偵探：謎案追蹤》", author: "石川健一", image: "./img/46.png", price: 20.00, description: "在荒涼的西部小鎮，神秘的案件接連發生。粗獷的牛仔偵探雷恩穿著長風衣，戴著寬邊帽，手持放大鏡和左輪手槍，開始了一場充滿懸疑和危險的調查。鎮上的每一條陰暗小巷、每一家老舊酒館都隱藏著線索和秘密。雷恩必須運用他的智慧和勇氣，解開一個個謎團，揭露潛藏在小鎮背後的陰謀。這是一場智慧與勇氣的較量，也是一段驚心動魄的西部冒險。" },
    { id: 47, title: "《馳騁之旅》", author: "晴天雲", image: "./img/47.png", price: 23.00, description: "年輕的駕駛者小楓決定踏上一段自由自在的公路旅行，探索未知的美景和奇遇。在開篷跑車的風馳電掣中，他感受到了風的呼嘯與心的自由。一路上，他遇見了形形色色的人和動人的故事，每一段旅程都成為了他人生中不可或缺的記憶。這是一部關於夢想、自由與自我發現的溫暖故事。" },
    { id: 48, title: "《王者之戰：龍與劍》", author: "銀羽墨", image: "./img/48.png", price: 24.00, description: "在這個中世紀的奇幻世界中，王國正面臨前所未有的危機。邪惡的龍族率領著一群魔獸向王城發起了猛烈的攻擊。英勇的騎士亞瑟奉命帶領他的部隊保衛家園，與敵人展開殊死搏鬥。在這場決定王國命運的戰役中，亞瑟不僅要戰勝強大的敵人，還要面對內心的恐懼與懷疑。戰爭的硝煙中，真正的勇氣和榮耀將會閃耀。" },
    { id: 49, title: "《街頭槍戰》", author: "夜雨霧", image: "./img/49.png", price: 31.00, description: "在這個充滿罪惡與陰謀的城市中，年輕的偵探小林與冷酷的賞金獵人美智子組成了令人畏懼的搭檔。當他們發現一個威脅整個城市的巨大陰謀時，被迫進入了一場生死槍戰。面對數不清的敵人與子彈的洗禮，他們必須憑藉智慧與勇氣，打破黑暗勢力的陰謀，拯救城市於水火之中。" },
    { id: 50, title: "《迷擇之旅》", author: "橘子雲", image: "./img/50.png", price: 30.00, description: "在這個充滿奇幻與冒險的世界裡，年輕的旅行者小澤展開了一段尋找自我和探索未知的旅程。帶著一張神秘的地圖和無限的好奇心，他走過山川湖海，遇見形形色色的夥伴和挑戰。每一步都充滿驚喜與發現，讓小澤逐漸成長為一個真正的冒險家。" },
];


function displaySearchResults() {
    const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    const container = document.getElementById("read");
    container.innerHTML = "";

    searchResults.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        const detailsLink = document.createElement("a");
        detailsLink.href = `book-details.html?id=${book.id}`;
        detailsLink.classList.add("details-link");

        const imageElement = document.createElement("img");
        imageElement.src = book.image;
        detailsLink.appendChild(imageElement);

        bookElement.appendChild(detailsLink);

        const infoElement = document.createElement("div");
        infoElement.classList.add("book-info");

        const titleLink = document.createElement("a");
        titleLink.href = `book-details.html?id=${book.id}`;
        titleLink.textContent = book.title;
        infoElement.appendChild(titleLink);

        const authorLink = document.createElement("a");
        authorLink.href = `book-details.html?id=${book.id}`;
        authorLink.textContent = book.author;
        infoElement.appendChild(authorLink);

        bookElement.appendChild(infoElement);

        container.appendChild(bookElement);
    });

    if (searchResults.length === 0) {
        const noResultsElement = document.createElement("div");
        noResultsElement.classList.add("noResults");
        noResultsElement.textContent = "沒有相關書籍";
        container.appendChild(noResultsElement);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadBookDetails();
});

function loadBookDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    const book = books.find(book => book.id === bookId);

    if (book) {
        let favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
        let cartBooks = JSON.parse(localStorage.getItem('cartBooks')) || [];

        const bookDetailsContainer = document.getElementById("bookDetails");
        bookDetailsContainer.innerHTML = ""; 

        const bookCover = document.createElement("img");
        bookCover.classList.add("bookcover");
        bookCover.src = book.image;

        const titleElement = document.createElement("div");
        titleElement.classList.add("titleElement");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("div");
        authorElement.classList.add("authorElement");
        authorElement.textContent = "作者：" + book.author;

        const descriptionElement = document.createElement("div");
        descriptionElement.classList.add("descriptionElement");
        descriptionElement.textContent = "簡介：" + book.description;

        const priceElement = document.createElement("div");
        priceElement.classList.add("priceElement");
        priceElement.textContent = "價錢：" + book.price;

        bookDetailsContainer.appendChild(bookCover);

        const bookInfoContainer = document.createElement("div");
        bookInfoContainer.classList.add("bookInfoContainer");
        bookInfoContainer.appendChild(titleElement);
        bookInfoContainer.appendChild(authorElement);
        bookInfoContainer.appendChild(descriptionElement);
        bookInfoContainer.appendChild(priceElement);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttons");

        const addToFavoritesButton = document.createElement("button");
        addToFavoritesButton.classList.add("addToFavoritesButton");
        addToFavoritesButton.dataset.bookId = book.id; 
        addToFavoritesButton.innerHTML = '<img src="img/heart-icon.png" alt="Favorite Icon" style="width: 20px; height: 20px; margin-right: 10px;">收藏';
        if (favoriteBooks.some(favoriteBook => favoriteBook.id === book.id)) {
            addToFavoritesButton.disabled = true;
            addToFavoritesButton.textContent = "已收藏";
        }
        addToFavoritesButton.addEventListener("click", function() {
            if (!favoriteBooks.some(favoriteBook => favoriteBook.id === book.id)) {
                favoriteBooks.push(book);
                localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
                if (window.location.pathname === "/favorite.html") {
                    displayFavoriteBooks(); 
                }
                addToFavoritesButton.disabled = true;
                addToFavoritesButton.textContent = "已收藏";
                alert("書籍已收藏");
            } else {
                alert("書籍已經在收藏中");
            }
        });

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("addToCartButton");
        addToCartButton.innerHTML = '<img src="img/cart-icon.png" alt="Cart Icon" style="width: 20px; height: 20px; margin-right: 10px;">加入購物車';
        if (cartBooks.some(cartBook => cartBook.id === book.id)) {
            addToCartButton.disabled = true;
            addToCartButton.textContent = "已加入購物車";
        }
        addToCartButton.addEventListener("click", function() {
            if (!cartBooks.some(cartBook => cartBook.id === book.id)) {
                cartBooks.push(book);
                localStorage.setItem('cartBooks', JSON.stringify(cartBooks));
                if (window.location.pathname === "/cart.html") {
                    displayCartItems(); 
                }
                addToCartButton.disabled = true;
                addToCartButton.textContent = "已加入購物車";
                alert("書籍已加入購物車");
            } else {
                alert("書籍已經在購物車中");
            }
        });

        buttonContainer.appendChild(addToFavoritesButton);
        buttonContainer.appendChild(addToCartButton);
        bookInfoContainer.appendChild(buttonContainer);

        bookDetailsContainer.appendChild(bookInfoContainer);
    } else {
        console.error("未找到相应书籍信息。");
    }
}



function setupSearch() {
    document.getElementById("searchButton").addEventListener("click", function() {
        const searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();
        let searchResults = [];

        if (searchQuery !== "") {
            searchResults = books.filter(book => 
                book.title.toLowerCase().includes(searchQuery) ||
                book.author.toLowerCase().includes(searchQuery)
            );
        }

        localStorage.setItem('searchResults', JSON.stringify(searchResults));

        const searchUrl = `search-results.html`;
        window.location.href = searchUrl;
    });
}

window.addEventListener("load", setupSearch);

document.addEventListener("DOMContentLoaded", function() {
    displaySearchResults();
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleLoginButton = document.getElementById("toggleLogin");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginRegisterLink = document.getElementById("loginRegisterLink");
    const logoutDropdown = document.getElementById("logoutDropdown");
    const logoutOption = document.getElementById("logoutOption");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        loginRegisterLink.classList.add("logged-in");
        loginRegisterLink.innerHTML = "<a href='#'>已登錄</a>";
        loginRegisterLink.appendChild(logoutDropdown);
    }

    toggleLoginButton.addEventListener("click", function() {
        if (registerForm.style.display === "none") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            toggleLoginButton.textContent = "已有帳號？點此登入";
        } else {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            toggleLoginButton.textContent = "沒有帳號？點此註冊";
        }
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            alert("登入成功！");
            localStorage.setItem("isLoggedIn", true);
            loginRegisterLink.classList.add("logged-in");
            loginRegisterLink.innerHTML = "<a href='#'>已登錄</a>";
            loginRegisterLink.appendChild(logoutDropdown);
            window.location.href = "index.html";
        } else {
            alert("帳號或密碼錯誤！");
        }
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;
        
        const userExists = users.some(user => user.username === username);
        
        if (userExists) {
            alert("此用戶名已被註冊！");
            return; 
        }
        
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        
        alert("註冊成功！現在您可以使用新帳號登入。");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        toggleLoginButton.textContent = "沒有帳號？點此註冊";
    });
});

    logoutOption.addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        loginRegisterLink.classList.remove("logged-in");
        loginRegisterLink.innerHTML = "<a href='signin.html'>登入/註冊</a>";
        alert("登出成功！");
        window.location.href = "signin.html";
        logoutDropdown.style.display = "none";
        document.body.appendChild(logoutDropdown);
    });

    loginRegisterLink.addEventListener("mouseover", function() {
        if (loginRegisterLink.classList.contains("logged-in")) {
            logoutDropdown.style.display = "block";
        }
    });

    logoutDropdown.addEventListener("mouseleave", function() {
        logoutDropdown.style.display = "none";
    });

    document.addEventListener("DOMContentLoaded", function() {
        displayAllBooks();
    });
    
    function displayAllBooks() {
        const booksContainer = document.getElementById("book_all");
    
        books.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book-index");
    
            const bookLink = document.createElement("a");
            bookLink.href = `book-details.html?id=${book.id}`;
    
            const bookImage = document.createElement("img");
            bookImage.src = book.image;
            bookImage.alt = `${book.title} 封面`;
            bookLink.appendChild(bookImage);
    
            const titleElement = document.createElement("div");
            titleElement.classList.add("title");
            titleElement.textContent = book.title;
    
            const authorElement = document.createElement("div");
            authorElement.classList.add("author");
            authorElement.textContent = book.author;
    
            bookElement.appendChild(bookLink);
            bookElement.appendChild(titleElement);
            bookElement.appendChild(authorElement);
    
            booksContainer.appendChild(bookElement);
        });
    }
    


  






