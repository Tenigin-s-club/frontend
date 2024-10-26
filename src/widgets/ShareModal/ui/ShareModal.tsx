import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/helpers/notification";
import Modal from "@/shared/ui/Modal";
import { FC } from "react";
import QRCode from "react-qr-code";
import style from "./ShareModal.module.scss";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";

interface ShareModalProps {
  isOpened: boolean;
  setIsOpened: VoidFunction;
  link: string;
}

const ShareModal: FC<ShareModalProps> = ({ isOpened, setIsOpened, link }) => {
  return (
    <Modal isOpened={isOpened} onClose={setIsOpened}>
      <div className={style.wrapper}>
        <QRCode value={link} size={256} />
        <div className={style.content}>
          <Input className={style.input} value={link} />
          <Button
            className={style.button}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(link);
                showSuccessNotification("Успешно скопировано!");
              } catch (err) {
                showErrorNotification("Не удалось скопировать: " + err);
              }
            }}
          >
            Скопировать
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
