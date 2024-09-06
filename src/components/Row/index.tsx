import axios from "../../axios";

export const Row = ({ fetchUrl }: { fetchUrl: string }) => {
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request);
  }

  fetchData();

  return <div className="Row" />;
};