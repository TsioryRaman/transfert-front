import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import React, { ChangeEvent, useState } from "react";
import axios, { AxiosProgressEvent, CancelTokenSource } from "axios";
import { Button } from "@chakra-ui/button";
import { Progress } from "@chakra-ui/progress";
import { FileUploader } from "react-drag-drop-files";
import { FilePreview } from "./ui/FilePreview";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import { func } from "prop-types";
import { useColorModeValue } from "@chakra-ui/color-mode";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal";
import { useToast } from "@chakra-ui/toast";
import { Player } from "@lottiefiles/react-lottie-player";

let source = axios.CancelToken.source();

export const FileTransfert = () => {
  const [fileList, setFileList] = useState<File[] | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setIsLoading] = useState(false);

  const toast = useToast();

  const bgColorHover = useColorModeValue("gray.200", "gray.600");

  const handleFileChange = (file: any) => {
    setFileList([...file]);
  };

  const submit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileList) {
      // Erreur de transfert
      toast({
        title: "Erreur de transfert",
        description: "Vous devez ajouter des fichiers avant de tranferer",
        status: "error",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
      });
      return;
    }
    const formData = new FormData();

    fileList.map((file: any, index) => {
      formData.append(`file-${index}`, file);
    });
    formData.append("idReceiver", "6");
    await uploadForm(formData);
  };

  const onDelete = (index: number): void => {
    console.log("index:" + index);
    let newFileList: File[] = fileList as File[];
    setFileList(newFileList.filter((f, i) => i !== index));
  };

  const uploadForm = async (formData: FormData) => {
    if (!fileList) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
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
          cancelToken: source.token,
        }
      );
      if (response.data) {
        setIsSuccess(true);
        setFileList(null);

        toast({
          title: "Fichier transferee avec succes",
          description: "Vos/Votre fichier ont ete bien transferee",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const cancelUpload = () => {
    source.cancel("Upload annulee");
    setIsLoading(false);
    setProgress(0);
  };

  return (
    <React.Fragment>
      <Container maxW="container.lg">
          <form onSubmit={submit}>
            <FileUploader
              required
              handleChange={handleFileChange}
              name="file"
              multiple={true}
              hoverTitle=""
              classes="file-upload"
            >
              <Flex
                borderColor={"gray.100"}
                textAlign="center"
                justifyContent={"center"}
                alignItems="center"
                borderWidth="5px"
                borderStyle={"dashed"}
                gap="4"
                _hover={{ bgColor: bgColorHover }}
                p="12"
              >
                {loading ? (
                  <>
                    <GrSend size={"150px"} />
                    {progress} %
                  </>
                ) : (
                  <>
                    <AiOutlineFileAdd size={"100px"} />
                    Deplacez vos fichiers ici, ou appuyez pour parcourir
                    <Player // set the ref to your class instance
                      autoplay={true}
                      loop={true}
                      controls={true}
                      speed={0.7}
                      src="https://assets8.lottiefiles.com/packages/lf20_qlpiodtk.json"
                      /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
                      style={{ height: "150px", width: "150px" }}
                    ></Player>
                  </>
                )}
              </Flex>
            </FileUploader>
            <Flex alignItems="center" mt="4" w="full">
              {loading ? (
                <Button
                  mx="auto"
                  size={"lg"}
                  hidden={!loading}
                  onClick={cancelUpload}
                  bgColor="red.400"
                  borderColor={"red.500"}
                  _hover={{ bgColor: "red.600", borderColor: "red.600" }}
                >
                  Annuler
                </Button>
              ) : (
                <Button
                  mx="auto"
                  size={"lg"}
                  hidden={loading}
                  disabled={loading}
                  type="submit"
                >
                  Envoyer
                </Button>
              )}
            </Flex>
          </form>

          {loading && (
            <Progress
              my="8"
              aria-valuenow={progress}
              hasStripe
              value={progress}
            />
          )}

          <TransitionGroup appear={true} exit={true}>
            {fileList?.length &&
              fileList.map((file: any, index: number) => (
                <Fade bottom>
                  <Box overflowY={"hidden"}>
                    <FilePreview
                      name={file.name}
                      key={index}
                      onDelete={() => onDelete(index)}
                    />
                  </Box>
                </Fade>
              ))}
          </TransitionGroup>
      </Container>
    </React.Fragment>
  );
};
