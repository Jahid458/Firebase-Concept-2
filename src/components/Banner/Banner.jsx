import bannerImg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="hero bg-base-200  mt-8 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse p-10">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
  );
};

export default Banner;