import { useState } from "react";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";

export default function HelpLine() {
  const [regno, setRegNo] = useState("");
  const [reason, setReason] = useState("");
  const [terminationemail, setTerminationEmail] = useState("");
  const [compalin, setComplain] = useState("");
  const [question, setQuestion] = useState("");
  const [questionemail, setQuestionEmail] = useState("");

  const [email, setEmail] = useState("");
  return (
    <div className="max-w-[2500px] mx-auto p-5">
      <h1 className="mt-[100px] font-bold">Car Contarct Sell Termination</h1>
      <div className="w-full">
        <form className="relative w-1/2 px-5 mx-auto ">
          <div className="">
            <label htmlFor="regno">Registration Number:*</label>
            <Input
              value={regno}
              required
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reason">Reason For Contarct Termination*</label>
            <textarea
            className="border"
              value={reason}
              required
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>

          <div className="">
            <label htmlFor="term">Email*</label>
            <Input
              type="email"
              value={terminationemail}
              required
              onChange={(e) => setTerminationEmail(e.target.value)}
            />
          </div>
          <div className="my-4">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
      <h1 className="mt-[100px] font-bold">Car Seller Complain</h1>
      <div className="w-full">
        <form className="relative w-1/2 px-5 mx-auto ">
         
          <div className="flex flex-col">
            <label htmlFor="reason">complain*</label>
            <textarea
              value={compalin}
               className="border"
              required
              onChange={(e) => setComplain(e.target.value)}
            ></textarea>
          </div>

          <div className="">
            <label htmlFor="term">Email*</label>
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
      <h1 className="mt-[100px] font-bold">Ask Question About Our Services</h1>
      <div className="w-full">
        <form className="relative w-1/2 px-5 mx-auto ">
         
          <div className="flex flex-col">
            <label htmlFor="q">Question*</label>
            <textarea
              value={question}
               className="border"
              required
              onChange={(e) => setQuestion(e.target.value)}
            ></textarea>
          </div>

          <div className="">
            <label htmlFor="term">Email*</label>
            <Input
              type="email"
              value={questionemail}
              required
              onChange={(e) => setQuestionEmail(e.target.value)}
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
