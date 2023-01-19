import { Footer, Navbar } from '../components';
// eslint-disable-next-line no-unused-vars
import { About, Explore, TentangSaya, WIBU, Hero, Websit, Skill } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative ">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative ">
      <WIBU />
      <div className="gradient-04 z-0" />
      <Skill />
    </div>
    <div className="relative ">
      <Websit />
      <div className="gradient-04 z-0" />
      <TentangSaya />
    </div>
    <Footer />
  </div>
);

export default Page;

/*
    dalam file page ini merupakan struktur website dari atas sampai bawah
    dimulai dari NAVBAR yaitu navigator bar, HERO atau tampilan awal nya yang berupa gambar,
    About adalah penjelasan apa itu wibu, Explore adalah menjelajah waifu2
    yang user mau, dalam section WIBU isinya adalah menjadi wibu dalam hitungan detik, dalam
    section Skill berisi skill2 wibu coy, dalam section Websit merupakan isi beberapa website wibu
    dan promosi website ku awokowkkww, dalam section TentangSaya merupakan isi nama ku dan
    kata2 saya sendiri, dan yang terakhir yaitu foot yaitu akhir dari website nya

    dan yang div classname merupakan background garadasi warnanya biar terlihat lebih cantik lagi
*/
