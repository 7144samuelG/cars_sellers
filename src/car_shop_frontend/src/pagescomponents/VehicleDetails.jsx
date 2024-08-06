import { Link } from "react-router-dom";
import img from "../images/img.jpg";
import { Button } from "../@/components/ui/button";
export default function VehicleDetails() {
  return (
    <div className="max-w-[2500px] p-5">
      <div className="flex space-x-10 mt-[50px] items-center">
        <Link to="/">Home</Link>
        <Link to="/">Vehicles</Link> <h1 className="">Nissan Note E Power </h1>
      </div>
      <div className="flex mt-7">
        <div className="w-[40%]">
          <img src={img} alt="" className="w-full h-[400px]" />
          <div className="mt-[30px]"></div>
          <Button variant="outline" className="cursor-none">Current price:1234icp</Button>
        </div>
        <div className="flex-1 px-10">
          <h1 className="text-2xl font-bold mb-6 mt-2">Nissan Note E Power</h1>
          <p className="">
            The Note e-Power was introduced later in 2016 bringing to life the
            hybrid series in the Nissan Note line. It consists of a 1.2L
            three-cylinder gasoline engine coded HR12DE and an electric traction
            motor coded EM57 similar to what Nissan Leaf's motor has. The motor
            has a 1.5 kWh rating. The whole power system works by charging the
            battery while the motor generates the car's traction. The motor
            outputs 110hp and 240Nm of torque which typically gets to be the
            highest power rating of the car as one of the power sources between
            the engine and the motor gets to power the car one at a time.
          </p>
          <h2 className="text-xl my-4 font-bold"></h2>
          <p className="">
            The Note e-Power was introduced later in 2016 bringing to life the
            hybrid series in the Nissan Note line. It consists of a 1.2L
            three-cylinder gasoline engine coded HR12DE and an electric traction
            motor coded EM57 similar to what Nissan Leaf's motor has. The motor
            
          </p>
          <div className="flex space-x-10 mt-4">
            <Button>Contact us to negociate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
