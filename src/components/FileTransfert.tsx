import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import React, { ChangeEvent, useState } from "react";
import axios, { AxiosProgressEvent } from "axios";
import { Button } from "@chakra-ui/button";
import { Progress } from "@chakra-ui/progress";


export const FileTransfert = () => {
  const [fileList, setFileList] = useState<FileList | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [locading, setIsLoading] = useState(false);

  const submit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileList) {
      console.log("Fichier introuvable");
      return;
    }
    const formData = new FormData();
    Object.values(fileList as any).forEach((file: any, index) => {
      formData.append(`file-${index}`, file);
    });
    formData.append("idReceiver", "6");
    await uploadForm(formData);
  };

  const uploadForm = async (formData: FormData) => {
    if (!fileList) {
      return;
    }
    setIsLoading(true);
    await axios.post(
      import.meta.env.VITE_ENDPOINT_API_BASE_URL + "/filetransfer",
      formData,
      {
        timeout: 0,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const progress =
              Math.round(
                (progressEvent.loaded / progressEvent.total) * 100 * 100
              ) / 100;
            console.log(progressEvent.total);
            setProgress(progress);
          }
        },
        onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const progress =
              Math.round(
                (progressEvent.loaded / progressEvent.total) * 100 * 100
              ) / 100;
            console.log("Download finished");
            setProgress(progress);
          }
        },
      }
    );
    setIsSuccess(true);
    setIsLoading(false);
  };
  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <Input
          required
          onChange={handleFileChange}
          multiple
          placeholder="file"
          type="file"
        />
        <Button type="submit">Envoyer</Button>
      </form>
      <Text>
        Transfert Progression - {progress} %
        {isSuccess ? "Fichier ok" : "erreur de transfert"}
        {locading && <Progress hasStripe value={progress} />}
      </Text>
    </React.Fragment>
  );
};
