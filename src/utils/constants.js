const REQUIRE_TEXT = 'は必須入力項目です。';
const VALID_TEXT = 'の入力形式に誤りがあります。';

export const REQUIRE = {
	email: 'メールアドレス' + REQUIRE_TEXT,
	valid_email: 'メールアドレス' + VALID_TEXT,
	password: 'パスワード' + REQUIRE_TEXT,
	password_min: 'パスワードは8文字以上でなければなりません',
	verify_code: 'コードを確認する' + REQUIRE_TEXT,
	name: '氏名' + REQUIRE_TEXT,
	tel: '電話番号' + REQUIRE_TEXT,
	gender: '性別' + REQUIRE_TEXT,
	valid_tel: '電話番号' + VALID_TEXT,
	tel_max: '半角数字11文字以内で入力してください。',
};

export const tel_pattern = /^\s?\d{1,4}-\d{1,4}-\d{1,4}$/;

export const DATA_SOURCE_TYPE = {
	MOVIE: 'movie',
	MUSIC: 'music',
	MOVIE_COURSE: 'movie_course',
	FILE_LESSON_MUSIC: 'file_lesson_music',
	FILE_MOVIE_COURSE: 'file_movie_course',
};
export const qAndAConstants = [
	{
		id: '1',
		link: '・CloudBoxLessonについて',
		title: 'CloudBoxLessonについて',
		content: [
			{
				question: 'CloudBoxLessonとはなんですか? ',
				answer: '「CloudBoxLesson」は、インターネット上で音楽に関するスキルが学べるオンラインスクー ルです。',
			},
			{
				question: 'CloudBoxLessonを利用するのに費用は掛かりますか? ',
				answer: '各コースごとに料金が必要となります。詳しくは、各コースの詳細をご確認下さい。',
			},
			{
				question: '未成年でも申し込めますか?',
				answer: '申し込めます。保護者の同意の元でお申し込み下さい。',
			},
			{
				question: 'レッスン受講に際して、オーディションなどはありますか?',
				answer: 'ございません。どなたでも申し込めます。',
			},
			{
				question: '事務所に所属していても申し込めますか?',
				answer: 'スクール側では特にお断りはしておりませんので、所属事務所側の方針をご確認下さい。',
			},
			{
				question: '銀行振込とコンビニ払いの返金時に、英語のメールが送られてきました。どう対応すれば良いですか？',
				answer: 'Stripeより、「[Action required] Refund for "返金額" from Cloud Nine Inc.」の件名でメールが届きます。',
				answer2: 'メール記載の「Complete refund」ボタンより返金の受取先を指定し、返金をお待ちください。',
				answer3: '※"返金額" には返金額が記載されています。',
			},
		],
	},
	{
		id: '2',
		link: '・アカウントについて',
		title: 'アカウントについて',
		content: [
			{
				question: 'ログインのための認証メールが届きません。',
				answer: '以下ご確認下さい。',
				answer2: '・ メールアドレスは正しいですか?',
				answer3: '・迷惑メールフォルダに振り分けられてませんか?',
				answer4: '・受信拒否設定を行ってませんか?',
				answer5: 'こちらをご確認頂いても解決しない場合は、恐れ入りますが「お問い合わせ」よりご連絡下さい。',
			},
			{
				question: 'プロフィールの変更方法を教えて下さい。',
				answer: 'マイページより変更が可能です。',
			},
			{
				question: '支払い方法の変更はどこで出来ますか?',
				answer: 'マイページのプロフィール編集欄をご確認下さい。',
			},
			{
				question: '退会したい場合はどうすればいいですか?',
				answer:
					'お問い合わせ窓口よりご連絡下さい。随時担当者よりご連絡させて頂きます。なお本サービスは退会当月末までご利用可能です。',
			},
			{
				question: 'ログイン用のメールアドレスがわかりません。',
				answer: 'お問い合わせよりメールにて、氏名と電話番号を記載の上ご連絡ください。',
			},
		],
	},
	{
		id: '3',
		link: '・動画講座に関して',
		title: '動画講座に関して',
		content: [
			{
				question: '動画はダウンロード出来ますか?',
				answer: '出来ません。ストリーミング再生のみでご視聴下さい。',
			},
			{
				question: '動画のストリーミング再生の推奨環境を教えて下さい。',
				answer: 'PC版Google Chrome（最新バージョン）',
				answer2: '※各コンテンツのご購入前に、必ずコース詳細画面のサンプル動画にて動作をご確認ください。',
			},
			{
				question: '動画購入後、再生が出来なかった場合、返金は出来ますか?',
				answer: 'お客様都合による返金はお受けしておりません。購入前に必ず推奨環境をご確認下さい。',
			},
			{
				question: '「歌ってみたMIX講座」を購入後、「パラミックス講座」をさらに購入することは可能ですか?',
				answer: '可能です。なお、動画の第1回〜第3回は同じ内容となります事だけご了承ください。',
			},
			{
				question: '動画コースに付録でついてくる練習曲はどこからダウンロードできますか？',
				answer: 'マイページ「購入済み動画コース」欄の右上の「課題ダウンロード」ボタンからダウンロード下さい。',
				answer2: 'また、教材PDFは、購入完了のお知らせメールに添付されておりますので併せてご確認下さい。',
			},
		],
	},
	{
		id: '4',
		link: '・1on1レッスンに関して',
		title: '1on1レッスンに関して',
		content: [
			{
				question: '動画講座を購入せず、1on1レッスンだけも申し込めますか?',
				answer: '出来ません。動画講座で学んで頂いた方が、さらなる実践用に1on1レッスンをお受け頂く形となります。',
			},
			{
				question: '初心者でも大丈夫ですか?',
				answer: 'その生徒さんに合わせた授業を展開して参りますので、ご安心下さい。',
			},
			{
				question: '1on1レッスンを途中でやめる事は出来ますか?',
				answer: '可能です。なお、レッスン料引き落としの関係上、退会1ヶ月前までにご連絡をお願いします。',
			},
			{
				question: '1on1レッスンには「体験レッスン」はありますか?',
				answer: 'ございません。レッスンの様子のサンプル動画がございますので、そちらをご覧頂き、お申し込みをご検討下さい。',
			},
			{
				question: '1on1レッスンの課題曲はどうやって決まるのですか?',
				answer: '生徒さんに選択肢の中からセレクト頂きます。',
			},
			{
				question: '1on1レッスンに、自分の曲を課題曲として持ち込むことは可能ですか?',
				answer:
					'可能です。なお、その場合でも、楽曲取り扱いに関する規約に承認を頂く関係上、課題曲登録 フォームに登録を必ずお願いします。',
			},
			{
				question: '生徒側の都合でレッスンがキャンセルになった場合、返金や振替授業は可能ですか?',
				answer:
					'こちら対応致しかねますのでご了承下さい。なお、講師側の体調不良やネット回線等、スクール側の都合により授業が開催出来なかった場合、振替授業を実施させて頂きます。',
			},
			{
				question: '受講時のDAW環境に指定はありますか？',
				answer: 'ございません。ご自身が普段使われているDAW環境にて受講頂けます。',
			},
			{
				question: 'サブスクリプションのクレジットカード支払いができていませんでした。どうしたら良いですか？',
				answer: 'マイページ＞プロフィールの「カード変更」より、支払い可能な別のカードにご登録を変更ください。',
			},
		],
	},
];

