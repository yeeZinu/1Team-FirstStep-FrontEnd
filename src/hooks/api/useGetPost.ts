import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { postState } from "store/postState";
import axios from "axios";

function useGetPost() {
  const [posts, setPosts] = useRecoilState(postState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPost() {
    setIsLoading(true);
    const response = await axios.get<{}, IGetPost>(
      "http://3.36.64.80:80/api/categories"
    );
    // setPosts(response.);
    setIsLoading(false);
  }

  useEffect(() => {
    getPost();
  }, []);

  return { posts, isLoading };
}

export default useGetPost;
