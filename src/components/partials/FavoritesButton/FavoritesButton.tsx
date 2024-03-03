import { FC } from "react";
import { Hearts } from "../../icons/Hearts";

interface IProps {
  className?: string;
  onClick: (isFavorite: boolean) => void;
  isFavorite?: boolean;
}

const FavoritesButton: FC<IProps> = ({
  className,
  onClick,
  isFavorite = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(!isFavorite);
    }
  };
  return isFavorite ? (
    <Hearts className={className} onClick={handleClick} color="#d12575" />
  ) : (
    <Hearts className={className} onClick={handleClick} color="#efefef" />
  );
};

export { FavoritesButton };
