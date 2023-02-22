import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { startsWithVowel } from "../utility/startWithVowel";

interface InputFormProps {
  name:string;
  label:string;
  error: boolean;
  errorMessage?:string;
  type:string;
  required?: boolean
}

export const InputForm = React.forwardRef<any,InputFormProps>(({
  error,
  name,
  type,
  label,
  errorMessage
},ref) => {
    

  return (
    <FormControl position={"relative"} pb="6" mb="2" overflowY={"hidden"} isInvalid={error} id={name}>
      <FormLabel fontWeight={"semibold"}>{label}</FormLabel>
      <Input type={type} required name={name} ref={ref} />
      {error && (
        <FormErrorMessage position="absolute">{errorMessage || `L${startsWithVowel(label) ? "'" : "e"} ${label} ne peut etre erronee`}</FormErrorMessage>
      )}
    </FormControl>
  );
});
