import Card from "../components/Card";
import BG from "../img/bg.png";
import TG from "../img/t.png";
import FB from "../img/f.png";
import EM from "../img/em.png";
const Home = ({ datas }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          borderRadius: "10px ",
          margin: "10px",
          color: "white",
          paddingTop: "1em",
          paddingLeft: "5em",
        }}
      >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
  Breaking into Product Design:
</h1>

<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
  Advice from Untitled Founder, Frankie
</h2>

<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl">
  Let’s get one thing out of the way:
  <br />
  you don’t need a fancy Bachelor’s Degree to get into Product Design.
  <br />
  We sat down with Frankie Sallivan to talk about gatekeeping in product design
  <br />
  and how anyone can get into this growing industry.
</p>


      </div>
      <div className="flex flex-row flex-wrap m-4 ">
        {datas.map((data) => (
          // <div className="flex flex-row m-4">

          <Card
          key={data.id}
            id={data.id}
            title={data.title}
            author={data.author}
            description={data.description}
            content={data.content}
           createdAt={data.createdAt}
            editedAt={data.editedAt}
            img={data.img}
            name={data.name}
            pro={data.pro}
          />
          // </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center h-32">
        <button className="bg-black text-white px-4 py-2 rounded">
          See More
        </button>
      </div> */}

      <footer className="bg-black text-white flex flex-wrap flex-row justify-between w-auto">
        <p>Blog</p>
        <p> &copy;2025 Blog. All rights are reserved.</p>
        <div className="flex flex-wrap flex-row h-[3rem] w-[3.8rem] ">
          <img src={TG} alt="TG LOGO" className=" h-[1rem] w-[1rem]" />
          <img src={FB} alt="FB LOGO" className=" h-[1rem] w-[1rem]" />
          <img src={EM} alt="EMAIL LOGO" className=" h-[1rem] w-[1rem]" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
