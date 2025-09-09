import { useForm, Controller } from "react-hook-form";
import { defaultValues } from "./data";
import { DefaultButton } from "@/app/shared/ui/default-button";
import toast from "react-hot-toast";
import { DefaultInput } from "@/app/shared/ui/default-input";

import { useMain } from "../main/hooks";
import { createEvent } from "@/app/lib/api/events";
import { zodResolver } from "@hookform/resolvers/zod";
// import type { FormProps } from "./models";
import type { FormProps } from "./models";
import { addEventValidatiion } from "./validation";
import type { NewEventProps } from "./models";

import * as S from "./styles";

export const NewEvent = ({ onClose }: NewEventProps) => {
  const { register, handleSubmit, watch, formState, setError, control, setValue } = useForm<FormProps>({
    resolver: zodResolver(addEventValidatiion),
    defaultValues,
  });
  const { errors } = formState;
  const { refreshEvents } = useMain();

  const handleFormSubmit = async (values: FormProps) => {
    try {
      await createEvent(values);
      console.log(values);
      toast.success("New event successfully added!");
      // onClose();
      refreshEvents();
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

            <DefaultButton action={onClose}>X</DefaultButton>
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
            <DefaultButton action={() => null}>Cancel</DefaultButton>

            <DefaultButton action={() => null} type="submit">
              Save
            </DefaultButton>
          </S.ButtonsWrapp>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  );
};
