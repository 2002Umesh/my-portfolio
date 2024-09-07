"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, ArrowRightIcon, MessageSquare, MailIcon } from "lucide-react";

const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "fd58965d-a719-4001-b307-d66e913320b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input name="name" type="name" id="name" placeholder="Name" required />
        <User className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          name="message"
          placeholder="Type Your Message Here."
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-4 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
