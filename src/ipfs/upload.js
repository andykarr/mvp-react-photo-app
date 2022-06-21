import { create } from "ipfs-http-client";

const ipfs = create("https://ipfs.infura.io:5001");

async function ipfsUpload(imageJSON) {
  const files = [{
    path: '/',
    content: JSON.stringify(imageJSON)
  }];

  const result = await ipfs.add(files);
  const path = await result.path;
  return path;
}



export default ipfsUpload();