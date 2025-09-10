"use client";

import { useForm } from "react-hook-form";
import { defaultValues } from "./data";
import { DefaultButton } from "@/app/shared/ui/default-button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { createEventThunk } from "@/app/store/slices/events.slice";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormProps } from "./models";
import { addEventValidatiion } from "./validation";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "@/app/store/store";
import { IoArrowBack } from "react-icons/io5";

import * as S from "./styles";

export const NewEvent = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, formState } = useForm<FormProps>({
    resolver: zodResolver(addEventValidatiion),
    defaultValues,
  });
  const { errors } = formState;
  const router = useRouter();

  const handleFormSubmit = async (values: FormProps) => {
    try {
      dispatch(createEventThunk(values)).unwrap();
      toast.success("New event successfully added!");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Content>
          <S.HeaderWrapp>
            <S.Header>Add event</S.Header>

            <DefaultButton className="back-button" action={() => router.push("/")}>
              <IoArrowBack />
            </DefaultButton>
          </S.HeaderWrapp>

          <S.Label>Event title</S.Label>
          <DefaultInput placeholder="Type title" {...register("title")} />
          {errors.title && <S.ErrorMessage>{errors?.title.message}</S.ErrorMessage>}
          <S.Label>Event description</S.Label>
          <DefaultInput placeholder="Type description" {...register("description")} />

          <S.Label>Event location</S.Label>
          <DefaultInput placeholder="Type location" {...register("location")} />
          {errors.location && <S.ErrorMessage>{errors?.location?.message}</S.ErrorMessage>}

          <S.Label>Event date</S.Label>
          <DefaultInput placeholder="Type date" {...register("date")} />
          {errors.date && <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>}
          <S.ButtonsWrapp>
            <DefaultButton action={() => null} type="submit">
              Create
            </DefaultButton>
          </S.ButtonsWrapp>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  );
};
