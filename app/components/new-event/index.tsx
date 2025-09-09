import { useForm, Controller } from "react-hook-form";
import { defaultValues } from "./data";
import { DefaultButton } from "@/app/shared/ui/default-button";
import toast from "react-hot-toast";
import { DefaultInput } from "@/app/shared/ui/default-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEventValidatiion } from "./validation";
import type { NewEventProps } from "./models";
import { FormProps } from "./models";

import * as S from "./styles";

export const NewEvent = ({ onClose }: NewEventProps) => {
  const { register, handleSubmit, watch, formState, setError, control, setValue } = useForm<FormProps>({
    defaultValues,
    // resolver: zodResolver(addEventValidatiion),
  });

  const handleFormSubmit = async (values: FormProps) => {
    try {
      // await fetchAddUser(values);

      toast.success("New contact successfully added!");
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

          <S.Label>Event description</S.Label>
          <DefaultInput placeholder="Type description" {...register("description")} />
          {/* {errors.MFA_Mobile && <S.ErrorMessage>{errors.MFA_Mobile.message}</S.ErrorMessage>} */}

          <S.Label>Event location</S.Label>
          <DefaultInput placeholder="Type location" {...register("location")} />
          {/* {errors.Email && <S.ErrorMessage>{errors?.Email?.message}</S.ErrorMessage>} */}

          <S.Label>Event date</S.Label>
          <DefaultInput placeholder="Type date" {...register("date")} />
          {/* {errors.O365Email && <S.ErrorMessage>{errors.O365Email.message}</S.ErrorMessage>} */}

          <DefaultButton action={() => null}>Cancel</DefaultButton>

          <DefaultButton action={() => null}>Save</DefaultButton>
        </S.Content>
      </S.Form>
    </S.Wrapper>
  );
};
