import ModelViewer from "../components/ModelViewer/page";
import StickerPanel from "../components/ModelViewer/sticker";


export default function Page() {
  return (
    <div className="">
      <StickerPanel />
      <div>
        <h1 className="text-center text-2xl font-bold mt-4">3D Model Viewer</h1>
        <ModelViewer />
      </div>
    </div>
  );
}
