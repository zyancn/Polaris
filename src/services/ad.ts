import useSWR from "swr";

interface Ad {
  defaultImage: string;
  defaultUrl: string;
}

export const useAd = () => {
  const { data } = useSWR("images_ad", () => {
    return fetch(
      "<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6400746346592229"
     crossorigin="anonymous"></script>",
    )
      .then((res) => res.json())
      .then((res) => res.ad as Ad);
  });

  return data;
};
