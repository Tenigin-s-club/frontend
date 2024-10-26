import Modal from "@/shared/ui/Modal";
import QRBigImg from "@/shared/assets/QRBigImg.png";
import style from "./QRModal.module.scss";

interface QRModalProps {
  isOpened: boolean;
  onClose: VoidFunction;
}

const QRModal = ({ isOpened, onClose }: QRModalProps) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <img src={QRBigImg} className={style.QrImage} />
    </Modal>
  );
};

export default QRModal;
