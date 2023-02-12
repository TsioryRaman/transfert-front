import { Text } from "@chakra-ui/layout"
import { useEffect } from "react";
import { FileTransfert } from "../../components/FileTransfert";
import { RouteProps } from "../RouteProps";

export const Transfert:React.FC<RouteProps> = ({title}) => {

    useEffect(()=> {
        document.title = import.meta.env.VITE_PROJECT_NAME + " | " + title;
      },[])

    return (
        <FileTransfert />
    )
}