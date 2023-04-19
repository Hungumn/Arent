import m01 from 'assets/images/m01.jpg';
import l03 from 'assets/images/l03.jpg';
import d01 from 'assets/images/d01.png';
import l01 from 'assets/images/l01.jpg';
import m02 from 'assets/images/m01.jpg';
import l02 from 'assets/images/l02.jpg';
import d02 from 'assets/images/d02.jpg';
import s01 from 'assets/images/s01.jpg';

import column1 from 'assets/images/column-1.jpg';
import column2 from 'assets/images/column-2.jpg';
import column3 from 'assets/images/column-3.jpg';
import column4 from 'assets/images/column-4.jpg';
import column5 from 'assets/images/column-5.jpg';
import column6 from 'assets/images/column-6.jpg';
import column7 from 'assets/images/column-7.jpg';
import column8 from 'assets/images/column-8.jpg';

import icon01 from 'assets/images/icon-01.png';
import icon02 from 'assets/images/icon2.png';

export const AppBarData = [
  {
    id: 1,
    title: '自分の記録',
  },
  {
    id: 2,
    title: '体重グラフ',
  },
  {
    id: 3,
    title: '目標',
  },
  {
    id: 4,
    title: '選択中のコース',
  },
  {
    id: 5,
    title: 'コラム一覧',
  },
  {
    id: 6,
    title: '設定',
  },
];

export const FooterLink = [
  {
    id: 1,
    title: '会員登録',
  },
  {
    id: 2,
    title: '運営会社',
  },
  {
    id: 3,
    title: '利用規約',
  },
  {
    id: 4,
    title: '個人情報の取扱について',
  },
  {
    id: 5,
    title: '特定商取引法に基づく表記',
  },
  {
    id: 6,
    title: 'お問い合わせ',
  },
];

export const dishes = [
  { thumbnail: m01, title: '05.21.Morning' },
  { thumbnail: l03, title: '05.21.Lunch' },
  { thumbnail: d01, title: '05.21.Dinner' },
  { thumbnail: l01, title: '05.21.Snack' },
  { thumbnail: m02, title: '05.20.Morning' },
  { thumbnail: l02, title: '05.20.Lunch' },
  { thumbnail: d02, title: '05.20.Dinner' },
  { thumbnail: s01, title: '05.21.Snack' },
];

export const columnsData = [
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column1,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column2,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column3,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column4,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column5,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column6,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column7,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
  {
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    thumbnail: column8,
    tags: '#魚料理  #和食  #DHA',
    datetime: '2021.05.17   23:25',
  },
];

export const IconTopPage = [
  {
    id: 1,
    title: 'Morning',
    thumbnail:icon01
  },
  {
    id: 2,
    title: 'Lunch',
    thumbnail:icon01
  },
  {
    id: 3,
    title: 'Dinner',
    thumbnail:icon01
  },
  {
    id: 4,
    title: 'Snack',
    thumbnail:icon02
  },
];

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

export const dataTest = {
  email:'admin@admin.com',
  password:'12345678'
}