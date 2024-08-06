import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import img from "../images/img.jpg";
const cars = [
  {
    nameofcar: "demio",
    model: "xtry 2017 model",
    carimageurl: img,
    pricetag: 234566,
    negotiable: true,

    descriptionofcar:
      "Toyota lancruiser 23ge what A toyata feels like ride or die bad boys",
    features: "Automatic 4000cc Used Car",
  },
];
export default function HomePage() {
  const [value, setValue] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
  };
  const onClear = () => {
    setValue("");
  };
  return (
    <div className="max-w-[2500px] mx-auto p-5">
      <div className="flex ">
        <div className="w-1/4">
          <h1 className="font-bold">Search vehicle</h1>
          <p className="text-sm mb-3">
            Simply write the vehicle name and press the search button (i.e demio
            or vitz)
          </p>
          <div className="">
            <form
              className="relative w-full mx-auto flex items-center space-x-2"
              onSubmit={onSubmit}
            >
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              />
              {value && (
                <X
                  className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                  onClick={onClear}
                />
              )}
              <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-l-none"
              >
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
              </Button>
            </form>
          </div>
          <div className="">
            {vehicles.length == 0 ? (
              <>
                <p className="mt-10 opacity-40">
                  No vehicle available from search
                </p>
              </>
            ) : (
              <>
                <div className=""></div>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex-1 px-3">
          <h1 className="font-bold">Show results of Automobiles:</h1>
          <p className="text-sm mb-5 mt-6">Vehicles showing (25)</p>
          <div className="">
            {
                cars.length==0?(
                    <>
                    <p className="">No available car</p>
                    </>
                ):(
                    <>
                     <div className="grid grid-cols-3">
                      {
                       
                        cars.map(val=>(
                            <div className="" key={val.nameofcar}>
                                <img src={val.carimageurl} alt={val.nameofcar} className="h-[300px] w-full rounded-md" />
                                <p className=" mt-4 mb-5 text-sm font-medium tetx-center ">{val.features}</p>
                                <p className="">{val.descriptionofcar}</p>
                                <div className="flex items-center justify-between">
                                    <h1 className="font-bold tetx-xl">Price:{val.pricetag}icp</h1>
                                    <Button>View The Car</Button>
                                </div>
                            </div>
                        ))
                       
                      }
                       </div>
                    </>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
}
