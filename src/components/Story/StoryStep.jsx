
export default function StoryStep({ step, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full flex flex-col md:flex-row items-center my-12 group" data-aos="fade-up">
      <div className={`w-full md:w-1/2 px-4 ${isEven ? "order-1" : "order-2"}`}>
        <img
          src={step.image}
          alt={step.title}
          className="rounded-xl shadow-lg w-full max-w-md mx-auto"
        />
      </div>
      <div className={`w-full md:w-1/2 px-4 mt-6 md:mt-0 ${isEven ? "order-2" : "order-1"}`}>
        <h3 className="text-xl font-bold text-indigo-100">{step.year}</h3>
        <h4 className="text-2xl font-semibold mb-2 text-white">{step.title}</h4>
        <p className="text-gray-200">{step.text}</p>
      </div>
    </div>
  );
}
