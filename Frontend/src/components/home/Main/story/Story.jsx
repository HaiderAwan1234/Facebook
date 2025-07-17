import react from "react";

const storiesData = [
  {
    type: "create",
    label: "Create story",
  },
  {
    type: "story",
    label: "Sapphire",
    bgSrc:
      "https://thafd.bing.com/th/id/OIP.DP30pDEwbgcb6bTgNtC5rwHaLI?w=500&h=752&rs=1&pid=ImgDetMain",
    logoSrc:
      "https://thafd.bing.com/th/id/OIP.0tNzT_CzlPtbLVAQDCtIZwAAAA?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    type: "story",
    label: "MINISO",
    bgSrc:
      "https://th.bing.com/th/id/R.4db596349581425bd134b0cb16bfcae5?rik=GLrOmMvaXyZxzg&pid=ImgRaw&r=0",
    logoSrc:
      "https://thafd.bing.com/th/id/OIP.xdavIQSOB27jw7aWjOUGXAHaHa?rs=1&pid=ImgDetMain",
  },
];

const Story = () => {
  return (
    <div className="STORY w-[90%] md:w-[80%] lg:w-[83%] mx-auto mt-3 overflow-x-scroll scrollbar-thin scrollbar3 py-1">
      {/* ✅ Added w-max so flex container doesn't shrink */}
      <div className="flex gap-3 w-max">
        {storiesData.map((story, index) =>
          story.type === "create" ? (
            <div
              key={index}
              className="relative w-[118px] h-[200px] rounded-xl overflow-hidden bg-gradient-to-b from-[#e5e6e9] to-[#cfd1d4] flex items-center justify-end shadow-md cursor-pointer"
            >
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[60%] h-[60%] opacity-40 bg-[url('https://www.svgrepo.com/show/14440/user.svg')] bg-center bg-no-repeat bg-[length:50%]"></div>

              <div className="absolute bottom-[38px] left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center border-4 border-white shadow-md z-1 text-[27px]">
                +
              </div>
              <span className="absolute bottom-0 w-full bg-white text-center text-sm font-medium py-4 ">
                <p>{story.label}</p>
              </span>
            </div>
          ) : (
            <div
              key={index}
              className="relative w-[118px] h-[200px] rounded-xl overflow-hidden bg-gray-300 shadow-md flex-shrink-0 cursor-pointer"
            >
              <img
                src={story.bgSrc}
                alt={story.label}
                className="w-full h-full object-cover"
              />
              <img
                src={story.logoSrc}
                alt="Logo"
                className="absolute top-2 left-2 w-10 h-10 rounded-full border-2 border-white shadow-sm"
              />
              <div className="absolute bottom-0 w-full px-1.5 py-1.5 text-white text-sm font-bold text-center bg-gradient-to-t from-black/60 to-transparent drop-shadow">
                {story.label}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Story;
