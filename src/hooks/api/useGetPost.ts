import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { postState } from "store/postState";
import { instance } from "libs/api/api";

function useGetPost() {
  const [posts, setPosts] = useRecoilState(postState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPost() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetPost>("/api/categories");
    // setPosts(response.);
    setIsLoading(false);
  }

  useEffect(() => {
    getPost();
  }, []);

  return { posts, isLoading };
}

export default useGetPost;
