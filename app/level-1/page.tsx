"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/schema/formSchema";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Level1Page() {
  const [showMoreOptions, setShowOptions] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ticker: "",
      image: undefined,
      socialMedias: [
        {
          title: "X Link",
          url: "https://x.com/SuiNetwork",
        },
        {
          title: "Discord",
          url: "https://x.com/SuiNetwork",
        },
        {
          title: "Telegram",
          url: "https://x.com/SuiNetwork",
        },
      ],
    },
  });

  const fileRef = form.register("image");

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const handleShowMoreOptions = () => {
    setShowOptions(!showMoreOptions);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#006AFF] text-white">
          Click to launch coin
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[768px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Launch Coin
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Name"
                        {...field}
                        className="bg-black/5 pl-5 h-[63px] rounded-[16px] border-none font-semibold placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ticker"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Ticker</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Ticker"
                        {...field}
                        className="bg-black/5 pl-5 h-[63px] rounded-[16px] border-none font-semibold placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter Your Description"
                        {...field}
                        className="bg-black/5 pl-5 h-[63px] rounded-[16px] border-none resize-none font-semibold placeholder:font-normal"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col relative">
                    <FormLabel htmlFor="image-upload">Image</FormLabel>
                    {/* <FormControl> */}
                    <Input
                      id="inputFile"
                      type="file"
                      placeholder="shadcn"
                      {...fileRef}
                      onChange={(e) => {
                        field.onChange(e.target.files?.[0] ?? undefined);
                      }}
                      className="mb-[-50px] relative border-none w-[100px] h-[100px] rounded-full inline-block  bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-[#006AFF]"
                    />
                    {/* </FormControl> */}
                    <Plus className="absolute top-[50px] left-[35px] z-10 text-white w-7 h-7" />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <div>
              <FormField
                control={form.control}
                name="socialMedias"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel
                      role="button"
                      className="flex justify-between"
                      onClick={handleShowMoreOptions}
                    >
                      <span className="text-[#006AFF] font-semibold">
                        Show more options
                      </span>
                      <ChevronDown
                        className={`${
                          showMoreOptions
                            ? "rotate-180 transition-transform duration-300 ease-in-out"
                            : "transition-transform duration-300 ease-in-out"
                        } text-[#006AFF] w-4 h-4`}
                      />
                    </FormLabel>
                    {showMoreOptions && (
                      <div className="w-full flex justify-between gap-2">
                        {field.value?.map((socialMedia, index) => (
                          <div
                            className="flex flex-col flex-1"
                            key={`${socialMedia.url}-${index}`}
                          >
                            <FormLabel
                              htmlFor={socialMedia.title}
                              className="text-sm text-black"
                            >
                              {socialMedia.title}
                            </FormLabel>
                            <Input
                              name={socialMedia.title}
                              className="bg-black/5 pl-5 h-[63px] rounded-[16px] border-none font-semibold placeholder:font-normal"
                              placeholder="Enter Your url"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter className="sm:justify-start w-full mt-[16px]">
          <DialogClose asChild>
            <div className="w-full flex flex-col gap-4">
              <Button
                type="submit"
                variant="secondary"
                className="bg-[#006AFF] text-white rounded-[16px] h-[63px]"
              >
                Launch!
              </Button>
              <span className="text-sm text-gray-500">
                When your coin completes its bonding curve you receive 0.5 SUI
              </span>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
