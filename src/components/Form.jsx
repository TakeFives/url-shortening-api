import { useState } from "react";
import { shortenUrl } from "../services/url-api";

function Form() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shortUrl = await shortenUrl(url);
    setUrl(shortUrl)
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL to shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default Form;
