import CategoryS from "@/Components/Sections/CategoryS";
import { Button } from "@mui/material";

export default function page() {
  return (
    <div className="container m-auto lg:px-36 px-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 container m-auto my-12  relative">
        <div className=" rounded-lg bg-gray-200 lg:col-span-3"></div>
        <div
          className=" rounded-lg bg-cover p-12 lg:col-span-2 border border-primary/40"
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundColor: "transparent",
          }}
        >
          <div className=" text-center space-y-6 pt-36">
            <h1 className="text-primary font-black text-4xl">On soft toys</h1>
            <p className=" text-secondary text-sm ">
              Looking for a soft toy that will bring joy and comfort to both
              kids and adults? Look no further than our collection of toys is
              great.
            </p>
            <Button variant="contained" className="bg-primary">
              Shop now
            </Button>
          </div>
        </div>
      </div>
      {/*  Category section * */}
      <CategoryS />
    </div>
  );
}
