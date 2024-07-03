import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const HireMeDialog = (props: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-4">
            Meet Mohamed Jalal Chtakatak
            <h2 className="text-sm text-neutral-400 font-normal">
              Your Next Fullstack Developer
            </h2>
          </DialogTitle>
          <DialogDescription>
            <h2>
              <span className="font-semibold">Email :</span>{" "}
              contact.jalalhitech@gmail.com
            </h2>
            <h2>
              <span className="font-semibold">Mobile :</span> 0676235348
            </h2>
            <p className="text-xs font-normal mt-4">
              Thank you for visiting my profile. If youre looking for a
              passionate and skilled fullstack developer, Id love to connect and
              discuss how I can contribute to your team. Lets make your project
              a success together.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;
