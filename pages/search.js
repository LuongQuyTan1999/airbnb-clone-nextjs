import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InforCard from "../components/InforCard";
import Map from "../components/Map";

const inforCards = [
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
  {
    img: "/images/search.jpeg",
    location: "Private room in center of London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "£30 / night",
    total: "£117 total",
    lat: 2.3176,
    long: 48.8665,
  },
];

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>300+ Stays - 28 September 21 - 28 September 21 - for 1 guest</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {inforCards.map(
              (
                { img, location, title, description, star, price, total },
                idx
              ) => (
                <InforCard
                  key={idx}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={inforCards} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
//context can be passed for dynamic rendering info
// export async function getServerSideProps() {
//   const searchResults = await fetch('https://links.papareact.com/isz')
//   .then((res) => res.json());

//   return {
//       props: {
//           searchResults,
//       }
//   }
// }
