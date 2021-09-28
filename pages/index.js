import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const explores = [
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
  {
    img: "/images/card.jpeg",
    location: "London",
    distance: "4-hour drive",
  },
];

const lives = [
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
  {
    img: "/images/live.jpeg",
    title: "Outdoor getaways",
  },
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Michele's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="path/to/dist/feather.js"></script>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explores?.map((item) => (
              <SmallCard item={item} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-2">
            {lives?.map((item) => (
              <MediumCard item={item} />
            ))}
          </div>
        </section>

        <section className='relative py-16 cursor-pointer'>
          <LargeCard
            img="/images/outdoors.jpeg"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );
//   const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       exploreData,
//       cardsData,
//     },
//   };
// }
