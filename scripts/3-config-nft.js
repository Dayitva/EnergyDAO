import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5043108363D0EA3CF7089Cb7370337C2F12BfC50",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Energy Blob",
        description: "This NFT will give you access to EnergyDAO!",
        image: readFileSync("scripts/assets/energy.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()