import React from "react";
import css from "./Pagination.module.scss";

interface IProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = (range: number = 5) => {
    const startRange = Math.max(1, currentPage - Math.floor(range / 2));
    const endRange = Math.min(totalPages, startRange + range - 1);
    const pageNumbers = [];

    for (let i = startRange; i <= endRange; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`${css.navButton} ${
              i === currentPage ? css.active : ""
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={`${css.wrapper} ${className}`}>
      <ul className={css.pagination}>
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={css.navButton}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={css.navButton}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
