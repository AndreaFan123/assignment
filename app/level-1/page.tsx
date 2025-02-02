"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import sortIcon from "@/public/assets/sort.svg";
import Image from "next/image";
import coinLogo from "@/public/assets/coin_logo.svg";
import { redirect } from "next/navigation";

export default function Level1Page() {
  const [showMoreOptions, setShowOptions] = useState(false);
  const [showLastStep, setShowLastStep] = useState(false);
  const [error, setError] = useState(true);
  const [stepOneFormData, setStepOneFormData] = useState<z.infer<
    typeof formSchema
  > | null>(null);
  const { toast } = useToast();

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
      purchasedSUI: "0",
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      const hasAllRequiredFields =
        value.name && value.description && value.ticker && value.image;

      setError(!hasAllRequiredFields);
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const handleFirstStepFormData = () => {
    const values = form.getValues();

    setStepOneFormData({
      name: values.name,
      ticker: values.ticker,
      description: values.description,
      image: values.image,
      socialMedias: values.socialMedias,
      purchasedSUI: "0",
    });

    setShowLastStep(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = {
      ...stepOneFormData,
      purchasedSUI: values.purchasedSUI,
    };

    console.log("Form Data", formData);

    toast({
      variant: "success",
      title: "Congrats! Coin Launched 🚀",
    });

    form.reset();

    redirect("/");
  };

  const handleShowMoreOptions = () => {
    setShowOptions(!showMoreOptions);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-[#006AFF] text-white">
            Click to launch coin
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-[768px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold mb-4">
              Launch Coin
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form className="space-y-8 w-full">
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
                      <Input
                        id="inputFile"
                        type="file"
                        accept="image/*"
                        placeholder="Upload Image"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                        className="mb-[-50px] relative border-none w-[100px] h-[100px] rounded-full inline-block  bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white to-[#006AFF]"
                      />
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
                                name={`socialMedias.${index}.url`}
                                defaultValue={socialMedia.url}
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
              <DialogFooter className="sm:justify-start w-full mt-[16px]">
                <div className="w-full flex flex-col gap-4">
                  <Button
                    type="button"
                    onClick={handleFirstStepFormData}
                    disabled={error}
                    variant="secondary"
                    className="bg-[#006AFF] text-white rounded-[16px] h-[63px] hover:text-black font-semibold"
                  >
                    Launch!
                  </Button>
                  <span className="text-sm text-gray-500">
                    When your coin completes its bonding curve you receive 0.5
                    SUI
                  </span>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {/* Last step */}
      <Dialog open={showLastStep} onOpenChange={setShowLastStep}>
        <DialogContent className="w-full max-w-[400px]">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl font-semibold">
              How many you want to buy?
            </DialogTitle>
            <DialogDescription>
              It’s optional but buying a small amount of coins helps protect
              your coin from snipers
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex gap-2 w-full">
                <FormField
                  control={form.control}
                  name="purchasedSUI"
                  render={({ field }) => (
                    <FormItem className="w-full relative">
                      <FormLabel className="text-gray-400 flex gap-1 justify-end">
                        Switch to TEST
                        <Image src={sortIcon} width={0} height={0} alt="sort" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter SUI"
                          {...field}
                          className="bg-black/5 pl-5 h-[63px] rounded-[16px] border-none w-full font-semibold placeholder:font-normal"
                        />
                      </FormControl>
                      <div className="absolute flex gap-2 items-center top-[40%] right-2">
                        <strong>SUI</strong>
                        <Image src={coinLogo} width={0} height={0} alt="logo" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="">
                <div className="w-full flex flex-col gap-4">
                  <span className="text-sm text-gray-500 block">
                    When your coin completes its bonding curve you receive 0.5
                    SUI
                  </span>
                  <Button
                    type="submit"
                    onClick={() => {
                      toast({
                        title: "",
                        description: "",
                        action: (
                          <ToastAction altText="Congrats! Coin launched">
                            Congrats! Coin launched 🚀🚀
                          </ToastAction>
                        ),
                      });
                    }}
                    variant="secondary"
                    className="bg-[#006AFF] text-white rounded-[16px] h-[63px] hover:text-black font-semibold"
                  >
                    Launch it!
                  </Button>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
