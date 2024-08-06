import { useState } from "react";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";

export default function SellYourCar() {
  const [regno, setRegNo] = useState("");
  const [model, setModel] = useState("");
  const [nameofcar, setNameOfCar] = useState("");
  const [price, setPrice] = useState(null);
  const [fullname, setFullname] = useState("");
  const [des, setDes] = useState("");
  const [features, setFeatures] = useState("");
  const [carStatus, setStatus] = useState("");
  const [hadaccident, setHadAccident] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  return (
    <div className="max-w-[2500px] mx-auto p-5">
      <h1 className="mt-[100px] font-bold">Car Details</h1>
      <div className="w-full">
        <form className="relative w-1/2 px-5 mx-auto ">
          <div className="">
            <label htmlFor="names">Full Names*</label>
            <Input
              value={fullname}
              required
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="regno">Registration Number:*</label>
            <Input
              value={regno}
              required
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="model">Model*</label>
            <Input
              value={model}
              required
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="name">Name of the car*</label>
            <Input
              value={nameofcar}
              required
              onChange={(e) => setNameOfCar(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="img">Upload image of the car*</label>
            <input
                    type="file"
                    id="fileInput"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="cursor-pointer"
                  />
          </div>
          <div className="">
            <label>Asking price *</label>
            <Input
              type="number"
              value={price}
              min={100}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="des">Description Of Vehicle*</label>
            <textarea
              value={des}
              required
              min={100}
              onChange={(e) => setDes(e.target.value)}
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="features">Features*</label>
            <Input
              value={features}
              required
              onChange={(e) => setFeatures(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="status">Status of car*</label>
            <Input
              value={carStatus}
              required
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="acc">Have the car had an accident*</label>
            <Input
              value={hadaccident}
              required
              onChange={(e) => setHadAccident(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="contacts">Your contacts*</label>
            <Input
              value={contact}
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="status">Your Email*</label>
            <Input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
