import { notification, NotificationArgsProps } from "antd";
import { NotificationType } from "../../config/type";
import {
  InfoIcon,
  LoaderIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
} from "../../assets/svgs";
import "./CustomToast.css";

interface ICustomToast extends NotificationArgsProps {
  toastType: NotificationType;
  message: string;
  description?: string;
}

export const CustomToast = ({
  toastType,
  message,
  description,
}: ICustomToast) => {
  switch (toastType) {
    case "success":
      return notification.success({
        message: message,
        description: description,
        icon: <img src={CheckCircleIcon} alt="Check Icon" />,
      });
    case "warning":
      return notification.warning({
        message: message,
        description: description,
        icon: <img src={AlertCircleIcon} alt="Alert Icon" />,
      });
    case "error":
      return notification.error({
        message: message,
        description: description,
        icon: <img src={AlertTriangleIcon} alt="Alert Icon" />,
      });
    case "info":
      return notification.info({
        message: message,
        description: description,
        icon: <img src={InfoIcon} alt="Info Icon" />,
      });
    case "loading":
      return notification.open({
        message: message,
        description: description,
        className: "ant-notification-notice-loading",
        icon: <img src={LoaderIcon} className="icon-loading" alt="Loader Icon" />,
      });
  }
};