export const voiceAuthors = [
	{
		id: 1,
		name: '式浦。さん （ボカロP）',
		type: '〜1on1レッスン〜',
		descriptions: [
			'さぶろうさんはボーカロイドシーンを中心に最先端の ミックス・マスタリングを行われている方なので教えて 頂ける技術も古くなく現代に通用するものばかりです。',
			'特に初心者・中級者で躓きがちなコンプレッサーや リバーブの設定方法も細かく教えて頂けます。\r\n楽曲を聴きながら適切なプラグインの選択及び設定を 一緒に考えて頂けるので”その楽曲に合った設定”まで 辿り着くことができます。',
			'人柄もよく、友達感覚で接してくれるのでどのような方 でも安心して受講できます。ミックス・マスタリングで 悩んでいる方・更にレベルアップしたい方全てに オススメしたいです。',
		],
	},
	{
		id: 2,
		name: 'ねるさん （Mix師）',
		type: '〜歌ってみた動画コース〜',
		descriptions: [
			'これまでボカロ曲を中心にMIXされてきたさぶろうさんのMIX解説講座ということで特に各楽器に対してのボーカル処理が歌ってみたのMIXをされる方に勉強になるのではないかと思います。',
			'この動画では各エフェクトの効果から実践編まで解説が あり、特に実践編では「何をする」かではなく\r\n「どう考えるか」と全ての作業に意図が解説されている ので、持っていないプラグインの解説であっても考え方が 勉強になりました。',
			'MIXの基礎から応用まで音源に対する考え方を学べる歌ってみたのMIXに関わる全ての方におすすめできる動画です！',
		],
	},
	{
		id: 3,
		name: '吐息さん （ボカロP）',
		type: '〜パラミックス動画コース〜',
		descriptions: [
			'さぶろうさんの講座は実用的な所だけでなく、\r\nミックスとは何か、どういう目的でこのプラグインを使うのか等、初歩的な部分を誰にでも伝わる言葉で説明されていたのでミックスが苦手な自分でも段階的に学べることができてとても助かりました。',
			'また、さぶろうさんが関わってきた作品を用いたミックス工程を見ることができるので、ボカロシーンにいる方は特に直結して自分の楽曲に活かせることが増えると思います。\r\n断片的にしか得られていない知識の再確認にも なりました。ありがとうございます。',
		],
	},
];

export const role = {
	ADMIN: 'admin',
	INSTRUCTOR: 'instructor',
	STUDENT: 'student',
};