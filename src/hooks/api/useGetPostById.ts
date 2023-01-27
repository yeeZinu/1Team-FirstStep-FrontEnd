import { useEffect, useState } from "react";
import { instance } from "libs/api/api";

interface useGetPostByIdProps {
  id: string | string[] | undefined;
}

function useGetPostById({ id }: useGetPostByIdProps) {
  const [post, setPost] =
    useState<IGetPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getPostById(id: string) {
      setIsLoading(true);
      const response = await instance.get<{}, IGetPost>(
        `/api/categories/${id}`
      );
    //   setPost(response.);
      setIsLoading(false);
    }

    if (typeof id === "string") getPostById(id);
  }, [id, setPost]);

  return {
    post,
    isLoading,
  };
}

export default useGetPostById;
